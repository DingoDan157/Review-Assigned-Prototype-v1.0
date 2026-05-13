import { useMemo, useState, useCallback, Fragment, useEffect, useId, useRef } from "react";
import { ArrowDown, ArrowDownUp, ArrowUp, ChevronDown, ChevronRight, Eye, EyeOff } from "lucide-react";
import { Checkbox } from "./ui/checkbox";
import { cn } from "./ui/utils";

export type ScreeningRowStatus = "New" | "Safe";

export type ScreeningResultRow = {
  id: string;
  name: string;
  dob: string;
  matchAgeLabel: string;
  matchAgeTone: "fresh" | "warn" | "stale";
  matchScore: number;
  matchTiles: string[];
  status: ScreeningRowStatus;
};

const MOCK_ROWS: ScreeningResultRow[] = [
  { id: "1", name: "John Smith", dob: "03/23/1978", matchAgeLabel: "4h", matchAgeTone: "fresh", matchScore: 93, matchTiles: ["E", "B", "N", "C1", "E", "N", "B"], status: "New" },
  { id: "2", name: "John A. Smith", dob: "03/23/1978", matchAgeLabel: "9h", matchAgeTone: "fresh", matchScore: 88, matchTiles: ["E", "N", "C2", "B", "E", "N", "N"], status: "New" },
  { id: "3", name: "Johnny Smith", dob: "03/23/1978", matchAgeLabel: "12h", matchAgeTone: "warn", matchScore: 72, matchTiles: ["N", "B", "C1", "E", "N", "B", "E"], status: "New" },
  { id: "4", name: "Smith, John", dob: "03/23/1978", matchAgeLabel: "18h", matchAgeTone: "warn", matchScore: 65, matchTiles: ["E", "E", "N", "C2", "B", "N", "N"], status: "New" },
  { id: "5", name: "John Smythe", dob: "03/21/1978", matchAgeLabel: "22h", matchAgeTone: "stale", matchScore: 54, matchTiles: ["N", "C1", "B", "E", "N", "B", "B"], status: "New" },
  { id: "6", name: "Jonathan Smith", dob: "03/23/1978", matchAgeLabel: "1d", matchAgeTone: "stale", matchScore: 41, matchTiles: ["B", "N", "E", "C1", "N", "E", "N"], status: "Safe" },
  { id: "7", name: "John P. Smith", dob: "03/23/1978", matchAgeLabel: "1d", matchAgeTone: "stale", matchScore: 36, matchTiles: ["E", "N", "B", "B", "C2", "N", "E"], status: "Safe" },
  { id: "8", name: "Jack Smith", dob: "03/23/1978", matchAgeLabel: "2d", matchAgeTone: "stale", matchScore: 28, matchTiles: ["N", "B", "E", "N", "C1", "B", "E"], status: "Safe" },
];

const MATCH_KEY_ITEMS: { code: string; label: string; bg: string; fg: string; border: string }[] = [
  { code: "E", label: "Equal", bg: "#fdeaea", fg: "#9e2a2a", border: "rgba(194,40,40,0.12)" },
  { code: "N", label: "Not Equal", bg: "#e8f4ea", fg: "#2d6a3e", border: "rgba(46,125,50,0.12)" },
  { code: "C1", label: "Very Close", bg: "#fff4e8", fg: "#b35c00", border: "rgba(230,126,0,0.12)" },
  { code: "C2", label: "Close", bg: "#fff9e6", fg: "#9a6b00", border: "rgba(249,168,37,0.15)" },
  { code: "B", label: "Blank", bg: "#f0f1f3", fg: "#5c6370", border: "rgba(106,114,130,0.15)" },
];

type SortKey = "name" | "dob" | "matchAge" | "matchScore" | "matchString" | "status";
type SortDir = "asc" | "desc";

function scoreIsHighRisk(score: number): boolean {
  return score >= 85;
}

function tileSoftStyle(code: string): { bg: string; fg: string; border: string } {
  const upper = code.toUpperCase();
  if (upper === "E") return { bg: "#fdeaea", fg: "#9e2a2a", border: "rgba(194,40,40,0.12)" };
  if (upper === "N") return { bg: "#e8f4ea", fg: "#2d6a3e", border: "rgba(46,125,50,0.12)" };
  if (upper === "C1" || upper === "C") return { bg: "#fff4e8", fg: "#b35c00", border: "rgba(230,126,0,0.12)" };
  if (upper === "C2") return { bg: "#fff9e6", fg: "#9a6b00", border: "rgba(249,168,37,0.15)" };
  if (upper === "B") return { bg: "#f0f1f3", fg: "#5c6370", border: "rgba(106,114,130,0.15)" };
  return { bg: "#f0f1f3", fg: "#5c6370", border: "rgba(106,114,130,0.15)" };
}

function ageDotClass(tone: ScreeningResultRow["matchAgeTone"]): string {
  if (tone === "fresh") return "bg-[#2e7d32]";
  if (tone === "warn") return "bg-[#ef6c00]";
  return "bg-[#c62828]";
}

function parseAgeForSort(label: string): number {
  const m = label.match(/^(\d+(?:\.\d+)?)\s*(h|d|w|m|y)?$/i);
  if (!m) return 0;
  const n = parseFloat(m[1]);
  const u = (m[2] || "h").toLowerCase();
  const mult =
    u === "h" ? 1 : u === "d" ? 24 : u === "w" ? 24 * 7 : u === "m" ? 24 * 30 : u === "y" ? 24 * 365 : 1;
  return n * mult;
}

const checkboxClass =
  "h-4 w-4 shrink-0 rounded-[3px] border-[#523eb9] border bg-white text-white transition-all duration-200 ease-out data-[state=checked]:bg-[#523eb9] data-[state=checked]:border-[#523eb9] focus-visible:ring-2 focus-visible:ring-[#523eb9]/35 [&_svg]:size-3";

/** Smooth open/close for accordions and expandable rows (Material-style deceleration). */
const easeAccordion = "[transition-timing-function:cubic-bezier(0.32,0.72,0,1)]";
const durationAccordion = "duration-[420ms]";

interface ScreeningResultsTableProps {
  rows?: ScreeningResultRow[];
  title?: string;
  /** Optional root classes (e.g. `w-full`). Table body scroll is internal to the component; avoid `flex-1` on the root so the closed accordion does not stretch. */
  className?: string;
}

export function ScreeningResultsTable({ rows = MOCK_ROWS, title = "Screening Results", className }: ScreeningResultsTableProps) {
  const tableCaptionId = useId();
  /** Empty set = no filter (show all). Otherwise rows must match one of the selected statuses. */
  const [statusFilters, setStatusFilters] = useState<Set<ScreeningRowStatus>>(() => new Set());
  const [sortKey, setSortKey] = useState<SortKey | null>(null);
  const [sortDir, setSortDir] = useState<SortDir>("asc");
  const [expandedIds, setExpandedIds] = useState<Set<string>>(new Set());
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());
  const [sectionCollapsed, setSectionCollapsed] = useState(false);
  const [matchKeyOpen, setMatchKeyOpen] = useState(false);

  // Chips = one per status present in `rows`. Multi-select: OR semantics. Empty selection = show all rows.
  const statusChips = useMemo(() => {
    const set = new Set<ScreeningRowStatus>();
    rows.forEach((r) => set.add(r.status));
    return Array.from(set).sort((a, b) => a.localeCompare(b));
  }, [rows]);

  const filteredRows = useMemo(() => {
    if (statusFilters.size === 0) return rows;
    return rows.filter((r) => statusFilters.has(r.status));
  }, [rows, statusFilters]);

  const sortedRows = useMemo(() => {
    const list = [...filteredRows];
    if (!sortKey) return list;
    const dir = sortDir === "asc" ? 1 : -1;
    list.sort((a, b) => {
      let cmp = 0;
      switch (sortKey) {
        case "name":
          cmp = a.name.localeCompare(b.name);
          break;
        case "dob":
          cmp = a.dob.localeCompare(b.dob);
          break;
        case "matchAge":
          cmp = parseAgeForSort(a.matchAgeLabel) - parseAgeForSort(b.matchAgeLabel);
          break;
        case "matchScore":
          cmp = a.matchScore - b.matchScore;
          break;
        case "matchString":
          cmp = a.matchTiles.join("").localeCompare(b.matchTiles.join(""));
          break;
        case "status":
          cmp = a.status.localeCompare(b.status);
          break;
        default:
          break;
      }
      return cmp * dir;
    });
    return list;
  }, [filteredRows, sortKey, sortDir]);

  const visibleIdKey = useMemo(() => sortedRows.map((r) => r.id).sort().join(","), [sortedRows]);

  useEffect(() => {
    const allow = new Set(visibleIdKey.split(",").filter(Boolean));
    setSelectedIds((prev) => {
      const next = new Set<string>();
      prev.forEach((id) => {
        if (allow.has(id)) next.add(id);
      });
      return next;
    });
    setExpandedIds((prev) => {
      const next = new Set<string>();
      prev.forEach((id) => {
        if (allow.has(id)) next.add(id);
      });
      return next;
    });
  }, [visibleIdKey]);

  const selectedRef = useRef(selectedIds);
  const filterRef = useRef(statusFilters);
  selectedRef.current = selectedIds;
  filterRef.current = statusFilters;

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      if (selectedRef.current.size > 0) {
        e.preventDefault();
        setSelectedIds(new Set());
        return;
      }
      if (filterRef.current.size > 0) {
        e.preventDefault();
        setStatusFilters(new Set());
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const reviewedCount = useMemo(() => rows.filter((r) => r.status === "Safe").length, [rows]);
  const totalCount = rows.length;
  const progress = totalCount === 0 ? 0 : (reviewedCount / totalCount) * 100;

  const selectionMode = selectedIds.size > 0;

  const allVisibleExpanded =
    sortedRows.length > 0 && sortedRows.every((r) => expandedIds.has(r.id));

  const allVisibleSelected =
    sortedRows.length > 0 && sortedRows.every((r) => selectedIds.has(r.id));
  const someVisibleSelected = sortedRows.some((r) => selectedIds.has(r.id));

  const toggleSort = (key: SortKey) => {
    if (sortKey !== key) {
      setSortKey(key);
      setSortDir("asc");
      return;
    }
    setSortDir((d) => (d === "asc" ? "desc" : "asc"));
  };

  const toggleExpanded = useCallback((id: string) => {
    setExpandedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }, []);

  const toggleExpandAll = () => {
    if (allVisibleExpanded) {
      setExpandedIds(new Set());
      return;
    }
    setExpandedIds(new Set(sortedRows.map((r) => r.id)));
  };

  const onHeaderSelectAllChange = (value: boolean | "indeterminate") => {
    if (value === true) {
      setSelectedIds(new Set(sortedRows.map((r) => r.id)));
      return;
    }
    setSelectedIds(new Set());
  };

  const toggleRowSelect = (id: string, checked: boolean) => {
    setSelectedIds((prev) => {
      const next = new Set(prev);
      if (checked) next.add(id);
      else next.delete(id);
      return next;
    });
  };

  const headerCheckboxState: boolean | "indeterminate" =
    someVisibleSelected && !allVisibleSelected ? "indeterminate" : allVisibleSelected;

  return (
    <div
      className={cn(
        "bg-white border border-[#cfd2d9] rounded overflow-hidden transition-shadow duration-200 ease-out hover:shadow-sm flex w-full flex-col shrink-0",
        className,
      )}
    >
      <div
        className="flex min-h-[56px] items-center justify-between gap-3 px-4 py-3 cursor-pointer select-none transition-colors duration-200 ease-out hover:bg-[#fafafb] shrink-0"
        onClick={() => setSectionCollapsed((c) => !c)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setSectionCollapsed((c) => !c);
          }
        }}
        aria-expanded={!sectionCollapsed}
      >
        <div className="flex flex-wrap items-center gap-3 min-w-0">
          <div
            className={cn(
              "shrink-0 transition-transform",
              durationAccordion,
              easeAccordion,
              sectionCollapsed ? "-rotate-90" : "",
            )}
            aria-hidden
          >
            <ChevronDown className="size-4 text-[#23262c]" strokeWidth={2} />
          </div>
          <p
            className="font-['Noto_Sans:SemiBold',sans-serif] font-semibold leading-[1.5] text-[#23262c] text-[15px] truncate"
            style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
          >
            {title}
          </p>
        </div>
        <div
          className="flex items-center gap-3 shrink-0"
          onClick={(e) => e.stopPropagation()}
        >
          <span
            className="hidden sm:inline font-['Noto_Sans:Regular',sans-serif] text-[13px] text-[#464c59] whitespace-nowrap"
            style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
          >
            {reviewedCount} of {totalCount} Reviewed
          </span>
          <div
            className="w-[120px] h-2 rounded-full bg-[#eff0f2] overflow-hidden border border-[#e4e6ea]"
            role="progressbar"
            aria-valuemin={0}
            aria-valuemax={totalCount}
            aria-valuenow={reviewedCount}
            aria-label={`Review progress: ${reviewedCount} of ${totalCount} reviewed`}
          >
            <div
              className="h-full rounded-full bg-[#523eb9] transition-[width] duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>

      <div
        className={cn(
          "grid border-t border-[#cfd2d9] transition-[grid-template-rows]",
          durationAccordion,
          easeAccordion,
          sectionCollapsed ? "grid-rows-[0fr]" : "grid-rows-[1fr]",
        )}
      >
        <div className={cn("flex min-h-0 min-w-0 flex-1 flex-col overflow-hidden", sectionCollapsed && "pointer-events-none")}>
          <div className="flex min-h-0 min-w-0 flex-1 flex-col overflow-hidden max-h-[calc(100dvh-14rem)]">
            <div className="shrink-0 border-b border-[#cfd2d9] bg-[#fafafb] px-4 py-3">
              <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                <span
                  className="font-['Noto_Sans:SemiBold',sans-serif] text-[14px] text-[#23262c] shrink-0"
                  style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
                >
                  Filter By
                </span>
                <div className="flex flex-wrap items-center gap-2 min-w-0">
                  {statusChips.map((st) => {
                    const active = statusFilters.has(st);
                    return (
                      <button
                        key={st}
                        type="button"
                        onClick={() =>
                          setStatusFilters((prev) => {
                            const next = new Set(prev);
                            if (next.has(st)) next.delete(st);
                            else next.add(st);
                            return next;
                          })
                        }
                        className={cn(
                          "rounded-full px-3.5 py-1.5 text-[13px] font-['Noto_Sans:SemiBold',sans-serif] font-semibold transition-all duration-200 ease-out border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#523eb9]/40 focus-visible:ring-offset-2",
                          active
                            ? "bg-[#efeef9] border-[#523eb9] text-[#523eb9]"
                            : "bg-white border-[#cfd2d9] text-[#23262c] hover:border-[#949baa]",
                        )}
                        style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
                      >
                        {st}
                      </button>
                    );
                  })}
                </div>
                <div className="ms-auto flex min-w-0 max-w-full flex-wrap items-center gap-2">
                  <button
                    type="button"
                    aria-expanded={matchKeyOpen}
                    aria-label={matchKeyOpen ? "Hide match string key" : "Show match string key"}
                    onClick={() => setMatchKeyOpen((o) => !o)}
                    className="inline-flex size-8 shrink-0 items-center justify-center rounded-md border border-[#cfd2d9] bg-white text-[#464c59] transition-colors duration-200 ease-out hover:border-[#949baa] hover:bg-[#eff0f2] hover:text-[#23262c] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#523eb9]/35 focus-visible:ring-offset-2"
                  >
                    {matchKeyOpen ? <EyeOff className="size-4" strokeWidth={2} aria-hidden /> : <Eye className="size-4" strokeWidth={2} aria-hidden />}
                  </button>
                  <span
                    className="font-['Noto_Sans:SemiBold',sans-serif] text-[13px] text-[#23262c] shrink-0"
                    style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
                  >
                    Match string key
                  </span>
                  {matchKeyOpen && (
                    <div className="flex max-w-full flex-wrap items-center gap-x-3 gap-y-1.5">
                      {MATCH_KEY_ITEMS.map((item) => (
                        <span
                          key={item.code}
                          className="inline-flex items-center gap-2 font-['Noto_Sans:Regular',sans-serif] text-[12px] text-[#464c59]"
                          style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
                        >
                          <span
                            className="inline-flex min-w-[22px] h-[22px] items-center justify-center rounded border border-solid px-0.5 text-[10px] font-semibold"
                            style={{
                              backgroundColor: item.bg,
                              color: item.fg,
                              borderColor: item.border,
                            }}
                          >
                            {item.code}
                          </span>
                          {item.label}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="min-h-0 flex-1 overflow-y-auto overflow-x-auto scroll-smooth">
              <table
                className="w-full text-left border-collapse min-w-[720px]"
                aria-labelledby={tableCaptionId}
              >
                <caption id={tableCaptionId} className="sr-only">
                  {title}, {sortedRows.length} {sortedRows.length === 1 ? "row" : "rows"}
                  {statusFilters.size > 0 ? `, filtered by ${[...statusFilters].sort((a, b) => a.localeCompare(b)).join(", ")}` : ""}
                </caption>
                <thead className="sticky top-0 z-[1] bg-[#fafafb] border-b border-[#cfd2d9] shadow-[0_1px_0_rgba(207,210,217,0.6)]">
                  <tr className="h-8">
                    <th scope="col" className="w-12 px-2 py-1 align-middle">
                      <div className="flex items-center gap-0.5">
                        <button
                          type="button"
                          className="p-1 rounded transition-colors duration-200 ease-out hover:bg-[#eff0f2] text-[#23262c] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#523eb9]/35 focus-visible:ring-offset-2"
                          aria-label={allVisibleExpanded ? "Collapse all rows" : "Expand all rows"}
                          onClick={toggleExpandAll}
                        >
                          {allVisibleExpanded ? (
                            <ChevronDown className={cn("size-[18px]", durationAccordion, easeAccordion, "transition-transform")} />
                          ) : (
                            <ChevronRight className={cn("size-[18px]", durationAccordion, easeAccordion, "transition-transform")} />
                          )}
                        </button>
                        <Checkbox
                          className={checkboxClass}
                          checked={headerCheckboxState}
                          onCheckedChange={onHeaderSelectAllChange}
                          aria-label={allVisibleSelected ? "Deselect all results" : "Select all results"}
                        />
                      </div>
                      <span className="sr-only">Expand and select</span>
                    </th>
                    {(
                      [
                        ["status", "Status"],
                        ["name", "Name"],
                        ["dob", "Date of Birth"],
                        ["matchAge", "Match Age"],
                        ["matchScore", "Match Score"],
                        ["matchString", "Match String"],
                      ] as const
                    ).map(([key, label]) => (
                      <th key={key} scope="col" className="px-3 py-1 align-middle" aria-sort={sortKey === key ? (sortDir === "asc" ? "ascending" : "descending") : "none"}>
                        <button
                          type="button"
                          onClick={() => toggleSort(key)}
                          className="inline-flex items-center gap-1.5 rounded px-1 py-0.5 -mx-1 transition-colors duration-200 ease-out hover:bg-[#eff0f2] text-[#23262c] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#523eb9]/35 focus-visible:ring-offset-2"
                        >
                          <span
                            className="font-['Noto_Sans:Bold',sans-serif] font-bold text-[12px] uppercase tracking-wide text-[#6a7285]"
                            style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
                          >
                            {label}
                          </span>
                          {sortKey === key ? (
                            sortDir === "asc" ? (
                              <ArrowUp className="size-4 shrink-0 text-[#523eb9] transition-transform duration-200 ease-out" strokeWidth={2} />
                            ) : (
                              <ArrowDown className="size-4 shrink-0 text-[#523eb9] transition-transform duration-200 ease-out" strokeWidth={2} />
                            )
                          ) : (
                            <ArrowDownUp className="size-4 shrink-0 text-[#949baa] transition-colors duration-200 ease-out" strokeWidth={2} />
                          )}
                        </button>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {sortedRows.length === 0 ? (
                    <tr>
                      <td colSpan={7} className="px-6 py-16 text-center">
                        <p
                          className="font-['Noto_Sans:Regular',sans-serif] text-[14px] text-[#464c59] m-0 mb-3"
                          style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
                        >
                          {rows.length === 0
                            ? "No screening results to display."
                            : statusFilters.size > 0
                              ? "No results match the current filter."
                              : "No results to display."}
                        </p>
                        {statusFilters.size > 0 && rows.length > 0 && (
                          <button
                            type="button"
                            className="font-['Noto_Sans:SemiBold',sans-serif] text-[14px] text-[#523eb9] underline underline-offset-2 decoration-[#523eb9]/40 hover:decoration-[#523eb9] transition-colors duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#523eb9]/35 rounded px-1"
                            style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
                            onClick={() => setStatusFilters(new Set())}
                          >
                            Clear filter
                          </button>
                        )}
                      </td>
                    </tr>
                  ) : null}
                  {sortedRows.map((row) => {
                    const expanded = expandedIds.has(row.id);
                    const selected = selectedIds.has(row.id);
                    const showControls = selectionMode || expanded;
                    return (
                      <Fragment key={row.id}>
                        <tr
                          aria-selected={selected}
                          className={cn(
                            "group/row border-b border-[#eff0f2] bg-white transition-[background-color,box-shadow] duration-200 ease-out",
                            "hover:bg-[#f3f4f6] hover:shadow-[inset_2px_0_0_0_rgba(82,62,185,0.2)]",
                            selected && "bg-[#f4f1fc]/60",
                          )}
                        >
                          <td className="w-12 px-2 py-3 align-middle">
                            <div className="flex items-center gap-0.5">
                              <button
                                type="button"
                                aria-expanded={expanded}
                                aria-label={expanded ? "Collapse row" : "Expand row"}
                                onClick={() => toggleExpanded(row.id)}
                                className={cn(
                                  "p-1 rounded transition-colors duration-200 ease-out hover:bg-[#eff0f2] text-[#23262c]",
                                  expanded || showControls ? "opacity-100" : "opacity-0 pointer-events-none group-hover/row:opacity-100 group-hover/row:pointer-events-auto",
                                )}
                              >
                                {expanded ? (
                                  <ChevronDown className={cn("size-[18px]", durationAccordion, easeAccordion, "transition-transform")} />
                                ) : (
                                  <ChevronRight className={cn("size-[18px]", durationAccordion, easeAccordion, "transition-transform")} />
                                )}
                              </button>
                              <span
                                className={cn(
                                  "inline-flex transition-opacity duration-200 ease-out",
                                  showControls ? "opacity-100" : "opacity-0 group-hover/row:opacity-100",
                                )}
                              >
                                <Checkbox
                                  className={checkboxClass}
                                  checked={selected}
                                  onCheckedChange={(v) => toggleRowSelect(row.id, v === true)}
                                  aria-label={`Select ${row.name}`}
                                />
                              </span>
                            </div>
                          </td>
                          <td className="px-3 py-3 whitespace-nowrap">
                            {row.status === "New" ? (
                              <span className="inline-flex items-center gap-1.5 rounded-full border border-[#d6cef5] bg-[#f4f1fc] pl-1.5 pr-2.5 py-1 transition-colors duration-200 ease-out">
                                <span className="size-2 rounded-full bg-[#523eb9]" />
                                <span className="font-['Noto_Sans:SemiBold',sans-serif] text-[12px] text-[#523eb9]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
                                  New
                                </span>
                              </span>
                            ) : (
                              <span className="inline-flex items-center gap-1.5 rounded-full border border-[#c8e6c9] bg-[#f1f8f1] pl-1.5 pr-2.5 py-1 transition-colors duration-200 ease-out">
                                <span className="size-2 rounded-full bg-[#2e7d32]" />
                                <span className="font-['Noto_Sans:SemiBold',sans-serif] text-[12px] text-[#2e7d32]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
                                  Safe
                                </span>
                              </span>
                            )}
                          </td>
                          <td className="px-3 py-3 font-['Noto_Sans:Regular',sans-serif] text-[14px] text-[#23262c]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
                            {row.name}
                          </td>
                          <td className="px-3 py-3 font-['Noto_Sans:Regular',sans-serif] text-[14px] text-[#464c59] whitespace-nowrap" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
                            {row.dob}
                          </td>
                          <td className="px-3 py-3 whitespace-nowrap">
                            <span className="inline-flex items-center gap-2 font-['Noto_Sans:Regular',sans-serif] text-[14px] text-[#464c59]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
                              <span className={cn("size-2 rounded-full shrink-0", ageDotClass(row.matchAgeTone))} />
                              {row.matchAgeLabel}
                            </span>
                          </td>
                          <td
                            className={cn(
                              "px-3 py-3 font-['Noto_Sans:SemiBold',sans-serif] text-[14px] tabular-nums transition-colors duration-200 ease-out",
                              scoreIsHighRisk(row.matchScore) ? "text-[#c62828]" : "text-[#23262c]",
                            )}
                            style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
                          >
                            {row.matchScore}
                          </td>
                          <td className="px-3 py-3">
                            <div className="flex items-center gap-1">
                              {row.matchTiles.map((t, i) => {
                                const s = tileSoftStyle(t);
                                return (
                                <span
                                  key={`${row.id}-t-${i}`}
                                  title={t}
                                  className="inline-flex min-w-[22px] h-[22px] items-center justify-center rounded border border-solid px-0.5 text-[10px] font-semibold leading-none transition-transform duration-200 ease-out hover:scale-[1.03]"
                                  style={{
                                    backgroundColor: s.bg,
                                    color: s.fg,
                                    borderColor: s.border,
                                  }}
                                >
                                  {t}
                                </span>
                                );
                              })}
                            </div>
                          </td>
                        </tr>
                        <tr className="border-b border-[#eff0f2] border-t-0">
                          <td colSpan={7} className="p-0 align-top">
                            <div
                              className={cn(
                                "grid overflow-hidden transition-[grid-template-rows]",
                                durationAccordion,
                                easeAccordion,
                                expanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                              )}
                            >
                              <div className="min-h-0 overflow-hidden">
                                <div className="bg-[#fafafb] px-4 py-3">
                                  <p
                                    className="font-['Noto_Sans:Regular',sans-serif] text-[13px] text-[#464c59] m-0"
                                    style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
                                  >
                                    Expanded match detail for <span className="font-semibold text-[#23262c]">{row.name}</span> (prototype
                                    placeholder).
                                  </p>
                                </div>
                              </div>
                            </div>
                          </td>
                        </tr>
                      </Fragment>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

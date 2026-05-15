import { useEffect, useMemo, useState, type ReactNode } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import type { ScreeningResultRow } from "./ScreeningResultsTable";
import {
  MatchStringTiles,
  SimulatorNamePatternsTable,
  SimulatorReferenceDataTable,
  SimulatorRunResultsTable,
  buildNamePatternTableRows,
  buildSimulatorRunRows,
  durationAccordion,
  easeAccordion,
  scoreIsHighRisk,
  type ReferenceDataFieldRow,
} from "./ScreeningResultsTable";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { cn } from "./ui/utils";

const MATCH_SIMULATOR_ILLUSTRATION =
  "https://www.figma.com/api/mcp/asset/8dd6ad82-79cf-4a83-a98b-2abff0e85659";

const SIMULATOR_VIEWS = [
  "Run Results",
  "Reference Data",
  "Edit Distance",
  "Name Patterns",
] as const;

type SimulatorView = (typeof SIMULATOR_VIEWS)[number];

type SimulatorPhase = "intro" | "results";

function splitDisplayName(name: string): { given: string; family: string } {
  const parts = name.trim().split(/\s+/);
  if (parts.length <= 1) return { given: parts[0] ?? "", family: "" };
  return { given: parts[0], family: parts.slice(1).join(" ") };
}

function buildReferenceData(row: ScreeningResultRow) {
  const { given, family } = splitDisplayName(row.name);
  const clientParsed = row.name.toUpperCase();
  const listInput = family
    ? `${given.charAt(0).toUpperCase()}${given.slice(1).toLowerCase()}y ${family}y`
    : `${row.name}y`;
  const listParsed = family
    ? `${given.toUpperCase()}NY ${family.toUpperCase()}Y`
    : row.name.toUpperCase();

  return {
    client: {
      inputName: row.name,
      parsedName: clientParsed,
      ignored: "James",
    },
    list: {
      parsedName: listParsed,
      ignored: "N/A",
      inputName: listInput,
    },
    aliases: [
      { token: given || "John", badge: "1 alias found", detail: "Jonny" },
      { token: family || "Smith", badge: "None", detail: null },
    ],
  };
}

function buildClientDataRows(
  client: ReturnType<typeof buildReferenceData>["client"],
): ReferenceDataFieldRow[] {
  return [
    { id: "client-input-name", label: "Input Name", value: client.inputName },
    { id: "client-parsed-name", label: "Parsed Name", value: client.parsedName },
    { id: "client-ignored", label: "Ignored", value: client.ignored },
  ];
}

function buildListDataRows(list: ReturnType<typeof buildReferenceData>["list"]): ReferenceDataFieldRow[] {
  return [
    { id: "list-parsed-name", label: "Parsed Name", value: list.parsedName },
    { id: "list-ignored", label: "Ignored", value: list.ignored },
    { id: "list-input-name", label: "Input Name", value: list.inputName },
  ];
}

function ReferenceDataTableSection({
  title,
  rows,
  caption,
}: {
  title: string;
  rows: ReferenceDataFieldRow[];
  caption: string;
}) {
  return (
    <div className="flex flex-col gap-2">
      <p
        className="font-['Noto_Sans:Bold',sans-serif] text-[13px] font-bold uppercase tracking-[0.03em] leading-[1.4] text-[#23262c] dark:text-[#b6c2cf]"
        style={noto}
      >
        {title}
      </p>
      <SimulatorReferenceDataTable rows={rows} caption={caption} />
    </div>
  );
}

function AliasAccordionRow({
  token,
  badge,
  detail,
}: {
  token: string;
  badge: string;
  detail: string | null;
}) {
  const [open, setOpen] = useState(false);
  const hasDetail = detail != null && badge !== "None";

  return (
    <div className="overflow-hidden rounded-[4px] border border-[#cfd2d9] bg-white dark:border-[#38414a] dark:bg-[#22272b]">
      <button
        type="button"
        disabled={!hasDetail}
        aria-expanded={hasDetail ? open : false}
        onClick={() => hasDetail && setOpen((v) => !v)}
        className={cn(
          "flex w-full items-center justify-between px-4 py-3 text-left",
          hasDetail && "hover:bg-[#fafafb] dark:hover:bg-[#1d2125]",
        )}
      >
        <div className="flex items-center gap-4">
          <ChevronRight
            className={cn(
              "size-2 shrink-0 text-[#464c59] transition-transform dark:text-[#9fadbc]",
              durationAccordion,
              easeAccordion,
              open && "rotate-90",
            )}
            strokeWidth={2.5}
            aria-hidden
          />
          <span
            className="font-['Noto_Sans:SemiBold',sans-serif] text-[14px] font-semibold leading-[1.65] text-[#23262c] dark:text-[#b6c2cf]"
            style={noto}
          >
            {token}
          </span>
        </div>
        <span
          className="rounded-full bg-[#e4e6ea] px-3 py-0.5 font-['Noto_Sans:Regular',sans-serif] text-[10px] leading-[1.65] tracking-wide text-[#23262c] dark:bg-[#38414a] dark:text-[#b6c2cf]"
          style={noto}
        >
          {badge}
        </span>
      </button>
      {hasDetail ? (
        <div
          className={cn(
            "grid overflow-hidden transition-[grid-template-rows]",
            durationAccordion,
            easeAccordion,
            open ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
          )}
        >
          <div className="min-h-0 overflow-hidden">
            <div className="border-t border-[#cfd2d9] px-4 py-3 dark:border-[#38414a]">
              <p
                className="font-['Noto_Sans:Regular',sans-serif] text-[14px] leading-[1.65] text-[#464c59] dark:text-[#9fadbc]"
                style={noto}
              >
                {detail}
              </p>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

function ReferenceDataView({ row }: { row: ScreeningResultRow }) {
  const ref = useMemo(() => buildReferenceData(row), [row]);
  const clientRows = useMemo(() => buildClientDataRows(ref.client), [ref.client]);
  const listRows = useMemo(() => buildListDataRows(ref.list), [ref.list]);

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-4">
        <ReferenceDataTableSection
          title="Client Data"
          rows={clientRows}
          caption="Match simulator client reference data"
        />
        <ReferenceDataTableSection
          title="List Data"
          rows={listRows}
          caption="Match simulator list reference data"
        />
      </div>

      <p
        className="border-b border-[#e4e6ea] pb-2 font-['Noto_Sans:Bold',sans-serif] text-[13px] font-bold uppercase tracking-[0.03em] leading-[1.4] text-[#23262c] dark:border-[#38414a] dark:text-[#b6c2cf]"
        style={noto}
      >
        Alias Match
      </p>

      <div className="flex flex-col gap-3">
        {ref.aliases.map((alias) => (
          <AliasAccordionRow
            key={alias.token}
            token={alias.token}
            badge={alias.badge}
            detail={alias.detail}
          />
        ))}
      </div>
    </div>
  );
}

function EditDistanceLine({
  label,
  value,
  valueClassName,
}: {
  label: string;
  value: string;
  valueClassName?: string;
}) {
  return (
    <p
      className="font-['Noto_Sans:Regular',sans-serif] text-[14px] leading-[1.65] text-[#464c59] dark:text-[#9fadbc]"
      style={noto}
    >
      <span>{`${label} · `}</span>
      <span className={cn("text-[#6a7285] dark:text-[#8696a7]", valueClassName)}>{value}</span>
    </p>
  );
}

function NamePatternsMetaLine({
  label,
  value,
  valueClassName,
}: {
  label: string;
  value: string;
  valueClassName?: string;
}) {
  return (
    <p
      className="font-['Noto_Sans:Regular',sans-serif] text-[12px] leading-[1.65] text-[#464c59] dark:text-[#9fadbc]"
      style={noto}
    >
      <span>{`${label} · `}</span>
      <span className={cn("text-[#6a7285] dark:text-[#8696a7]", valueClassName)}>{value}</span>
    </p>
  );
}

function NamePatternsView({
  row,
  tableSize = "compact",
}: {
  row: ScreeningResultRow;
  tableSize?: "compact" | "comfortable";
}) {
  const tableRows = useMemo(() => buildNamePatternTableRows(row), [row]);
  const [showMorePatterns, setShowMorePatterns] = useState(false);
  const comfortable = tableSize === "comfortable";

  return (
    <div className={cn("flex flex-col", comfortable ? "gap-4" : "gap-3")}>
      <SimulatorNamePatternsTable rows={tableRows} size={tableSize} />

      <button
        type="button"
        onClick={() => setShowMorePatterns((v) => !v)}
        className="text-left font-['Noto_Sans:Regular',sans-serif] text-[12px] leading-[1.65] text-[#7868cd] transition-colors hover:text-[#523eb9] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#523eb9]/35 rounded"
        style={noto}
      >
        Show additional candidate patterns
      </button>
      <div
        className={cn(
          "grid overflow-hidden transition-[grid-template-rows]",
          durationAccordion,
          easeAccordion,
          showMorePatterns ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
        )}
      >
        <div className="min-h-0 overflow-hidden">
          <p className="pt-1 font-['Noto_Sans:Regular',sans-serif] text-[12px] text-[#464c59] dark:text-[#9fadbc]" style={noto}>
            Additional candidate patterns (prototype placeholder).
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-2 pt-1">
        <p
          className="py-2 font-['Noto_Sans:Bold',sans-serif] text-[12px] font-bold leading-[1.65] text-[#464c59] dark:text-[#9fadbc]"
          style={noto}
        >
          6+ Name Elements Matching
        </p>
        <div className="flex flex-col gap-2">
          <NamePatternsMetaLine label="List 6+ Name Elements" value="N/A" />
          <NamePatternsMetaLine label="Client 6+ Name Elements" value="N/A" />
          <NamePatternsMetaLine label="Multiple Match Type" value="Best" />
          <NamePatternsMetaLine label="Treat Extra Entries as Blank" value="On" />
          <NamePatternsMetaLine label="Order Matters" value="On" />
          <p className="font-['Noto_Sans:Regular',sans-serif] text-[12px] leading-[1.65] text-[#464c59] dark:text-[#9fadbc]" style={noto}>
            <span>Assigned Match Attribute · </span>
            <span className="font-bold text-[#66b345] dark:text-[#7bc96f]">EQUAL</span>
          </p>
        </div>
      </div>
    </div>
  );
}

function SimulatorAttribution() {
  return (
    <p
      className="min-w-0 shrink text-left font-['Noto_Sans:Regular',sans-serif] text-[14px] leading-[1.65] text-[#464c59] dark:text-[#9fadbc]"
      style={noto}
    >
      Data provided by the <span className="font-semibold text-[#7868cd]">Match Simulator</span>
    </p>
  );
}

function EditDistanceView() {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="flex flex-col gap-4">
      <p
        className="font-['Noto_Sans:Bold',sans-serif] text-[14px] font-bold leading-[1.65] text-[#464c59] dark:text-[#9fadbc]"
        style={noto}
      >
        Edit Distance Threshold
      </p>
      <div className="flex flex-col gap-2">
        <EditDistanceLine label="Edit Distance Threshold" value="1" />
        <EditDistanceLine
          label="Search Extension Type"
          value="Enabled (Allow one initial extension for two tokens)"
        />
        <EditDistanceLine
          label="Threshold Met"
          value="YES"
          valueClassName="font-semibold text-[#66b345] dark:text-[#7bc96f]"
        />
      </div>
      <button
        type="button"
        onClick={() => setShowMore((v) => !v)}
        className="inline-flex items-center gap-3 font-['Noto_Sans:Regular',sans-serif] text-[14px] leading-[1.65] text-[#7868cd] transition-colors hover:text-[#523eb9] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#523eb9]/35 rounded"
        style={noto}
      >
        Show More
        <ChevronDown
          className={cn(
            "size-2.5 shrink-0 transition-transform",
            durationAccordion,
            easeAccordion,
            showMore && "rotate-180",
          )}
          strokeWidth={2.5}
          aria-hidden
        />
      </button>
      <div
        className={cn(
          "grid overflow-hidden transition-[grid-template-rows]",
          durationAccordion,
          easeAccordion,
          showMore ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
        )}
      >
        <div className="min-h-0 overflow-hidden">
          <div className="flex flex-col gap-2 pt-1">
            <EditDistanceLine label="Distance Score" value="0.82" />
            <EditDistanceLine label="Token Count" value="2" />
          </div>
        </div>
      </div>
    </div>
  );
}

const headerTitleClass =
  "font-['Noto_Sans:Bold',sans-serif] font-bold leading-[1.65] text-[#23262c] dark:text-[#b6c2cf] text-[20px] whitespace-nowrap";

const noto = { fontVariationSettings: "'CTGR' 0, 'wdth' 100" } as const;

export type MatchSimulatorPresentation = "drawer" | "modal";

interface MatchSimulatorDrawerContentProps {
  row: ScreeningResultRow;
  onClose: () => void;
  presentation?: MatchSimulatorPresentation;
  onSwitchToModal?: () => void;
  onSwitchToDrawer?: () => void;
}

export function MatchSimulatorDrawerContent({
  row,
  onClose,
  presentation = "drawer",
  onSwitchToModal,
  onSwitchToDrawer,
}: MatchSimulatorDrawerContentProps) {
  const [phase, setPhase] = useState<SimulatorPhase>("intro");
  const [view, setView] = useState<SimulatorView>("Run Results");

  useEffect(() => {
    setPhase("intro");
    setView("Run Results");
  }, [row.id]);

  const runRows = useMemo(() => buildSimulatorRunRows(row), [row]);
  const isModal = presentation === "modal";

  return (
    <div className={cn("flex min-h-0 flex-1 flex-col overflow-hidden", isModal && "h-full")}>
      <div className="flex shrink-0 items-center justify-between gap-3 bg-white px-5 py-4 dark:bg-[#22272b]">
        <p className={headerTitleClass} style={noto}>
          Match Simulator
        </p>
        {presentation === "drawer" && onSwitchToModal ? (
          <button
            type="button"
            onClick={onSwitchToModal}
            className="shrink-0 rounded-[4px] border border-[#3d2e8a] bg-white px-3 py-1.5 font-['Noto_Sans:Bold',sans-serif] text-[12px] font-bold leading-[1.65] text-[#523eb9] transition-colors hover:bg-[#f4f1fc] dark:border-[#7c6bc4] dark:bg-[#22272b] dark:text-[#dcd7e8] dark:hover:bg-[#2c333a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#523eb9]/40 focus-visible:ring-offset-2"
            style={noto}
          >
            Option B: Modal View
          </button>
        ) : null}
        {presentation === "modal" && onSwitchToDrawer ? (
          <button
            type="button"
            onClick={onSwitchToDrawer}
            className="shrink-0 rounded-[4px] border border-[#3d2e8a] bg-white px-3 py-1.5 font-['Noto_Sans:Bold',sans-serif] text-[12px] font-bold leading-[1.65] text-[#523eb9] transition-colors hover:bg-[#f4f1fc] dark:border-[#7c6bc4] dark:bg-[#22272b] dark:text-[#dcd7e8] dark:hover:bg-[#2c333a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#523eb9]/40 focus-visible:ring-offset-2"
            style={noto}
          >
            Option A: Drawer View
          </button>
        ) : null}
      </div>

      <div
        className={cn(
          "flex min-h-0 flex-1 flex-col gap-6 p-6",
          isModal ? "overflow-hidden" : "justify-between overflow-y-auto",
        )}
      >
        <div className="flex shrink-0 flex-wrap items-center gap-3">
          <span
            className={cn(
              "shrink-0 font-['Noto_Sans:SemiBold',sans-serif] text-[14px] tabular-nums",
              scoreIsHighRisk(row.matchScore)
                ? "text-[#c62828] dark:text-[#f48a8a]"
                : "text-[#23262c] dark:text-[#b6c2cf]",
            )}
            style={noto}
          >
            {row.matchScore}
          </span>
          <MatchStringTiles tiles={row.matchTiles} />
        </div>

        <div
          className={cn(
            "flex min-h-0 flex-1 flex-col",
            isModal && "overflow-hidden",
          )}
        >
        {phase === "intro" ? (
          <section
            className={cn(
              "flex flex-1 flex-col items-center justify-center gap-8 rounded-[4px] px-4 py-6",
              isModal ? "min-h-0 overflow-y-auto" : "min-h-[240px]",
            )}
          >
            <div className="flex flex-col items-center gap-6">
              <img
                src={MATCH_SIMULATOR_ILLUSTRATION}
                alt=""
                className="h-[199px] w-[248px] max-w-full object-contain"
              />
              <p
                className="font-['Noto_Sans:Bold',sans-serif] text-[14px] font-bold leading-[1.65] text-[#464c59] dark:text-[#9fadbc]"
                style={noto}
              >
                Learn more about this match!
              </p>
            </div>
            <button
              type="button"
              onClick={() => setPhase("results")}
              className="rounded-[4px] bg-[#3d2e8a] px-4 py-2 font-['Noto_Sans:Bold',sans-serif] text-[14px] font-bold leading-[1.65] text-white transition-colors hover:bg-[#523eb9] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#523eb9]/40 focus-visible:ring-offset-2"
              style={noto}
            >
              Simulate Match
            </button>
          </section>
        ) : (
          <section
            className={cn(
              "flex min-h-0 flex-1 flex-col gap-5 rounded-[4px]",
              isModal ? "overflow-hidden" : "p-5",
            )}
          >
            <Select value={view} onValueChange={(v) => setView(v as SimulatorView)}>
              <SelectTrigger
                className="h-auto w-[200px] shrink-0 rounded-[4px] border-[#cfd2d9] bg-white px-3 py-2 text-[12px] text-[#23262c] dark:border-[#38414a] dark:bg-[#22272b] dark:text-[#b6c2cf]"
                style={noto}
              >
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {SIMULATOR_VIEWS.map((option) => (
                  <SelectItem key={option} value={option}>
                    {option}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <div
              className={cn(
                "min-h-0 flex-1",
                isModal && "overflow-y-auto",
                !isModal && "p-0",
              )}
            >
              {view === "Run Results" ? (
                <SimulatorRunResultsTable rows={runRows} />
              ) : view === "Reference Data" ? (
                <ReferenceDataView row={row} />
              ) : view === "Edit Distance" ? (
                <EditDistanceView />
              ) : view === "Name Patterns" ? (
                <NamePatternsView row={row} tableSize={isModal ? "comfortable" : "compact"} />
              ) : null}
            </div>
          </section>
        )}
        </div>

        <footer
          className={cn(
            "flex shrink-0 items-center gap-4",
            phase === "results" ? "justify-between" : "justify-end",
          )}
        >
          {phase === "results" ? <SimulatorAttribution /> : null}
          <div className="flex shrink-0 items-center gap-4">
          <button
            type="button"
            onClick={onClose}
            className="rounded-[4px] border border-[#3d2e8a] bg-white px-4 py-2 font-['Noto_Sans:Bold',sans-serif] text-[14px] font-bold leading-[1.65] text-[#523eb9] transition-colors hover:bg-[#f4f1fc] dark:border-[#7c6bc4] dark:bg-[#22272b] dark:text-[#dcd7e8] dark:hover:bg-[#2c333a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#523eb9]/40 focus-visible:ring-offset-2"
            style={noto}
          >
            Cancel
          </button>
          <button
            type="button"
            className="rounded-[4px] bg-[#3d2e8a] px-4 py-2 font-['Noto_Sans:Bold',sans-serif] text-[14px] font-bold leading-[1.65] text-white transition-colors hover:bg-[#523eb9] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#523eb9]/40 focus-visible:ring-offset-2"
            style={noto}
          >
            Save
          </button>
          </div>
        </footer>
      </div>
    </div>
  );
}

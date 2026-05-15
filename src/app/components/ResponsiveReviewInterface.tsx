import svgPaths from "../../imports/ReviewAssignedAllCollapsed/svg-e16bopzh98";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type Dispatch,
  type SetStateAction,
} from "react";
import { MoreVertical, User } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import {
  ScreeningResultsTable,
  getScreeningRowsForCase,
  screeningNewPillLabelClass,
  screeningNewPillSurfaceClass,
  type ScreeningResultRow,
} from "./ScreeningResultsTable";
import { cn } from "./ui/utils";
import { SideDrawer } from "./SideDrawer";
import {
  MatchSimulatorDrawerContent,
  type MatchSimulatorPresentation,
} from "./MatchSimulatorDrawerContent";

type ThemeContextValue = {
  isDark: boolean;
  setIsDark: (value: boolean) => void;
  toggleDark: () => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error("useTheme must be used within ThemeContext.Provider");
  }
  return ctx;
}

function HashIcon() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="HashIcon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="HashIcon">
          <path d={svgPaths.p20ca8380} fill="var(--fill-0, #87B531)" id="Vector" />
          <path d={svgPaths.p1bf3cd00} fill="var(--fill-0, #87B531)" id="Vector_2" />
          <path d={svgPaths.p9474000} fill="var(--fill-0, #87B531)" id="Vector_3" />
          <path d={svgPaths.p39a00} fill="var(--fill-0, #87B531)" id="Vector_4" />
          <path d={svgPaths.p30d36900} fill="var(--fill-0, #87B531)" id="Vector_5" />
          <path d={svgPaths.pdd87980} fill="var(--fill-0, #0672A3)" id="Vector_6" />
          <path d={svgPaths.p371d3480} fill="var(--fill-0, #0672A3)" id="Vector_7" />
          <path d={svgPaths.p2b946f00} fill="var(--fill-0, #0672A3)" id="Vector_8" />
          <path d={svgPaths.pd718f0} fill="var(--fill-0, #0672A3)" id="Vector_9" />
          <path d={svgPaths.p1ec89700} fill="var(--fill-0, #0672A3)" id="Vector_10" />
          <path d={svgPaths.p597e780} fill="var(--fill-0, #92278F)" id="Vector_11" />
          <path d={svgPaths.p2ac14400} fill="var(--fill-0, #92278F)" id="Vector_12" />
          <path d={svgPaths.pcac2400} fill="var(--fill-0, #92278F)" id="Vector_13" />
          <path d={svgPaths.pf1b6200} fill="var(--fill-0, #92278F)" id="Vector_14" />
          <path d={svgPaths.p29439d80} fill="var(--fill-0, #92278F)" id="Vector_15" />
          <path d={svgPaths.peba8800} fill="var(--fill-0, #523EB9)" id="Vector_16" />
          <path d={svgPaths.pb58000} fill="var(--fill-0, #523EB9)" id="Vector_17" />
          <path d={svgPaths.p2e013570} fill="var(--fill-0, #523EB9)" id="Vector_18" />
          <path d={svgPaths.p14592000} fill="var(--fill-0, #523EB9)" id="Vector_19" />
          <path d={svgPaths.p29126800} fill="var(--fill-0, #523EB9)" id="Vector_20" />
        </g>
      </svg>
    </div>
  );
}

function FinScanText() {
  return (
    <div className="h-[24px] relative shrink-0 w-[118px]" data-name="FinScanText">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 118 24">
        <g id="FinScanText">
          <path d={svgPaths.p1d74af00} fill="var(--fill-0, #523EB9)" id="Vector" />
          <path d={svgPaths.p31b53b80} fill="var(--fill-0, #523EB9)" id="Vector_2" />
          <path d={svgPaths.p2dd36370} fill="var(--fill-0, #523EB9)" id="Vector_3" />
          <path d={svgPaths.p932480} fill="var(--fill-0, #523EB9)" id="Vector_4" />
          <path d={svgPaths.p2f0f9200} fill="var(--fill-0, #523EB9)" id="Vector_5" />
          <path d={svgPaths.p20dc0e00} fill="var(--fill-0, #523EB9)" id="Vector_6" />
          <path d={svgPaths.p2761cf00} fill="var(--fill-0, #523EB9)" id="Vector_7" />
          <path d={svgPaths.pdad1500} fill="var(--fill-0, #523EB9)" id="Vector_8" />
        </g>
      </svg>
    </div>
  );
}

function TopNavigation() {
  const { isDark, setIsDark } = useTheme();

  return (
    <div className="grid w-full shrink-0 grid-cols-[1fr_auto_1fr] items-center gap-3 border-b border-[#cfd2d9] dark:border-[#38414a] bg-white dark:bg-[#22272b] px-4 py-3 md:px-8">
      <div className="flex min-w-0 justify-self-start gap-4 md:gap-8 items-center">
        <div className="flex gap-3 items-center">
          <HashIcon />
          <FinScanText />
        </div>
      </div>
      <div className="justify-self-center">
        <span
          className="inline-flex items-center rounded-[4px] bg-red-600 px-3 py-1 font-['Noto_Sans:Bold',sans-serif] text-[11px] font-bold uppercase tracking-[0.12em] text-white shadow-sm"
          style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
        >
          UX Concept
        </span>
      </div>
      <div className="flex min-w-0 justify-self-end items-center gap-4">
        <p
          className="hidden font-['Noto_Sans:Regular',sans-serif] text-[16px] font-normal leading-[1.65] text-[#523eb9] dark:text-[#dcd7e8] md:block"
          style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
        >
          Hi, Janet
        </p>
        <div className="flex items-center gap-1 sm:gap-2">
          <button
            type="button"
            className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-md text-[#523eb9] transition-colors duration-200 ease-out hover:bg-[#eff0f2] dark:hover:bg-[#2c333a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#523eb9]/30 dark:text-[#dcd7e8]"
            aria-label="Notifications"
          >
            <svg className="h-[21px] w-[21px]" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 31.5">
              <path d={svgPaths.p2fddf9d2} fill="currentColor" />
            </svg>
          </button>
          <button
            type="button"
            className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-md text-[#523eb9] transition-colors duration-200 ease-out hover:bg-[#eff0f2] dark:hover:bg-[#2c333a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#523eb9]/30 dark:text-[#dcd7e8]"
            aria-label="Help"
          >
            <svg className="h-[21px] w-[21px]" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 34 34">
              <path d={svgPaths.p2b7aec00} fill="currentColor" />
            </svg>
          </button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                type="button"
                className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-transparent text-[#523eb9] transition-all duration-200 ease-out hover:border-[#d6cef5] hover:bg-[#efeef9] dark:text-[#dcd7e8] dark:hover:border-[#454c59] dark:hover:bg-[#2c333a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#523eb9]/30"
                aria-label="User menu"
              >
                <User className="size-[21px]" strokeWidth={2} aria-hidden />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="min-w-[11rem]">
              <DropdownMenuLabel className="text-xs font-normal text-muted-foreground">
                Appearance
              </DropdownMenuLabel>
              <DropdownMenuCheckboxItem
                checked={isDark}
                onCheckedChange={(checked) => setIsDark(checked === true)}
              >
                Dark mode
              </DropdownMenuCheckboxItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
}

interface PageHeaderProps {
  isSidebarOpen: boolean;
  sidebarPinned: boolean;
  onTriggerClick: () => void;
  onTriggerMouseEnter: () => void;
  onTriggerMouseLeave: () => void;
}

function PageHeader({
  isSidebarOpen,
  sidebarPinned,
  onTriggerClick,
  onTriggerMouseEnter,
  onTriggerMouseLeave,
}: PageHeaderProps) {
  return (
    <div className="bg-white dark:bg-[#22272b] border-b border-[#cfd2d9] dark:border-[#38414a] flex items-center justify-between px-4 md:px-8 py-3 shrink-0">
      <div className="flex gap-5 items-center">
        <button
          type="button"
          aria-expanded={isSidebarOpen}
          aria-label={
            isSidebarOpen
              ? "Sidebar is open. Click to close and unpin."
              : "Open sidebar. Hover to preview; click to pin open."
          }
          className={`size-[16px] cursor-pointer border-0 bg-transparent p-0 text-[#23262c] transition-transform duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#523eb9]/35 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:text-[#b6c2cf] dark:focus-visible:ring-offset-[#22272b] rounded ${sidebarPinned ? "" : "rotate-180"}`}
          onClick={onTriggerClick}
          onMouseEnter={onTriggerMouseEnter}
          onMouseLeave={onTriggerMouseLeave}
        >
          <svg className="block size-full pointer-events-none" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
            <path d={svgPaths.p3f53b460} fill="currentColor" />
          </svg>
        </button>
        <p className="font-['Noto_Sans:Bold',sans-serif] font-bold leading-[1.65] text-[#23262c] dark:text-[#b6c2cf] text-[16px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
          Review Assigned
        </p>
      </div>
      <div className="flex gap-2 md:gap-4 items-center">
        <div className="bg-[#87b531] rounded-[100px] size-[8px] animate-pulse" />
        <p className="hidden sm:block font-['Noto_Sans:Regular',sans-serif] font-normal leading-[1.65] text-[#23262c] dark:text-[#b6c2cf] text-[14px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
          Last updated 30 seconds ago
        </p>
      </div>
    </div>
  );
}

interface SidebarProps {
  isOpen: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

function Sidebar({ isOpen, onMouseEnter, onMouseLeave }: SidebarProps) {
  return (
    <div
      className={`bg-white dark:bg-[#22272b] border-r border-[#cfd2d9] dark:border-[#38414a] shrink-0 flex flex-col overflow-y-auto transition-all duration-150 ease-out ${isOpen ? "w-64 lg:w-72 opacity-100" : "w-0 opacity-0 border-0"}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className={`p-4 ${isOpen ? '' : 'hidden'}`}>
        <div className="bg-[#fafafb] dark:bg-[#1d2125] border border-[#cfd2d9] dark:border-[#38414a] flex items-center justify-between px-3 py-2 rounded">
          <p className="font-['Noto_Sans:Regular',sans-serif] font-normal leading-[1.65] text-[#23262c] dark:text-[#b6c2cf] text-[14px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
            Group A
          </p>
          <div className="h-[6px] w-[10px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 6">
              <path d={svgPaths.p292311c0} fill="var(--fill-0, #23262C)" />
            </svg>
          </div>
        </div>
      </div>
      <div className={`flex flex-col gap-2 px-3 ${isOpen ? '' : 'hidden'}`}>
        <div className="bg-[#eff0f2] dark:bg-[#2c333a] rounded px-3 py-1.5">
          <div className="flex gap-3 items-center">
            <div className="size-[32px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
                <rect fill="var(--fill-0, #CBC5EC)" height="32" rx="16" width="32" />
                <path d={svgPaths.p36bdcef0} fill="var(--fill-0, #523EB9)" />
              </svg>
            </div>
            <p className="font-['Noto_Sans:Bold',sans-serif] font-bold leading-[1.65] text-[14px] text-black dark:text-[#b6c2cf]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>6</p>
            <p className="font-['Noto_Sans:Regular',sans-serif] font-normal leading-[1.65] text-[#23262c] dark:text-[#b6c2cf] text-[14px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>Sanction Matches</p>
          </div>
        </div>
        <div className="rounded px-3 py-1.5 hover:bg-[#fafafb] dark:hover:bg-[#2c333a] cursor-pointer">
          <div className="flex gap-3 items-center">
            <div className="size-[32px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
                <rect fill="var(--fill-0, #F1CCF0)" height="32" rx="16" width="32" />
                <path d={svgPaths.p37098a00} fill="var(--fill-0, #92278F)" />
              </svg>
            </div>
            <p className="font-['Noto_Sans:Bold',sans-serif] font-bold leading-[1.65] text-[14px] text-black dark:text-[#b6c2cf]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>53</p>
            <p className="font-['Noto_Sans:Regular',sans-serif] font-normal leading-[1.65] text-[#23262c] dark:text-[#b6c2cf] text-[14px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>PEP Screening</p>
          </div>
        </div>
        <div className="rounded px-3 py-1.5 hover:bg-[#fafafb] dark:hover:bg-[#2c333a] cursor-pointer">
          <div className="flex gap-3 items-center">
            <div className="bg-[#e2f0c8] flex items-center justify-center rounded-[100px] size-[32px]">
              <div className="h-[14.4px] w-[16px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 14.4">
                  <path d={svgPaths.p3e64c600} fill="var(--fill-0, #87B531)" />
                  <path d={svgPaths.pb9ba5c0} fill="var(--fill-0, #87B531)" />
                  <path d={svgPaths.p31830e80} fill="var(--fill-0, #87B531)" />
                </svg>
              </div>
            </div>
            <p className="font-['Noto_Sans:Bold',sans-serif] font-bold leading-[1.65] text-[14px] text-black dark:text-[#b6c2cf]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>27</p>
            <p className="font-['Noto_Sans:Regular',sans-serif] font-normal leading-[1.65] text-[#23262c] dark:text-[#b6c2cf] text-[14px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>New Clients</p>
          </div>
        </div>
        <div className="rounded px-3 py-1.5 hover:bg-[#fafafb] dark:hover:bg-[#2c333a] cursor-pointer">
          <div className="flex gap-3 items-center">
            <div className="size-[32px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
                <rect fill="var(--fill-0, #C1F0F3)" height="32" rx="16" width="32" />
                <path d={svgPaths.p2c8bc580} fill="var(--fill-0, #0672A3)" />
              </svg>
            </div>
            <p className="font-['Noto_Sans:Bold',sans-serif] font-bold leading-[1.65] text-[14px] text-black dark:text-[#b6c2cf]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>19</p>
            <p className="font-['Noto_Sans:Regular',sans-serif] font-normal leading-[1.65] text-[#23262c] dark:text-[#b6c2cf] text-[14px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>Financial Crime</p>
          </div>
        </div>
      </div>
    </div>
  );
}

const CASE_INTERACTION_OPTIONS = [
  "Risk",
  "Review Target",
  "Organization",
  "Individual",
] as const;
type CaseInteraction = (typeof CASE_INTERACTION_OPTIONS)[number];
type CaseInteractionPicklist = "all" | CaseInteraction;

const casesData = [
  { name: "John Smith", results: 8, selected: true, interaction: "Individual" as const },
  { name: "Mr. Jose A Gonzalez", results: 8, selected: false, interaction: "Review Target" as const },
  { name: "Muammar Qadhafi", results: 7, selected: false, interaction: "Risk" as const },
  { name: "Jane Doe", results: 5, selected: false, interaction: "Individual" as const },
  { name: "Bank of Iran", results: 3, selected: false, isEntity: true, interaction: "Organization" as const },
  { name: "Bank of Moscow", results: 2, selected: false, isEntity: true, interaction: "Organization" as const },
] as const;

type ClientRiskBand = "low" | "medium" | "high";

interface ClientProfileFields {
  countryLabel: string;
  dob: string | null;
  gender: string | null;
  addressLines: readonly [string, string, string];
  lastModified: string;
  applicationLabel: string;
  reviewTargetSummary: string;
  reviewTargetOverdue: boolean;
  riskBand: ClientRiskBand;
  showIdVerified: boolean;
}

/** Per-case profile: aligned with `casesData` indices (0–5). */
const CLIENT_PROFILES: readonly ClientProfileFields[] = [
  {
    countryLabel: "USA",
    dob: "03/23/1978",
    gender: "Male",
    addressLines: ["3943 Allegheny Blvd.", "Pittsburgh, PA 15203", "USA"],
    lastModified: "01 Oct 2025 16:44:14",
    applicationLabel: "ISI Focus",
    reviewTargetSummary: "Level 1",
    reviewTargetOverdue: true,
    riskBand: "low",
    showIdVerified: true,
  },
  {
    countryLabel: "USA",
    dob: "04/11/1985",
    gender: "Male",
    addressLines: ["2200 Brickell Ave, Ste 400", "Miami, FL 33129", "USA"],
    lastModified: "28 Sep 2025 09:12:03",
    applicationLabel: "ISI Focus",
    reviewTargetSummary: "Level 1",
    reviewTargetOverdue: false,
    riskBand: "low",
    showIdVerified: true,
  },
  {
    countryLabel: "LBY",
    dob: "06/07/1942",
    gender: "Male",
    addressLines: ["Government District, Bab al-Azizia complex", "Tripoli, Tripoli District", "Libya"],
    lastModified: "15 Sep 2025 11:30:44",
    applicationLabel: "ISI Focus",
    reviewTargetSummary: "Level 1",
    reviewTargetOverdue: false,
    riskBand: "high",
    showIdVerified: true,
  },
  {
    countryLabel: "USA",
    dob: "09/14/1992",
    gender: "Female",
    addressLines: ["88 Beacon St, Unit 6B", "Boston, MA 02108", "USA"],
    lastModified: "22 Aug 2025 14:05:47",
    applicationLabel: "ISI Focus",
    reviewTargetSummary: "Level 1",
    reviewTargetOverdue: false,
    riskBand: "medium",
    showIdVerified: true,
  },
  {
    countryLabel: "IRN",
    dob: null,
    gender: null,
    addressLines: ["No. 328 Mirdamad Blvd, Valiasr Office Tower", "Tehran 19115", "Iran"],
    lastModified: "10 Jul 2025 08:41:19",
    applicationLabel: "ISI Focus",
    reviewTargetSummary: "Level 1",
    reviewTargetOverdue: false,
    riskBand: "high",
    showIdVerified: false,
  },
  {
    countryLabel: "RUS",
    dob: null,
    gender: null,
    addressLines: ["12 Neglinnaya St, Central Bank Annex", "Moscow 107031", "Russia"],
    lastModified: "03 Jun 2025 17:22:11",
    applicationLabel: "ISI Focus",
    reviewTargetSummary: "Level 1",
    reviewTargetOverdue: false,
    riskBand: "high",
    showIdVerified: false,
  },
];

function clientProfileForCaseIndex(caseIndex: number): ClientProfileFields {
  const i = Math.max(0, Math.min(caseIndex, CLIENT_PROFILES.length - 1));
  return CLIENT_PROFILES[i];
}

function riskBandPresentation(band: ClientRiskBand): { box: string; text: string; label: string } {
  if (band === "high") {
    return { box: "bg-[#fdeaea] dark:bg-[#3d2f2f]", text: "text-[#9e2a2a] dark:text-[#f0b4b4]", label: "High Risk" };
  }
  if (band === "medium") {
    return { box: "bg-[#fff4e8] dark:bg-[#3d3628]", text: "text-[#c2410c] dark:text-[#f0c090]", label: "Medium Risk" };
  }
  return { box: "bg-[#f8fbf1] dark:bg-[#2a302c]", text: "text-[#87b531]", label: "Low Risk" };
}

function MetaDot() {
  return (
    <span
      className="mx-1 inline-block h-1 w-1 shrink-0 rounded-full bg-[#523eb9] align-middle dark:bg-[#8696a7]"
      aria-hidden
    />
  );
}

/** Filled circular alert (Escalated orange) for overdue indicators. */
function OverdueFilledIcon({ className = "size-4 text-[10px]" }: { className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex shrink-0 items-center justify-center rounded-full bg-[#ef6c00] font-['Noto_Sans:Bold',sans-serif] font-bold leading-none text-white",
        className,
      )}
      aria-hidden
    >
      !
    </span>
  );
}

function softHeaderTag(text: string) {
  return (
    <span
      className={cn(
        "inline-flex h-6 min-w-6 shrink-0 items-center justify-center rounded-full px-2.5 leading-none",
        screeningNewPillSurfaceClass,
        screeningNewPillLabelClass,
      )}
      style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
    >
      {text}
    </span>
  );
}

interface CaseListProps {
  onSelectCase: (index: number) => void;
  selectedCaseIndex: number;
}

function CaseList({ onSelectCase, selectedCaseIndex }: CaseListProps) {
  const listRef = useRef<HTMLDivElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [interactionPicklist, setInteractionPicklist] =
    useState<CaseInteractionPicklist>("all");

  const visibleRows = useMemo(() => {
    const out: { item: (typeof casesData)[number]; index: number }[] = [];
    casesData.forEach((item, index) => {
      if (interactionPicklist === "all" || item.interaction === interactionPicklist) {
        out.push({ item, index });
      }
    });
    return out;
  }, [interactionPicklist]);

  const caseReviewProgress = useMemo(
    () =>
      casesData.map((_, i) => {
        const rows = getScreeningRowsForCase(i);
        const done = rows.filter((r) => r.status === "Escalated").length;
        return { done, total: rows.length };
      }),
    [],
  );

  useEffect(() => {
    if (visibleRows.some((r) => r.index === selectedCaseIndex)) return;
    if (visibleRows.length > 0) {
      onSelectCase(visibleRows[0].index);
    }
  }, [visibleRows, selectedCaseIndex, onSelectCase]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isFocused) return;

      const pos = visibleRows.findIndex((r) => r.index === selectedCaseIndex);
      if (pos < 0) return;

      if (e.key === 'ArrowDown') {
        e.preventDefault();
        if (pos < visibleRows.length - 1) {
          onSelectCase(visibleRows[pos + 1].index);
        }
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        if (pos > 0) {
          onSelectCase(visibleRows[pos - 1].index);
        }
      }
    };

    const listElement = listRef.current;
    if (listElement) {
      listElement.addEventListener('keydown', handleKeyDown);
      return () => listElement.removeEventListener('keydown', handleKeyDown);
    }
  }, [selectedCaseIndex, onSelectCase, isFocused, visibleRows]);

  return (
    <div
      ref={listRef}
      tabIndex={0}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      className="bg-white dark:bg-[#22272b] w-64 lg:w-72 flex flex-col min-h-0 flex-1 overflow-y-auto overflow-x-hidden border border-[#cfd2d9] dark:border-[#38414a] outline-none rounded-[4px] shadow-[0_1px_2px_rgba(35,38,44,0.06),0_2px_8px_rgba(35,38,44,0.08)]"
    >
      <div className="flex items-center justify-between px-3 pb-3 pt-5">
        <p className="font-['Noto_Sans:Bold',sans-serif] font-bold leading-[1.65] text-[14px] text-black dark:text-[#b6c2cf]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
          Sanction Matches
        </p>
        <div className="flex items-center justify-center border border-[#d6cef5] bg-[#f4f1fc] dark:border-[#454c59] dark:bg-[#333a42] px-2 py-1 rounded-[4px] min-w-[25px]">
          <p className="font-['Noto_Sans:Bold',sans-serif] font-bold leading-[1.65] text-[#523eb9] dark:text-[#9fadbc] text-[14px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>{visibleRows.length}</p>
        </div>
      </div>
      <div className="shrink-0 border-b border-[#cfd2d9] dark:border-[#38414a] bg-white dark:bg-[#22272b] px-3 py-2.5">
        <div className="flex flex-col gap-1.5">
          <span
            className="font-['Noto_Sans:SemiBold',sans-serif] text-[13px] text-[#23262c] dark:text-[#b6c2cf]"
            style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
          >
            Filter by
          </span>
          <Select
            value={interactionPicklist}
            onValueChange={(v) => setInteractionPicklist(v as CaseInteractionPicklist)}
          >
            <SelectTrigger
              size="sm"
              className={cn(
                "h-8 w-full rounded-[4px] border-[#cfd2d9] dark:border-[#38414a] bg-white dark:bg-[#22272b] px-2.5 py-1.5 text-[13px] font-['Noto_Sans:Regular',sans-serif] font-normal text-[#23262c] dark:text-[#b6c2cf] shadow-none hover:bg-[#eff0f2] dark:hover:bg-[#2c333a] focus-visible:border-[#523eb9] focus-visible:ring-[#523eb9]/30",
                "[&_svg]:size-3.5 [&_svg]:opacity-60",
              )}
              style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
            >
              <SelectValue placeholder="Select interaction" />
            </SelectTrigger>
            <SelectContent
              position="popper"
              className="rounded-[4px] border-[#cfd2d9] dark:border-[#38414a] bg-white dark:bg-[#22272b] p-1 shadow-md"
            >
              <SelectItem
                value="all"
                className="rounded-[4px] py-1.5 pl-2 pr-8 text-[13px] font-['Noto_Sans:Regular',sans-serif] focus:bg-[#efeef9] dark:bg-[#333a42] focus:text-[#23262c] dark:text-[#b6c2cf]"
                style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
              >
                All
              </SelectItem>
              {CASE_INTERACTION_OPTIONS.map((opt) => (
                <SelectItem
                  key={opt}
                  value={opt}
                  className="rounded-[4px] py-1.5 pl-2 pr-8 text-[13px] font-['Noto_Sans:Regular',sans-serif] focus:bg-[#efeef9] dark:bg-[#333a42] focus:text-[#23262c] dark:text-[#b6c2cf]"
                  style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
                >
                  {opt}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="flex flex-col">
        {visibleRows.map(({ item: caseItem, index }) => {
          const isEntity = "isEntity" in caseItem && caseItem.isEntity;
          const { done, total } = caseReviewProgress[index] ?? { done: 0, total: 1 };
          const progressPct = total > 0 ? (done / total) * 100 : 0;
          return (
          <div
            key={index}
            className={cn(
              "group relative cursor-pointer px-4 pb-2.5 pt-1 transition-colors",
              selectedCaseIndex === index ? "bg-[#e4e6ea] dark:bg-[#333a42]" : "hover:bg-[#e4e6ea] dark:hover:bg-[#333a42]",
            )}
            onClick={() => onSelectCase(index)}
          >
            {selectedCaseIndex === index && isFocused && (
              <div aria-hidden="true" className="absolute inset-0 z-20 border-[0.5px] border-[#523eb9] border-solid pointer-events-none" />
            )}
            <div className="relative z-10 flex items-center justify-between gap-3">
            <div className="flex min-w-0 flex-1 items-center gap-3">
            <div className={`${isEntity ? 'h-[15px]' : ''} w-[16px] shrink-0`}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox={isEntity ? "0 0 16 15" : "0 0 16 16"}>
                <path d={isEntity ? svgPaths.p1ac17500 : svgPaths.p8c3ef80} fill="var(--fill-0, #523EB9)" />
              </svg>
            </div>
            <div className="flex flex-col flex-1 min-w-0">
              <p className="font-['Noto_Sans:Regular',sans-serif] font-normal leading-[1.65] text-[#23262c] dark:text-[#b6c2cf] text-[14px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
                {caseItem.name}
              </p>
              <p className="font-['Noto_Sans:Regular',sans-serif] font-normal leading-[1.65] text-[#23262c] dark:text-[#b6c2cf] text-[10px] tracking-[0.2px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
                {caseItem.results} results
              </p>
            </div>
            </div>
            {caseItem.name === "John Smith" ? (
              <span className="shrink-0" title="Overdue warning">
                <OverdueFilledIcon />
                <span className="sr-only">Overdue warning</span>
              </span>
            ) : null}
            </div>
            <div
              className="pointer-events-none absolute bottom-1 left-4 right-4 z-10 h-1 overflow-hidden rounded-full border border-[#e4e6ea] bg-[#eff0f2] dark:bg-[#2c333a] opacity-0 transition-opacity duration-200 group-hover:opacity-100"
              aria-hidden
            >
              <div className="h-full rounded-full bg-[#523eb9] transition-[width] duration-300 ease-out" style={{ width: `${progressPct}%` }} />
            </div>
          </div>
          );
        })}
      </div>
    </div>
  );
}

interface DetailPanelProps {
  selectedCase: (typeof casesData)[number];
  selectedCaseIndex: number;
  screeningRows: ScreeningResultRow[];
  screeningSelectedIds: Set<string>;
  onScreeningSelectedIdsChange: Dispatch<SetStateAction<Set<string>>>;
  activeSimulatorRowId: string | null;
  onSimulatorRowSelect: (rowId: string | null) => void;
}

function DetailPanel({
  selectedCase,
  selectedCaseIndex,
  screeningRows,
  screeningSelectedIds,
  onScreeningSelectedIdsChange,
  activeSimulatorRowId,
  onSimulatorRowSelect,
}: DetailPanelProps) {
  const [clientExpanded, setClientExpanded] = useState(false);
  const [caseActionModal, setCaseActionModal] = useState<
    null | "comments" | "history" | "reports"
  >(null);
  const profile = clientProfileForCaseIndex(selectedCaseIndex);
  const riskPresentation = riskBandPresentation(profile.riskBand);

  const caseActionModalTitle =
    caseActionModal === "comments"
      ? "Comments"
      : caseActionModal === "history"
        ? "History"
        : caseActionModal === "reports"
          ? "Reports"
          : "";

  return (
    <div className="flex flex-1 flex-col min-h-0 gap-4 overflow-y-auto">
      <div className="bg-white dark:bg-[#22272b] border border-[#cfd2d9] dark:border-[#38414a] rounded shrink-0 shadow-[0_1px_2px_rgba(35,38,44,0.06),0_2px_8px_rgba(35,38,44,0.08)]">
        <div
          className="flex min-h-[56px] cursor-pointer items-center justify-between gap-3 px-4 py-3 hover:bg-[#fafafb] dark:hover:bg-[#2c333a]"
          onClick={() => setClientExpanded(!clientExpanded)}
          role="button"
          tabIndex={0}
          aria-expanded={clientExpanded}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              setClientExpanded((v) => !v);
            }
          }}
        >
          <div className="flex min-w-0 flex-1 flex-wrap items-center gap-2 gap-y-2">
            <div
              className={cn(
                "h-[4.94px] w-[8px] shrink-0 transition-transform duration-[420ms] [transition-timing-function:cubic-bezier(0.32,0.72,0,1)]",
                clientExpanded ? "" : "-rotate-90",
              )}
            >
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 4.94">
                <path d={svgPaths.p350de480} fill="var(--fill-0, #23262C)" />
              </svg>
            </div>
            <p
              className="font-['Noto_Sans:SemiBold',sans-serif] font-semibold leading-[1.65] text-[#23262c] dark:text-[#b6c2cf] text-[14px]"
              style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
            >
              {selectedCase.name}
            </p>
            {softHeaderTag(profile.countryLabel)}
            {profile.dob ? softHeaderTag(profile.dob) : null}
            {profile.reviewTargetOverdue ? (
              <span className="inline-flex items-center gap-1.5 rounded-full border border-[#ef6c00] bg-[#fff4e8] px-2.5 py-1">
                <OverdueFilledIcon className="size-3 text-[8px]" />
                <span
                  className="font-['Noto_Sans:SemiBold',sans-serif] text-[12px] text-[#e65100]"
                  style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
                >
                  Overdue Warning
                </span>
              </span>
            ) : null}
          </div>
          <div className="flex shrink-0 items-center">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button
                  type="button"
                  aria-label="Case actions"
                  className="inline-flex size-8 shrink-0 cursor-pointer items-center justify-center rounded-[4px] border border-[#cfd2d9] dark:border-[#38414a] bg-white dark:bg-[#22272b] text-[#464c59] dark:text-[#9fadbc] transition-colors duration-200 ease-out hover:border-[#949baa] hover:bg-[#eff0f2] dark:hover:bg-[#2c333a] hover:text-[#23262c] dark:hover:text-[#b6c2cf] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#523eb9]/35 focus-visible:ring-offset-2"
                  onClick={(e) => e.stopPropagation()}
                >
                  <MoreVertical className="size-4 shrink-0 rotate-90" strokeWidth={2} aria-hidden />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" onClick={(e) => e.stopPropagation()}>
                <DropdownMenuItem onSelect={() => setCaseActionModal("comments")}>
                  Comments
                </DropdownMenuItem>
                <DropdownMenuItem onSelect={() => setCaseActionModal("history")}>
                  History
                </DropdownMenuItem>
                <DropdownMenuItem onSelect={() => setCaseActionModal("reports")}>
                  Reports
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        <div
          className={cn(
            "grid border-t border-[#cfd2d9] dark:border-[#38414a] overflow-hidden transition-[grid-template-rows] duration-[420ms] [transition-timing-function:cubic-bezier(0.32,0.72,0,1)]",
            clientExpanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
          )}
        >
          <div className={cn("min-h-0 overflow-hidden", !clientExpanded && "pointer-events-none")}>
            <div className="p-4">
            <div className="flex min-h-[260px] gap-4 items-stretch">
              <div className="flex min-h-0 flex-1 flex-col gap-3">
                <div
                  className={cn(
                    "flex min-h-[120px] flex-1 flex-col items-center justify-center rounded p-6",
                    screeningNewPillSurfaceClass,
                  )}
                >
                  <p className="font-['Noto_Sans:Bold',sans-serif] font-bold leading-[1.65] text-[#523eb9] text-[20px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
                    In Process
                  </p>
                </div>
                <div
                  className={cn(
                    "flex min-h-[120px] flex-1 flex-col items-center justify-center rounded p-6",
                    riskPresentation.box,
                  )}
                >
                  <p
                    className={cn(
                      "font-['Noto_Sans:Bold',sans-serif] font-bold leading-[1.65] text-[20px]",
                      riskPresentation.text,
                    )}
                    style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
                  >
                    {riskPresentation.label}
                  </p>
                </div>
              </div>

              <div className="flex min-h-0 flex-1 flex-col gap-2 self-stretch rounded border border-[#cfd2d9] dark:border-[#38414a] bg-white dark:bg-[#22272b] p-6">
                <div className="flex gap-2.5 items-start">
                  <div className="h-[23px] w-[16px] shrink-0">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 23">
                      <path d="M8 0C3.57714 0 0 3.5995 0 8.05C0 14.0875 8 23 8 23C8 23 16 14.0875 16 8.05C16 3.5995 12.4229 0 8 0ZM8 10.925C6.42286 10.925 5.14286 9.637 5.14286 8.05C5.14286 6.463 6.42286 5.175 8 5.175C9.57714 5.175 10.8571 6.463 10.8571 8.05C10.8571 9.637 9.57714 10.925 8 10.925Z" fill="#523EB9" />
                    </svg>
                  </div>
                  <div className="font-['Noto_Sans:Regular',sans-serif] font-normal text-[14px] text-[#23262c] dark:text-[#b6c2cf]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
                    {profile.addressLines.map((line, lineIdx) => (
                      <p key={lineIdx} className="m-0 leading-[1.65]">
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
                <div className="flex gap-2.5 items-center">
                  <div className="size-[16px] shrink-0">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                      <path d="M6.88 9.44L5.14 7.7C4.99333 7.55333 4.81333 7.48 4.6 7.48C4.38667 7.48 4.2 7.56 4.04 7.72C3.89333 7.86667 3.82 8.05333 3.82 8.28C3.82 8.50667 3.89333 8.69333 4.04 8.84L6.32 11.12C6.46667 11.2667 6.65333 11.34 6.88 11.34C7.10667 11.34 7.29333 11.2667 7.44 11.12L11.98 6.58C12.1267 6.43333 12.2 6.25333 12.2 6.04C12.2 5.82667 12.12 5.64 11.96 5.48C11.8133 5.33333 11.6267 5.26 11.4 5.26C11.1733 5.26 10.9867 5.33333 10.84 5.48L6.88 9.44ZM8 16C6.89333 16 5.85333 15.7899 4.88 15.3696C3.90667 14.9499 3.06 14.38 2.34 13.66C1.62 12.94 1.05013 12.0933 0.6304 11.12C0.210133 10.1467 0 9.10667 0 8C0 6.89333 0.210133 5.85333 0.6304 4.88C1.05013 3.90667 1.62 3.06 2.34 2.34C3.06 1.62 3.90667 1.04987 4.88 0.6296C5.85333 0.209867 6.89333 0 8 0C9.10667 0 10.1467 0.209867 11.12 0.6296C12.0933 1.04987 12.94 1.62 13.66 2.34C14.38 3.06 14.9499 3.90667 15.3696 4.88C15.7899 5.85333 16 6.89333 16 8C16 9.10667 15.7899 10.1467 15.3696 11.12C14.9499 12.0933 14.38 12.94 13.66 13.66C12.94 14.38 12.0933 14.9499 11.12 15.3696C10.1467 15.7899 9.10667 16 8 16Z" fill="#87B531" />
                    </svg>
                  </div>
                  <p className="font-['Noto_Sans:Regular',sans-serif] font-normal leading-[1.65] text-[14px] text-[#23262c] dark:text-[#b6c2cf]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
                    Client Active
                  </p>
                </div>
                <div className="flex gap-2.5 items-center">
                  <div className="size-[16px] shrink-0">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                      <path d="M6.88 9.44L5.14 7.7C4.99333 7.55333 4.81333 7.48 4.6 7.48C4.38667 7.48 4.2 7.56 4.04 7.72C3.89333 7.86667 3.82 8.05333 3.82 8.28C3.82 8.50667 3.89333 8.69333 4.04 8.84L6.32 11.12C6.46667 11.2667 6.65333 11.34 6.88 11.34C7.10667 11.34 7.29333 11.2667 7.44 11.12L11.98 6.58C12.1267 6.43333 12.2 6.25333 12.2 6.04C12.2 5.82667 12.12 5.64 11.96 5.48C11.8133 5.33333 11.6267 5.26 11.4 5.26C11.1733 5.26 10.9867 5.33333 10.84 5.48L6.88 9.44ZM8 16C6.89333 16 5.85333 15.7899 4.88 15.3696C3.90667 14.9499 3.06 14.38 2.34 13.66C1.62 12.94 1.05013 12.0933 0.6304 11.12C0.210133 10.1467 0 9.10667 0 8C0 6.89333 0.210133 5.85333 0.6304 4.88C1.05013 3.90667 1.62 3.06 2.34 2.34C3.06 1.62 3.90667 1.04987 4.88 0.6296C5.85333 0.209867 6.89333 0 8 0C9.10667 0 10.1467 0.209867 11.12 0.6296C12.0933 1.04987 12.94 1.62 13.66 2.34C14.38 3.06 14.9499 3.90667 15.3696 4.88C15.7899 5.85333 16 6.89333 16 8C16 9.10667 15.7899 10.1467 15.3696 11.12C14.9499 12.0933 14.38 12.94 13.66 13.66C12.94 14.38 12.0933 14.9499 11.12 15.3696C10.1467 15.7899 9.10667 16 8 16Z" fill="#87B531" />
                    </svg>
                  </div>
                  <p className="font-['Noto_Sans:Regular',sans-serif] font-normal leading-[1.65] text-[14px] text-[#23262c] dark:text-[#b6c2cf]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
                    Address Validated
                  </p>
                </div>
                {profile.showIdVerified ? (
                  <div className="flex gap-2.5 items-center">
                    <div className="size-[16px] shrink-0">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                        <path d="M6.88 9.44L5.14 7.7C4.99333 7.55333 4.81333 7.48 4.6 7.48C4.38667 7.48 4.2 7.56 4.04 7.72C3.89333 7.86667 3.82 8.05333 3.82 8.28C3.82 8.50667 3.89333 8.69333 4.04 8.84L6.32 11.12C6.46667 11.2667 6.65333 11.34 6.88 11.34C7.10667 11.34 7.29333 11.2667 7.44 11.12L11.98 6.58C12.1267 6.43333 12.2 6.25333 12.2 6.04C12.2 5.82667 12.12 5.64 11.96 5.48C11.8133 5.33333 11.6267 5.26 11.4 5.26C11.1733 5.26 10.9867 5.33333 10.84 5.48L6.88 9.44ZM8 16C6.89333 16 5.85333 15.7899 4.88 15.3696C3.90667 14.9499 3.06 14.38 2.34 13.66C1.62 12.94 1.05013 12.0933 0.6304 11.12C0.210133 10.1467 0 9.10667 0 8C0 6.89333 0.210133 5.85333 0.6304 4.88C1.05013 3.90667 1.62 3.06 2.34 2.34C3.06 1.62 3.90667 1.04987 4.88 0.6296C5.85333 0.209867 6.89333 0 8 0C9.10667 0 10.1467 0.209867 11.12 0.6296C12.0933 1.04987 12.94 1.62 13.66 2.34C14.38 3.06 14.9499 3.90667 15.3696 4.88C15.7899 5.85333 16 6.89333 16 8C16 9.10667 15.7899 10.1467 15.3696 11.12C14.9499 12.0933 14.38 12.94 13.66 13.66C12.94 14.38 12.0933 14.9499 11.12 15.3696C10.1467 15.7899 9.10667 16 8 16Z" fill="#87B531" />
                      </svg>
                    </div>
                    <p className="font-['Noto_Sans:Regular',sans-serif] font-normal leading-[1.65] text-[14px] text-[#23262c] dark:text-[#b6c2cf]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
                      ID Verified
                    </p>
                  </div>
                ) : null}
              </div>

              <div className="flex min-h-0 flex-1 flex-col gap-2 self-stretch rounded border border-[#cfd2d9] dark:border-[#38414a] bg-white dark:bg-[#22272b] p-6">
                {profile.gender != null ? (
                  <p className="font-['Noto_Sans:Regular',sans-serif] font-normal leading-[1.65] text-[14px] text-[#23262c] dark:text-[#b6c2cf]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
                    <span>Gender </span>
                    <MetaDot />
                    <span>{profile.gender}</span>
                  </p>
                ) : null}
                {profile.dob != null ? (
                  <p className="font-['Noto_Sans:Regular',sans-serif] font-normal leading-[1.65] text-[14px] text-[#23262c] dark:text-[#b6c2cf]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
                    <span>Date of Birth </span>
                    <MetaDot />
                    <span>{profile.dob}</span>
                  </p>
                ) : null}
                <p className="font-['Noto_Sans:Regular',sans-serif] font-normal leading-[1.65] text-[14px] text-[#23262c] dark:text-[#b6c2cf]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
                  <span>Application </span>
                  <MetaDot />
                  <span>{profile.applicationLabel}</span>
                </p>
                <p className="font-['Noto_Sans:Regular',sans-serif] font-normal leading-[1.65] text-[14px] text-[#23262c] dark:text-[#b6c2cf]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
                  <span>Review Target </span>
                  <MetaDot />
                  <span>{profile.reviewTargetSummary}</span>
                  {profile.reviewTargetOverdue ? (
                    <span className="text-[#e65100]"> Overdue Warning</span>
                  ) : null}
                </p>
                <p className="font-['Noto_Sans:Regular',sans-serif] font-normal leading-[1.65] text-[14px] text-[#23262c] dark:text-[#b6c2cf]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
                  <span>Last Modified </span>
                  <MetaDot />
                  <span>{profile.lastModified}</span>
                </p>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>

      <Dialog
        open={caseActionModal !== null}
        onOpenChange={(open) => {
          if (!open) setCaseActionModal(null);
        }}
      >
        <DialogContent className="max-w-lg gap-0 overflow-hidden rounded-[4px] border-[#cfd2d9] dark:border-[#38414a] bg-white dark:bg-[#22272b] p-0 sm:max-w-lg">
          <DialogHeader className="border-b border-[#cfd2d9] dark:border-[#38414a] px-6 py-4 text-left">
            <DialogTitle
              className="font-['Noto_Sans:Bold',sans-serif] text-[18px] font-bold text-[#23262c] dark:text-[#b6c2cf]"
              style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
            >
              {caseActionModalTitle}
            </DialogTitle>
          </DialogHeader>
          <div className="min-h-[200px] px-6 py-6" />
        </DialogContent>
      </Dialog>

      <ScreeningResultsTable
        className="w-full"
        rows={screeningRows}
        selectedIds={screeningSelectedIds}
        onSelectedIdsChange={onScreeningSelectedIdsChange}
        activeSimulatorRowId={activeSimulatorRowId}
        onSimulatorRowSelect={onSimulatorRowSelect}
      />
    </div>
  );
}

interface TaskBarProps {
  onShowReview: () => void;
  isReviewOpen: boolean;
  screeningSelectionCount: number;
  onDeselectAllScreening: () => void;
}

function TaskBar({
  onShowReview,
  isReviewOpen,
  screeningSelectionCount,
  onDeselectAllScreening,
}: TaskBarProps) {
  return (
    <div className="shrink-0 flex items-center justify-between gap-4 rounded-[4px] border border-[#cfd2d9] dark:border-[#38414a] bg-white dark:bg-[#22272b] px-4 py-4 shadow-[0_1px_2px_rgba(35,38,44,0.06),0_2px_8px_rgba(35,38,44,0.08)]">
      <div className="flex gap-4 items-center cursor-pointer min-w-0">
        <div className="relative size-[24px] shrink-0">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
            <path d={svgPaths.p2f74d800} fill="var(--fill-0, #7868CD)" />
            <path d={svgPaths.p273dbb80} fill="var(--fill-0, #7868CD)" transform="translate(8.04, 5.64)" />
            <path d={svgPaths.p212023c0} fill="var(--fill-0, #7868CD)" transform="translate(10.67, 15.72)" />
          </svg>
        </div>
        <p className="font-['Noto_Sans:Regular',sans-serif] font-normal leading-[1.65] text-[#7868cd] text-[14px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
          Show me how this works
        </p>
      </div>
      <div className="flex shrink-0 items-center gap-3">
        {screeningSelectionCount > 0 ? (
          <>
            <span
              className="font-['Noto_Sans:Regular',sans-serif] text-[13px] tabular-nums text-[#464c59] dark:text-[#9fadbc] whitespace-nowrap"
              style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
            >
              {screeningSelectionCount} selected
            </span>
            <button
              type="button"
              onClick={onDeselectAllScreening}
              className="font-['Noto_Sans:SemiBold',sans-serif] text-[13px] rounded-[4px] px-2 py-1.5 text-[#523eb9] transition-colors hover:bg-[#f4f1fc] dark:hover:bg-[#2c333a] hover:text-[#3d2e8a] dark:hover:text-[#dcd7e8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#523eb9]/35 focus-visible:ring-offset-2"
              style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
            >
              Deselect all
            </button>
          </>
        ) : null}
        <div
          className="shrink-0 bg-[#3d2e8a] px-4 py-2 rounded-[4px] cursor-pointer hover:bg-[#523eb9] transition-colors"
          onClick={onShowReview}
        >
          <p className="font-['Noto_Sans:Bold',sans-serif] font-bold leading-[1.65] text-[14px] text-white" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
            {isReviewOpen ? 'Hide Review' : 'Show Review'}
          </p>
        </div>
      </div>
    </div>
  );
}

interface ReviewDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

function ReviewDrawer({ isOpen, onClose }: ReviewDrawerProps) {
  const [decisionExpanded, setDecisionExpanded] = useState(true);
  const [commentsExpanded, setCommentsExpanded] = useState(false);
  const [attachmentsExpanded, setAttachmentsExpanded] = useState(false);
  const [matchHistoryOpen, setMatchHistoryOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) setMatchHistoryOpen(false);
  }, [isOpen]);

  return (
    <SideDrawer
      isOpen={isOpen}
      onClose={onClose}
      widthStorageKey="review-assigned-review-drawer-width"
      defaultWidth={480}
      className="self-stretch"
    >
      <div className="flex min-h-0 flex-1 flex-col overflow-hidden">
        <div className="bg-white dark:bg-[#22272b] relative shrink-0 w-full">
          <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex items-center px-[20px] py-[16px] relative size-full">
              <div className="content-stretch flex items-center justify-center relative shrink-0">
                <p className="font-['Noto_Sans:Bold',sans-serif] font-bold leading-[1.65] relative shrink-0 text-[#23262c] dark:text-[#b6c2cf] text-[20px] whitespace-nowrap" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
                  Review
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-[#22272b] flex-1 min-h-px relative w-full flex flex-col">
          <div className="flex-1 overflow-y-auto p-[24px] space-y-4">
          <div className="bg-[#f8fbf1] dark:bg-[#2a302c] relative rounded-[4px]">
            <div className="flex flex-col items-start overflow-clip p-[16px] relative rounded-[inherit]">
              <div
                className="flex items-start justify-between relative shrink-0 w-full cursor-pointer"
                onClick={() => setDecisionExpanded(!decisionExpanded)}
              >
                <div className="flex gap-[16px] items-center">
                  <div className={`h-[4.94px] w-[8px] transition-transform duration-300 ease-in-out ${decisionExpanded ? '' : '-rotate-90'}`}>
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 4.94">
                      <path d={svgPaths.p350de480} fill="var(--fill-0, #23262C)" />
                    </svg>
                  </div>
                  <p className="font-['Noto_Sans:SemiBold',sans-serif] font-semibold leading-[1.65] text-[#23262c] dark:text-[#b6c2cf] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
                    Decision
                  </p>
                </div>
                <button
                  type="button"
                  aria-label="Decision history"
                  className="inline-flex size-8 shrink-0 cursor-pointer items-center justify-center rounded-[4px] border border-[#cfd2d9] dark:border-[#38414a] bg-white dark:bg-[#22272b] text-[#464c59] dark:text-[#9fadbc] transition-colors duration-200 ease-out hover:border-[#949baa] hover:bg-[#eff0f2] dark:hover:bg-[#2c333a] hover:text-[#23262c] dark:hover:text-[#b6c2cf] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#523eb9]/35 focus-visible:ring-offset-2"
                  onClick={(e) => {
                    e.stopPropagation();
                    setMatchHistoryOpen(true);
                  }}
                >
                  <svg className="block size-4 shrink-0" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16" aria-hidden>
                    <path d="M8.88889 7.64444L11.1111 9.86667C11.2741 10.0296 11.3556 10.237 11.3556 10.4889C11.3556 10.7407 11.2741 10.9481 11.1111 11.1111C10.9481 11.2741 10.7407 11.3556 10.4889 11.3556C10.237 11.3556 10.0296 11.2741 9.86667 11.1111L7.37778 8.62222C7.28889 8.53333 7.22222 8.43319 7.17778 8.32178C7.13333 8.21096 7.11111 8.0963 7.11111 7.97778V4.44444C7.11111 4.19259 7.19644 3.98133 7.36711 3.81067C7.53719 3.64059 7.74815 3.55556 8 3.55556C8.25185 3.55556 8.46311 3.64059 8.63378 3.81067C8.80385 3.98133 8.88889 4.19259 8.88889 4.44444V7.64444ZM8 16C6.20741 16 4.6 15.4702 3.17778 14.4107C1.75556 13.3517 0.8 11.9704 0.311111 10.2667C0.237037 10 0.263111 9.74815 0.389333 9.51111C0.514963 9.27407 0.711111 9.12593 0.977778 9.06667C1.22963 9.00741 1.4557 9.06281 1.656 9.23289C1.8557 9.40356 1.99259 9.61482 2.06667 9.86667C2.45185 11.1704 3.19644 12.2222 4.30044 13.0222C5.40385 13.8222 6.63704 14.2222 8 14.2222C9.73333 14.2222 11.2036 13.6184 12.4107 12.4107C13.6184 11.2036 14.2222 9.73333 14.2222 8C14.2222 6.26667 13.6184 4.79615 12.4107 3.58844C11.2036 2.38133 9.73333 1.77778 8 1.77778C6.97778 1.77778 6.02222 2.01481 5.13333 2.48889C4.24444 2.96296 3.4963 3.61481 2.88889 4.44444H4.44444C4.6963 4.44444 4.90756 4.52948 5.07822 4.69956C5.2483 4.87022 5.33333 5.08148 5.33333 5.33333C5.33333 5.58519 5.2483 5.79615 5.07822 5.96622C4.90756 6.13689 4.6963 6.22222 4.44444 6.22222H0.888889C0.637037 6.22222 0.426074 6.13689 0.256 5.96622C0.0853334 5.79615 0 5.58519 0 5.33333V1.77778C0 1.52593 0.0853334 1.31467 0.256 1.144C0.426074 0.973926 0.637037 0.888889 0.888889 0.888889C1.14074 0.888889 1.352 0.973926 1.52267 1.144C1.69274 1.31467 1.77778 1.52593 1.77778 1.77778V2.97778C2.53333 2.02963 3.4557 1.2963 4.54489 0.777778C5.63348 0.259259 6.78519 0 8 0C9.11111 0 10.152 0.210963 11.1227 0.632889C12.0927 1.05541 12.9372 1.62578 13.656 2.344C14.3742 3.06281 14.9446 3.90726 15.3671 4.87733C15.789 5.848 16 6.88889 16 8C16 9.11111 15.789 10.1517 15.3671 11.1218C14.9446 12.0924 14.3742 12.9369 13.656 13.6551C12.9372 14.3739 12.0927 14.9446 11.1227 15.3671C10.152 15.789 9.11111 16 8 16Z" fill="currentColor" />
                  </svg>
                </button>
              </div>

              <div className={`overflow-hidden transition-all duration-300 ease-in-out w-full ${decisionExpanded ? 'max-h-[600px] opacity-100 mt-[24px]' : 'max-h-0 opacity-0'}`}>
                <div className="flex flex-col gap-[12px] items-start px-[24px] w-full">
                  <div className="flex flex-col gap-[12px] items-start justify-center w-full">
                    <p className="font-['Noto_Sans:SemiBold',sans-serif] font-semibold leading-[1.65] text-[#23262c] dark:text-[#b6c2cf] text-[14px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
                      Last Updated
                    </p>
                    <div className="flex flex-col gap-[4px] items-start font-['Noto_Sans:Regular',sans-serif] font-normal text-[#23262c] dark:text-[#b6c2cf] w-full">
                      <p className="leading-[1.65] text-[14px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
                        <span className="font-['Noto_Sans:SemiBold',sans-serif] font-semibold" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>User</span>
                        {` · Laura Leader`}
                      </p>
                      <p className="leading-[1.65] text-[14px] flex items-center gap-1 flex-wrap" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
                        <span className="font-['Noto_Sans:SemiBold',sans-serif] font-semibold" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>Match Status</span>
                        <span className="text-[#23262c] dark:text-[#b6c2cf]"> · </span>
                        <span className="font-['Noto_Sans:Bold',sans-serif] font-bold text-[#87b531]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>Confirmed Safe</span>
                        <svg className="w-3 h-3 shrink-0 text-[#23262c] dark:text-[#b6c2cf]" fill="none" viewBox="0 0 12 12" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2 6h8m0 0L7 3m3 3l-3 3" />
                        </svg>
                        <span>New</span>
                      </p>
                      <p className="leading-[1.65] text-[14px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
                        <span className="font-['Noto_Sans:SemiBold',sans-serif] font-semibold" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>Comment</span>
                        {` · Last user comment goes here`}
                      </p>
                      <p className="leading-[1.65] text-[14px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
                        <span className="font-['Noto_Sans:SemiBold',sans-serif] font-semibold" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>Modified Date</span>
                        {` · 05 Oct 2025 17:33:23`}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col gap-[8px] items-start justify-center w-full">
                    <p className="font-['Noto_Sans:Bold',sans-serif] font-bold leading-[1.65] text-[#23262c] dark:text-[#b6c2cf] text-[12px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
                      Select Status
                    </p>
                    <div className="bg-white dark:bg-[#22272b] relative rounded-[4px] w-full">
                      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
                        <div className="flex items-center justify-between px-[12px] py-[8px] w-full cursor-pointer hover:bg-gray-50 dark:hover:bg-[#333a42]">
                          <p className="font-['Noto_Sans:Regular',sans-serif] font-normal leading-[1.65] text-[#6a7285] dark:text-[#8696a7] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
                            Status...
                          </p>
                          <div className="h-[4.94px] w-[8px]">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 4.94">
                              <path d={svgPaths.p350de480} fill="var(--fill-0, #464C59)" />
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div aria-hidden="true" className="absolute border border-[#cfd2d9] dark:border-[#38414a] border-solid inset-0 pointer-events-none rounded-[4px]" />
                    </div>
                  </div>

                  <div className="flex flex-col gap-[8px] items-start justify-center w-full">
                    <p className="font-['Noto_Sans:Bold',sans-serif] font-bold leading-[1.65] text-[#23262c] dark:text-[#b6c2cf] text-[12px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
                      Select Reason
                    </p>
                    <div className="bg-white dark:bg-[#22272b] relative rounded-[4px] w-full">
                      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
                        <div className="flex items-center justify-between px-[12px] py-[8px] w-full cursor-pointer hover:bg-gray-50 dark:hover:bg-[#333a42]">
                          <p className="font-['Noto_Sans:Regular',sans-serif] font-normal leading-[1.65] text-[#6a7285] dark:text-[#8696a7] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
                            Reason...
                          </p>
                          <div className="h-[4.94px] w-[8px]">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 4.94">
                              <path d={svgPaths.p350de480} fill="var(--fill-0, #464C59)" />
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div aria-hidden="true" className="absolute border border-[#cfd2d9] dark:border-[#38414a] border-solid inset-0 pointer-events-none rounded-[4px]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div aria-hidden="true" className="absolute border-[#87b531] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[4px]" />
          </div>

          <div className="border border-[#cfd2d9] dark:border-[#38414a] rounded">
            <div
              className="flex items-center justify-between p-3 cursor-pointer hover:bg-gray-50 dark:hover:bg-[#333a42]"
              onClick={() => setCommentsExpanded(!commentsExpanded)}
            >
              <div className="flex items-center gap-2">
                <div className={`h-[4.94px] w-[8px] transition-transform duration-300 ease-in-out ${commentsExpanded ? '' : '-rotate-90'}`}>
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 4.94">
                    <path d={svgPaths.p350de480} fill="var(--fill-0, #23262C)" />
                  </svg>
                </div>
                <p className="font-['Noto_Sans:Bold',sans-serif] font-bold leading-[1.65] text-[#23262c] dark:text-[#b6c2cf] text-[14px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
                  Comments
                </p>
              </div>
            </div>
          </div>

          <div className="border border-[#cfd2d9] dark:border-[#38414a] rounded">
            <div
              className="flex items-center justify-between p-3 cursor-pointer hover:bg-gray-50 dark:hover:bg-[#333a42]"
              onClick={() => setAttachmentsExpanded(!attachmentsExpanded)}
            >
              <div className="flex items-center gap-2">
                <div className={`h-[4.94px] w-[8px] transition-transform duration-300 ease-in-out ${attachmentsExpanded ? '' : '-rotate-90'}`}>
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 4.94">
                    <path d={svgPaths.p350de480} fill="var(--fill-0, #23262C)" />
                  </svg>
                </div>
                <p className="font-['Noto_Sans:Bold',sans-serif] font-bold leading-[1.65] text-[#23262c] dark:text-[#b6c2cf] text-[14px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
                  Attachments
                </p>
              </div>
            </div>
          </div>
          </div>

          <div className="p-[24px] shrink-0">
            <div className="flex gap-[16px] items-start justify-end w-full">
              <button
                onClick={onClose}
                className="bg-white dark:bg-[#22272b] flex items-start px-[16px] py-[8px] relative rounded-[4px] hover:bg-gray-50 dark:hover:bg-[#333a42] transition-colors"
              >
                <div aria-hidden="true" className="absolute border border-[#523eb9] border-solid inset-0 pointer-events-none rounded-[4px]" />
                <p className="font-['Noto_Sans:Bold',sans-serif] font-bold leading-[1.65] relative text-[#523eb9] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
                  Close
                </p>
              </button>
              <button className="bg-[#523eb9] flex items-center justify-center px-[16px] py-[8px] relative rounded-[4px] hover:bg-[#3d2e8a] transition-colors">
                <p className="font-['Noto_Sans:Bold',sans-serif] font-bold leading-[1.65] text-[14px] text-white whitespace-nowrap" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
                  Submit
                </p>
              </button>
            </div>
          </div>
        </div>
      </div>
      <Dialog
        open={isOpen && matchHistoryOpen}
        onOpenChange={setMatchHistoryOpen}
      >
        <DialogContent className="max-w-lg gap-0 overflow-hidden rounded-[4px] border-[#cfd2d9] dark:border-[#38414a] bg-white dark:bg-[#22272b] p-0 sm:max-w-lg">
          <DialogHeader className="border-b border-[#cfd2d9] dark:border-[#38414a] px-6 py-4 text-left">
            <DialogTitle
              className="font-['Noto_Sans:Bold',sans-serif] text-[18px] font-bold text-[#23262c] dark:text-[#b6c2cf]"
              style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
            >
              Match History
            </DialogTitle>
          </DialogHeader>
          <div className="min-h-[200px] px-6 py-6" />
        </DialogContent>
      </Dialog>
    </SideDrawer>
  );
}

export function ResponsiveReviewInterface() {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window === "undefined") return false;
    return localStorage.getItem("review-theme") === "dark";
  });

  useEffect(() => {
    localStorage.setItem("review-theme", isDark ? "dark" : "light");
  }, [isDark]);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
    return () => {
      document.documentElement.classList.remove("dark");
    };
  }, [isDark]);

  const themeValue = useMemo(
    () => ({
      isDark,
      setIsDark,
      toggleDark: () => setIsDark((d) => !d),
    }),
    [isDark],
  );

  const [sidebarPinned, setSidebarPinned] = useState(true);
  const [sidebarPeek, setSidebarPeek] = useState(false);
  const [selectedCaseIndex, setSelectedCaseIndex] = useState(0);
  const [isReviewDrawerOpen, setIsReviewDrawerOpen] = useState(false);
  const [simulatorRowId, setSimulatorRowId] = useState<string | null>(null);
  const [simulatorPresentation, setSimulatorPresentation] =
    useState<MatchSimulatorPresentation>("drawer");
  const [screeningSelectedIds, setScreeningSelectedIds] = useState<Set<string>>(() => new Set());

  const screeningRows = useMemo(() => getScreeningRowsForCase(selectedCaseIndex), [selectedCaseIndex]);

  const simulatorRow = useMemo(
    () => (simulatorRowId ? screeningRows.find((r) => r.id === simulatorRowId) ?? null : null),
    [screeningRows, simulatorRowId],
  );

  const closeSimulator = useCallback(() => {
    setSimulatorRowId(null);
    setSimulatorPresentation("drawer");
  }, []);

  const handleSimulatorRowSelect = useCallback((rowId: string | null) => {
    setSimulatorRowId(rowId);
    if (rowId) {
      setSimulatorPresentation("drawer");
      setIsReviewDrawerOpen(false);
    }
  }, []);

  const handleShowReview = useCallback(() => {
    setSimulatorRowId(null);
    setIsReviewDrawerOpen((open) => !open);
  }, []);

  useEffect(() => {
    setScreeningSelectedIds(new Set());
    setSimulatorRowId(null);
    setSimulatorPresentation("drawer");
  }, [selectedCaseIndex]);

  const sidebarPinnedRef = useRef(sidebarPinned);
  sidebarPinnedRef.current = sidebarPinned;

  const peekCloseTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearPeekCloseTimer = useCallback(() => {
    if (peekCloseTimerRef.current !== null) {
      clearTimeout(peekCloseTimerRef.current);
      peekCloseTimerRef.current = null;
    }
  }, []);

  const schedulePeekClose = useCallback(() => {
    clearPeekCloseTimer();
    peekCloseTimerRef.current = setTimeout(() => {
      peekCloseTimerRef.current = null;
      if (!sidebarPinnedRef.current) {
        setSidebarPeek(false);
      }
    }, 280);
  }, [clearPeekCloseTimer]);

  useEffect(() => () => clearPeekCloseTimer(), [clearPeekCloseTimer]);

  const sidebarOpen = sidebarPinned || sidebarPeek;

  const handleTriggerClick = useCallback(() => {
    clearPeekCloseTimer();
    if (sidebarPinnedRef.current) {
      setSidebarPinned(false);
      setSidebarPeek(false);
    } else {
      setSidebarPinned(true);
    }
  }, [clearPeekCloseTimer]);

  const handleTriggerMouseEnter = useCallback(() => {
    clearPeekCloseTimer();
    if (!sidebarPinnedRef.current) {
      setSidebarPeek(true);
    }
  }, [clearPeekCloseTimer]);

  const handleTriggerMouseLeave = useCallback(() => {
    if (!sidebarPinnedRef.current) {
      schedulePeekClose();
    }
  }, [schedulePeekClose]);

  const handleSidebarMouseEnter = useCallback(() => {
    clearPeekCloseTimer();
    if (!sidebarPinnedRef.current) {
      setSidebarPeek(true);
    }
  }, [clearPeekCloseTimer]);

  const handleSidebarMouseLeave = useCallback(() => {
    if (!sidebarPinnedRef.current) {
      schedulePeekClose();
    }
  }, [schedulePeekClose]);

  return (
    <ThemeContext.Provider value={themeValue}>
    <div className="flex h-screen w-screen flex-col overflow-hidden bg-[#fafafb] text-[#23262c] dark:bg-[#1d2125] dark:text-[#b6c2cf]">
      <TopNavigation />
      <PageHeader
        isSidebarOpen={sidebarOpen}
        sidebarPinned={sidebarPinned}
        onTriggerClick={handleTriggerClick}
        onTriggerMouseEnter={handleTriggerMouseEnter}
        onTriggerMouseLeave={handleTriggerMouseLeave}
      />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar isOpen={sidebarOpen} onMouseEnter={handleSidebarMouseEnter} onMouseLeave={handleSidebarMouseLeave} />
        <div className="flex flex-1 overflow-hidden">
          <div className="flex flex-col flex-1 min-h-0 overflow-hidden px-4 pb-4 gap-4">
            <div className="flex flex-1 min-h-0 overflow-hidden gap-4 pt-4">
              <div className="shrink-0 self-stretch flex flex-col min-h-0">
                <CaseList onSelectCase={setSelectedCaseIndex} selectedCaseIndex={selectedCaseIndex} />
              </div>
              <DetailPanel
                selectedCase={casesData[selectedCaseIndex]}
                selectedCaseIndex={selectedCaseIndex}
                screeningRows={screeningRows}
                screeningSelectedIds={screeningSelectedIds}
                onScreeningSelectedIdsChange={setScreeningSelectedIds}
                activeSimulatorRowId={simulatorRowId}
                onSimulatorRowSelect={handleSimulatorRowSelect}
              />
            </div>
            <TaskBar
              onShowReview={handleShowReview}
              isReviewOpen={isReviewDrawerOpen}
              screeningSelectionCount={screeningSelectedIds.size}
              onDeselectAllScreening={() => setScreeningSelectedIds(new Set())}
            />
          </div>
          <ReviewDrawer isOpen={isReviewDrawerOpen} onClose={() => setIsReviewDrawerOpen(false)} />
          <SideDrawer
            isOpen={simulatorRow !== null && simulatorPresentation === "drawer"}
            onClose={closeSimulator}
            widthStorageKey="review-assigned-match-simulator-drawer-width"
            defaultWidth={420}
            className="self-stretch"
          >
            {simulatorRow && simulatorPresentation === "drawer" ? (
              <MatchSimulatorDrawerContent
                key={simulatorRow.id}
                row={simulatorRow}
                onClose={closeSimulator}
                presentation="drawer"
                onSwitchToModal={() => setSimulatorPresentation("modal")}
              />
            ) : null}
          </SideDrawer>

          <Dialog
            open={simulatorRow !== null && simulatorPresentation === "modal"}
            onOpenChange={(open) => {
              if (!open) closeSimulator();
            }}
          >
            <DialogContent className="flex h-[min(90vh,880px)] w-[min(calc(100vw-2rem),1200px)] max-w-none flex-col gap-0 overflow-hidden rounded-[4px] border border-[#cfd2d9] bg-white p-0 dark:border-[#38414a] dark:bg-[#22272b] sm:max-w-none [&>button.absolute]:hidden">
              <DialogTitle className="sr-only">Match Simulator</DialogTitle>
              {simulatorRow && simulatorPresentation === "modal" ? (
                <MatchSimulatorDrawerContent
                  key={simulatorRow.id}
                  row={simulatorRow}
                  onClose={closeSimulator}
                  presentation="modal"
                  onSwitchToDrawer={() => setSimulatorPresentation("drawer")}
                />
              ) : null}
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
    </ThemeContext.Provider>
  );
}

import svgPaths from "../../imports/ReviewAssignedAllCollapsed/svg-e16bopzh98";
import { useState, useEffect, useRef } from "react";
import { MoreVertical, User } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { ScreeningResultsTable } from "./ScreeningResultsTable";
import { cn } from "./ui/utils";

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
  return (
    <div className="bg-white border-b border-[#cfd2d9] flex items-center justify-between px-4 md:px-8 py-3 shrink-0">
      <div className="flex gap-4 md:gap-8 items-center">
        <div className="flex gap-3 items-center">
          <HashIcon />
          <FinScanText />
        </div>
      </div>
      <div className="flex gap-4 items-center">
        <p className="hidden md:block font-['Noto_Sans:Regular',sans-serif] font-normal leading-[1.65] text-[#523eb9] text-[16px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
          Hi, Janet
        </p>
        <div className="flex gap-1 sm:gap-2 items-center">
          <button
            type="button"
            className="h-8 w-8 shrink-0 inline-flex items-center justify-center rounded-md text-[#523eb9] hover:bg-[#eff0f2] transition-colors duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#523eb9]/30"
            aria-label="Notifications"
          >
            <svg className="h-[21px] w-[21px]" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 31.5">
              <path d={svgPaths.p2fddf9d2} fill="currentColor" />
            </svg>
          </button>
          <button
            type="button"
            className="h-8 w-8 shrink-0 inline-flex items-center justify-center rounded-md text-[#523eb9] hover:bg-[#eff0f2] transition-colors duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#523eb9]/30"
            aria-label="Help"
          >
            <svg className="h-[21px] w-[21px]" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 34 34">
              <path d={svgPaths.p2b7aec00} fill="currentColor" />
            </svg>
          </button>
          <button
            type="button"
            className="h-8 w-8 shrink-0 inline-flex items-center justify-center rounded-md text-[#523eb9] hover:bg-[#efeef9] border border-transparent hover:border-[#d6cef5] transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#523eb9]/30"
            aria-label="User profile"
          >
            <User className="size-[21px]" strokeWidth={2} aria-hidden />
          </button>
        </div>
      </div>
    </div>
  );
}

interface PageHeaderProps {
  onToggleSidebar: () => void;
  isSidebarOpen: boolean;
}

function PageHeader({ onToggleSidebar, isSidebarOpen }: PageHeaderProps) {
  return (
    <div className="bg-white border-b border-[#cfd2d9] flex items-center justify-between px-4 md:px-8 py-3 shrink-0">
      <div className="flex gap-5 items-center">
        <div
          className={`size-[16px] cursor-pointer transition-transform duration-300 ${isSidebarOpen ? '' : 'rotate-180'}`}
          onClick={onToggleSidebar}
        >
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
            <path d={svgPaths.p3f53b460} fill="var(--fill-0, #23262C)" />
          </svg>
        </div>
        <p className="font-['Noto_Sans:Bold',sans-serif] font-bold leading-[1.65] text-[#23262c] text-[16px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
          Review Assigned
        </p>
      </div>
      <div className="flex gap-2 md:gap-4 items-center">
        <div className="bg-[#87b531] rounded-[100px] size-[8px] animate-pulse" />
        <p className="hidden sm:block font-['Noto_Sans:Regular',sans-serif] font-normal leading-[1.65] text-[#23262c] text-[14px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
          Last updated 30 seconds ago
        </p>
      </div>
    </div>
  );
}

interface SidebarProps {
  isOpen: boolean;
}

function Sidebar({ isOpen }: SidebarProps) {
  return (
    <div className={`bg-white border-r border-[#cfd2d9] shrink-0 flex flex-col overflow-y-auto transition-all duration-300 ease-in-out ${isOpen ? 'w-64 lg:w-72 opacity-100' : 'w-0 opacity-0 border-0'}`}>
      <div className={`p-4 ${isOpen ? '' : 'hidden'}`}>
        <div className="bg-[#fafafb] border border-[#cfd2d9] flex items-center justify-between px-3 py-2 rounded">
          <p className="font-['Noto_Sans:Regular',sans-serif] font-normal leading-[1.65] text-[#23262c] text-[14px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
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
        <div className="bg-[#eff0f2] rounded px-3 py-1.5">
          <div className="flex gap-3 items-center">
            <div className="size-[32px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
                <rect fill="var(--fill-0, #CBC5EC)" height="32" rx="16" width="32" />
                <path d={svgPaths.p36bdcef0} fill="var(--fill-0, #523EB9)" />
              </svg>
            </div>
            <p className="font-['Noto_Sans:Bold',sans-serif] font-bold leading-[1.65] text-[14px] text-black" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>6</p>
            <p className="font-['Noto_Sans:Regular',sans-serif] font-normal leading-[1.65] text-[#23262c] text-[14px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>Sanction Matches</p>
          </div>
        </div>
        <div className="rounded px-3 py-1.5 hover:bg-[#fafafb] cursor-pointer">
          <div className="flex gap-3 items-center">
            <div className="size-[32px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
                <rect fill="var(--fill-0, #F1CCF0)" height="32" rx="16" width="32" />
                <path d={svgPaths.p37098a00} fill="var(--fill-0, #92278F)" />
              </svg>
            </div>
            <p className="font-['Noto_Sans:Bold',sans-serif] font-bold leading-[1.65] text-[14px] text-black" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>53</p>
            <p className="font-['Noto_Sans:Regular',sans-serif] font-normal leading-[1.65] text-[#23262c] text-[14px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>PEP Screening</p>
          </div>
        </div>
        <div className="rounded px-3 py-1.5 hover:bg-[#fafafb] cursor-pointer">
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
            <p className="font-['Noto_Sans:Bold',sans-serif] font-bold leading-[1.65] text-[14px] text-black" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>27</p>
            <p className="font-['Noto_Sans:Regular',sans-serif] font-normal leading-[1.65] text-[#23262c] text-[14px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>New Clients</p>
          </div>
        </div>
        <div className="rounded px-3 py-1.5 hover:bg-[#fafafb] cursor-pointer">
          <div className="flex gap-3 items-center">
            <div className="size-[32px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
                <rect fill="var(--fill-0, #C1F0F3)" height="32" rx="16" width="32" />
                <path d={svgPaths.p2c8bc580} fill="var(--fill-0, #0672A3)" />
              </svg>
            </div>
            <p className="font-['Noto_Sans:Bold',sans-serif] font-bold leading-[1.65] text-[14px] text-black" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>19</p>
            <p className="font-['Noto_Sans:Regular',sans-serif] font-normal leading-[1.65] text-[#23262c] text-[14px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>Financial Crime</p>
          </div>
        </div>
      </div>
    </div>
  );
}

const casesData = [
  { name: 'John Smith', results: 8, selected: true },
  { name: 'Mr. Jose A Gonzalez', results: 47, selected: false },
  { name: 'Muammar Qadhafi', results: 50, selected: false },
  { name: 'Jane Doe', results: 16, selected: false },
  { name: 'Bank of Iran', results: 11, selected: false, isEntity: true },
  { name: 'Bank of Moscow', results: 9, selected: false, isEntity: true },
];

interface CaseListProps {
  onSelectCase: (index: number) => void;
  selectedCaseIndex: number;
}

function CaseList({ onSelectCase, selectedCaseIndex }: CaseListProps) {
  const listRef = useRef<HTMLDivElement>(null);
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isFocused) return;

      if (e.key === 'ArrowDown') {
        e.preventDefault();
        if (selectedCaseIndex < casesData.length - 1) {
          onSelectCase(selectedCaseIndex + 1);
        }
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        if (selectedCaseIndex > 0) {
          onSelectCase(selectedCaseIndex - 1);
        }
      }
    };

    const listElement = listRef.current;
    if (listElement) {
      listElement.addEventListener('keydown', handleKeyDown);
      return () => listElement.removeEventListener('keydown', handleKeyDown);
    }
  }, [selectedCaseIndex, onSelectCase, isFocused]);

  return (
    <div
      ref={listRef}
      tabIndex={0}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      className="bg-[#fafafb] w-64 lg:w-72 shrink-0 flex flex-col overflow-y-auto border-r border-[#cfd2d9] outline-none"
    >
      <div className="flex items-center justify-between px-3 pb-3 pt-5">
        <p className="font-['Noto_Sans:Bold',sans-serif] font-bold leading-[1.65] text-[14px] text-black" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
          Sanction Matches
        </p>
        <div className="bg-[#cbc5ec] flex items-center justify-center px-2 py-1 rounded min-w-[25px]">
          <p className="font-['Noto_Sans:Bold',sans-serif] font-bold leading-[1.65] text-[#523eb9] text-[14px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>6</p>
        </div>
      </div>
      <div className="flex flex-col">
        {casesData.map((caseItem, index) => (
          <div
            key={index}
            className={`flex gap-3 items-center px-4 py-1 cursor-pointer hover:bg-[#e4e6ea] relative ${selectedCaseIndex === index ? 'bg-[#e4e6ea]' : ''}`}
            onClick={() => onSelectCase(index)}
          >
            {selectedCaseIndex === index && isFocused && (
              <div aria-hidden="true" className="absolute border-[0.5px] border-[#523eb9] border-solid inset-0 pointer-events-none" />
            )}
            <div className={`${caseItem.isEntity ? 'h-[15px]' : ''} w-[16px]`}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox={caseItem.isEntity ? "0 0 16 15" : "0 0 16 16"}>
                <path d={caseItem.isEntity ? svgPaths.p1ac17500 : svgPaths.p8c3ef80} fill="var(--fill-0, #523EB9)" />
              </svg>
            </div>
            <div className="flex flex-col flex-1">
              <p className="font-['Noto_Sans:Regular',sans-serif] font-normal leading-[1.65] text-[#23262c] text-[14px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
                {caseItem.name}
              </p>
              <p className="font-['Noto_Sans:Regular',sans-serif] font-normal leading-[1.65] text-[#23262c] text-[10px] tracking-[0.2px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
                {caseItem.results} results
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

interface DetailPanelProps {
  selectedCase: typeof casesData[0];
}

function DetailPanel({ selectedCase }: DetailPanelProps) {
  const [clientExpanded, setClientExpanded] = useState(false);

  return (
    <div className="flex flex-1 flex-col min-h-0 gap-4 overflow-y-auto p-4 md:p-6">
      <div className="bg-white border border-[#cfd2d9] rounded shrink-0">
        <div
          className="flex min-h-[56px] items-center justify-between px-4 py-3 cursor-pointer hover:bg-gray-50"
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
          <div className="flex gap-4 items-center flex-wrap">
            <div
              className={cn(
                "h-[4.94px] w-[8px] transition-transform duration-[420ms] [transition-timing-function:cubic-bezier(0.32,0.72,0,1)]",
                clientExpanded ? "" : "-rotate-90",
              )}
            >
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 4.94">
                <path d={svgPaths.p350de480} fill="var(--fill-0, #23262C)" />
              </svg>
            </div>
            <p className="font-['Noto_Sans:SemiBold',sans-serif] font-semibold leading-[1.65] text-[#23262c] text-[14px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
              {selectedCase.name}
            </p>
            <div className="bg-[#523eb9] px-2 py-1 rounded">
              <p className="font-['Noto_Sans:Regular',sans-serif] font-normal leading-[1.65] text-[10px] text-white tracking-[0.2px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>USA</p>
            </div>
            <div className="bg-[#523eb9] px-2 py-1 rounded">
              <p className="font-['Noto_Sans:Regular',sans-serif] font-normal leading-[1.65] text-[10px] text-white tracking-[0.2px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>03/23/1978</p>
            </div>
          </div>
          <div className="flex gap-4 items-center flex-wrap">
            <div className="bg-[#089de1] px-3 py-0.5 rounded-[100px]">
              <p className="font-['Noto_Sans:Regular',sans-serif] font-normal leading-[1.65] text-[10px] text-white tracking-[0.2px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>Active</p>
            </div>
            <div className="bg-[#87b531] px-3 py-0.5 rounded-[100px]">
              <p className="font-['Noto_Sans:Regular',sans-serif] font-normal leading-[1.65] text-[10px] text-white tracking-[0.2px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>ID Verified</p>
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button
                  type="button"
                  aria-label="Case actions"
                  className="inline-flex h-9 min-w-[36px] px-2 items-center justify-center rounded-md border border-[#cfd2d9] bg-white text-[#23262c] cursor-pointer hover:bg-[#eff0f2] hover:border-[#949baa] transition-colors duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#523eb9]/30 focus-visible:ring-offset-2"
                  onClick={(e) => e.stopPropagation()}
                >
                  <MoreVertical className="size-5 shrink-0 rotate-90" strokeWidth={2} aria-hidden />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" onClick={(e) => e.stopPropagation()}>
                <DropdownMenuItem>Comments</DropdownMenuItem>
                <DropdownMenuItem>History</DropdownMenuItem>
                <DropdownMenuItem>Reports</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        <div
          className={cn(
            "grid border-t border-[#cfd2d9] overflow-hidden transition-[grid-template-rows] duration-[420ms] [transition-timing-function:cubic-bezier(0.32,0.72,0,1)]",
            clientExpanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
          )}
        >
          <div className={cn("min-h-0 overflow-hidden", !clientExpanded && "pointer-events-none")}>
            <div className="p-4">
            <div className="flex gap-4 items-start">
              <div className="flex-1 flex flex-col gap-3">
                <div className="bg-[#efeef9] rounded p-6 flex items-center justify-center">
                  <p className="font-['Noto_Sans:Bold',sans-serif] font-bold leading-[1.65] text-[#523eb9] text-[20px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
                    In Process
                  </p>
                </div>
                <div className="bg-[#f8fbf1] rounded p-6 flex items-center justify-center">
                  <p className="font-['Noto_Sans:Bold',sans-serif] font-bold leading-[1.65] text-[#87b531] text-[20px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
                    Low Risk
                  </p>
                </div>
              </div>

              <div className="flex-1 bg-white border border-[#cfd2d9] rounded p-6 flex flex-col gap-2">
                <div className="flex gap-2.5 items-start">
                  <div className="h-[23px] w-[16px] shrink-0">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 23">
                      <path d="M8 0C3.57714 0 0 3.5995 0 8.05C0 14.0875 8 23 8 23C8 23 16 14.0875 16 8.05C16 3.5995 12.4229 0 8 0ZM8 10.925C6.42286 10.925 5.14286 9.637 5.14286 8.05C5.14286 6.463 6.42286 5.175 8 5.175C9.57714 5.175 10.8571 6.463 10.8571 8.05C10.8571 9.637 9.57714 10.925 8 10.925Z" fill="#523EB9" />
                    </svg>
                  </div>
                  <div className="font-['Noto_Sans:Regular',sans-serif] font-normal text-[14px] text-[#23262c]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
                    <p className="leading-[1.65] m-0">3943 Allegheny Blvd.</p>
                    <p className="leading-[1.65] m-0">Pittsburgh, PA 15203</p>
                    <p className="leading-[1.65] m-0">USA</p>
                  </div>
                </div>
                <div className="flex gap-2.5 items-center">
                  <div className="size-[16px] shrink-0">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                      <path d="M6.88 9.44L5.14 7.7C4.99333 7.55333 4.81333 7.48 4.6 7.48C4.38667 7.48 4.2 7.56 4.04 7.72C3.89333 7.86667 3.82 8.05333 3.82 8.28C3.82 8.50667 3.89333 8.69333 4.04 8.84L6.32 11.12C6.46667 11.2667 6.65333 11.34 6.88 11.34C7.10667 11.34 7.29333 11.2667 7.44 11.12L11.98 6.58C12.1267 6.43333 12.2 6.25333 12.2 6.04C12.2 5.82667 12.12 5.64 11.96 5.48C11.8133 5.33333 11.6267 5.26 11.4 5.26C11.1733 5.26 10.9867 5.33333 10.84 5.48L6.88 9.44ZM8 16C6.89333 16 5.85333 15.7899 4.88 15.3696C3.90667 14.9499 3.06 14.38 2.34 13.66C1.62 12.94 1.05013 12.0933 0.6304 11.12C0.210133 10.1467 0 9.10667 0 8C0 6.89333 0.210133 5.85333 0.6304 4.88C1.05013 3.90667 1.62 3.06 2.34 2.34C3.06 1.62 3.90667 1.04987 4.88 0.6296C5.85333 0.209867 6.89333 0 8 0C9.10667 0 10.1467 0.209867 11.12 0.6296C12.0933 1.04987 12.94 1.62 13.66 2.34C14.38 3.06 14.9499 3.90667 15.3696 4.88C15.7899 5.85333 16 6.89333 16 8C16 9.10667 15.7899 10.1467 15.3696 11.12C14.9499 12.0933 14.38 12.94 13.66 13.66C12.94 14.38 12.0933 14.9499 11.12 15.3696C10.1467 15.7899 9.10667 16 8 16Z" fill="#87B531" />
                    </svg>
                  </div>
                  <p className="font-['Noto_Sans:Regular',sans-serif] font-normal leading-[1.65] text-[14px] text-[#23262c]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
                    Address Validated
                  </p>
                </div>
                <div className="flex gap-2.5 items-center">
                  <div className="size-[16px] shrink-0">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                      <path d="M6.88 9.44L5.14 7.7C4.99333 7.55333 4.81333 7.48 4.6 7.48C4.38667 7.48 4.2 7.56 4.04 7.72C3.89333 7.86667 3.82 8.05333 3.82 8.28C3.82 8.50667 3.89333 8.69333 4.04 8.84L6.32 11.12C6.46667 11.2667 6.65333 11.34 6.88 11.34C7.10667 11.34 7.29333 11.2667 7.44 11.12L11.98 6.58C12.1267 6.43333 12.2 6.25333 12.2 6.04C12.2 5.82667 12.12 5.64 11.96 5.48C11.8133 5.33333 11.6267 5.26 11.4 5.26C11.1733 5.26 10.9867 5.33333 10.84 5.48L6.88 9.44ZM8 16C6.89333 16 5.85333 15.7899 4.88 15.3696C3.90667 14.9499 3.06 14.38 2.34 13.66C1.62 12.94 1.05013 12.0933 0.6304 11.12C0.210133 10.1467 0 9.10667 0 8C0 6.89333 0.210133 5.85333 0.6304 4.88C1.05013 3.90667 1.62 3.06 2.34 2.34C3.06 1.62 3.90667 1.04987 4.88 0.6296C5.85333 0.209867 6.89333 0 8 0C9.10667 0 10.1467 0.209867 11.12 0.6296C12.0933 1.04987 12.94 1.62 13.66 2.34C14.38 3.06 14.9499 3.90667 15.3696 4.88C15.7899 5.85333 16 6.89333 16 8C16 9.10667 15.7899 10.1467 15.3696 11.12C14.9499 12.0933 14.38 12.94 13.66 13.66C12.94 14.38 12.0933 14.9499 11.12 15.3696C10.1467 15.7899 9.10667 16 8 16Z" fill="#87B531" />
                    </svg>
                  </div>
                  <p className="font-['Noto_Sans:Regular',sans-serif] font-normal leading-[1.65] text-[14px] text-[#23262c]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
                    ID Verified
                  </p>
                </div>
              </div>

              <div className="flex-1 bg-white border border-[#cfd2d9] rounded p-6 flex flex-col gap-2 justify-center">
                <p className="font-['Noto_Sans:Regular',sans-serif] font-normal leading-[1.65] text-[14px] text-[#23262c]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
                  <span>Gender </span>
                  <span className="text-[#523eb9]">·</span>
                  <span> Male</span>
                </p>
                <p className="font-['Noto_Sans:Regular',sans-serif] font-normal leading-[1.65] text-[14px] text-[#23262c]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
                  <span>Date of Birth </span>
                  <span className="text-[#523eb9]">·</span>
                  <span> 03/23/1978</span>
                </p>
                <p className="font-['Noto_Sans:Regular',sans-serif] font-normal leading-[1.65] text-[14px] text-[#23262c]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
                  <span>Application </span>
                  <span className="text-[#523eb9]">·</span>
                  <span> ISI Focus</span>
                </p>
                <p className="font-['Noto_Sans:Regular',sans-serif] font-normal leading-[1.65] text-[14px] text-[#23262c]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
                  <span>Review Target </span>
                  <span className="text-[#523eb9]">·</span>
                  <span> Level 1 </span>
                  <span className="text-[#e67e23]">(Overdue Warning)</span>
                </p>
                <p className="font-['Noto_Sans:Regular',sans-serif] font-normal leading-[1.65] text-[14px] text-[#23262c]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
                  <span>Last Modified </span>
                  <span className="text-[#523eb9]">·</span>
                  <span> 01 Oct 2025 16:44:14</span>
                </p>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>

      <ScreeningResultsTable className="w-full" />
    </div>
  );
}

interface TaskBarProps {
  onShowReview: () => void;
  isReviewOpen: boolean;
}

function TaskBar({ onShowReview, isReviewOpen }: TaskBarProps) {
  return (
    <div className="bg-[#eff0f2] border-t border-[#cfd2d9] flex items-center justify-between px-4 md:px-8 py-3 shrink-0">
      <div className="flex gap-4 items-center cursor-pointer">
        <div className="relative size-[24px]">
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
      <div
        className="bg-[#3d2e8a] px-4 py-2 rounded cursor-pointer hover:bg-[#523eb9] transition-colors"
        onClick={onShowReview}
      >
        <p className="font-['Noto_Sans:Bold',sans-serif] font-bold leading-[1.65] text-[14px] text-white" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
          {isReviewOpen ? 'Hide Review' : 'Show Review'}
        </p>
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

  return (
    <div className={`bg-white shrink-0 flex flex-col transition-all duration-300 ease-in-out overflow-hidden relative ${isOpen ? 'w-[480px] opacity-100 border-l border-[#cfd2d9]' : 'w-0 opacity-0'}`}>
      {isOpen && (
        <>
        <div className="bg-white relative shrink-0 w-full">
          <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex items-center px-[20px] py-[16px] relative size-full">
              <div className="content-stretch flex items-center justify-center relative shrink-0">
                <p className="font-['Noto_Sans:Bold',sans-serif] font-bold leading-[1.65] relative shrink-0 text-[#23262c] text-[20px] whitespace-nowrap" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
                  Review
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white flex-1 min-h-px relative w-full flex flex-col">
          <div className="flex-1 overflow-y-auto p-[24px] space-y-4">
          <div className="bg-[#f8fbf1] relative rounded-[4px]">
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
                  <p className="font-['Noto_Sans:SemiBold',sans-serif] font-semibold leading-[1.65] text-[#23262c] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
                    Decision
                  </p>
                </div>
                <div className="relative shrink-0 size-[16px]">
                  <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                    <path d="M8.88889 7.64444L11.1111 9.86667C11.2741 10.0296 11.3556 10.237 11.3556 10.4889C11.3556 10.7407 11.2741 10.9481 11.1111 11.1111C10.9481 11.2741 10.7407 11.3556 10.4889 11.3556C10.237 11.3556 10.0296 11.2741 9.86667 11.1111L7.37778 8.62222C7.28889 8.53333 7.22222 8.43319 7.17778 8.32178C7.13333 8.21096 7.11111 8.0963 7.11111 7.97778V4.44444C7.11111 4.19259 7.19644 3.98133 7.36711 3.81067C7.53719 3.64059 7.74815 3.55556 8 3.55556C8.25185 3.55556 8.46311 3.64059 8.63378 3.81067C8.80385 3.98133 8.88889 4.19259 8.88889 4.44444V7.64444ZM8 16C6.20741 16 4.6 15.4702 3.17778 14.4107C1.75556 13.3517 0.8 11.9704 0.311111 10.2667C0.237037 10 0.263111 9.74815 0.389333 9.51111C0.514963 9.27407 0.711111 9.12593 0.977778 9.06667C1.22963 9.00741 1.4557 9.06281 1.656 9.23289C1.8557 9.40356 1.99259 9.61482 2.06667 9.86667C2.45185 11.1704 3.19644 12.2222 4.30044 13.0222C5.40385 13.8222 6.63704 14.2222 8 14.2222C9.73333 14.2222 11.2036 13.6184 12.4107 12.4107C13.6184 11.2036 14.2222 9.73333 14.2222 8C14.2222 6.26667 13.6184 4.79615 12.4107 3.58844C11.2036 2.38133 9.73333 1.77778 8 1.77778C6.97778 1.77778 6.02222 2.01481 5.13333 2.48889C4.24444 2.96296 3.4963 3.61481 2.88889 4.44444H4.44444C4.6963 4.44444 4.90756 4.52948 5.07822 4.69956C5.2483 4.87022 5.33333 5.08148 5.33333 5.33333C5.33333 5.58519 5.2483 5.79615 5.07822 5.96622C4.90756 6.13689 4.6963 6.22222 4.44444 6.22222H0.888889C0.637037 6.22222 0.426074 6.13689 0.256 5.96622C0.0853334 5.79615 0 5.58519 0 5.33333V1.77778C0 1.52593 0.0853334 1.31467 0.256 1.144C0.426074 0.973926 0.637037 0.888889 0.888889 0.888889C1.14074 0.888889 1.352 0.973926 1.52267 1.144C1.69274 1.31467 1.77778 1.52593 1.77778 1.77778V2.97778C2.53333 2.02963 3.4557 1.2963 4.54489 0.777778C5.63348 0.259259 6.78519 0 8 0C9.11111 0 10.152 0.210963 11.1227 0.632889C12.0927 1.05541 12.9372 1.62578 13.656 2.344C14.3742 3.06281 14.9446 3.90726 15.3671 4.87733C15.789 5.848 16 6.88889 16 8C16 9.11111 15.789 10.1517 15.3671 11.1218C14.9446 12.0924 14.3742 12.9369 13.656 13.6551C12.9372 14.3739 12.0927 14.9446 11.1227 15.3671C10.152 15.789 9.11111 16 8 16Z" fill="var(--fill-0, #23262C)" />
                  </svg>
                </div>
              </div>

              <div className={`overflow-hidden transition-all duration-300 ease-in-out w-full ${decisionExpanded ? 'max-h-[600px] opacity-100 mt-[24px]' : 'max-h-0 opacity-0'}`}>
                <div className="flex flex-col gap-[12px] items-start px-[24px] w-full">
                  <div className="flex flex-col gap-[12px] items-start justify-center w-full">
                    <p className="font-['Noto_Sans:SemiBold',sans-serif] font-semibold leading-[1.65] text-[#23262c] text-[14px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
                      Last Updated
                    </p>
                    <div className="flex flex-col gap-[4px] items-start font-['Noto_Sans:Regular',sans-serif] font-normal text-[#23262c] w-full">
                      <p className="leading-[1.65] text-[14px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
                        <span className="font-['Noto_Sans:SemiBold',sans-serif] font-semibold" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>User</span>
                        {` · Laura Leader`}
                      </p>
                      <p className="leading-[1.65] text-[14px] flex items-center gap-1" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
                        <span className="font-['Noto_Sans:SemiBold',sans-serif] font-semibold" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>Match Status</span>
                        <span> · Confirmed Safe</span>
                        <svg className="w-3 h-3 shrink-0" fill="none" viewBox="0 0 12 12" stroke="currentColor">
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
                    <p className="font-['Noto_Sans:Bold',sans-serif] font-bold leading-[1.65] text-[#23262c] text-[12px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
                      Select Status
                    </p>
                    <div className="bg-white relative rounded-[4px] w-full">
                      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
                        <div className="flex items-center justify-between px-[12px] py-[8px] w-full cursor-pointer hover:bg-gray-50">
                          <p className="font-['Noto_Sans:Regular',sans-serif] font-normal leading-[1.65] text-[#6a7285] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
                            Status...
                          </p>
                          <div className="h-[4.94px] w-[8px]">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 4.94">
                              <path d={svgPaths.p350de480} fill="var(--fill-0, #464C59)" />
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div aria-hidden="true" className="absolute border border-[#cfd2d9] border-solid inset-0 pointer-events-none rounded-[4px]" />
                    </div>
                  </div>

                  <div className="flex flex-col gap-[8px] items-start justify-center w-full">
                    <p className="font-['Noto_Sans:Bold',sans-serif] font-bold leading-[1.65] text-[#23262c] text-[12px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
                      Select Reason
                    </p>
                    <div className="bg-white relative rounded-[4px] w-full">
                      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
                        <div className="flex items-center justify-between px-[12px] py-[8px] w-full cursor-pointer hover:bg-gray-50">
                          <p className="font-['Noto_Sans:Regular',sans-serif] font-normal leading-[1.65] text-[#6a7285] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
                            Reason...
                          </p>
                          <div className="h-[4.94px] w-[8px]">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 4.94">
                              <path d={svgPaths.p350de480} fill="var(--fill-0, #464C59)" />
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div aria-hidden="true" className="absolute border border-[#cfd2d9] border-solid inset-0 pointer-events-none rounded-[4px]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div aria-hidden="true" className="absolute border-[#87b531] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[4px]" />
          </div>

          <div className="border border-[#cfd2d9] rounded">
            <div
              className="flex items-center justify-between p-3 cursor-pointer hover:bg-gray-50"
              onClick={() => setCommentsExpanded(!commentsExpanded)}
            >
              <div className="flex items-center gap-2">
                <div className={`h-[4.94px] w-[8px] transition-transform duration-300 ease-in-out ${commentsExpanded ? '' : '-rotate-90'}`}>
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 4.94">
                    <path d={svgPaths.p350de480} fill="var(--fill-0, #23262C)" />
                  </svg>
                </div>
                <p className="font-['Noto_Sans:Bold',sans-serif] font-bold leading-[1.65] text-[#23262c] text-[14px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
                  Comments
                </p>
              </div>
            </div>
          </div>

          <div className="border border-[#cfd2d9] rounded">
            <div
              className="flex items-center justify-between p-3 cursor-pointer hover:bg-gray-50"
              onClick={() => setAttachmentsExpanded(!attachmentsExpanded)}
            >
              <div className="flex items-center gap-2">
                <div className={`h-[4.94px] w-[8px] transition-transform duration-300 ease-in-out ${attachmentsExpanded ? '' : '-rotate-90'}`}>
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 4.94">
                    <path d={svgPaths.p350de480} fill="var(--fill-0, #23262C)" />
                  </svg>
                </div>
                <p className="font-['Noto_Sans:Bold',sans-serif] font-bold leading-[1.65] text-[#23262c] text-[14px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
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
                className="bg-white flex items-start px-[16px] py-[8px] relative rounded-[4px] hover:bg-gray-50 transition-colors"
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
        </>
      )}
    </div>
  );
}

export function ResponsiveReviewInterface() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [selectedCaseIndex, setSelectedCaseIndex] = useState(0);
  const [isReviewDrawerOpen, setIsReviewDrawerOpen] = useState(false);

  return (
    <div className="h-screen w-screen flex flex-col bg-white overflow-hidden">
      <TopNavigation />
      <PageHeader onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} isSidebarOpen={isSidebarOpen} />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar isOpen={isSidebarOpen} />
        <div className="flex flex-1 overflow-hidden">
          <div className="flex flex-col flex-1 overflow-hidden">
            <div className="flex flex-1 min-h-0 overflow-hidden">
              <CaseList onSelectCase={setSelectedCaseIndex} selectedCaseIndex={selectedCaseIndex} />
              <DetailPanel selectedCase={casesData[selectedCaseIndex]} />
            </div>
            <TaskBar onShowReview={() => setIsReviewDrawerOpen(!isReviewDrawerOpen)} isReviewOpen={isReviewDrawerOpen} />
          </div>
          <ReviewDrawer isOpen={isReviewDrawerOpen} onClose={() => setIsReviewDrawerOpen(false)} />
        </div>
      </div>
    </div>
  );
}

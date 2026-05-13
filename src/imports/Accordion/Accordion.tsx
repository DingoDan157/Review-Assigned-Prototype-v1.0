import svgPaths from "./svg-aqfvglxnya";

function Title() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Title">
      <div className="h-[4.94px] relative shrink-0 w-[8px]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 4.94">
          <path d={svgPaths.p350de480} fill="var(--fill-0, #23262C)" id="Vector" />
        </svg>
      </div>
      <p className="font-['Noto_Sans:SemiBold',sans-serif] font-semibold leading-[1.65] relative shrink-0 text-[#23262c] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        John Smith
      </p>
      <div className="bg-[#523eb9] content-stretch flex items-start px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Tag">
        <p className="font-['Noto_Sans:Regular',sans-serif] font-normal leading-[1.65] relative shrink-0 text-[10px] text-white tracking-[0.2px] whitespace-nowrap" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
          USA
        </p>
      </div>
      <div className="bg-[#523eb9] content-stretch flex items-start px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Tag">
        <p className="font-['Noto_Sans:Regular',sans-serif] font-normal leading-[1.65] relative shrink-0 text-[10px] text-white tracking-[0.2px] whitespace-nowrap" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
          03/23/1978
        </p>
      </div>
    </div>
  );
}

function Label() {
  return (
    <div className="bg-[#089de1] content-stretch flex items-center px-[12px] py-[2px] relative rounded-[100px] shrink-0" data-name="Label">
      <p className="font-['Noto_Sans:Regular',sans-serif] font-normal leading-[1.65] relative shrink-0 text-[10px] text-white tracking-[0.2px] whitespace-nowrap" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        Active
      </p>
    </div>
  );
}

function Label1() {
  return (
    <div className="bg-[#87b531] content-stretch flex items-center px-[12px] py-[2px] relative rounded-[100px] shrink-0" data-name="Label">
      <p className="font-['Noto_Sans:Regular',sans-serif] font-normal leading-[1.65] relative shrink-0 text-[10px] text-white tracking-[0.2px] whitespace-nowrap" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        ID Verified
      </p>
    </div>
  );
}

function Actions() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Actions">
      <Label />
      <Label1 />
      <div className="flex h-[3px] items-center justify-center relative shrink-0 w-[12px]" style={{ "--transform-inner-width": "285", "--transform-inner-height": "21" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <div className="h-[12px] relative w-[3px]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 12">
              <path d={svgPaths.p14f7fa00} fill="var(--fill-0, #23262C)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-[991px]" data-name="Header">
      <Title />
      <Actions />
    </div>
  );
}

function InProcess() {
  return (
    <div className="bg-[#efeef9] flex-[1_0_0] min-h-px relative rounded-[4px] w-full" data-name="In Process">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[24px] relative size-full">
          <p className="font-['Noto_Sans:Bold',sans-serif] font-bold leading-[1.65] relative shrink-0 text-[#523eb9] text-[20px] whitespace-nowrap" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
            In Process
          </p>
        </div>
      </div>
    </div>
  );
}

function InProcess1() {
  return (
    <div className="bg-[#f8fbf1] flex-[1_0_0] min-h-px relative rounded-[4px] w-full" data-name="In Process">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[24px] relative size-full">
          <p className="font-['Noto_Sans:Bold',sans-serif] font-bold leading-[1.65] relative shrink-0 text-[#87b531] text-[20px] whitespace-nowrap" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
            Low Risk
          </p>
        </div>
      </div>
    </div>
  );
}

function Tiles() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start justify-center min-w-px relative self-stretch" data-name="Tiles">
      <InProcess />
      <InProcess1 />
    </div>
  );
}

function Address() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="Address">
      <div className="h-[23px] relative shrink-0 w-[16px]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 23">
          <path d={svgPaths.p33466080} fill="var(--fill-0, #523EB9)" id="Vector" />
        </svg>
      </div>
      <div className="font-['Noto_Sans:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#23262c] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        <p className="leading-[1.65] mb-0">3943 Allegheny Blvd.</p>
        <p className="leading-[1.65] mb-0">Pittsburgh, PA 15203</p>
        <p className="leading-[1.65]">USA</p>
      </div>
    </div>
  );
}

function Validate() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0" data-name="Validate">
      <div className="relative shrink-0 size-[16px]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
          <path d={svgPaths.p39556a00} fill="var(--fill-0, #87B531)" id="Vector" />
        </svg>
      </div>
      <p className="font-['Noto_Sans:Regular',sans-serif] font-normal leading-[1.65] relative shrink-0 text-[#23262c] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        Address Validated
      </p>
    </div>
  );
}

function Verify() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0" data-name="Verify">
      <div className="relative shrink-0 size-[16px]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
          <path d={svgPaths.p39556a00} fill="var(--fill-0, #87B531)" id="Vector" />
        </svg>
      </div>
      <p className="font-['Noto_Sans:Regular',sans-serif] font-normal leading-[1.65] relative shrink-0 text-[#23262c] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        ID Verified
      </p>
    </div>
  );
}

function ClientDetails() {
  return (
    <div className="bg-white flex-[1_0_0] min-w-px relative rounded-[4px] self-stretch" data-name="Client Details 1">
      <div aria-hidden="true" className="absolute border-[#cfd2d9] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="content-stretch flex flex-col gap-[8px] items-start p-[24px] relative size-full">
        <Address />
        <Validate />
        <Verify />
      </div>
    </div>
  );
}

function ClientDetails1() {
  return (
    <div className="bg-white flex-[1_0_0] min-w-px relative rounded-[4px]" data-name="Client Details 2">
      <div aria-hidden="true" className="absolute border-[#cfd2d9] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col font-['Noto_Sans:Regular',sans-serif] font-normal gap-[8px] items-start justify-center leading-[0] p-[24px] relative size-full text-[#23262c] text-[14px] whitespace-nowrap">
          <p className="relative shrink-0" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
            <span className="leading-[1.65]">{`Gender `}</span>
            <span className="leading-[1.65] text-[#523eb9]">·</span>
            <span className="leading-[1.65]">{` Male`}</span>
          </p>
          <p className="relative shrink-0" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
            <span className="leading-[1.65]">{`Date of Birth `}</span>
            <span className="leading-[1.65] text-[#523eb9]">·</span>
            <span className="leading-[1.65]">{` 03/23/1978`}</span>
          </p>
          <p className="relative shrink-0" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
            <span className="leading-[1.65]">{`Application `}</span>
            <span className="leading-[1.65] text-[#523eb9]">·</span>
            <span className="leading-[1.65]">{` ISI Focus`}</span>
          </p>
          <p className="relative shrink-0" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
            <span className="leading-[1.65]">{`Review Target `}</span>
            <span className="leading-[1.65] text-[#523eb9]">·</span>
            <span className="leading-[1.65]">{` Level 1 `}</span>
            <span className="leading-[1.65] text-[#e67e23]">(Overdue Warning)</span>
          </p>
          <p className="relative shrink-0" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
            <span className="leading-[1.65]">{`Last Modified `}</span>
            <span className="leading-[1.65] text-[#523eb9]">·</span>
            <span className="leading-[1.65]">{` 01 Oct 2025 16:44:14`}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <Tiles />
      <ClientDetails />
      <ClientDetails1 />
    </div>
  );
}

export default function Accordion() {
  return (
    <div className="bg-white relative rounded-[4px] size-full" data-name="Accordion">
      <div className="content-stretch flex flex-col gap-[24px] items-start overflow-clip px-[16px] py-[12px] relative rounded-[inherit] size-full">
        <Header />
        <Container />
      </div>
      <div aria-hidden="true" className="absolute border-[#cfd2d9] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}
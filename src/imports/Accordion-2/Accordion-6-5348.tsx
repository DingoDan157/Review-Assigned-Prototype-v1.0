import svgPaths from "./svg-pze9dxox2n";

function Title() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Title">
      <div className="h-[4.94px] relative shrink-0 w-[8px]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 4.94">
          <path d={svgPaths.p350de480} fill="var(--fill-0, #23262C)" id="Vector" />
        </svg>
      </div>
      <p className="font-['Noto_Sans:SemiBold',sans-serif] font-semibold leading-[1.65] relative shrink-0 text-[#23262c] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        Decision
      </p>
    </div>
  );
}

function Actions() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Actions">
      <div className="relative shrink-0 size-[16px]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
          <path d={svgPaths.p1efee880} fill="var(--fill-0, #23262C)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-[380px]" data-name="Header">
      <Title />
      <Actions />
    </div>
  );
}

function Title1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Title">
      <p className="font-['Noto_Sans:SemiBold',sans-serif] font-semibold leading-[1.65] relative shrink-0 text-[#23262c] text-[14px] w-[91px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        Last Updated
      </p>
    </div>
  );
}

function Body() {
  return (
    <div className="content-stretch flex flex-col font-['Noto_Sans:Regular',sans-serif] font-normal gap-[4px] items-start leading-[0] relative shrink-0 text-[#23262c] text-[0px] w-full" data-name="Body">
      <p className="relative shrink-0 w-[130px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        <span className="font-['Noto_Sans:SemiBold',sans-serif] font-semibold leading-[1.65] text-[14px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
          User
        </span>
        <span className="leading-[1.65] text-[14px]">{` `}</span>
        <span className="leading-[1.65] text-[14px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
          ·
        </span>
        <span className="leading-[1.65] text-[14px]">{` Laura Leader`}</span>
      </p>
      <p className="min-w-full relative shrink-0 w-[min-content]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        <span className="font-['Noto_Sans:SemiBold',sans-serif] font-semibold leading-[1.65] text-[14px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
          Match Status
        </span>
        <span className="leading-[1.65] text-[14px]">{` · Confirmed Safe --> New`}</span>
      </p>
      <p className="min-w-full relative shrink-0 w-[min-content]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        <span className="font-['Noto_Sans:SemiBold',sans-serif] font-semibold leading-[1.65] text-[14px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
          Comment
        </span>
        <span className="font-['Noto_Sans:Bold',sans-serif] font-bold leading-[1.65] text-[14px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>{` `}</span>
        <span className="leading-[1.65] text-[14px]">· Last user comment goes here</span>
      </p>
      <p className="min-w-full relative shrink-0 w-[min-content]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        <span className="font-['Noto_Sans:SemiBold',sans-serif] font-semibold leading-[1.65] text-[14px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
          Modified Date
        </span>
        <span className="leading-[1.65] text-[14px]">{` · 05 Oct 2025 17:33:23`}</span>
      </p>
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start justify-center relative shrink-0 w-full" data-name="Text">
      <Title1 />
      <Body />
    </div>
  );
}

function Dropdown() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 w-full" data-name="Dropdown">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-between px-[12px] py-[8px] relative size-full">
          <p className="font-['Noto_Sans:Regular',sans-serif] font-normal leading-[1.65] relative shrink-0 text-[#6a7285] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
            Status...
          </p>
          <div className="h-[4.94px] relative shrink-0 w-[8px]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 4.94">
              <path d={svgPaths.p350de480} fill="var(--fill-0, #464C59)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#cfd2d9] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Dropdown1() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 w-full" data-name="Dropdown">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-between px-[12px] py-[8px] relative size-full">
          <p className="font-['Noto_Sans:Regular',sans-serif] font-normal leading-[1.65] relative shrink-0 text-[#6a7285] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
            Reason...
          </p>
          <div className="h-[4.94px] relative shrink-0 w-[8px]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 4.94">
              <path d={svgPaths.p350de480} fill="var(--fill-0, #464C59)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#cfd2d9] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Container() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[12px] items-start px-[24px] relative size-full">
        <Text />
        <div className="content-stretch flex flex-col gap-[8px] items-start justify-center overflow-clip relative shrink-0 w-full" data-name="Select Status">
          <p className="font-['Noto_Sans:Bold',sans-serif] font-bold leading-[1.65] relative shrink-0 text-[#23262c] text-[12px] w-full" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
            Select Status
          </p>
          <Dropdown />
        </div>
        <div className="content-stretch flex flex-col gap-[8px] items-start justify-center overflow-clip relative shrink-0 w-full" data-name="Select Reason">
          <p className="font-['Noto_Sans:Bold',sans-serif] font-bold leading-[1.65] relative shrink-0 text-[#23262c] text-[12px] w-full" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
            Select Reason
          </p>
          <Dropdown1 />
        </div>
      </div>
    </div>
  );
}

export default function Accordion() {
  return (
    <div className="bg-[#f8fbf1] relative rounded-[4px] size-full" data-name="Accordion">
      <div className="content-stretch flex flex-col gap-[24px] items-start overflow-clip p-[16px] relative rounded-[inherit] size-full">
        <Header />
        <Container />
      </div>
      <div aria-hidden="true" className="absolute border-[#87b531] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}
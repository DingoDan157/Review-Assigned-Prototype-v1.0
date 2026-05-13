function Headline() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Headline">
      <p className="font-['Noto_Sans:Bold',sans-serif] font-bold leading-[1.65] relative shrink-0 text-[#23262c] text-[20px] whitespace-nowrap" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        Review
      </p>
    </div>
  );
}

function Header() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Header">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[20px] py-[16px] relative size-full">
          <Headline />
        </div>
      </div>
    </div>
  );
}

function ButtonGroup() {
  return (
    <div className="content-stretch flex gap-[16px] items-start justify-end relative shrink-0 w-full" data-name="Button Group">
      <div className="bg-white content-stretch flex items-start px-[16px] py-[8px] relative rounded-[4px] shrink-0" data-name="Button">
        <div aria-hidden="true" className="absolute border border-[#523eb9] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <p className="font-['Noto_Sans:Bold',sans-serif] font-bold leading-[1.65] relative shrink-0 text-[#523eb9] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
          Close
        </p>
      </div>
      <div className="bg-[#523eb9] content-stretch flex items-center justify-center px-[16px] py-[8px] relative rounded-[4px] shrink-0" data-name="Button">
        <div className="flex flex-col font-['Noto_Sans:Bold',sans-serif] font-bold justify-end leading-[0] relative shrink-0 text-[14px] text-center text-white whitespace-nowrap" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
          <p className="leading-[1.65]">Submit</p>
        </div>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px relative w-full" data-name="Container">
      <div className="flex flex-col items-end justify-end overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-end justify-end p-[24px] relative size-full">
          <ButtonGroup />
        </div>
      </div>
    </div>
  );
}

export default function InlineDrawer() {
  return (
    <div className="bg-white relative size-full" data-name="Inline Drawer">
      <div className="content-stretch flex flex-col items-start relative size-full">
        <Header />
        <Container />
      </div>
      <div aria-hidden="true" className="absolute border-[#cfd2d9] border-l-[0.5px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}
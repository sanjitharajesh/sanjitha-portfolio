import Clock from "./Clock";

export default function TopBar() {
  return (
    <div className="sticky top-0 z-50 bg-[#0b1735] text-[#dfe8ff] shadow-soft">
      <div className="w-full px-4 sm:px-8 py-7 flex items-start justify-between">
        <div className="font-mono font-bold leading-none text-[clamp(12px,2.6vw,16px)] text-[#e9f1ff]">
          sanjitha’s portfolio
        </div>
        <div className="text-[#e9f1ff]">
          <Clock />
        </div>
      </div>
    </div>
  );
}

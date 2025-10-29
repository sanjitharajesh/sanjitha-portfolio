import Clock from "./Clock";

export default function TopBar() {
  return (
    <div className="sticky top-0 z-50 bg-bg">
      <div className="w-full px-4 sm:px-8 py-7 flex items-start justify-between">
        <div className="font-mono font-bold leading-none text-[clamp(12px,2.6vw,16px)]">
          sanjitha’s portfolio
        </div>
        <div className="flex gap-1 items-baseline leading-none text-[clamp(12px,2vw,16px)]">
          <span className="font-bold">New York City,</span>
          <Clock />
        </div>
      </div>
    </div>
  );
}

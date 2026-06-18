const NAV_LINKS = ["Experience", "Projects", "Skills", "Research", "Education", "Contact"];

export default function TopBar() {
  return (
    <div className="sticky top-0 z-50 bg-[#0b1735] text-[#dfe8ff] shadow-soft">
      <div className="w-full px-4 sm:px-8 py-[18px] flex items-center justify-between">
        <div className="font-mono font-bold leading-none text-[clamp(12px,2vw,15px)] text-[#e9f1ff]">
          sanjitha's portfolio
        </div>
        <nav className="hidden md:flex items-center gap-7 lg:gap-10">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="font-inter text-[13px] lg:text-[14px] font-medium tracking-wider text-[#8899cc] hover:text-[#e9f1ff] transition-colors duration-150"
            >
              {link}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
}

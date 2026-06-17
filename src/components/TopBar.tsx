const NAV_LINKS = ["experience", "projects", "skills", "research", "education", "contact"];

export default function TopBar() {
  return (
    <div className="sticky top-0 z-50 bg-[#0b1735] text-[#dfe8ff] shadow-soft">
      <div className="w-full px-4 sm:px-8 py-4 flex items-center justify-between">
        <div className="font-mono font-bold leading-none text-[clamp(11px,2vw,14px)] text-[#e9f1ff]">
          sanjitha's portfolio
        </div>
        <nav className="hidden md:flex items-center gap-5 lg:gap-7">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href={`#${link}`}
              className="font-mono text-[12px] lg:text-[13px] font-semibold text-[#8899cc] hover:text-[#e9f1ff] transition-colors duration-150"
            >
              {link}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
}

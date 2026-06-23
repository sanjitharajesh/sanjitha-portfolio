import { useState } from "react";

const NAV_LINKS = ["Experience", "Projects", "Skills", "Education", "Contact"];

export default function TopBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="sticky top-0 z-50 bg-[#0b1735] text-[#dfe8ff] shadow-soft">
      <div className="w-full px-4 sm:px-8 py-[18px] flex items-center justify-between">
        <div className="font-mono font-bold leading-none text-[clamp(12px,2vw,15px)] text-[#e9f1ff]">
          sanjitha's portfolio
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7 lg:gap-10 pr-6">
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

        {/* Hamburger button — mobile only */}
        <button
          className="md:hidden flex flex-col justify-center gap-[5px] p-2 -mr-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span className={`block w-5 h-0.5 bg-[#dfe8ff] transition-all duration-200 origin-center ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
          <span className={`block w-5 h-0.5 bg-[#dfe8ff] transition-all duration-200 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-0.5 bg-[#dfe8ff] transition-all duration-200 origin-center ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <nav className="md:hidden border-t border-[#1e3060] px-6 py-4 flex flex-col gap-4 bg-[#0b1735]">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className="font-inter text-[15px] font-medium tracking-wider text-[#8899cc] hover:text-[#e9f1ff] transition-colors duration-150"
            >
              {link}
            </a>
          ))}
        </nav>
      )}
    </div>
  );
}

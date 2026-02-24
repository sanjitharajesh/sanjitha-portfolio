export default function Nav() {
  return (
    <header className="pt-[75px]">
      <nav className="max-w-[1200px] mx-auto px-5 mt-3 flex justify-center items-center gap-[84px] md:gap-[108px] xl:gap-[144px] font-mono font-bold text-[18px]">
        <a
          href="#experience"
          className="relative hover:text-[20px] hover:scale-125 transition-all duration-200 group"
        >
          experience
          <span className="absolute bottom-[-4px] left-0 w-0 h-[2px] bg-fg group-hover:w-full transition-all duration-300"></span>
        </a>
        <a
          href="#projects"
          className="relative hover:text-[20px] hover:scale-125 transition-all duration-200 group"
        >
          projects
          <span className="absolute bottom-[-4px] left-0 w-0 h-[2px] bg-fg group-hover:w-full transition-all duration-300"></span>
        </a>
        <a
          href="#skills"
          className="relative hover:text-[20px] hover:scale-125 transition-all duration-200 group"
        >
          skills
          <span className="absolute bottom-[-4px] left-0 w-0 h-[2px] bg-fg group-hover:w-full transition-all duration-300"></span>
        </a>
        <a
          href="#education"
          className="relative hover:text-[20px] hover:scale-125 transition-all duration-200 group"
        >
          education
          <span className="absolute bottom-[-4px] left-0 w-0 h-[2px] bg-fg group-hover:w-full transition-all duration-300"></span>
        </a>
        <a
          href="#contact"
          className="relative hover:text-[20px] hover:scale-125 transition-all duration-200 group"
        >
          contact
          <span className="absolute bottom-[-4px] left-0 w-0 h-[2px] bg-fg group-hover:w-full transition-all duration-300"></span>
        </a>
      </nav>
    </header>
  );
}

export default function Nav() {
  return (
    <header className="pt-[75px]">
      <nav className="max-w-[1200px] mx-auto px-5 mt-3 flex justify-center items-center gap-[84px] md:gap-[108px] xl:gap-[144px] font-mono font-semibold text-[14px]">
        <a 
          href="#experience" 
          className="relative hover:font-bold hover:text-[15px] hover:scale-105 transition-all duration-200 group"
        >
          EXPERIENCE
          <span className="absolute bottom-[-4px] left-0 w-0 h-[2px] bg-fg group-hover:w-full transition-all duration-300"></span>
        </a>
        <a 
          href="#projects" 
          className="relative hover:font-bold hover:text-[15px] hover:scale-105 transition-all duration-200 group"
        >
          PROJECTS
          <span className="absolute bottom-[-4px] left-0 w-0 h-[2px] bg-fg group-hover:w-full transition-all duration-300"></span>
        </a>
        <a 
          href="#skills" 
          className="relative hover:font-bold hover:text-[15px] hover:scale-105 transition-all duration-200 group"
        >
          SKILLS
          <span className="absolute bottom-[-4px] left-0 w-0 h-[2px] bg-fg group-hover:w-full transition-all duration-300"></span>
        </a>
        <a 
          href="#education" 
          className="relative hover:font-bold hover:text-[15px] hover:scale-105 transition-all duration-200 group"
        >
          EDUCATION
          <span className="absolute bottom-[-4px] left-0 w-0 h-[2px] bg-fg group-hover:w-full transition-all duration-300"></span>
        </a>
        <a 
          href="#contact" 
          className="relative hover:font-bold hover:text-[15px] hover:scale-105 transition-all duration-200 group"
        >
          CONTACT
          <span className="absolute bottom-[-4px] left-0 w-0 h-[2px] bg-fg group-hover:w-full transition-all duration-300"></span>
        </a>
      </nav>
    </header>
  );
}

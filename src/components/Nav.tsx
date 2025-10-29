export default function Nav() {
  return (
    <header className="pt-12">
      <nav className="max-w-[1200px] mx-auto px-5 mt-2 flex justify-center items-center gap-[60px] md:gap-[84px] xl:gap-[120px] font-mono font-semibold text-[0.95rem]">
        <a href="#experience" className="hover:underline">EXPERIENCE</a>
        <a href="#education" className="hover:underline">EDUCATION</a>
        <a href="#projects" className="hover:underline">PROJECTS</a>
        <a href="#skills" className="hover:underline">SKILLS</a>
        <a href="#contact" className="hover:underline">CONTACT</a>
      </nav>
    </header>
  );
}

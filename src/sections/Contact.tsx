export default function Contact() {
  return (
    <section id="contact" className="mt-16 md:mt-32 scroll-mt-36 max-w-[510px] mx-auto">
      <div className="border border-[#2a3a6a] rounded-2xl shadow-soft overflow-hidden transition-transform duration-200 hover:scale-105">
        <div className="bg-[#0f1e3d] px-4 py-2.5 flex items-center gap-2 group/bar">
          <span className="w-3 h-3 rounded-full bg-[#ff5f57] flex-shrink-0 flex items-center justify-center">
            <span className="opacity-0 group-hover/bar:opacity-100 text-[#7a0000] text-[8px] font-bold leading-none transition-opacity duration-150">×</span>
          </span>
          <span className="w-3 h-3 rounded-full bg-[#febc2e] flex-shrink-0 flex items-center justify-center">
            <span className="opacity-0 group-hover/bar:opacity-100 text-[#7a5500] text-[8px] font-bold leading-none transition-opacity duration-150">−</span>
          </span>
          <span className="w-3 h-3 rounded-full bg-[#28c840] flex-shrink-0 flex items-center justify-center">
            <span className="opacity-0 group-hover/bar:opacity-100 text-[#003d00] text-[8px] font-bold leading-none transition-opacity duration-150">+</span>
          </span>
          <span className="ml-2 text-[#b0b8cc] text-sm font-mono font-semibold">Contact Me</span>
        </div>
        <div className="bg-[#E6EDF4] text-[#122654] p-6 font-medium text-center flex flex-col items-center justify-center gap-4">
          <p className="text-[0.95rem] leading-relaxed">
            If you're looking to collaborate, or have an idea, let's chat!
          </p>
          <p className="flex items-center gap-2 font-mono text-[0.9rem]">
            <span aria-hidden="true">📍</span>
            <span>New Brunswick, NJ</span>
          </p>
          <div className="flex gap-3">
            <a
              href="mailto:sanjitharajesh03@gmail.com"
              className="font-mono text-[12px] font-bold border-2 border-[#122654] text-[#122654] rounded-full px-4 py-1.5 hover:bg-[#122654] hover:text-[#E6EDF4] transition-colors duration-200"
            >
              EMAIL
            </a>
            <a
              href="https://www.linkedin.com/in/sanjitharajesh/"
              target="_blank"
              rel="noreferrer"
              className="font-mono text-[12px] font-bold border-2 border-[#122654] text-[#122654] rounded-full px-4 py-1.5 hover:bg-[#122654] hover:text-[#E6EDF4] transition-colors duration-200"
            >
              LINKEDIN
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

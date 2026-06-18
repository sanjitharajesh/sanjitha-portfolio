const research = [
  {
    institution: "SHIRE Lab, Rutgers Center of Cognitive Sciences",
    role: "Graduate Research Volunteer",
    date: "Mar 2026 – Present",
    description:
      "Conducting applied AI research on implicit racial bias in Vision Language Models (GPT-4o, Claude) across 16 identity groups using a reverse correlation paradigm. Engineering a modular PyTorch pipeline for StyleGAN2 face stimulus generation and Classification Image computation on a SLURM HPC cluster.",
  },
];

export default function Research() {
  return (
    <>
      <h2 id="research" className="font-inter font-bold text-[clamp(28px,4vw,38px)] mt-12 md:mt-32 mb-12 scroll-mt-36 text-center">
        <span className="relative inline-block hover:scale-110 transition-all duration-200 group">
          research
          <span className="absolute bottom-[-4px] left-0 w-0 h-[2px] bg-fg group-hover:w-full transition-all duration-300"></span>
        </span>
      </h2>
      <section className="grid gap-6">
        {research.map((entry) => (
          <article key={entry.institution} className="bg-bg border border-border rounded-2xl overflow-hidden shadow-soft transition-transform duration-200 hover:scale-105">
            <div className="px-4 py-3 bg-[#1a2a52]/95 flex items-center gap-3 group/bar">
              <div className="flex gap-1.5 flex-shrink-0">
                <span className="w-3 h-3 rounded-full bg-[#ff5f57] flex items-center justify-center">
                  <span className="opacity-0 group-hover/bar:opacity-100 text-[#7a0000] text-[8px] font-bold leading-none transition-opacity duration-150">×</span>
                </span>
                <span className="w-3 h-3 rounded-full bg-[#febc2e] flex items-center justify-center">
                  <span className="opacity-0 group-hover/bar:opacity-100 text-[#7a5500] text-[8px] font-bold leading-none transition-opacity duration-150">−</span>
                </span>
                <span className="w-3 h-3 rounded-full bg-[#28c840] flex items-center justify-center">
                  <span className="opacity-0 group-hover/bar:opacity-100 text-[#003d00] text-[8px] font-bold leading-none transition-opacity duration-150">+</span>
                </span>
              </div>
              <span className="font-mono font-bold text-[15px] text-[#e9f1ff]">{entry.institution}</span>
            </div>
            <div className="p-4 pt-3">
              <div className="flex items-baseline justify-between mb-3">
                <span className="font-inter font-semibold text-[14px] text-fg">{entry.role}</span>
                <span className="font-inter text-[13px] text-fg/55 whitespace-nowrap">{entry.date}</span>
              </div>
              <p className="font-inter text-[15px] leading-relaxed">{entry.description}</p>
            </div>
          </article>
        ))}
      </section>
    </>
  );
}

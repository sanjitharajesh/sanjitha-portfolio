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
      <h2 id="research" className="font-mono font-bold text-[clamp(28px,4vw,38px)] mt-12 md:mt-32 mb-12 scroll-mt-36 text-center">
        <span className="relative inline-block hover:scale-110 transition-all duration-200 group">
          research
          <span className="absolute bottom-[-4px] left-0 w-0 h-[2px] bg-fg group-hover:w-full transition-all duration-300"></span>
        </span>
      </h2>
      <section className="grid gap-6 mt-12">
        {research.map((entry) => (
          <article key={entry.institution} className="bg-bg border border-border rounded-2xl p-4 shadow-soft transition-transform duration-200 hover:scale-105">
            <div className="-mx-4 -mt-4 px-5 py-3 rounded-t-2xl bg-[#1a2a52]/95 mb-3">
              <div className="flex items-baseline justify-between">
                <span className="font-mono font-semibold text-[15px] text-[#e9f1ff]">{entry.institution}</span>
              </div>
              <div className="flex items-baseline justify-between mt-1">
                <span className="text-[14px] text-[#c8d4f0]">{entry.role}</span>
                <span className="text-[14px] text-[#c8d4f0] whitespace-nowrap">{entry.date}</span>
              </div>
            </div>
            <div className="mt-3">
              <p className="text-[15px] leading-relaxed">{entry.description}</p>
            </div>
          </article>
        ))}
      </section>
    </>
  );
}

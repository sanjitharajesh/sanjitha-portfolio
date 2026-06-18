import profile from "../assets/profilephoto.jpeg";

export default function Intro() {
  return (
    <>
      <section aria-label="Intro" className="mt-[113px] mb-2">
        <div className="max-w-[1120px] mx-auto px-8">

          {/* Two-column: text stack left, photo right */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-32">

            {/* Left column */}
            <div className="w-full lg:flex-1 flex flex-col items-center lg:items-start text-center lg:text-left gap-4">
              <div className="font-mono font-light text-[clamp(26px,3.2vw,34px)] leading-relaxed">
                <span className="typing-wrap">
                  <span className="typing-ghost" aria-hidden="true">
                    Hi, I'm Sanjitha Rajesh.
                  </span>
                  <span className="typing-line typing-abs">
                    Hi, I'm Sanjitha Rajesh.
                  </span>
                </span>
              </div>

              <p className="font-inter font-semibold text-[1.15rem] text-fg">
                MS in Statistics - Data Science at Rutgers University
              </p>

              <p className="font-inter font-light text-[0.9rem] text-fg/65 leading-relaxed">
                Actively seeking: AI/ML Engineer · Data Scientist · Data Engineer · Analytics Engineer — open to connecting
              </p>

              <p className="font-inter text-[0.82rem] tracking-widest text-fg/50 leading-loose">
                RAG Pipelines · LLM Observability · Full Stack AI | Python, SQL, TypeScript | AI/ML Research
              </p>

              <div className="flex flex-wrap gap-2.5 mt-1 justify-center lg:justify-start">
                <a
                  href="https://drive.google.com/file/d/1Ww3V7GDXizX8vWTHZArAMa2BtnfTH3GO/view?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                  className="font-inter text-xs font-semibold border border-fg text-fg bg-transparent rounded-full px-4 py-1.5 hover:bg-fg hover:text-bg transition-all duration-200"
                >
                  Resume
                </a>
                <a
                  href="https://www.linkedin.com/in/sanjitharajesh/"
                  target="_blank"
                  rel="noreferrer"
                  className="font-inter text-xs font-semibold border border-fg text-fg bg-transparent rounded-full px-4 py-1.5 hover:bg-fg hover:text-bg transition-all duration-200"
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com/sanjitharajesh"
                  target="_blank"
                  rel="noreferrer"
                  className="font-inter text-xs font-semibold border border-fg text-fg bg-transparent rounded-full px-4 py-1.5 hover:bg-fg hover:text-bg transition-all duration-200"
                >
                  GitHub
                </a>
              </div>
            </div>

            {/* Right column: photo */}
            <div className="flex-shrink-0">
              <img
                src={profile}
                alt="Sanjitha Rajesh – profile photo"
                className="w-[280px] sm:w-[300px] lg:w-[320px] rounded-xl shadow-soft transition-transform duration-200 hover:scale-105"
              />
            </div>
          </div>

          {/* Full-width About Me below both columns */}
          <div className="mt-10 max-w-[970px] mx-auto transition-transform duration-300 hover:scale-[1.005]">
            <div className="border border-[#2a3a6a] rounded-2xl shadow-soft overflow-hidden">
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
                <span className="ml-2 text-[#b0b8cc] text-sm font-mono font-semibold">About Me</span>
              </div>
              <div className="bg-[#E6EDF4] p-7">
                <div className="text-[0.95rem] leading-relaxed space-y-4 text-[#122654] font-inter">
                  <p>
                    I am finishing my <strong>MS in Statistics and Data Science</strong> at <strong>Rutgers University</strong>, where I work as a Research Assistant at the <strong>SHIRE Lab</strong> studying <strong>implicit bias in Vision Language Models</strong>.
                  </p>
                  <p>
                    I build <strong>production AI systems</strong> — <strong>RAG pipelines</strong> with hybrid retrieval and evaluation frameworks, <strong>LLM observability tooling</strong>, and <strong>full-stack AI applications</strong> across healthcare and financial domains. I care about the gap between a model that performs well in evaluation and one that holds up when <strong>real users interact with it</strong>.
                  </p>
                  <div className="space-y-2.5 pt-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="font-mono text-[10px] font-bold text-fg/50 uppercase tracking-widest w-24 flex-shrink-0">RAG</span>
                      {["BM25", "Pinecone", "RAGAS", "LLM-as-judge", "Langfuse"].map(t => (
                        <span key={t} className="font-inter text-[11px] font-semibold border border-fg/30 text-fg/70 rounded-full px-2.5 py-0.5 bg-fg/5">{t}</span>
                      ))}
                    </div>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="font-mono text-[10px] font-bold text-fg/50 uppercase tracking-widest w-24 flex-shrink-0">Pipelines</span>
                      {["LangChain", "LangGraph", "Tool-calling", "FastAPI"].map(t => (
                        <span key={t} className="font-inter text-[11px] font-semibold border border-fg/30 text-fg/70 rounded-full px-2.5 py-0.5 bg-fg/5">{t}</span>
                      ))}
                    </div>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="font-mono text-[10px] font-bold text-fg/50 uppercase tracking-widest w-24 flex-shrink-0">Infra</span>
                      {["AWS", "Docker", "Kubernetes", "MLflow"].map(t => (
                        <span key={t} className="font-inter text-[11px] font-semibold border border-fg/30 text-fg/70 rounded-full px-2.5 py-0.5 bg-fg/5">{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      <section aria-label="Scroll hint" className="mt-8 mb-4 flex flex-col items-center justify-center">
        <p className="font-mono mt-4 mb-2 text-[0.9rem] tracking-wide animate-bounce">explore</p>
        <span className="mt-2 text-2xl animate-bounce" aria-hidden="true">↓</span>
      </section>
    </>
  );
}

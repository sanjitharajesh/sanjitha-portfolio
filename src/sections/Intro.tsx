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
              <div className="font-courier font-bold text-[clamp(3.2rem,5vw,3.8rem)] leading-tight">
                <span className="typing-wrap">
                  <span className="typing-ghost" aria-hidden="true">
                    Hi, I'm Sanjitha Rajesh.
                  </span>
                  <span className="typing-line typing-abs">
                    Hi, I'm Sanjitha Rajesh.
                  </span>
                </span>
              </div>

              <p className="font-inter font-semibold text-[1.2rem] text-fg">
                MS in Statistics - Data Science at Rutgers University
              </p>

              <p className="font-inter font-normal text-[0.95rem] text-fg/80 leading-relaxed">
                Actively seeking: AI/ML Engineer · Data Scientist · Software Engineer · Data Analyst — open to connecting
              </p>

              <p className="font-inter font-semibold italic text-[0.88rem] tracking-widest text-fg/60 leading-loose">
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
          <div className="mt-[65px] max-w-[720px] mx-auto transition-transform duration-300 hover:scale-[1.005]">
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
                    Hey, I'm Sanjitha. I'm finishing my <strong>Master's in Statistics and Data Science</strong> at Rutgers, where my coursework has covered <strong>NLP, deep learning, time series analysis, database systems, causal inference, and financial data mining</strong>. I like building end-to-end AI products that are actually trustworthy — not just accurate on a benchmark but reliable when real people use them. That means <strong>RAG systems</strong> with real retrieval quality, <strong>agentic workflows</strong> that can reason across multiple steps and tools, and full-stack applications I can ship fast and iterate on. I move quickly from idea to working product and I genuinely enjoy that part — there is always one more thing to fix and I am usually the last one to walk away from it.
                  </p>
                  <p className="font-mono text-[0.85rem] text-fg/70">
                    Tech stack: <strong className="text-fg">Python, LangChain, FastAPI, React, SQL, AWS</strong>
                  </p>
                  <p>
                    Right now I am also assisting with research at the <strong>SHIRE Lab at Rutgers</strong>, studying how Vision Language Models represent race and social identity differently from humans. I am actively looking for <strong>full-time roles in AI/ML engineering, data science, and software engineering</strong> starting immediately. Outside of this, I am usually listening to music, reading, or on my third (or maybe fifth?) coffee of the day.
                  </p>
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

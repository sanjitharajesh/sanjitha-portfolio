import profile from "../assets/profilephoto.jpeg";

export default function Intro() {
  return (
    <>
      <section aria-label="Intro" className="mt-[138px] mb-2">
        <div className="max-w-[1280px] mx-auto">

          {/* Two-column hero: text left, photo right */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_330px] gap-10 lg:gap-[160px] items-center">

            {/* Left column */}
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-4 min-w-0 w-full">
              <div className="font-courier font-normal text-[clamp(1.5rem,6vw,2.4rem)] leading-tight tracking-[-0.03em]">
                <span className="typing-wrap">
                  <span className="typing-ghost" aria-hidden="true">
                    Hi, I'm <span className="font-bold">Sanjitha Rajesh.</span>
                  </span>
                  <span className="typing-line typing-abs">
                    Hi, I'm <span className="font-bold">Sanjitha Rajesh.</span>
                  </span>
                </span>
              </div>

              <p className="font-inter font-extrabold text-[1.25rem] text-fg">
                MS in Data Science at Rutgers University
              </p>

              <div className="bg-[#1a2a52] rounded-2xl px-5 py-2 self-center lg:self-start">
                <p className="font-inter font-bold text-[0.92rem] text-[#dfe8ff] leading-snug">
                  Actively Seeking: AI/ML Engineer, Data Scientist, SWE Roles
                </p>
              </div>

              <p className="font-inter font-bold text-[0.95rem] text-fg/60 leading-relaxed">
                AI-Native Builder · RAG & Agentic Systems |<br />
                Python · SQL · PyTorch · LangChain | AI/ML Research
              </p>

              <div className="flex flex-wrap gap-3 mt-2 justify-center">
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
            <div className="flex justify-center lg:justify-end">
              <img
                src={profile}
                alt="Sanjitha Rajesh – profile photo"
                className="w-[260px] sm:w-[300px] lg:w-[320px] max-w-full rounded-xl shadow-soft transition-transform duration-200 hover:scale-105"
              />
            </div>
          </div>

          {/* About Me below hero */}
          <div className="mt-[65px] max-w-[460px] mx-auto transition-transform duration-300 hover:scale-[1.005]">
            <div className="border border-[#2a3a6a] rounded-2xl shadow-soft overflow-hidden">
              <div className="bg-[#0f1e3d] px-4 py-2 flex items-center gap-2 group/bar">
                <span className="w-3 h-3 rounded-full bg-[#ff5f57] flex-shrink-0 flex items-center justify-center">
                  <span className="opacity-0 group-hover/bar:opacity-100 text-[#7a0000] text-[8px] font-bold leading-none transition-opacity duration-150">×</span>
                </span>
                <span className="w-3 h-3 rounded-full bg-[#febc2e] flex-shrink-0 flex items-center justify-center">
                  <span className="opacity-0 group-hover/bar:opacity-100 text-[#7a5500] text-[8px] font-bold leading-none transition-opacity duration-150">−</span>
                </span>
                <span className="w-3 h-3 rounded-full bg-[#28c840] flex-shrink-0 flex items-center justify-center">
                  <span className="opacity-0 group-hover/bar:opacity-100 text-[#003d00] text-[8px] font-bold leading-none transition-opacity duration-150">+</span>
                </span>
                <span className="ml-2 text-[#b0b8cc] text-xs font-mono font-semibold">About Me</span>
              </div>
              <div className="bg-[#E6EDF4] p-6">
                <div className="space-y-2.5 text-[0.78rem] leading-relaxed text-[#122654] font-inter">
                  <p>
                    Hey, I'm Sanjitha. I build end-to-end AI products that are <strong>trustworthy in production</strong>: <strong>RAG systems</strong> with real retrieval quality, <strong>agentic workflows</strong>, and <strong>full-stack applications</strong> I can ship fast. From the moment I get an idea to a working deployment, I do not stop: there is always one more bug to fix, one more edge case to handle. I enjoy working with and learning from inspired people, and I'm always looking to maximize my knowledge at every turn.
                  </p>
                  <p>
                    Right now I am also assisting with research at the <strong>SHIRE Lab at Rutgers</strong>, studying how VLMs represent social identity differently from humans. I am actively looking for <strong>full-time roles in AI/ML engineering, data science, and software engineering</strong> starting immediately. Outside of this, I am usually listening to music, reading, or on my third (or maybe fifth?) coffee of the day.
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

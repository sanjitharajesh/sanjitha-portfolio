import profile from "../assets/profilephoto.jpeg";

export default function Intro() {
  return (
    <>
      <section aria-label="Intro" className="mt-[113px] mb-2">
        <div className="max-w-[1040px] mx-auto px-8">

          {/* Two-column: text stack left, photo right */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">

            {/* Left column */}
            <div className="w-full lg:flex-1 flex flex-col items-center lg:items-start text-center lg:text-left gap-3">
              <div className="font-inter font-light text-[clamp(26px,3.2vw,34px)] leading-relaxed">
                <span className="typing-wrap">
                  <span className="typing-ghost" aria-hidden="true">
                    Hi, I'm Sanjitha Rajesh.
                  </span>
                  <span className="typing-line typing-abs">
                    Hi, I'm Sanjitha Rajesh.
                  </span>
                </span>
              </div>
              <p className="font-inter font-medium text-[1.05rem] text-fg">
                MS in Statistics - Data Science at Rutgers University
              </p>
              <p className="font-inter font-light text-[0.85rem] text-fg/60 leading-relaxed">
                Actively seeking: AI/ML Engineer · Data Scientist · Data Engineer · Analytics Engineer — open to connecting
              </p>
              <p className="font-inter text-[0.78rem] tracking-widest text-fg/45 leading-loose">
                RAG Pipelines · LLM Observability · Full Stack AI | Python, SQL, TypeScript | AI/ML Research
              </p>
              <div className="flex flex-wrap gap-3 mt-2 justify-center lg:justify-start">
                <a
                  href="https://drive.google.com/file/d/1Ww3V7GDXizX8vWTHZArAMa2BtnfTH3GO/view?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                  className="font-inter text-sm font-semibold border border-fg text-fg bg-transparent rounded-full px-5 py-2 hover:bg-fg hover:text-bg transition-all duration-200"
                >
                  Resume
                </a>
                <a
                  href="https://www.linkedin.com/in/sanjitharajesh/"
                  target="_blank"
                  rel="noreferrer"
                  className="font-inter text-sm font-semibold border border-fg text-fg bg-transparent rounded-full px-5 py-2 hover:bg-fg hover:text-bg transition-all duration-200"
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com/sanjitharajesh"
                  target="_blank"
                  rel="noreferrer"
                  className="font-inter text-sm font-semibold border border-fg text-fg bg-transparent rounded-full px-5 py-2 hover:bg-fg hover:text-bg transition-all duration-200"
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
          <div className="mt-10 w-full transition-transform duration-300 hover:scale-[1.005]">
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
                    I am finishing my MS in Statistics and Data Science at Rutgers University, where I work as a Research Assistant at the SHIRE Lab studying implicit bias in Vision Language Models.
                  </p>
                  <p>
                    I build production AI systems — RAG pipelines with hybrid retrieval and evaluation frameworks, LLM observability tooling, and full-stack AI applications across healthcare and financial domains. I care about the gap between a model that performs well in evaluation and one that holds up when real users interact with it.
                  </p>
                  <ul className="list-disc list-outside ml-5 space-y-2">
                    <li>RAG systems — hybrid BM25 and vector retrieval, RAGAS and LLM-as-judge evaluation, Langfuse observability</li>
                    <li>LLM pipelines and agentic workflows — LangChain, LangGraph, tool-calling, multi-step automation with FastAPI</li>
                    <li>Cloud infrastructure and deployment — AWS, Docker, Kubernetes, MLflow</li>
                  </ul>
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

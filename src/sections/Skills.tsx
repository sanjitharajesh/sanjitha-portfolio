export default function Skills() {
  return (
    <>
      <h2 id="skills" className="font-mono font-bold text-[clamp(22px,3.2vw,30px)] mt-12 md:mt-64 mb-8 scroll-mt-36 text-center">
        <span className="relative inline-block hover:scale-110 transition-all duration-200 group">
          skills
          <span className="absolute bottom-[-4px] left-0 w-0 h-[2px] bg-fg group-hover:w-full transition-all duration-300"></span>
        </span>
      </h2>
      <section className="mt-9 grid sm:grid-cols-2 gap-8 max-w-[960px] mx-auto">
        {[
          {
            title: "Programming",
            items: ["Python", "SQL", "R", "PostgreSQL", "SQL Server", "Jupyter", "Git", "Pandas", "NumPy", "SciPy", "Matplotlib", "Seaborn"]
          },
          {
            title: "GenAI",
            items: ["RAG", "LangChain", "Pinecone", "Langfuse", "RAGAS", "Hugging Face", "OpenAI API", "Ollama", "Fine-tuning (LoRA)", "Transformers", "NLP"]
          },
          {
            title: "Frameworks",
            items: ["FastAPI", "Flask", "Django", "Node.js", "React", "REST APIs", "Postman", "Firebase", "Docker", "AWS", "Azure", "GCP"]
          },
          {
            title: "Analytics",
            items: ["scikit-learn", "PyTorch", "TensorFlow", "XGBoost", "Random Forest", "MLflow", "Weights & Biases", "Hypothesis Testing", "A/B Testing", "Causal Inference", "Regression", "Time Series", "Bayesian Analysis", "ANOVA", "Tableau", "Power BI", "Excel"]
          },
        ].map(block => (
          <article
            key={block.title}
            className="bg-bg/80 backdrop-blur-sm border border-border rounded-2xl shadow-soft p-5 flex flex-col w-full transition-transform duration-200 hover:scale-105 overflow-hidden"
          >
            {/* macOS title bar */}
            <div className="-mx-5 -mt-5 px-4 py-2.5 rounded-t-2xl bg-[#0f1e3d] mb-4 flex items-center gap-2 group/bar relative">
              <span className="w-3 h-3 rounded-full bg-[#ff5f57] flex-shrink-0 flex items-center justify-center">
                <span className="opacity-0 group-hover/bar:opacity-100 text-[#7a0000] text-[8px] font-bold leading-none transition-opacity duration-150">×</span>
              </span>
              <span className="w-3 h-3 rounded-full bg-[#febc2e] flex-shrink-0 flex items-center justify-center">
                <span className="opacity-0 group-hover/bar:opacity-100 text-[#7a5500] text-[8px] font-bold leading-none transition-opacity duration-150">−</span>
              </span>
              <span className="w-3 h-3 rounded-full bg-[#28c840] flex-shrink-0 flex items-center justify-center">
                <span className="opacity-0 group-hover/bar:opacity-100 text-[#003d00] text-[8px] font-bold leading-none transition-opacity duration-150">+</span>
              </span>
              <span className="absolute inset-0 flex items-center justify-center text-[#b0b8cc] text-sm font-mono font-semibold pointer-events-none">{block.title}</span>
            </div>
            <div className="flex flex-wrap gap-2 justify-center">
              {block.items.map(it => (
                <span
                  key={it}
                  className="font-mono text-[11px] font-bold border-2 border-fg bg-fg text-bg rounded-full px-3 py-1 hover:bg-bg hover:text-fg transition-colors duration-200"
                >
                  {it}
                </span>
              ))}
            </div>
          </article>
        ))}
      </section>
    </>
  );
}

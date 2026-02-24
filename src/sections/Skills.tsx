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
            title: "Programming & Databases",
            items: ["Python", "SQL", "R", "Bash", "PostgreSQL", "MongoDB"]
          },
          {
            title: "ML & GenAI",
            items: ["PyTorch", "scikit-learn", "TensorFlow", "MLflow", "RAG", "LangChain", "Prompt Engineering", "Ollama"]
          },
          {
            title: "Analytics & Visualization",
            items: ["Pandas", "NumPy", "Tableau", "Power BI", "Plotly", "Matplotlib"]
          },
          {
            title: "Cloud, Frameworks & Deployment",
            items: ["AWS", "Azure", "GCP BigQuery", "Docker", "FastAPI", "REST APIs", "CI/CD Pipelines", "Git"]
          },
        ].map(block => (
          <article
            key={block.title}
            className="bg-bg/80 backdrop-blur-sm border border-border rounded-2xl shadow-soft p-5 flex flex-col w-full transition-transform duration-200 hover:scale-105"
          >
            <div className="-mx-5 -mt-5 px-5 py-4 rounded-t-2xl bg-[#1a2a52]/95 mb-4">
              <h3 className="font-mono font-bold tracking-wide text-center text-[1rem] text-[#e9f1ff]">
                {block.title}
              </h3>
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

export default function Skills() {
  return (
    <>
      <h2 id="skills" className="font-mono font-bold text-[clamp(22px,3.2vw,30px)] mt-12 md:mt-64 mb-8 scroll-mt-36 text-center">
        Skills
      </h2>
      <section className="mt-6 grid sm:grid-cols-2 gap-10 max-w-[960px] mx-auto">
        {[
          { 
            title: "Programming", 
            items: ["Python", "SQL", "R", "TypeScript", "Bash"] 
          },
          { 
            title: "Machine Learning", 
            items: ["PyTorch", "Keras", "scikit-learn", "spaCy", "TensorFlow", "MLflow", "SciPy", "Statistical Modeling"] 
          },
          { 
            title: "Generative AI & LLMs", 
            items: ["RAG Pipelines", "Prompt Engineering", "ChromaDB", "Mistral", "Langchain", "HF Transformers"] 
          },
          { 
            title: "Cloud & DevOps", 
            items: ["Docker", "AWS (S3, EC2, Lambda)", "GCP BigQuery", "Firebase", "CI/CD Pipelines", "PostgreSQL", "SQLite", "MongoDB"] 
          },
          { 
            title: "Analytics & Visualization", 
            items: ["Pandas", "NumPy", "Power BI", "Tableau", "Matplotlib", "Seaborn", "Plotly", "Excel"] 
          },
          { 
            title: "Frameworks & Deployment", 
            items: ["FastAPI", "Flask", "Streamlit", "React", "Bootstrap", "REST APIs", "Git", "Postman"] 
          },
        ].map(block => (
          <article 
            key={block.title} 
            className="bg-bg/80 backdrop-blur-sm border border-border rounded-2xl shadow-soft p-5 flex flex-col max-w-[440px] w-full min-h-[240px] transition-transform duration-200 hover:scale-105"
          >
            <h3 className="font-inter font-bold tracking-wide mb-5 pb-3 border-b border-border text-center text-[1rem]">
              {block.title}
            </h3>
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

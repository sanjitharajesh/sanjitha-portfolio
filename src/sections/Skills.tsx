export default function Skills() {
  return (
    <>
      <h2 id="skills" className="font-mono font-bold text-[clamp(22px,3.2vw,30px)] mt-12 md:mt-64 mb-4 scroll-mt-36 text-center">
        Skills
      </h2>
      <section className="mt-6 grid gap-4 md:grid-cols-2 items-stretch">
        {[
          { title: "Programming Languages", items: ["Python","SQL","R","HTML/CSS","MATLAB","TypeScript"] },
          { title: "Machine Learning and AI", items: ["TensorFlow","PyTorch","scikit-learn","NLTK","OpenCV","LLMs","RAG Pipelines","ChromaDB","LangChain"] },
          { title: "Analytics and Visualization", items: ["Pandas","Matplotlib","Seaborn","Plotly","Power BI","Microsoft Excel","Tableau","BeautifulSoup"] },
          { title: "Frameworks and Tools", items: ["React","Tailwind CSS","FastAPI","Flask","Streamlit","Django","Docker","Git","Postman"] },
          { title: "Databases", items: ["PostgreSQL","MySQL","MongoDB","SQLite"] },
          { title: "Cloud and DevOps", items: ["Docker","Firebase","AWS","GCP BigQuery","Databricks","CI/CD Pipelines","Linux"] },
        ].map(block => (
          <article key={block.title} className="bg-bg border border-border rounded-2xl shadow-soft mx-auto w-full max-w-[400px] p-5 flex flex-col h-full min-h-[200px]">
            <h3 className="font-inter font-bold tracking-wide mb-4 text-center text-[1.05rem]">{block.title}</h3>
            <div className="flex flex-wrap gap-2">
              {block.items.map(it => (
                <span key={it} className="font-mono text-[12px] font-semibold border border-border rounded-full px-3 py-1 text-center">{it}</span>
              ))}
            </div>
          </article>
        ))}
      </section>
    </>
  );
}

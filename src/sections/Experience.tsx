export default function Experience() {
  return (
    <>
      <h2 id="experience" className="font-mono font-bold text-[clamp(22px,3.2vw,30px)] mt-[50px] md:mt-64 mb-12 scroll-mt-36 text-center">
        <span className="relative inline-block hover:scale-110 transition-all duration-200 group">
          experience
          <span className="absolute bottom-[-4px] left-0 w-0 h-[2px] bg-fg group-hover:w-full transition-all duration-300"></span>
        </span>
      </h2>
      <section className="grid gap-6 mt-12">
        {/* Item 1 */}
        <article className="bg-bg border border-border rounded-2xl p-4 shadow-soft transition-transform duration-200 hover:scale-105">
          <div className="flex items-baseline justify-between gap-3 -mx-4 -mt-4 px-5 py-4 rounded-t-2xl bg-[#1a2a52]/95 mb-3">
            <h3 className="font-mono font-semibold text-[16px] text-[#e9f1ff]">Graduate Research Volunteer, SHIRE Lab, Rutgers Center of Cognitive Sciences — New Brunswick, NJ</h3>
            <span className="font-mono text-[13px] font-semibold text-[#dfe8ff] whitespace-nowrap">Mar 2026 – Present</span>
          </div>
          <div className="mt-3">
            <ul className="list-disc list-outside ml-4 space-y-1.5 text-[15px] leading-relaxed">
              <li>Quantifying implicit racial bias across 16 identity groups in Vision Language Models (GPT-4o, Claude) via a reverse correlation paradigm to compare human vs. AI mental representations of race and identity.</li>
            </ul>
            <div className="mt-4 flex flex-wrap justify-center gap-3">
              {["PyTorch", "StyleGAN2", "GPT-4o", "Claude", "SLURM"].map(t => (
                <span key={t} className="font-mono text-[12px] font-bold border-2 border-fg bg-fg text-bg rounded-full px-3 py-1">{t}</span>
              ))}
            </div>
          </div>
        </article>

        {/* Item 2 */}
        <article className="bg-bg border border-border rounded-2xl p-4 shadow-soft transition-transform duration-200 hover:scale-105">
          <div className="flex items-baseline justify-between gap-3 -mx-4 -mt-4 px-5 py-4 rounded-t-2xl bg-[#1a2a52]/95 mb-3">
            <h3 className="font-mono font-semibold text-[16px] text-[#e9f1ff]">Business Intelligence Intern, Escape Enterprises LLC — Remote</h3>
            <span className="font-mono text-[13px] font-semibold text-[#dfe8ff] whitespace-nowrap">Jun – Aug 2025</span>
          </div>
          <div className="mt-3">
            <ul className="list-disc list-outside ml-4 space-y-1.5 text-[15px] leading-relaxed">
              <li>Benchmarked TF-IDF, Transformer, and LSTM architectures for real-time engagement prediction across accuracy, latency, and model size; selected LSTM for production deployment via FastAPI achieving ~90% accuracy at ~300ms inference latency.</li>
              <li>Processed 5K+ user interaction logs into structured training datasets; designed prompt strategies for Lucille, an LLM-based self-care assistant, and monitored LLM output quality across 12+ product features via Firebase analytics dashboards.</li>
            </ul>
            <div className="mt-4 flex flex-wrap justify-center gap-3">
              {["Python", "LSTM", "FastAPI", "Firebase"].map(t => (
                <span key={t} className="font-mono text-[12px] font-bold border-2 border-fg bg-fg text-bg rounded-full px-3 py-1">{t}</span>
              ))}
            </div>
          </div>
        </article>

        {/* Item 3 */}
        <article className="bg-bg border border-border rounded-2xl p-4 shadow-soft transition-transform duration-200 hover:scale-105">
          <div className="flex items-baseline justify-between gap-3 -mx-4 -mt-4 px-5 py-4 rounded-t-2xl bg-[#1a2a52]/95 mb-3">
            <h3 className="font-mono font-semibold text-[16px] text-[#e9f1ff]">Data Science Intern, TVS Motor Company — Bangalore, India</h3>
            <span className="font-mono text-[13px] font-semibold text-[#dfe8ff] whitespace-nowrap">Jan – Apr 2024</span>
          </div>
          <div className="mt-3">
            <ul className="list-disc list-outside ml-4 space-y-1.5 text-[15px] leading-relaxed">
              <li>Achieved ~90% accuracy forecasting multi-class Net Promoter Scores across 29 Indian states; performed EDA and feature engineering on 50K+ CRM and dealer records (100+ features) via Databricks ETL pipelines, training Random Forest models with MLflow tracking.</li>
              <li>Built an object-oriented Flask microservice to automate QR code generation, digital signature retrieval, and structured parsing of 600+ product invoices into SQL Server records via external API integrations, reducing manual verification by ~15%.</li>
            </ul>
            <div className="mt-4 flex flex-wrap justify-center gap-3">
              {["Python", "Databricks", "Random Forest", "MLflow", "Flask", "SQL Server"].map(t => (
                <span key={t} className="font-mono text-[12px] font-bold border-2 border-fg bg-fg text-bg rounded-full px-3 py-1">{t}</span>
              ))}
            </div>
          </div>
        </article>

        {/* Item 4 */}
        <article className="bg-bg border border-border rounded-2xl p-4 shadow-soft transition-transform duration-200 hover:scale-105">
          <div className="flex items-baseline justify-between gap-3 -mx-4 -mt-4 px-5 py-4 rounded-t-2xl bg-[#1a2a52]/95 mb-3">
            <h3 className="font-mono font-semibold text-[16px] text-[#e9f1ff]">Research Intern, National University of Singapore (NUS) — Singapore</h3>
            <span className="font-mono text-[13px] font-semibold text-[#dfe8ff] whitespace-nowrap">Jun – Jul 2023</span>
          </div>
          <div className="mt-3">
            <ul className="list-disc list-outside ml-4 space-y-1.5 text-[15px] leading-relaxed">
              <li>Developed dual TensorFlow classifiers for real-time hand gesture recognition: an MLP on MediaPipe keypoints for static signs and an LSTM on coordinate history for dynamic gestures.</li>
              <li>Mapped gesture outputs to system controls via PyAutoGUI, achieving 86% accuracy across 500+ video samples through data preprocessing and hyperparameter tuning.</li>
            </ul>
            <div className="mt-4 flex flex-wrap justify-center gap-3">
              {["TensorFlow", "MediaPipe", "PyAutoGUI"].map(t => (
                <span key={t} className="font-mono text-[12px] font-bold border-2 border-fg bg-fg text-bg rounded-full px-3 py-1">{t}</span>
              ))}
            </div>
          </div>
        </article>

        {/* Item 5 */}
        <article className="bg-bg border border-border rounded-2xl p-4 shadow-soft transition-transform duration-200 hover:scale-105">
          <div className="flex items-baseline justify-between gap-3 -mx-4 -mt-4 px-5 py-4 rounded-t-2xl bg-[#1a2a52]/95 mb-3">
            <h3 className="font-mono font-semibold text-[16px] text-[#e9f1ff]">Data Analyst Intern, NTT Indonesia — Jakarta, Indonesia</h3>
            <span className="font-mono text-[13px] font-semibold text-[#dfe8ff] whitespace-nowrap">May – Aug 2022</span>
          </div>
          <div className="mt-3">
            <ul className="list-disc list-outside ml-4 space-y-1.5 text-[15px] leading-relaxed">
              <li>Identified credit risk patterns in 4,000+ loan records using regression and hypothesis testing in Python and R.</li>
              <li>Optimized PostgreSQL query throughput by 16% and designed and delivered Power BI dashboards tracking credit risk KPIs for executive reporting, enabling non-technical stakeholders to monitor trends without SQL access.</li>
            </ul>
            <div className="mt-4 flex flex-wrap justify-center gap-3">
              {["Python", "R", "PostgreSQL", "Power BI"].map(t => (
                <span key={t} className="font-mono text-[12px] font-bold border-2 border-fg bg-fg text-bg rounded-full px-3 py-1">{t}</span>
              ))}
            </div>
          </div>
        </article>

        {/* Item 6 */}
        <article className="bg-bg border border-border rounded-2xl p-4 shadow-soft transition-transform duration-200 hover:scale-105">
          <div className="flex items-baseline justify-between gap-3 -mx-4 -mt-4 px-5 py-4 rounded-t-2xl bg-[#1a2a52]/95 mb-3">
            <h3 className="font-mono font-semibold text-[16px] text-[#e9f1ff]">Statistics Grader, Rutgers University — New Brunswick, NJ</h3>
            <span className="font-mono text-[13px] font-semibold text-[#dfe8ff] whitespace-nowrap">Sep 2024 – Present</span>
          </div>
          <div className="mt-3">
            <ul className="list-disc list-outside ml-4 space-y-1.5 text-[15px] leading-relaxed">
              <li>Grading undergraduate statistics coursework and assessments; providing written feedback to strengthen student understanding of quantitative reasoning and statistical methods across probability, regression, and hypothesis testing topics.</li>
            </ul>
          </div>
        </article>
      </section>
    </>
  );
}

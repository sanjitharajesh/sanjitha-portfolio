export default function Experience() {
  return (
    <>
      <h2 id="experience" className="font-mono font-bold text-[clamp(22px,3.2vw,30px)] mt-32 md:mt-64 mb-8 scroll-mt-36 text-center">
        Experience
      </h2>
      <section className="grid gap-3 mt-4">
        {/* Item 1 */}
        <article className="bg-bg border border-border rounded-2xl p-4 shadow-soft transition-transform duration-200 hover:scale-105">
          <div className="flex items-baseline justify-between gap-3 pb-3 border-b border-border">
            <h3 className="font-mono font-semibold text-[16px]">Statistics Grader, Rutgers University — New Brunswick, NJ</h3>
            <span className="font-mono text-[13px] font-semibold opacity-90 whitespace-nowrap">Sep 2024 – Present</span>
          </div>
          <div className="mt-3">
            <p>Assisted professors in grading undergraduate Statistics coursework and assessments, applying statistical concepts to evaluate accuracy. Provided constructive feedback to students to strengthen their understanding of quantitative reasoning.</p>
          </div>
        </article>

        {/* Item 2 */}
        <article className="bg-bg border border-border rounded-2xl p-4 shadow-soft transition-transform duration-200 hover:scale-105">
          <div className="flex items-baseline justify-between gap-3 pb-3 border-b border-border">
            <h3 className="font-mono font-semibold text-[16px]">Business Intelligence Intern, Escape Enterprises LLC — Remote</h3>
            <span className="font-mono text-[13px] font-semibold opacity-90 whitespace-nowrap">Jun – Aug 2025</span>
          </div>
          <div className="mt-3">
            <p className="mb-2">Implemented ETL pipelines and dashboards in Firebase and Power BI for Lucille, the AI self-care app, analyzing 5K+ product feature interactions (AI soundscapes, journaling) and monitored key KPIs that delivered insights on user engagement.</p>
            <p>Orchestrated predictive deep learning models (LSTM + Attention, TensorFlow → TFLite) via FastAPI, enabling real-time personalization; implemented query optimization and performance checks to ensure compliance with internal standards.</p>
            <div className="mt-4 flex flex-wrap justify-center gap-3">
              {["Firebase","Python","TFLite","FastAPI","Power BI"].map(t => (
                <span key={t} className="font-mono text-[12px] font-bold border-2 border-fg bg-fg text-bg rounded-full px-3 py-1">{t}</span>
              ))}
            </div>
          </div>
        </article>

        {/* Item 3 */}
        <article className="bg-bg border border-border rounded-2xl p-4 shadow-soft transition-transform duration-200 hover:scale-105">
          <div className="flex items-baseline justify-between gap-3 pb-3 border-b border-border">
            <h3 className="font-mono font-semibold text-[16px]">Data Science Intern, Pt. TVS Motor Company Ltd., Bangalore, India</h3>
            <span className="font-mono text-[13px] font-semibold opacity-90 whitespace-nowrap">Jan – Apr 2024</span>
          </div>
          <div className="mt-3">
            <p className="mb-2">Built ETL pipelines and SQL-backed workflows on Azure Databricks to process customer satisfaction data across 29 Indian states. Developed a Random Forest model (82% accuracy) to predict Net Promoter Scores and presented insights on key churn and satisfaction drivers.</p>
            <p>Deployed a Flask-based Python application to automate QR code and digital signature generation for over 600 product invoices; integrated external APIs and tested workflows using Postman, reducing processing time by 15%.</p>
            <div className="mt-4 flex flex-wrap justify-center gap-3">
              {["Python","Databricks","XGBoost","SQL Server","Postman","Power BI","Flask"].map(t => (
                <span key={t} className="font-mono text-[12px] font-bold border-2 border-fg bg-fg text-bg rounded-full px-3 py-1">{t}</span>
              ))}
            </div>
          </div>
        </article>

        {/* Item 4 */}
        <article className="bg-bg border border-border rounded-2xl p-4 shadow-soft transition-transform duration-200 hover:scale-105">
          <div className="flex items-baseline justify-between gap-3 pb-3 border-b border-border">
            <h3 className="font-mono font-semibold text-[16px]">Deep Learning Research Intern, GAIP — National University of Singapore</h3>
            <span className="font-mono text-[13px] font-semibold opacity-90 whitespace-nowrap">June 2023</span>
          </div>
          <div className="mt-3">
            <p>Constructed a real-time hand gesture recognition system to improve accessibility-driven interactions using Google MediaPipe for landmark extraction, TensorFlow, and PyAutoGUI to link gestures with control actions for 500+ user-fed video samples. Reached 86% classification accuracy.</p>
            <div className="mt-4 flex flex-wrap justify-center gap-3">
              {["Google MediaPipe","OpenCV","TensorFlow","Amazon Web Services"].map(t => (
                <span key={t} className="font-mono text-[12px] font-bold border-2 border-fg bg-fg text-bg rounded-full px-3 py-1">{t}</span>
              ))}
            </div>
          </div>
        </article>

        {/* Item 5 */}
        <article className="bg-bg border border-border rounded-2xl p-4 shadow-soft transition-transform duration-200 hover:scale-105">
          <div className="flex items-baseline justify-between gap-3 pb-3 border-b border-border">
            <h3 className="font-mono font-semibold text-[16px]">Data Analyst Intern, NTT Indonesia, Jakarta, Indonesia</h3>
            <span className="font-mono text-[13px] font-semibold opacity-90 whitespace-nowrap">May – Aug 2022</span>
          </div>
          <div className="mt-3">
            <p>Streamlined data warehousing and credit risk modeling (IFRS-9 compliance) on 4,000+ financial records using Python, R, and PostgreSQL; boosted calculation throughput by 16% and improved compliance monitoring. Built risk dashboards in Power BI and Excel.</p>
            <div className="mt-4 flex flex-wrap justify-center gap-3">
              {["Python","R","PostgreSQL","Excel"].map(t => (
                <span key={t} className="font-mono text-[12px] font-bold border-2 border-fg bg-fg text-bg rounded-full px-3 py-1">{t}</span>
              ))}
            </div>
          </div>
        </article>
      </section>
    </>
  );
}

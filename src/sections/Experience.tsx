const experiences = [
  {
    company: "SHIRE Lab, Rutgers Center of Cognitive Sciences",
    location: "New Brunswick, NJ",
    role: "Graduate Research Assistant",
    date: "Mar 2026 – Present",
    bullets: [
      "Quantifying implicit racial bias across 16 identity groups in Vision Language Models (GPT-4o, Claude) via a reverse correlation paradigm to compare human vs. AI mental representations of race and identity.",
    ],
  },
  {
    company: "Escape Enterprises LLC",
    location: "Remote",
    role: "Business Intelligence Intern",
    date: "Jun 2025 – Aug 2025",
    bullets: [
      "Benchmarked TF-IDF, Transformer, and LSTM architectures for real-time engagement prediction across accuracy, latency, and model size; selected LSTM for production deployment via FastAPI achieving ~90% accuracy at ~300ms inference latency.",
      "Processed 5K+ user interaction logs into structured training datasets; designed prompt strategies for Lucille, an LLM-based self-care assistant, and monitored LLM output quality across 12+ product features via Firebase analytics dashboards.",
    ],
  },
  {
    company: "TVS Motor Company",
    location: "Bangalore, India",
    role: "Data Science Intern",
    date: "Jan – Apr 2024",
    bullets: [
      "Achieved ~90% accuracy forecasting multi-class Net Promoter Scores across 29 Indian states; performed EDA and feature engineering on 50K+ CRM and dealer records (100+ features) via Databricks ETL pipelines, training Random Forest models with MLflow tracking.",
      "Built an object-oriented Flask microservice to automate QR code generation, digital signature retrieval, and structured parsing of 600+ product invoices into SQL Server records via external API integrations, reducing manual verification by ~15%.",
    ],
  },
  {
    company: "National University of Singapore (NUS)",
    location: "Singapore",
    role: "Research Intern",
    date: "Jun – Jul 2023",
    bullets: [
      "Developed dual TensorFlow classifiers for real-time hand gesture recognition: an MLP on MediaPipe keypoints for static signs and an LSTM on coordinate history for dynamic gestures, mapped to system controls via PyAutoGUI, achieving 86% accuracy across 500+ video samples.",
    ],
  },
  {
    company: "NTT Indonesia",
    location: "Jakarta, Indonesia",
    role: "Data Analyst Intern",
    date: "May – Aug 2022",
    bullets: [
      "Identified credit risk patterns in 4,000+ loan records using regression and hypothesis testing in Python and R; optimized PostgreSQL query throughput by 16% and delivered Power BI dashboards tracking credit risk KPIs for executive reporting.",
    ],
  },
  {
    company: "Rutgers University",
    location: "New Brunswick, NJ",
    role: "Statistics Grader",
    date: "Sep 2024 – Present",
    bullets: [
      "Grading undergraduate statistics coursework and assessments; providing written feedback to strengthen student understanding of quantitative reasoning and statistical methods across probability, regression, and hypothesis testing topics.",
    ],
  },
];

export default function Experience() {
  return (
    <>
      <h2 id="experience" className="font-inter font-bold text-[clamp(28px,4vw,38px)] mt-12 md:mt-20 mb-12 scroll-mt-36 text-center">
        <span className="relative inline-block hover:scale-110 transition-all duration-200 group">
          experience
          <span className="absolute bottom-[-4px] left-0 w-0 h-[2px] bg-fg group-hover:w-full transition-all duration-300"></span>
        </span>
      </h2>
      <section className="grid gap-6">
        {experiences.map((exp) => (
          <article key={exp.company} className="bg-bg border border-border rounded-2xl overflow-hidden shadow-soft transition-transform duration-200 hover:scale-105">
            {/* Dark header: mac dots + company + location only */}
            <div className="px-4 py-3 bg-[#1a2a52]/95 flex items-center gap-3 group/bar">
              <div className="flex gap-1.5 flex-shrink-0">
                <span className="w-3 h-3 rounded-full bg-[#ff5f57] flex items-center justify-center">
                  <span className="opacity-0 group-hover/bar:opacity-100 text-[#7a0000] text-[8px] font-bold leading-none transition-opacity duration-150">×</span>
                </span>
                <span className="w-3 h-3 rounded-full bg-[#febc2e] flex items-center justify-center">
                  <span className="opacity-0 group-hover/bar:opacity-100 text-[#7a5500] text-[8px] font-bold leading-none transition-opacity duration-150">−</span>
                </span>
                <span className="w-3 h-3 rounded-full bg-[#28c840] flex items-center justify-center">
                  <span className="opacity-0 group-hover/bar:opacity-100 text-[#003d00] text-[8px] font-bold leading-none transition-opacity duration-150">+</span>
                </span>
              </div>
              <div className="flex-1 min-w-0 flex items-baseline justify-between gap-3">
                <span className="font-inter font-bold text-[15px] text-[#e9f1ff] truncate">{exp.company}</span>
                <span className="font-inter text-[12px] text-[#dfe8ff] whitespace-nowrap flex-shrink-0">{exp.location}</span>
              </div>
            </div>
            {/* Light content area: role + date, then bullets */}
            <div className="p-4 pt-3">
              <div className="flex items-baseline justify-between mb-3">
                <span className="font-inter font-semibold text-[14px] text-fg">{exp.role}</span>
                <span className="font-inter text-[13px] text-fg/55 whitespace-nowrap">{exp.date}</span>
              </div>
              <ul className="list-disc list-outside ml-4 space-y-1.5 text-[15px] leading-relaxed font-inter">
                {exp.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </section>
    </>
  );
}

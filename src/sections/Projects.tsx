export default function Projects() {
  const projects = [
    {
      title: "Consumer Payment Behavior Analysis",
      date: "Jan – Mar 2026",
      description: "Analyzed 58,000+ records across federal financial data using Python; applied causal inference methods to quantify behavioral differences between digital and cash payment users. Deployed an application — Financial Vulnerability Risk Scorer (Django + React) translating odds ratios and BNPL risk into personalized financial risk tiers and targeted guidance for underserved users.",
      github: "#"
    },
    {
      title: "BillBuddy: AI Receipt Splitting Agent",
      date: "Jan 2026",
      description: "Built a Next.js and FastAPI full-stack application with Splitwise REST API integration to eliminate friction of manual receipt-splitting using Azure Computer Vision OCR and GPT-4-Turbo with structured JSON extraction and output schema enforcement, achieving 88% field-level and 92% document-level accuracy across 50 receipt layouts at $0.01 per document.",
      github: "https://github.com/sanjitharajesh/billbuddy"
    },
    {
      title: "MediQuery — LLM-Powered Drug Query System",
      date: "Dec 2025",
      description: "Architected a hybrid RAG pipeline over 100+ FDA drug label PDFs using BM25 and Pinecone vector retrieval orchestrated via LangChain, using Langfuse tracing to benchmark local vs. hosted configurations. Built a 19-query RAGAS evaluation framework across 7 categories including expected-failure cases.",
      github: "https://github.com/sanjitharajesh/mediquery"
    },
    {
      title: "FinGuard — Financial Transaction Fraud Monitoring System",
      date: "Oct – Dec 2025",
      description: "Designed a fraud detection system in Flask and PostgreSQL implementing configurable rule-based detection across 24 merchant risk tiers, containerized with Docker, with automated alert workflows and admin dashboards. Integrated a natural language to SQL interface using SQLCoder-7B via Ollama, enabling non-technical admins to query transaction data in plain English without writing SQL.",
      github: "https://github.com/sanjitharajesh/ftransaction-2025"
    },
    {
      title: "CodeMixTranslate — Neural Machine Translation for Code-Switched Text",
      date: "Oct – Dec 2025",
      description: "Designed a multilingual translation pipeline in PyTorch benchmarking mT5, MarianMT, and NLLB-200 on 743 low-resource Hinglish and Spanglish samples, achieving a best BLEU score of 63.12 with NLLB-200.",
      github: "https://github.com/sanjitharajesh/codemixtranslation"
    },
    {
      title: "Transfer Learning on Chest X-rays with EfficientNet",
      date: "Feb – May 2025",
      description: "Fine-tuned EfficientNet-B0 in PyTorch for multi-class pneumonia and tuberculosis classification from chest X-ray images, with an end-to-end inference pipeline featuring data augmentation and hyperparameter tuning.",
      github: "https://github.com/sanjitharajesh/efficientnet-xray"
    },
    {
      title: "SomniSage — Sleep Stage Classification",
      date: "Jan – May 2024",
      description: "Built deep learning pipelines to classify sleep stages from PSG physiological signals using twin CNN (82% accuracy) and Bi-LSTM (84% accuracy) architectures in PyTorch, with multi-channel signal preprocessing and artifact rejection on clinical time-series data.",
      github: "https://github.com/sanjitharajesh/somnisage"
    },
    {
      title: "Air Quality Analysis Dashboard",
      date: "Oct – Dec 2023",
      description: "Analyzed 6,000+ air quality records (2010–2023, 50+ cities) and built an interactive R Flexdashboard using ggplot2 and Plotly, identifying a 30% PM2.5 increase in metro areas presented as a stakeholder-facing policy report.",
      github: "https://github.com/sanjitharajesh/air-quality-vis"
    },
    {
      title: "GestuRise — Hand Gesture Control System",
      date: "Jun – Jul 2023",
      description: "Built a real-time hand gesture recognition system using MediaPipe for landmark extraction, TensorFlow for model training, and PyAutoGUI for gesture-to-action mapping. Achieved 86% classification accuracy on 500+ video samples through a dual classifier architecture: MLP for static signs and LSTM for dynamic gesture sequences.",
      github: "https://github.com/sanjitharajesh/gesturise"
    },
  ];

  return (
    <>
      <h2 id="projects" className="font-mono font-bold text-[clamp(22px,3.2vw,30px)] mt-16 md:mt-64 mb-8 scroll-mt-36 text-center">
        <span className="relative inline-block hover:scale-110 transition-all duration-200 group">
          projects
          <span className="absolute bottom-[-4px] left-0 w-0 h-[2px] bg-fg group-hover:w-full transition-all duration-300"></span>
        </span>
      </h2>
      <section className="grid md:grid-cols-2 gap-7 mt-9">
        {projects.map((project, idx) => (
          <article
            key={idx}
            className="bg-bg/80 backdrop-blur-sm border border-border rounded-2xl shadow-soft p-5 flex flex-col transition-transform duration-200 hover:scale-105"
          >
            <div className="flex items-start justify-between gap-3 -mx-5 -mt-5 px-5 py-4 rounded-t-2xl bg-[#1a2a52]/95 mb-3">
              <div className="flex-grow">
                <h3 className="font-mono font-semibold text-[15px] leading-snug text-[#e9f1ff]">{project.title}</h3>
              </div>
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="flex-shrink-0 font-mono text-[11px] font-bold border-2 border-[#e9f1ff] bg-[#e9f1ff] text-[#1a2a52] rounded-full px-3 py-1 hover:bg-transparent hover:text-[#e9f1ff] transition-colors duration-200"
                title="View source code"
              >
                CODE
              </a>
            </div>
            <span className="font-mono text-[12px] font-semibold opacity-90 mb-3">{project.date}</span>
            <p className="text-[15px] leading-relaxed">{project.description}</p>
          </article>
        ))}
      </section>
    </>
  );
}

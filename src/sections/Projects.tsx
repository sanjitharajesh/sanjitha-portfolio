type Project = {
  title: string;
  date: string;
  description: string;
  github?: string;
  demo?: string;
  tags: string[];
};

function Tags({ tags }: { tags: string[] }) {
  return (
    <div className="flex flex-wrap gap-1.5 mt-3">
      {tags.map((tag) => (
        <span key={tag} className="font-mono text-[10px] font-semibold border border-fg/50 text-fg/70 rounded-full px-2 py-0.5">
          {tag}
        </span>
      ))}
    </div>
  );
}

const MacDots = () => (
  <>
    <span className="w-3 h-3 rounded-full bg-[#ff5f57] flex-shrink-0 flex items-center justify-center">
      <span className="opacity-0 group-hover/bar:opacity-100 text-[#7a0000] text-[8px] font-bold leading-none transition-opacity duration-150">×</span>
    </span>
    <span className="w-3 h-3 rounded-full bg-[#febc2e] flex-shrink-0 flex items-center justify-center">
      <span className="opacity-0 group-hover/bar:opacity-100 text-[#7a5500] text-[8px] font-bold leading-none transition-opacity duration-150">−</span>
    </span>
    <span className="w-3 h-3 rounded-full bg-[#28c840] flex-shrink-0 flex items-center justify-center">
      <span className="opacity-0 group-hover/bar:opacity-100 text-[#003d00] text-[8px] font-bold leading-none transition-opacity duration-150">+</span>
    </span>
  </>
);

const projects: Project[] = [
  {
    title: "Consumer Payment Behavior Analysis",
    date: "Jan – Mar 2026",
    description: "Analyzed 58,000+ records across 3 federal financial datasets (FDIC, CFPB, SHED); applied causal inference methods including Mann-Whitney U and Chi-square tests, revealing a 13.24x odds ratio among banked individuals and a 24pp savings gap for BNPL users. Deployed the Financial Vulnerability Risk Scorer in Django and React translating statistical findings into personalized financial risk tiers for underserved users.",
    github: "https://github.com/sanjitharajesh/financial-wellness",
    demo: "https://financial-wellness.up.railway.app/",
    tags: ["Python", "Django", "React", "Causal Inference"],
  },
  {
    title: "BillBuddy: AI Receipt Splitting Agent",
    date: "Jan 2026",
    description: "Built a Next.js and FastAPI full-stack application with Splitwise REST API integration to eliminate friction of manual receipt-splitting using Azure Computer Vision OCR and GPT-4-Turbo with structured JSON extraction and output schema enforcement, achieving 88% field-level and 92% document-level accuracy across 50 receipt layouts at $0.01 per document.",
    github: "https://github.com/sanjitharajesh/billbuddy",
    tags: ["Next.js", "FastAPI", "Azure CV", "GPT-4-Turbo", "Splitwise API"],
  },
  {
    title: "MediQuery - LLM-Powered Drug Query System",
    date: "Dec 2025",
    description: "Architected a production RAG system over 141 FDA drug label PDFs using hybrid BM25-Pinecone retrieval with section-aware chunking, Langfuse observability, and a 19-query RAGAS evaluation framework achieving 87% accuracy and under 5% hallucination rate. Features query decomposition for multi-drug queries, brand name normalization, corpus coverage detection, and automatic FDA label versioning via DailyMed.",
    github: "https://github.com/sanjitharajesh/mediquery",
    demo: "https://mediquery-ai.onrender.com/",
    tags: ["LangChain", "Pinecone", "BM25", "Groq", "Langfuse", "RAGAS", "FastAPI"],
  },
  {
    title: "FinGuard- Fraud Monitor",
    date: "Oct – Dec 2025",
    description: "Designed a fraud detection system in Flask and PostgreSQL implementing configurable rule-based detection across 24 merchant risk tiers, containerized with Docker, with automated alert workflows and admin dashboards. Integrated a natural language to SQL interface using SQLCoder-7B via Ollama, enabling non-technical admins to query transaction data in plain English without writing SQL.",
    github: "https://github.com/sanjitharajesh/ftransaction-2025",
    tags: ["Flask", "PostgreSQL", "Docker", "SQLCoder-7B", "Ollama"],
  },
  {
    title: "CodeMixTranslate- MT for Code-Switching",
    date: "Oct – Dec 2025",
    description: "Designed a multilingual translation pipeline in PyTorch benchmarking mT5, MarianMT, and NLLB-200 on 743 low-resource Hinglish and Spanglish samples, achieving a best BLEU score of 63.12 with NLLB-200.",
    github: "https://github.com/sanjitharajesh/codemixtranslation",
    tags: ["PyTorch", "mT5", "MarianMT", "NLLB-200", "HuggingFace"],
  },
  {
    title: "Transfer Learning on Chest X-Rays",
    date: "Feb – May 2025",
    description: "Fine-tuned EfficientNet-B0 in PyTorch for multi-class pneumonia and tuberculosis classification from chest X-ray images, with an end-to-end inference pipeline featuring data augmentation and hyperparameter tuning.",
    github: "https://github.com/sanjitharajesh/transfer-learning",
    tags: ["PyTorch", "EfficientNet-B0", "Medical Imaging"],
  },
  {
    title: "SomniSage: Sleep Stage Classification",
    date: "Jan – May 2024",
    description: "Built deep learning pipelines to classify sleep stages from PSG physiological signals using twin CNN (82% accuracy) and Bi-LSTM (84% accuracy) architectures in PyTorch, with multi-channel signal preprocessing and artifact rejection on clinical time-series data.",
    tags: ["PyTorch", "CNN", "Bi-LSTM", "Time Series"],
  },
  {
    title: "Air Quality Analysis Dashboard",
    date: "Oct – Dec 2023",
    description: "Analyzed 6,000+ air quality records (2010–2023, 50+ cities) and built an interactive R Flexdashboard using ggplot2 and Plotly, identifying a 30% PM2.5 increase in metro areas presented as a stakeholder-facing policy report.",
    github: "https://github.com/sanjitharajesh/air-quality-vis",
    tags: ["R", "ggplot2", "Plotly", "Flexdashboard"],
  },
  {
    title: "GestuRise: Hand Gesture Control System",
    date: "Jun – Jul 2023",
    description: "Built a real-time hand gesture recognition system using MediaPipe for landmark extraction, TensorFlow for model training, and PyAutoGUI for gesture-to-action mapping. Achieved 86% classification accuracy on 500+ video samples through a dual classifier architecture: MLP for static signs and LSTM for dynamic gesture sequences.",
    github: "https://github.com/sanjitharajesh/gesturise",
    tags: ["TensorFlow", "MediaPipe", "PyAutoGUI", "OpenCV"],
  },
];

import { useRef, useEffect, useState } from "react";

export default function Projects() {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { setVisible(entry.isIntersecting); },
      { threshold: 0.5 }
    );
    if (headingRef.current) observer.observe(headingRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <h2
        ref={headingRef}
        id="projects"
        className={`font-inter font-bold text-[clamp(28px,4vw,38px)] mt-16 md:mt-64 mb-8 scroll-mt-36 text-center transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}`}
      >
        <span className="relative inline-block">
          projects
          <span className={`absolute bottom-[-4px] left-0 h-[2px] bg-fg transition-all duration-700 delay-300 ${visible ? "w-full" : "w-0"}`}></span>
        </span>
      </h2>

      <section className="grid md:grid-cols-2 gap-7 mt-9">
        {projects.map((project, idx) => (
          <article
            key={idx}
            className="bg-bg/80 backdrop-blur-sm border border-border rounded-2xl shadow-soft p-5 flex flex-col transition-transform duration-200 hover:scale-105"
          >
            <div className="-mx-5 -mt-5 px-4 py-2.5 rounded-t-2xl bg-[#1a2a52]/95 mb-3 flex items-center gap-2 group/bar relative">
              <MacDots />
              <span className="absolute inset-0 flex items-center justify-center font-mono font-semibold text-[14px] leading-snug text-[#e9f1ff] pl-10 pr-3 text-center pointer-events-none">
                {project.title}
              </span>
            </div>
            <div className="flex items-center justify-between mb-3">
              <span className="font-mono text-[12px] font-semibold opacity-90">{project.date}</span>
              <div className="flex gap-2">
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="font-mono text-[11px] font-bold border border-fg bg-fg text-bg rounded-full px-3 py-1 hover:bg-bg hover:text-fg transition-colors duration-200"
                  >
                    LIVE
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="font-mono text-[11px] font-bold border border-fg bg-bg text-fg rounded-full px-3 py-1 hover:bg-fg hover:text-bg transition-colors duration-200"
                  >
                    CODE
                  </a>
                )}
              </div>
            </div>
            <div className="flex-1">
              <p className="font-mono text-[10px] font-bold text-fg/45 uppercase tracking-widest mb-1">What I built</p>
              <p className="font-inter text-[14px] leading-relaxed">{project.description}</p>
            </div>
            <Tags tags={project.tags} />
          </article>
        ))}
      </section>
    </>
  );
}

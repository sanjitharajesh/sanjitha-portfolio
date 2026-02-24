export default function Projects() {
  const projects = [
    {
      title: "BillBuddy: AI Receipt Splitting Agent",
      date: "Jan 2026",
      description: "Built an automated expense-splitting agent that parses receipts end-to-end using OCR and GPT-4.1-mini for intelligent item extraction and cost allocation, with Splitwise API integration for seamless workflow automation — achieving ~7s end-to-end latency.",
      tags: ["FastAPI", "Azure Computer Vision", "GPT-4.1-mini", "Splitwise API", "Python"],
      github: "https://github.com/sanjitharajesh/billbuddy"
    },
    {
      title: "MediQuery - LLM-Powered Drug Query System",
      date: "Dec 2025",
      description: "Deployed Groq-hosted Llama-3.3-70B with LangChain orchestration over a RAG pipeline using hybrid retrieval (BM25 + Pinecone vector database with sentence-transformers) across 100+ FDA drug label documents with semantic chunking, achieving 87% answer accuracy, <5% hallucination rate, and sub-6s end-to-end latency.",
      tags: ["LangChain", "Groq", "Pinecone", "Python"],
      github: "https://github.com/sanjitharajesh/mediquery"
    },
    {
      title: "CodeMixTranslate - Neural Machine Translation for Code-Switched Text",
      date: "Oct – Dec 2025",
      description: "A specialized translation system designed for bilingual speakers who mix languages (like Hinglish and Spanglish). The AI model understands and translates naturally code-switched sentences, making communication easier for multilingual communities.",
      tags: ["PyTorch"],
      github: "https://github.com/sanjitharajesh/codemixtranslation"
    },
    {
      title: "FinGuard - Financial Transaction Fraud Monitoring System",
      date: "Oct – Dec 2025",
      description: "An intelligent fraud detection platform that monitors financial transactions in real-time. The system automatically flags suspicious activities, analyzes merchant patterns, and sends instant alerts to prevent fraudulent transactions before they complete.",
      tags: ["PostgreSQL", "Docker", "Bootstrap"],
      github: "https://github.com/sanjitharajesh/ftransaction-2025"
    },
    {
      title: "Transfer Learning on Chest X-rays with EfficientNet",
      date: "Feb – May 2025",
      description: "A medical imaging AI that helps diagnose pneumonia and tuberculosis from chest X-rays. The system uses advanced deep learning techniques to achieve high accuracy, potentially assisting healthcare providers in early disease detection.",
      tags: ["EfficientNet-B0", "PyTorch"],
      github: "https://github.com/sanjitharajesh/efficientnet-xray"
    },
    {
      title: "Somnisage – AI-based Sleep Stage Scoring (Capstone Project)",
      date: "Jan – May 2024",
      description: "An automated sleep analysis system that interprets brain wave patterns to identify different sleep stages. This tool can help sleep clinics analyze patient data more efficiently and identify potential sleep disorders.",
      tags: ["TensorFlow", "Keras"],
      github: "https://github.com/sanjitharajesh/somnisage"
    },
    {
      title: "Air Quality Visualization Dashboard",
      date: "Oct – Dec 2023",
      description: "An interactive dashboard that tracks and visualizes air pollution trends across 50+ Indian cities over 13 years. The platform helps users understand pollution patterns and their health implications through intuitive charts and maps.",
      tags: ["R", "Plotly"],
      github: "https://github.com/sanjitharajesh/air-quality-vis"
    },
    {
      title: "GestuRise – Hand Gesture Control",
      date: "Jun – Jul 2023",
      description: "A touchless computer control system that recognizes hand gestures through your webcam. Users can control presentations, navigate screens, and interact with applications using simple hand movements, improving accessibility and interaction.",
      tags: ["MediaPipe", "TensorFlow", "OpenCV", "PyAutoGUI"],
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
            <div className="mt-2 flex flex-wrap gap-2 justify-center">
              {project.tags.map(tag => (
                <span
                  key={tag}
                  className="font-mono text-[11px] font-bold border-2 border-fg bg-fg text-bg rounded-full px-3 py-1 hover:bg-bg hover:text-fg transition-colors duration-200"
                >
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </section>
    </>
  );
}

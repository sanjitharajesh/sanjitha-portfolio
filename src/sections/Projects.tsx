export default function Projects() {
  const projects = [
    {
      title: "LLM-Powered Drug Query System (MediQuery)",
      date: "Sep – Dec 2025",
      description: "A privacy-first medication information assistant that uses AI to answer questions about FDA-approved drugs. The system runs entirely locally, ensuring patient data privacy while providing accurate, context-aware responses about drug interactions, side effects, and usage guidelines.",
      tags: ["FastAPI", "ChromaDB", "Mistral-7B", "RAG", "SQLite"],
      github: "https://github.com/sanjitharajesh/mediquery"
    },
    {
      title: "CodeMixTranslate - Neural Machine Translation for Code-Switched Text",
      date: "Oct – Dec 2025",
      description: "A specialized translation system designed for bilingual speakers who mix languages (like Hinglish and Spanglish). The AI model understands and translates naturally code-switched sentences, making communication easier for multilingual communities.",
      tags: ["PyTorch", "mT5", "MarianMT", "NLLB-200", "NMT"],
      github: "https://github.com/sanjitharajesh/codemixtranslation"
    },
    {
      title: "FinGuard - Financial Transaction Fraud Monitoring System",
      date: "Oct – Dec 2025",
      description: "An intelligent fraud detection platform that monitors financial transactions in real-time. The system automatically flags suspicious activities, analyzes merchant patterns, and sends instant alerts to prevent fraudulent transactions before they complete.",
      tags: ["PostgreSQL", "Docker", "REST APIs", "Bootstrap"],
      github: "https://github.com/sanjitharajesh/ftransaction-2025"
    },
    {
      title: "Transfer Learning on Chest X-rays with EfficientNet",
      date: "Feb – May 2025",
      description: "A medical imaging AI that helps diagnose pneumonia and tuberculosis from chest X-rays. The system uses advanced deep learning techniques to achieve high accuracy, potentially assisting healthcare providers in early disease detection.",
      tags: ["EfficientNet-B0", "PyTorch", "DANN", "Transfer Learning"],
      github: "https://github.com/sanjitharajesh/efficientnet-xray"
    },
    {
      title: "Somnisage – AI-based Sleep Stage Scoring (Capstone Project)",
      date: "Jan – May 2024",
      description: "An automated sleep analysis system that interprets brain wave patterns to identify different sleep stages. This tool can help sleep clinics analyze patient data more efficiently and identify potential sleep disorders.",
      tags: ["TensorFlow", "Keras", "CNN", "BiLSTM", "EEG"],
      github: "https://github.com/sanjitharajesh/somnisage"
    },
    {
      title: "Air Quality Visualization Dashboard",
      date: "Oct – Dec 2023",
      description: "An interactive dashboard that tracks and visualizes air pollution trends across 50+ Indian cities over 13 years. The platform helps users understand pollution patterns and their health implications through intuitive charts and maps.",
      tags: ["R", "Plotly", "ggplot2", "Flexdashboard"],
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
        Projects
      </h2>
      <section className="grid md:grid-cols-2 gap-4 mt-6">
        {projects.map((project, idx) => (
          <article
            key={idx}
            className="bg-bg/80 backdrop-blur-sm border border-border rounded-2xl shadow-soft p-5 flex flex-col transition-transform duration-200 hover:scale-105"
          >
            <div className="flex items-start justify-between gap-3 mb-3 pb-3 border-b border-border">
              <div className="flex-grow">
                <h3 className="font-mono font-semibold text-[15px] leading-snug">{project.title}</h3>
              </div>
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="flex-shrink-0 font-mono text-[11px] font-bold border-2 border-fg bg-fg text-bg rounded-full px-3 py-1 hover:bg-bg hover:text-fg transition-colors duration-200"
                title="View source code"
              >
                CODE
              </a>
            </div>
            <span className="font-mono text-[12px] font-semibold opacity-90 mb-3">{project.date}</span>
            <p className="text-[15px] leading-relaxed flex-grow">{project.description}</p>
            <div className="mt-4 flex flex-wrap gap-2 justify-center">
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

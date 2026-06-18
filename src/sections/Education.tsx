const education = [
  {
    school: "Rutgers University - New Brunswick",
    location: "New Brunswick, New Jersey",
    degree: "Master of Science in Statistics - Data Science",
    dates: "Sep 2024 - May 2026 (Expected)",
    coursework: "Regression and Time Series Analysis, Data Wrangling, DSA, NLP, Database Management, Financial Data Mining (ML and Deep Learning), Statistics for Data Science",
  },
  {
    school: "Vellore Institute of Technology",
    location: "Vellore, Tamil Nadu, India",
    degree: "Bachelor of Technology, Computer Science and Engineering (CGPA - 8.05/10)",
    dates: "Sep 2020 - July 2024",
    coursework: "Database Management Systems, Data Structures and Algorithms, Machine Learning, Natural Language Processing, Data Visualization, Statistics, Cloud Computing, Artificial Intelligence",
  },
];

export default function Education() {
  return (
    <>
      <h2 id="education" className="font-inter font-bold text-[clamp(28px,4vw,38px)] mt-12 md:mt-32 mb-8 scroll-mt-36 text-center">
        <span className="relative inline-block hover:scale-110 transition-all duration-200 group">
          education
          <span className="absolute bottom-[-4px] left-0 w-0 h-[2px] bg-fg group-hover:w-full transition-all duration-300"></span>
        </span>
      </h2>
      <section className="grid gap-3">
        {education.map((edu) => (
          <article key={edu.school} className="bg-bg border border-border rounded-2xl overflow-hidden shadow-soft transition-transform duration-200 hover:scale-105">
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
                <span className="font-mono font-bold text-[15px] text-[#e9f1ff] truncate">{edu.school}</span>
                <span className="font-mono text-[12px] text-[#dfe8ff] whitespace-nowrap flex-shrink-0">{edu.location}</span>
              </div>
            </div>
            <div className="p-4 pt-3">
              <div className="flex items-baseline justify-between gap-3 mb-2">
                <p className="font-inter font-semibold text-[14px] text-fg">{edu.degree}</p>
                <span className="font-inter text-[13px] text-fg/55 whitespace-nowrap flex-shrink-0">{edu.dates}</span>
              </div>
              <p className="font-inter text-[14px] text-fg/80 leading-relaxed">Coursework: {edu.coursework}</p>
            </div>
          </article>
        ))}
      </section>
    </>
  );
}

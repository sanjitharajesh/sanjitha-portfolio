export default function Education() {
  return (
    <>
      <h2 id="education" className="font-mono font-bold text-[clamp(22px,3.2vw,30px)] mt-12 md:mt-64 mb-8 scroll-mt-36 text-center">
        <span className="relative inline-block hover:scale-110 transition-all duration-200 group">
          education
          <span className="absolute bottom-[-4px] left-0 w-0 h-[2px] bg-fg group-hover:w-full transition-all duration-300"></span>
        </span>
      </h2>
      <section className="grid gap-3 mt-8">
        <article className="bg-bg border border-border rounded-2xl p-4 shadow-soft transition-transform duration-200 hover:scale-105">
          <div className="grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-3 -mx-4 -mt-4 px-5 py-4 rounded-t-2xl bg-[#1a2a52]/95 mb-2">
            <h3 className="font-mono font-semibold text-[16px] text-[#e9f1ff]">Rutgers University - New Brunswick</h3>
            <span className="font-mono text-[13px] font-semibold text-[#dfe8ff]">New Brunswick, New Jersey</span>
          </div>
          <div className="grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-3 mt-2">
            <p className="font-mono">Master of Science in Statistics - Data Science (GPA - 3.41/4)</p>
            <span className="font-mono text-[13px] font-semibold opacity-90">Sep 2024 - May 2026 (Expected)</span>
          </div>
          <p className="opacity-90 mt-2">Coursework: Regression and Time Series Analysis, Data Wrangling, DSA, NLP, Database Management, Financial Data Mining (ML and Deep Learning), Statistics for Data Science</p>
        </article>

        <article className="bg-bg border border-border rounded-2xl p-4 shadow-soft transition-transform duration-200 hover:scale-105">
          <div className="grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-3 -mx-4 -mt-4 px-5 py-4 rounded-t-2xl bg-[#1a2a52]/95 mb-2">
            <h3 className="font-mono font-semibold text-[16px] text-[#e9f1ff]">Vellore Institute of Technology</h3>
            <span className="font-mono text-[13px] font-semibold text-[#dfe8ff]">Vellore, Tamil Nadu, India</span>
          </div>
          <div className="grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-3 mt-2">
            <p className="font-mono">Bachelor of Technology, Computer Science and Engineering (CGPA - 8.05/10)</p>
            <span className="font-mono text-[13px] font-semibold opacity-90">Sep 2020 - July 2024</span>
          </div>
          <p className="opacity-90 mt-2">Coursework: Database Management Systems, Data Structures and Algorithms, Machine Learning, Natural Language Processing, Data Visualization, Statistics, Cloud Computing, Artificial Intelligence</p>
        </article>

        <article className="bg-[#1a2a52]/95 border border-[#2a3a6a] rounded-2xl p-4 shadow-soft transition-transform duration-200 hover:scale-105">
          <div className="grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-3">
            <h3 className="font-mono font-semibold text-[16px] text-[#e9f1ff]">Gandhi Memorial Intercontinental School, Jakarta</h3>
            <span className="font-mono text-[13px] font-semibold text-[#dfe8ff]">Feb 2008 - May 2020</span>
          </div>
        </article>
      </section>
    </>
  );
}

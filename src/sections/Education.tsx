export default function Education() {
  return (
    <>
      <h2 id="education" className="font-mono font-bold text-[clamp(22px,3.2vw,30px)] mt-12 md:mt-64 mb-8 scroll-mt-36 text-center">
        Education
      </h2>
      <section className="grid gap-3 mt-4">
        <article className="bg-bg border border-border rounded-2xl p-4 shadow-soft">
          <div className="grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-3">
            <h3 className="font-mono font-semibold text-[16px]">Rutgers University - New Brunswick</h3>
            <span className="font-mono text-[13px] font-semibold opacity-90">New Brunswick, New Jersey</span>
          </div>
          <div className="grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-3 mt-2">
            <p className="font-mono">Master of Science in Statistics - Data Science (GPA - 3.41/4)</p>
            <span className="font-mono text-[13px] font-semibold opacity-90">Sep 2024 - May 2026 (Expected)</span>
          </div>
          <p className="opacity-90 mt-2">Coursework: Regression and Time Series Analysis, Data Wrangling, DSA, NLP, Database Management, Financial Data Mining (ML and Deep Learning), Statistics for Data Science</p>
        </article>

        <article className="bg-bg border border-border rounded-2xl p-4 shadow-soft">
          <div className="grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-3">
            <h3 className="font-mono font-semibold text-[16px]">Vellore Institute of Technology</h3>
            <span className="font-mono text-[13px] font-semibold opacity-90">Vellore, Tamil Nadu, India</span>
          </div>
          <div className="grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-3 mt-2">
            <p className="font-mono">Bachelor of Technology, Computer Science and Engineering (CGPA - 8.05/10)</p>
            <span className="font-mono text-[13px] font-semibold opacity-90">Sep 2020 - July 2024</span>
          </div>
          <p className="opacity-90 mt-2">Coursework: Database Management Systems, Data Structures and Algorithms, Machine Learning, Natural Language Processing, Data Visualization, Statistics, Cloud Computing, Artificial Intelligence</p>
        </article>

        <article className="bg-bg border border-border rounded-2xl p-4 shadow-soft">
          <div className="grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-3">
            <h3 className="font-mono font-semibold text-[16px]">Gandhi Memorial Intercontinental School, Jakarta</h3>
            <span className="font-mono text-[13px] font-semibold opacity-90">Feb 2008 - May 2020</span>
          </div>
        </article>
      </section>
    </>
  );
}

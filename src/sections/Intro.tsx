import profile from "../assets/profilephoto.jpeg";

export default function Intro() {
  return (
    <>
      <section aria-label="Intro" className="mt-56 mb-2">
        <div className="max-w-[1040px] mx-auto px-8 flex flex-col lg:flex-row items-center justify-center gap-20 lg:gap-28">
          <div className="w-full lg:w-auto flex flex-col items-center text-center -mt-10 lg:-mt-14">
            <div className="font-anka font-normal text-[clamp(26px,3.2vw,34px)] leading-relaxed max-w-[880px] flex flex-col items-center gap-3">
             <span className="typing-wrap">
  {/* Ghost text reserves layout space */}
  <span className="typing-ghost" aria-hidden="true">
    Hi, I’m <span className="font-semibold">Sanjitha Rajesh.</span>
  </span>

  {/* Animated text sits on top */}
  <span className="typing-line typing-abs">
    Hi, I’m <span className="font-semibold">Sanjitha Rajesh.</span>
  </span>
</span>

            </div>
            <div className="mt-6 font-inter text-center max-w-[880px]">
              <h3 className="uppercase tracking-wide text-[1rem] font-semibold">
                <span className="block">MSDS at Rutgers | Seeking Full-Time Opportunities</span>
                <span className="block">in Data, AI and MLE | Graduating May 2026</span>
              </h3>
            </div>
            <div className="mt-8 text-center max-w-[720px] text-[0.9rem]">
              <p className="mb-3">
                I’m extremely passionate about transforming data into insights using analytics and AI, and right now, I’m exploring how AI can support healthcare and wellness! My experience thus far from my internships covers working on end-to-end pipelines, building ML models and dashboards.
              </p>
              <p>
                I’m someone who loves challenges that will enable me to prove myself, and I also love collaborating with driven individuals who share a passion for growth: people I can learn from and exchange ideas with. Outside of tech, you’ll usually find me listening to music or singing, reading a book, or sipping a coffee (or two...or three).
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center flex-shrink-0 mt-8 lg:mt-0">
            <img
              src={profile}
              alt="Sanjitha Rajesh — profile photo"
              className="w-[320px] sm:w-[320px] md:w-[340px] lg:w-[360px] rounded-xl shadow-soft"
            />
            <div className="mt-8 flex flex-wrap justify-center gap-6">
              <a className="font-mono uppercase tracking-wider border-2 border-border rounded-xl bg-bg px-4 py-2 text-xs sm:text-sm font-semibold hover:underline"
                 href="https://drive.google.com/file/d/1W-aw2LZvg90uVhlQOlPIZe7w_iUJYWxS/view?usp=sharing" target="_blank" rel="noreferrer">
                Resume
              </a>
              <a className="font-mono uppercase tracking-wider border-2 border-border rounded-xl bg-bg px-4 py-2 text-xs sm:text-sm font-semibold hover:underline"
                 href="https://www.linkedin.com/in/sanjitharajesh/" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
              <a className="font-mono uppercase tracking-wider border-2 border-border rounded-xl bg-bg px-4 py-2 text-xs sm:text-sm font-semibold hover:underline"
                 href="https://github.com/sanjitharajesh" target="_blank" rel="noreferrer">
                GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      <section aria-label="Scroll hint" className="mt-24 mb-6 flex flex-col items-center justify-center">
        <p className="font-mono mt-4 mb-2 text-[0.9rem] tracking-wide animate-bounce">scroll</p>
        <span className="mt-2 text-2xl animate-bounce" aria-hidden="true">↓</span>
      </section>
    </>
  );
}

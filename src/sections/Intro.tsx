import profile from "../assets/profilephoto.jpeg";

export default function Intro() {
  return (
    <>
      <section aria-label="Intro" className="mt-44 mb-2">
        <div className="max-w-[1040px] mx-auto px-8 flex flex-col lg:flex-row items-center justify-center gap-20 lg:gap-28">
          <div className="w-full lg:w-auto flex flex-col items-center text-center -mt-6 lg:-mt-10">
            <div className="font-anka font-normal text-[clamp(26px,3.2vw,34px)] leading-relaxed max-w-[880px] flex flex-col items-center gap-3">
              <span className="typing-wrap">
                {/* Ghost text reserves layout space */}
                <span className="typing-ghost" aria-hidden="true">
                  Hi, I'm <span className="font-semibold">Sanjitha Rajesh.</span>
                </span>

                {/* Animated text sits on top */}
                <span className="typing-line typing-abs">
                  Hi, I'm <span className="font-semibold">Sanjitha Rajesh.</span>
                </span>
              </span>
            </div>

            <div className="mt-4 font-inter text-center max-w-[880px] space-y-1">
              <p className="text-[0.95rem] font-semibold">MS In Statistics - Data Science at Rutgers University</p>
            </div>

            {/* Reformatted Boxed Title */}
            <div className="mt-5 font-inter text-center max-w-[1100px] w-full flex justify-center">
              <div className="w-full max-w-[1100px] transition-transform duration-300 hover:scale-105">
                <div className="bg-[#1a2a52]/95 text-[#e9f1ff] border border-[#2a3a6a] rounded-2xl shadow-soft p-7">
                  <div className="text-[0.95rem] leading-relaxed space-y-3">
                    <p>
                      Hi! I'm Sanjitha Rajesh, a data scientist, AI enthusiast, and avid developer and I build end-to-end AI and data solutions: scalable pipelines, ML models, and analytics dashboards that turn raw data into real decisions.
                    </p>
                    <p>
                      I love challenges that push me to prove myself, and I do my best work alongside people who are just as driven, the kind you can trade ideas with and genuinely learn from. Outside of tech, you'll usually find me listening to music or singing, reading a book, or sipping a coffee (or two...or three).
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center flex-shrink-0 mt-8 lg:mt-0">
            <img
              src={profile}
              alt="Sanjitha Rajesh – profile photo"
              className="w-[320px] sm:w-[320px] md:w-[340px] lg:w-[360px] rounded-xl shadow-soft transition-transform duration-200 hover:scale-105"
            />

            {/* CTA Buttons */}
            <div className="mt-6 w-full max-w-[200px] flex flex-col items-center gap-3">
              <a
                className="font-mono tracking-wide border-2 border-fg bg-fg text-bg px-5 py-2.5 text-sm font-semibold rounded-full hover:scale-105 transition-all duration-200 flex items-center justify-center gap-2"
                href="https://docs.google.com/document/d/1yazQmnziGaWhmrZ-YlGMZg3N-uLxkh245esOXcp1Orw/edit?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                <span>Resume</span>
              </a>
              <div className="flex flex-nowrap justify-center gap-3 w-full">
                <a
                  className="font-mono tracking-wide border-2 border-border bg-bg text-fg px-4 py-2 text-xs font-semibold rounded-full hover:border-fg hover:scale-105 transition-all duration-200 flex items-center gap-2"
                  href="https://www.linkedin.com/in/sanjitharajesh/"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
                <a
                  className="font-mono tracking-wide border-2 border-border bg-bg text-fg px-4 py-2 text-xs font-semibold rounded-full hover:border-fg hover:scale-105 transition-all duration-200 flex items-center gap-2"
                  href="https://github.com/sanjitharajesh"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section aria-label="Scroll hint" className="mt-16 mb-6 flex flex-col items-center justify-center">
        <p className="font-mono mt-4 mb-2 text-[0.9rem] tracking-wide animate-bounce">explore</p>
        <span className="mt-2 text-2xl animate-bounce" aria-hidden="true">↓</span>
      </section>
    </>
  );
}

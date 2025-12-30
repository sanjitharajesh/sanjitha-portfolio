import type { MouseEvent } from "react";
import profile from "../assets/profilephoto.jpeg";

export default function Intro() {
  const handleResumeClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (!window.confirm("Enable resume downloads on this site?")) {
      event.preventDefault();
    }
  };

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
              <p className="text-[0.95rem] font-semibold">MSDS at Rutgers University (Graduating May 2026)</p>
              
            </div>

            {/* Reformatted Boxed Title */}
            <div className="mt-5 font-inter text-center max-w-[1100px] w-full flex justify-center">
              <div className="w-full max-w-[1100px] transition-transform duration-300 hover:scale-105">
                <div className="bg-bg/80 text-fg border border-border rounded-2xl shadow-soft backdrop-blur-sm p-7 min-h-[320px] flex flex-col justify-center">
                  <div className="text-[0.95rem] leading-relaxed space-y-3">
                    <p>
                      I'm extremely passionate about transforming data into insights using analytics and AI, and right now, I'm exploring how AI can support healthcare and wellness! My experience thus far from my internships covers working on end-to-end pipelines, building ML models and dashboards.
                    </p>
                    <p>
                      I'm someone who loves challenges that will enable me to prove myself, and I also love collaborating with driven individuals who share a passion for growth: people I can learn from and exchange ideas with. Outside of tech, you'll usually find me listening to music or singing, reading a book, or sipping a coffee (or two...or three).
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
              className="w-[320px] sm:w-[320px] md:w-[340px] lg:w-[360px] rounded-xl shadow-soft"
            />

            {/* CTA Buttons */}
            <div className="mt-6 w-full max-w-[200px] flex flex-col items-center gap-3">
              <a
                className="font-mono tracking-wide border-2 border-fg bg-fg text-bg px-5 py-2.5 text-sm font-semibold rounded-full hover:scale-105 transition-all duration-200 flex items-center justify-center gap-2 w-full"
                href="https://drive.google.com/uc?export=download&id=1ILUjO6Hk3kJ2uOHhCGHQSru9K-OQkKOv"
                target="_blank"
                rel="noreferrer"
                download="Sanjitha_Rajesh_Resume.pdf"
                onClick={handleResumeClick}
              >
                <span className="text-base" aria-hidden="true">↓</span>
                <span>Download my CV</span>
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

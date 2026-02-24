export default function Contact() {
  return (
    <>
      <h2 id="contact" className="font-mono font-bold text-[clamp(22px,3.2vw,30px)] mt-24 mb-2 md:mt-64 scroll-mt-36 text-center">
        <span className="relative inline-block hover:scale-110 transition-all duration-200 group">
          contact me
          <span className="absolute bottom-[-4px] left-0 w-0 h-[2px] bg-fg group-hover:w-full transition-all duration-300"></span>
        </span>
      </h2>
      <section className="bg-[#1a2a52]/95 text-[#e9f1ff] border border-[#2a3a6a] rounded-2xl p-6 shadow-soft mt-3 font-medium text-center max-w-[510px] mx-auto min-h-[220px] flex flex-col items-center justify-center gap-4 transition-transform duration-200 hover:scale-105">
        <p className="text-[0.95rem] leading-relaxed">
          If you’re looking to collaborate, or have an idea, let’s chat!
        </p>
        <p className="flex items-center gap-2 font-mono text-[0.9rem]">
          <span aria-hidden="true">📍</span>
          <span>New Brunswick, NJ</span>
        </p>
        <p className="font-mono text-[0.9rem]">
          <a className="underline hover:opacity-90" href="mailto:sanjitharajesh03@gmail.com">sanjitharajesh03@gmail.com</a>
        </p>
      </section>
    </>
  );
}

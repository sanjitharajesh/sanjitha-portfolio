export default function Contact() {
  return (
    <>
      <h2 id="contact" className="font-mono font-bold text-[clamp(22px,3.2vw,30px)] mt-24 mb-3 md:mt-64 scroll-mt-36 text-center">
        Contact Me
      </h2>
      <section className="bg-bg border border-border rounded-2xl p-4 shadow-soft mt-4 font-medium text-center">
        <p>If you’re looking to collaborate, or have an idea, let’s chat!</p>
        <div className="mt-4 flex flex-wrap justify-center gap-7">
          <a className="font-mono uppercase tracking-wider border border-border rounded-xl bg-bg px-3 py-2 text-xs sm:text-sm font-normal hover:underline" href="mailto:you@example.com">
            Email Me
          </a>
        </div>
      </section>
    </>
  );
}

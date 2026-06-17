import "./index.css";
import TopBar from "./components/TopBar";
import Intro from "./sections/Intro";
import Experience from "./sections/Experience";
import Education from "./sections/Education";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Research from "./sections/Research";
import Contact from "./sections/Contact";

export default function App() {
  return (
    <div className="bg-bg text-fg font-inter antialiased">
      <TopBar />
      <main className="max-w-[1040px] mx-auto px-8">
        <Intro />
        <Experience />
        <Projects />
        <Skills />
        <Research />
        <Education />
        <Contact />
        <footer className="text-center mt-16 pb-6">
          <p className="text-sm opacity-90">© 2026 Sanjitha Rajesh</p>
          <p className="text-xs opacity-80 mt-2">Built with React, TypeScript, TailwindCSS</p>
        </footer>
      </main>
    </div>
  );
}

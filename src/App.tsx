import "./index.css";
import TopBar from "./components/TopBar";
import Nav from "./components/Nav";
import Intro from "./sections/Intro";
import Experience from "./sections/Experience";
import Education from "./sections/Education";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Contact from "./sections/Contact";

export default function App() {
  return (
    <div className="bg-bg text-fg font-inter antialiased">
      <TopBar />
      <Nav />
      <main className="max-w-[1040px] mx-auto px-8">
        <Intro />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Contact />
        <footer className="text-center mt-16 pb-6">
          <p className="text-sm opacity-90">© 2025 Sanjitha Rajesh</p>
          <p className="text-xs opacity-80 mt-2">Built with React, TypeScript, TailwindCSS</p>
        </footer>
      </main>
    </div>
  );
}

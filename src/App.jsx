import { Hero } from "./sections/Hero";
import Header from "./components/Header";
import { Projects } from "./sections/Projects";
import { Skills } from "./sections/Skills";
import { Experience } from "./sections/Experience";
import { Contact } from "./sections/Contact";
import { Education } from "./sections/Education";
function App() {

  return (
    <>
      <main className="bg-bg-base min-h-screen">
        <Header />
        <Hero />
        <Education />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
      </main>
    </>
  )
}

export default App;

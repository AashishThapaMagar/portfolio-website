import { Nav, ScrollBar, Spotlight } from "./components/Chrome";
import { Contact, Footer } from "./components/Contact";
import { Hero, Stats, Ticker } from "./components/Hero";
import { Projects } from "./components/Projects";
import { Showcase } from "./components/Showcase";
import { Skills, Story } from "./components/Story";

export default function App() {
  return (
    <>
      <a className="skip" href="#game">
        Skip to content
      </a>
      <ScrollBar />
      <Spotlight />
      <div className="grain" aria-hidden="true" />
      <Nav />
      <main>
        <Hero />
        <Ticker />
        <Stats />
        <Showcase />
        <Projects />
        <Story />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

import { useEffect, useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Craft from "./components/Craft";
import Cursor from "./components/Cursor";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Skills from "./components/Skills";
import Work from "./components/Work";

export default function App() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? (window.scrollY / max) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <Cursor />
      <div className="progress" style={{ width: `${progress}%` }} />
      <Nav />
      <Hero />
      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          {Array.from({ length: 2 }).map((_, i) => (
            <span key={i}>
              Flutter <i>/</i> iOS <i>/</i> Python <i>/</i> React <i>/</i> WordPress <i>/</i> Shopify{" "}
              <i>/</i> Unity <i>/</i> Make.com <i>/</i> Notion <i>/</i> Excel VBA <i>/</i>
            </span>
          ))}
        </div>
      </div>
      <Work />
      <Skills />
      <About />
      <Craft />
      <Contact />
      <footer className="footer">
        <span>Alice · Professional IT Developer · United Kingdom</span>
        <span>Precision in every detail. Dedication in every project. Quality in every delivery.</span>
      </footer>
    </>
  );
}

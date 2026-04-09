import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import FocusAreas from './components/FocusAreas';
import StrategicApproach from './components/StrategicApproach';
import Careers from './components/Careers';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [autoScroll, setAutoScroll] = useState(true);

  useEffect(() => {
    if (!autoScroll) return;

    // Force auto-scroll every 2 seconds
    const interval = setInterval(() => {
      if (Math.ceil(window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [autoScroll]);

  return (
    <div className="min-h-screen bg-[#f7f9f8] relative">
      <Navbar />
      <main>
        <Hero />
        <FocusAreas />
        <StrategicApproach />
        <Careers />
        <About />
        <Contact />
      </main>
      <Footer />

      {/* Floating Auto-scroll Toggle */}
      <button
        onClick={() => setAutoScroll(!autoScroll)}
        className="fixed bottom-6 right-6 z-[100] bg-white text-paramarsh-dark shadow-xl hover:shadow-2xl border border-gray-100 rounded-full p-4 flex items-center justify-center transition-all hover:scale-105"
        title={autoScroll ? "Pause Auto-scroll" : "Play Auto-scroll"}
      >
        {autoScroll ? (
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" /></svg>
        ) : (
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
        )}
      </button>
    </div>
  );
}

export default App;

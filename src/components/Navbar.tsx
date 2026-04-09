import { useState, useEffect } from 'react';

const links = [
  { label: 'Who we are', href: '#about' },
  { label: 'What we do', href: '#focus' },
  { label: 'How we do it', href: '#approach' },
  { label: 'Careers', href: '#careers' },
];

const tickerItems = [
  'paramarsh global sustainable development private limited',
  'paramarsh global sustainable development private limited',
  'paramarsh global sustainable development private limited',
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > window.innerHeight / 2);

      const sectionIds = links.map(l => l.href.substring(1));

      const sections = sectionIds
        .map(id => document.getElementById(id))
        .filter(el => el !== null)
        .sort((a, b) => {
           const rectA = a!.getBoundingClientRect();
           const rectB = b!.getBoundingClientRect();
           return rectA.top - rectB.top;
        });

      let currentSection = '';
      const triggerPoint = window.innerHeight * 0.4; // 40% down the screen

      for (const element of sections) {
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= triggerPoint) {
            currentSection = `#${element.id}`;
          }
        }
      }
      
      // Fallback: If we're at the very top, set the first sorted section active
      if (window.scrollY < 50 && sections.length > 0) {
        currentSection = `#${sections[0]!.id}`;
      }
      
      setActiveLink(currentSection);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll(); // initial check
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on resize
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMenuOpen(false); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">

      {/* ── Ticker ── */}
      <div className={`bg-paramarsh-green/15 backdrop-blur-sm border-b border-paramarsh-green/20 overflow-hidden transition-all duration-700 ease-in-out ${scrolled ? 'max-h-12 opacity-100 py-1.5' : 'max-h-0 opacity-0 py-0 border-transparent'}`}>
        <div
          className="whitespace-nowrap animate-marquee text-paramarsh-green font-display font-semibold text-[10px] tracking-[0.22em] uppercase"
          aria-hidden
        >
          {[...tickerItems, ...tickerItems].map((t, i) => (
            <span key={i} className="inline-flex items-center gap-6 mr-10">
              {t}
              <span className="opacity-50 text-[8px]">◆</span>
            </span>
          ))}
        </div>
      </div>

      {/* ── Main bar ── */}
      <div
        className={`transition-all duration-500 border-b ${scrolled
          ? 'bg-white/40 backdrop-blur-sm md:backdrop-blur-xl border-white/60 shadow-[0_4px_24px_rgba(0,0,0,0.08)]'
          : 'bg-transparent border-transparent shadow-none backdrop-blur-none'
          }`}
      >
        <nav className="max-w-[1440px] w-full mx-auto px-6 lg:px-8 h-16 flex items-center justify-between gap-8">

          {/* Logo Lockup */}
          <a
            href="#"
            className="flex items-center gap-3 flex-shrink-0 group focus:outline-none"
            aria-label="Paramarsh home"
          >
            {/* Inline Vector Logo Mark */}
            <svg
              className="h-8 md:h-9 lg:h-10 w-auto shrink-0 text-paramarsh-dark"
              viewBox="0 0 100 100"
              fill="currentColor"
            >
              {/* Left Flame Stem */}
              <path d="M 33 15 L 46 15 L 46 38 C 28 48 28 70 40 95 C 10 80 8 45 20 25 C 24 18 28 15 33 15 Z" />

              {/* Top-Right Green Head (Disconnected) */}
              <path d="M 50 15 L 85 15 L 85 45 L 66 45 L 66 32 L 50 32 Z" fill="#2ecc71" className="group-hover:brightness-110 transition-all duration-200" />

              {/* Bottom-Right Bowl */}
              <path d="M 66 53 L 85 53 C 85 85 60 95 46 86 L 46 68 C 60 70 66 65 66 53 Z" />
            </svg>

            {/* Typography */}
            <div className="flex flex-col justify-center">
              <span className="text-xl md:text-2xl font-display font-black text-paramarsh-dark uppercase tracking-tight leading-[0.9] group-hover:text-paramarsh-green transition-colors duration-200">
                Paramarsh
              </span>
              <span className="text-[0.4rem] md:text-[0.45rem] lg:text-[0.5rem] font-sans font-bold text-gray-500 uppercase tracking-[0.14em] mt-1 whitespace-nowrap">
                Global Sustainable Development
              </span>
            </div>
          </a>

          {/* Desktop links */}
          <div className={`hidden md:flex items-center gap-1 transition-all duration-700 ease-in-out ${scrolled ? 'opacity-100 pointer-events-auto translate-y-0' : 'opacity-0 pointer-events-none -translate-y-4'}`}>
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setActiveLink(l.href)}
                className={`relative px-3.5 py-1.5 text-xs font-display font-semibold uppercase tracking-widest rounded-full transition-all duration-200 ${activeLink === l.href
                  ? 'text-white bg-paramarsh-dark shadow-sm'
                  : 'text-gray-500 hover:text-paramarsh-dark hover:bg-gray-100/70'
                  }`}
              >
                {l.label}
                {/* Active dot */}
                {activeLink === l.href && (
                  <span className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-white/50" />
                )}
              </a>
            ))}
          </div>

          {/* Right side */}
          <div className={`hidden md:flex items-center gap-3 flex-shrink-0 transition-all duration-700 ease-in-out ${scrolled ? 'opacity-100 pointer-events-auto translate-y-0' : 'opacity-0 pointer-events-none -translate-y-4'}`}>
            {/* Divider */}
            <div className="w-px h-5 bg-gray-200" />
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 bg-paramarsh-dark text-white text-xs font-display font-bold uppercase tracking-widest px-5 py-2.5 rounded-full hover:bg-paramarsh-green transition-all duration-200 shadow-sm hover:shadow-[0_4px_16px_rgba(39,174,96,0.3)] hover:-translate-y-px"
            >
              Contact
              <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className={`md:hidden w-9 h-9 flex flex-col items-center justify-center gap-1.5 rounded-lg hover:bg-gray-100 transition-all duration-700 ${scrolled ? 'opacity-100 pointer-events-auto translate-y-0' : 'opacity-0 pointer-events-none -translate-y-4'}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            <span className={`block w-5 h-0.5 bg-paramarsh-dark rounded-full transition-all duration-200 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-5 h-0.5 bg-paramarsh-dark rounded-full transition-opacity duration-200 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-5 h-0.5 bg-paramarsh-dark rounded-full transition-all duration-200 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </nav>
      </div>

      {/* ── Mobile dropdown ── */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-white/95 backdrop-blur-xl border-b border-gray-100 shadow-lg ${menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
      >
        <div className="max-w-[1440px] w-full mx-auto px-6 py-4 flex flex-col gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => { setMenuOpen(false); setActiveLink(l.href); }}
              className="flex items-center gap-3 px-3 py-3 text-xs font-display font-semibold uppercase tracking-widest text-gray-600 hover:text-paramarsh-green hover:bg-paramarsh-green/5 rounded-xl transition-colors"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-paramarsh-green/40 flex-shrink-0" />
              {l.label}
            </a>
          ))}
          <div className="mt-3 pt-3 border-t border-gray-100">
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full bg-paramarsh-dark text-white text-xs font-display font-bold uppercase tracking-widest px-5 py-3 rounded-full hover:bg-paramarsh-green transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>

    </header>
  );
};

export default Navbar;

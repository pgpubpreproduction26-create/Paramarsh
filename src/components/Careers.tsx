





const Careers = () => {

  return (
    <section id="careers" className="w-full bg-[#f7f9f8] py-28 min-h-[100svh] flex flex-col justify-center">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* ── Header ── */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start mb-20">
          <div className="lg:w-2/5">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-paramarsh-dark tracking-tight leading-tight mb-5">
              Learn, Build and Evolve
            </h2>
            <div className="text-lg text-gray-500 font-sans leading-relaxed flex flex-col gap-3">
              <span className="block">
                We are a small team with ambitious goals
              </span>
              <span className="block font-bold text-paramarsh-dark">
                We welcome curious and energetic individuals who value ownership, adaptability, and impactful work
              </span>
            </div>
            <a
              href="#contact"
              className="mt-7 inline-flex items-center gap-2 bg-paramarsh-green text-white text-sm font-semibold px-6 py-3 rounded-full hover:bg-green-600 transition-all hover:-translate-y-0.5 hover:shadow-md"
            >
              Get in Touch
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>

          {/* Hero image */}
          <div className="lg:w-3/5 w-full relative">
            <div
              aria-hidden
              className="absolute inset-0 translate-x-3 translate-y-3 rounded-[20px] opacity-20 pointer-events-none"
              style={{ background: '#27ae60' }}
            />
            <div className="relative overflow-hidden rounded-[20px] shadow-[0_20px_60px_rgba(0,0,0,0.10)]">
              <img
                src="/careers-hero.webp"
                alt="Paramarsh team collaborating in a bright modern workspace"
                className="w-full h-72 lg:h-96 object-cover object-center"
              />
              {/* Overlay badge */}
              <div className="absolute bottom-5 left-5">
                <div className="bg-white/90 backdrop-blur-sm rounded-xl px-4 py-3 shadow-sm flex items-center gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-paramarsh-green animate-pulse" />
                  <span className="text-xs font-display font-bold text-paramarsh-dark uppercase tracking-wider">

                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>




        {/* ── CTA Banner ── */}
        <div className="mt-16 rounded-2xl bg-paramarsh-subDark px-8 py-12 md:px-14 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="text-2xl md:text-3xl font-display font-bold text-white tracking-tight mb-2">
              Don't see the right role?
            </h3>
            <p className="text-gray-400 font-sans text-base">
              We're always looking for exceptional people<br className="hidden md:block" />Send us a speculative application
            </p>
          </div>
          <a
            href="#contact"
            className="flex-shrink-0 inline-flex items-center gap-2 bg-paramarsh-green text-white text-sm font-semibold px-7 py-3.5 rounded-full hover:bg-green-600 transition-all hover:-translate-y-0.5 hover:shadow-lg"
          >
            Get in Touch
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>

      </div>
    </section>
  );
};

export default Careers;

const pillars = [
  {
    id: 1,
    image: '/roman_pillar_1.webp',
    title: 'Research',
    desc: 'Grounded exploration to understand context, opportunity, and direction',
  },
  {
    id: 2,
    image: '/roman_pillar_2.webp',
    title: 'Innovation',
    desc: 'Innovation : Translating ideas into thoughtful, future-ready concepts',
  },
  {
    id: 3,
    image: '/roman_pillar_3.webp',
    title: 'Scale',
    desc: 'Building with the intent for long-term relevance and wider impact',
  },
];

const StrategicApproach = () => {
  return (
    <section id="approach" className="w-full bg-paramarsh-subDark py-28 relative overflow-hidden min-h-[100svh] flex flex-col justify-center">
      {/* Decorative ring */}
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 -left-32 w-96 h-96 rounded-full border border-white/5"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-16 -left-16 w-64 h-64 rounded-full border border-white/5"
      />

      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-20">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white tracking-tight mb-5">
            Our Strategic Approach
          </h2>
          <p className="text-gray-400 font-sans text-lg leading-relaxed">
            We believe in shaping ideas with clarity and purpose
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((p) => (
            <div
              key={p.id}
              className="group relative h-80 md:h-96 flex flex-col justify-end p-8 overflow-hidden rounded-2xl bg-paramarsh-subDark border border-white/10 group-hover:border-transparent transition-all duration-500 cursor-default"
            >
              {/* Background Pillar Image */}
              <div className="absolute inset-0 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] opacity-100 group-hover:opacity-0 group-hover:scale-105">
                <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-paramarsh-subDark via-transparent to-transparent opacity-90" />
              </div>

              {/* Emerging Content */}
              <div className="relative z-10 flex flex-col opacity-0 translate-y-12 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:opacity-100 group-hover:translate-y-0 delay-75">
                <h3 className="text-2xl font-display font-semibold text-white tracking-tight mb-3">
                  {p.title}
                </h3>
                <p className="text-gray-400 font-sans text-sm leading-relaxed mb-6">
                  {p.desc}
                </p>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-sm font-medium text-paramarsh-green link-underline w-fit"
                >
                  Learn More
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StrategicApproach;

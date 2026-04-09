const focusAreas = [
  {
    sdg: 'SDG 03',
    title: 'Good Health and Well-Being',
    desc: 'Supporting thoughtful, human-centered ideas that contribute to healthier lives and outcomes',
  },
  {
    sdg: 'SDG 12',
    title: 'Responsible Consumption and Production',
    desc: 'Encouraging better use of resources, smarter systems, and lower-waste thinking',
  },
  {
    sdg: 'SDG 04',
    title: 'Quality Education',
    desc: 'Advancing learning experiences, access, and capability-building with a future-ready lens',
  },
  {
    sdg: 'SDG 09',
    title: 'Industry, Innovation, and Infrastructure',
    desc: 'Building for practical innovation, resilient systems, and sustainable progress',
  },
];

const FocusAreas = () => {
  return (
    <section id="focus" className="w-full bg-white py-28 min-h-[100svh] flex flex-col justify-center">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-paramarsh-dark tracking-tight">
              Our Focus Areas
            </h2>
          </div>
          <p className="text-gray-500 font-sans text-base max-w-xs leading-relaxed">
          </p>
        </div>

        {/* List */}
        <div className="flex flex-col divide-y divide-gray-100">
          {focusAreas.map((area, i) => (
            <div
              key={i}
              className="group flex flex-col md:flex-row md:items-center justify-between gap-4 py-8 hover:bg-[#f7f9f8] -mx-4 px-4 rounded-xl transition-colors duration-300"
            >
              {/* SDG badge */}
              <div className="flex-shrink-0 w-24">
                <span className="inline-block text-xs font-bold font-display tracking-widest text-paramarsh-green bg-paramarsh-green/10 px-3 py-1 rounded-full">
                  {area.sdg}
                </span>
              </div>

              {/* Title */}
              <div className="flex-1 text-2xl md:text-3xl font-display font-bold text-paramarsh-dark group-hover:text-paramarsh-green transition-colors duration-300 tracking-tight">
                {area.title}
              </div>

              {/* Description */}
              <div className="md:max-w-xs text-sm text-gray-500 font-sans leading-relaxed">
                {area.desc}
              </div>

              {/* Arrow */}
              <div className="flex-shrink-0 w-10 h-10 rounded-full border border-gray-200 group-hover:border-paramarsh-green group-hover:bg-paramarsh-green flex items-center justify-center transition-all duration-300">
                <svg
                  className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors"
                  viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FocusAreas;

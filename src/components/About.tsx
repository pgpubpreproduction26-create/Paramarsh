const About = () => {
  return (
    <section id="about" className="w-full bg-white py-28 min-h-[100svh] flex flex-col justify-center">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Top row - Text */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 mb-20">
          <div className="lg:w-2/5 flex items-center justify-start relative group">
            {/* Subtle glow underneath to enhance blending */}
            <div className="hidden md:block absolute top-1/2 left-0 md:left-12 -translate-y-1/2 w-48 h-48 bg-paramarsh-green/10 blur-[60px] rounded-full pointer-events-none transition-opacity duration-700 group-hover:opacity-100 opacity-60" />

            <img
              src="/logo.png"
              alt="About Paramarsh"
              className="w-48 md:w-56 h-auto object-contain relative z-10 transition-transform duration-1000 ease-out group-hover:scale-[1.03]"
              style={{
                maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 65%)',
                WebkitMaskImage: 'radial-gradient(ellipse at center, black 40%, transparent 65%)'
              }}
            />
          </div>

          <div className="lg:w-3/5 flex flex-col gap-6 justify-center">
            <p className="text-lg text-gray-600 font-sans leading-relaxed">
              We are a thoughtful, multidisciplinary team focused on building ideas with long-term value             </p>
            <p className="text-lg text-gray-600 font-sans leading-relaxed">
              Our work is grounded in the UN Sustainable Development Goals — a shared blueprint for a more equitable and resilient world
            </p>
          </div>
        </div>

        {/* Full-width image */}
        <div className="overflow-hidden group flex justify-center items-center py-4 relative">
          {/* Glowing Effect Background */}
          <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 sm:w-96 sm:h-96 bg-amber-400/30 blur-[80px] rounded-full pointer-events-none transition-opacity duration-700 group-hover:opacity-50"></div>

          <img
            src="/globe-hands-light.png"
            alt="Hands holding a glowing globe"
            className="w-full max-w-lg h-auto object-cover transition-transform duration-700 group-hover:scale-[1.05] mx-auto relative z-10"
            style={{
              maskImage: 'radial-gradient(circle at center, black 35%, transparent 75%)',
              WebkitMaskImage: 'radial-gradient(circle at center, black 35%, transparent 75%)'
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default About;

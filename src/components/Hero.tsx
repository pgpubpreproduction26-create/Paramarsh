import { useState, useEffect, useRef } from 'react';

const slides = [
  {
    src: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    alt: 'Sustainable Architecture',
    label: 'Urban Resilience',
  },
  {
    src: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    alt: 'Clean Energy',
    label: 'Clean Energy Access',
  },
  {
    src: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    alt: 'Greenery and Nature',
    label: 'Circular Systems',
  },
  {
    src: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    alt: 'Collaborative Work',
    label: 'Cross-Sector Collaboration',
  },
];

const INTERVAL_MS = 2500;
const FADE_DURATION_MS = 600;

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState<number | null>(null);
  const [fading, setFading] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const goTo = (index: number) => {
    if (fading || index === current) return;
    setPrev(current);
    setFading(true);
    setTimeout(() => {
      setCurrent(index);
      setPrev(null);
      setFading(false);
    }, FADE_DURATION_MS);
  };

  const advance = () => {
    const next = (current + 1) % slides.length;
    goTo(next);
  };

  // Auto-rotate
  useEffect(() => {
    timerRef.current = setTimeout(advance, INTERVAL_MS);
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [current, fading]);

  return (
    <section className="relative flex min-h-[100svh] w-full items-center overflow-hidden bg-[#f7f9f8] pt-32 pb-16 lg:pt-36 lg:pb-20">
      {/* Soft decorative blob */}
      <div
        aria-hidden
        className="hidden md:block pointer-events-none absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full opacity-30"
        style={{ background: 'radial-gradient(circle, #2ecc71 0%, transparent 70%)' }}
      />

      <div className="max-w-[1440px] w-full mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse lg:flex-row lg:items-center gap-12 lg:gap-16">

        {/* ── Text Side ── */}
        <div className="w-full lg:w-[42%] lg:flex-shrink-0 space-y-7 lg:pr-8 xl:pr-12">

          <h1 className="text-5xl lg:text-6xl xl:text-7xl font-display font-bold text-paramarsh-dark leading-[1.05] tracking-tight">
            Building a more<br />
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: 'linear-gradient(135deg, #2ecc71, #27ae60)' }}
            >
              responsible
            </span>{' '}
            future
          </h1>

          <p className="text-lg text-gray-500 font-sans leading-relaxed max-w-lg">
            Advancing sustainable systems through research,<br className="hidden sm:block" />
            innovation, and cross-sector collaboration
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#approach"
              className="inline-flex items-center gap-2 bg-paramarsh-dark text-white text-sm font-semibold px-7 py-3.5 rounded-full transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(14,38,52,0.25)]"
            >
              Our Strategic Approach
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a
              href="#about"
              className="link-underline text-sm font-medium text-gray-500 hover:text-paramarsh-dark transition-colors"
            >
              Learn About Us
            </a>
          </div>
        </div>

        {/* ── Image Carousel Side ── */}
        <div className="w-full lg:flex-1 lg:min-w-0 flex flex-col gap-5">

          {/* Frame */}
          <div className="relative">
            {/* Green depth shadow */}
            <div
              aria-hidden
              className="absolute inset-0 translate-x-3 translate-y-3 rounded-[20px] opacity-20 pointer-events-none"
              style={{ background: '#27ae60' }}
            />

            {/* Carousel container — fixed aspect ratio */}
            <div
              className="relative overflow-hidden rounded-[20px] shadow-[0_20px_60px_rgba(0,0,0,0.12)]"
              style={{ aspectRatio: '5 / 4' }}
            >
              {/* Stack all images; only current is visible */}
              {slides.map((slide, i) => (
                <img
                  key={slide.src}
                  src={slide.src}
                  alt={slide.alt}
                  className="absolute inset-0 w-full h-full object-cover"
                  style={{
                    opacity: i === current ? 1 : 0,
                    transition: `opacity ${FADE_DURATION_MS}ms ease-in-out`,
                    transform: i === current ? 'scale(1.03)' : 'scale(1)',
                    transitionProperty: 'opacity, transform',
                    transitionDuration: `${FADE_DURATION_MS}ms`,
                    transitionTimingFunction: 'ease-in-out',
                    zIndex: i === current ? 2 : (i === prev ? 1 : 0),
                  }}
                />
              ))}

              {/* Subtle dark gradient at bottom for label legibility */}
              <div
                aria-hidden
                className="absolute inset-x-0 bottom-0 h-24 pointer-events-none z-10"
                style={{ background: 'linear-gradient(to top, rgba(14,38,52,0.35) 0%, transparent 100%)' }}
              />

              {/* Slide label */}
              <div className="absolute bottom-4 left-5 z-20">
                <span className="text-white text-xs font-display font-semibold tracking-widest uppercase opacity-90">
                  {slides[current].label}
                </span>
              </div>
            </div>
          </div>

          {/* Dot indicators + progress bar */}
          <div className="flex items-center gap-3 px-1">
            {slides.map((_, i) => (
              <button
                key={i}
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => goTo(i)}
                className="relative flex-1 h-1 rounded-full overflow-hidden bg-gray-200 cursor-pointer focus:outline-none"
              >
                {/* Active fill animation */}
                <span
                  className="absolute inset-y-0 left-0 rounded-full bg-paramarsh-green"
                  style={{
                    width: i === current ? '100%' : '0%',
                    transition: i === current
                      ? `width ${INTERVAL_MS}ms linear`
                      : 'width 0.3s ease',
                  }}
                />
              </button>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;

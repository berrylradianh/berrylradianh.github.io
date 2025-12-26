import { useScrollReveal } from '../hooks/useScrollReveal';

const Hero = () => {
  const { ref: heroRef, isVisible } = useScrollReveal();

  return (
    <section
      id="profile"
      ref={heroRef as React.RefObject<HTMLElement>}
      className="relative min-h-screen flex items-center justify-center pt-20 px-6 lg:px-8 overflow-hidden cyber-grid"
    >
      {/* Gradient Orbs Background */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-neon-cyan/10 rounded-full blur-3xl animate-pulse-slow" />
      <div
        className="absolute bottom-20 right-10 w-96 h-96 bg-neon-purple/10 rounded-full blur-3xl animate-pulse-slow"
        style={{ animationDelay: '1s' }}
      />

      <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20">
          {/* Profile Image */}
          <div
            className={`section__pic-container relative group transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-magenta rounded-full blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
            <div className="relative w-72 h-72 lg:w-96 lg:h-96 rounded-full overflow-hidden neon-border-cyan animate-float">
              <img
                src="/assets/profile.png"
                alt="Berryl Radian Hamesha - Software Engineer"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Hero Text Content */}
          <div
            className={`section__text text-center lg:text-left max-w-2xl transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <p className="text-gray-400 text-lg lg:text-xl mb-4 font-light tracking-wide">
              Hello, I'm
            </p>
            <h1 className="text-5xl lg:text-7xl font-bold mb-6">
              <span className="text-gradient">Berryl Radian</span>
              <br />
              <span className="neon-text-cyan">Hamesha</span>
            </h1>
            <p className="text-2xl lg:text-3xl text-gray-300 mb-8 font-semibold">
              <span className="neon-text-purple">Software Engineer</span>
            </p>
            <p className="text-gray-400 text-base lg:text-lg mb-10 leading-relaxed max-w-xl">
              Building scalable software systems, integrating{' '}
              <span className="text-neon-purple font-semibold">AI-driven features</span> and{' '}
              <span className="text-neon-purple font-semibold">Web3 architectures</span> for
              high-performance applications.
            </p>

            {/* CTA Buttons & Social Links */}
            <div className="btn-container flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start mb-10">
              <button
                className="neon-btn"
                onClick={() => window.open('/assets/cv.pdf')}
                aria-label="Download CV"
              >
                Download CV
              </button>

              {/* Social Links */}
              <div id="socials-container" className="flex gap-4">
                <a
                  href="https://www.linkedin.com/in/berryl-radian-hamesha-475936205/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card p-3 hover-glow-cyan rounded-lg transition-all duration-300 bg-[#0077b5] hover:bg-[#006399]"
                  aria-label="Visit LinkedIn profile"
                >
                  <img src="/assets/linkedin.png" alt="LinkedIn" className="w-8 h-8 brightness-0 invert" />
                </a>
                <a
                  href="https://github.com/berrylradianh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card p-3 hover-glow-cyan rounded-lg transition-all duration-300 bg-[#333333] hover:bg-[#24292e]"
                  aria-label="Visit GitHub profile"
                >
                  <img src="/assets/github.png" alt="GitHub" className="w-8 h-8 brightness-0 invert" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-neon-cyan rounded-full flex justify-center p-2">
          <div className="w-1 h-3 bg-neon-cyan rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

import { useScrollReveal } from '../hooks/useScrollReveal';

const About = () => {
  const { ref: aboutRef, isVisible } = useScrollReveal();

  return (
    <section
      id="about"
      ref={aboutRef as React.RefObject<HTMLElement>}
      className="relative min-h-screen py-20 px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-neon-purple text-lg font-semibold mb-3 tracking-wide uppercase">
            Get To Know More
          </p>
          <h2 className="text-4xl lg:text-6xl font-bold text-gradient mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-cyan to-neon-purple mx-auto" />
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          {/* Profile Picture */}
          <div
            className={`lg:w-1/3 transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/20 to-neon-purple/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
              <img
                src="/assets/about-pic.png"
                alt="Berryl Radian Hamesha"
                className="relative w-full rounded-2xl neon-border-purple"
              />
            </div>
          </div>

          {/* About Content */}
          <div
            className={`lg:w-2/3 transition-all duration-700 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {/* Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {/* Experience Card */}
              <div className="glass-card glass-card-hover p-6 text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-neon-cyan/10 flex items-center justify-center">
                    <svg className="w-7 h-7 text-neon-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-bold neon-text-cyan mb-2">Experience</h3>
                <p className="text-gray-400">
                  3 years
                  <br />
                  Software Engineering
                </p>
              </div>

              {/* Education Card */}
              <div className="glass-card glass-card-hover p-6 text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-neon-purple/10 flex items-center justify-center">
                    <svg className="w-7 h-7 text-neon-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-bold neon-text-purple mb-2">Education</h3>
                <p className="text-gray-400">
                  Bachelor Degree
                  <br />
                  Computer Science
                </p>
              </div>
            </div>

            {/* Bio Text */}
            <div className="glass-card p-8">
              <p className="text-gray-300 leading-relaxed text-base lg:text-lg">
                <span className="text-neon-cyan font-semibold">Software Engineer</span> with
                expertise in software engineering, passionate about building robust and scalable
                systems while embracing emerging technologies such as{' '}
                <span className="text-neon-purple font-semibold">artificial intelligence</span> and{' '}
                <span className="text-neon-purple font-semibold">Web3</span>.
              </p>
              <p className="text-gray-300 leading-relaxed text-base lg:text-lg mt-4">
                Interested in how intelligent systems and decentralized architectures can reshape
                modern applications. Comfortable working in dynamic environments, eager to learn,
                and constantly challenged by complex technical problems that encourage long-term
                growth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

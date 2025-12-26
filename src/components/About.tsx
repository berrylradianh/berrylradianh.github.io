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
                    <img src="/assets/experience.png" alt="Experience" className="w-7 h-7 opacity-80" />
                  </div>
                </div>
                <h3 className="text-xl font-bold neon-text-cyan mb-2">Experience</h3>
                <p className="text-gray-400">
                  2 years
                  <br />
                  Backend Development
                </p>
              </div>

              {/* Education Card */}
              <div className="glass-card glass-card-hover p-6 text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-neon-purple/10 flex items-center justify-center">
                    <img src="/assets/education.png" alt="Education" className="w-7 h-7 opacity-80" />
                  </div>
                </div>
                <h3 className="text-xl font-bold neon-text-purple mb-2">Education</h3>
                <p className="text-gray-400">
                  State Polytechnic of Malang 2020
                  <br />
                  Informatics
                </p>
              </div>
            </div>

            {/* Bio Text */}
            <div className="glass-card p-8">
              <p className="text-gray-300 leading-relaxed text-base lg:text-lg">
                Final year student of Politeknik Negeri Malang, majoring in{' '}
                <span className="text-neon-cyan font-semibold">Informatics</span>. Have sufficient
                knowledge in the field of information and technology, especially in{' '}
                <span className="text-neon-purple font-semibold">Software Engineering</span> with
                relevant certifications.
              </p>
              <p className="text-gray-300 leading-relaxed text-base lg:text-lg mt-4">
                Currently studying{' '}
                <span className="text-neon-cyan font-semibold">React JS</span>,{' '}
                <span className="text-neon-cyan font-semibold">Express JS</span>,{' '}
                <span className="text-neon-cyan font-semibold">Blockchain</span>, and{' '}
                <span className="text-neon-cyan font-semibold">Web3</span>. Interested in Backend
                Engineering with skills in{' '}
                <span className="text-neon-purple font-semibold">Laravel</span>,{' '}
                <span className="text-neon-purple font-semibold">Golang</span>, and{' '}
                <span className="text-neon-purple font-semibold">RESTful APIs</span>. Can adapt to
                new environments and continuously challenged to improve skills.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

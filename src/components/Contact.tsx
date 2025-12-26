import { useScrollReveal } from '../hooks/useScrollReveal';
import type { ContactInfo } from '../types';

const Contact = () => {
  const { ref: contactRef, isVisible } = useScrollReveal();

  const contactInfo: ContactInfo[] = [
    {
      type: 'email',
      label: 'Email',
      value: 'berrylhamesha@gmail.com',
      url: 'mailto:berrylhamesha@gmail.com',
      icon: '/assets/email.png',
    },
    {
      type: 'linkedin',
      label: 'LinkedIn',
      value: 'Berryl Radian Hamesha',
      url: 'https://www.linkedin.com/in/berryl-radian-hamesha-475936205/',
      icon: '/assets/linkedin.png',
    },
  ];

  return (
    <section
      id="contact"
      ref={contactRef as React.RefObject<HTMLElement>}
      className="relative min-h-screen py-20 px-6 lg:px-8 flex items-center"
    >
      <div className="max-w-4xl mx-auto w-full">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-neon-purple text-lg font-semibold mb-3 tracking-wide uppercase">
            Get in Touch
          </p>
          <h2 className="text-4xl lg:text-6xl font-bold text-gradient mb-4">Contact Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-cyan to-neon-purple mx-auto" />
        </div>

        {/* Contact Cards */}
        <div
          className={`grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {contactInfo.map((contact) => (
            <a
              key={contact.type}
              href={contact.url}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card glass-card-hover p-8 flex items-center gap-6 group"
            >
              <div className="flex-shrink-0">
                <div
                  className={`w-16 h-16 rounded-full ${
                    contact.type === 'email' ? 'bg-neon-cyan/10' : 'bg-neon-purple/10'
                  } flex items-center justify-center ${
                    contact.type === 'email'
                      ? 'group-hover:bg-neon-cyan/20'
                      : 'group-hover:bg-neon-purple/20'
                  } transition-colors`}
                >
                  <img
                    src={contact.icon}
                    alt={contact.label}
                    className="w-10 h-10 opacity-80 group-hover:opacity-100 transition-opacity"
                  />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-gray-400 text-sm mb-1 uppercase tracking-wide">
                  {contact.label}
                </h3>
                <p
                  className={`text-white font-semibold text-lg ${
                    contact.type === 'email'
                      ? 'group-hover:text-neon-cyan'
                      : 'group-hover:text-neon-purple'
                  } transition-colors`}
                >
                  {contact.value}
                </p>
              </div>
            </a>
          ))}
        </div>

        {/* Additional CTA */}
        <div
          className={`text-center transition-all duration-700 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-gray-400 text-lg mb-6">Let's build something amazing together!</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://github.com/berrylradianh"
              target="_blank"
              rel="noopener noreferrer"
              className="neon-btn inline-block"
              aria-label="View GitHub profile"
            >
              View GitHub
            </a>
            <a
              href="/assets/cv.pdf"
              target="_blank"
              className="neon-btn neon-btn-purple inline-block"
              aria-label="Download CV"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

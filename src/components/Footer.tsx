const Footer = () => {
  const navLinks = ['About', 'Skills', 'Projects', 'Contact'];

  const handleNavClick = (section: string) => {
    const target = document.querySelector(`#${section.toLowerCase()}`);
    if (target) {
      const offset = 80;
      const targetPosition = (target as HTMLElement).offsetTop - offset;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <footer className="relative py-12 px-6 border-t border-gray-800/50 backdrop-blur-md bg-dark-bg/80">
      <div className="max-w-7xl mx-auto">
        {/* Navigation Links */}
        <nav className="mb-8">
          <ul className="flex flex-wrap justify-center gap-8 text-gray-400">
            {navLinks.map((link) => (
              <li key={link}>
                <button
                  onClick={() => handleNavClick(link === 'Skills' ? 'experience' : link)}
                  className="hover:text-neon-cyan transition-colors neon-underline"
                >
                  {link}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mb-8">
          <a
            href="https://www.linkedin.com/in/berryl-radian-hamesha-475936205/"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card p-3 hover-glow-cyan rounded-lg transition-all duration-300 bg-[#0077b5] hover:bg-[#006399]"
            aria-label="LinkedIn profile"
          >
            <img src="/assets/linkedin.png" alt="LinkedIn" className="w-6 h-6 brightness-0 invert" />
          </a>
          <a
            href="https://github.com/berrylradianh"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card p-3 hover-glow-cyan rounded-lg transition-all duration-300 bg-[#333333] hover:bg-[#24292e]"
            aria-label="GitHub profile"
          >
            <img src="/assets/github.png" alt="GitHub" className="w-6 h-6 brightness-0 invert" />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-center text-gray-500 text-sm">
          &copy; 2023{' '}
          <span className="neon-text-cyan font-semibold">Berryl Radian Hamesha</span>. All Rights
          Reserved.
        </p>
        <p className="text-center text-gray-600 text-xs mt-2">
          Crafted with <span className="text-neon-magenta">❤</span> and{' '}
          <span className="text-neon-cyan">code</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;

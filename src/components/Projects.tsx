import { useScrollReveal } from '../hooks/useScrollReveal';
import type { Project } from '../types';

const Projects = () => {
  const { ref: projectsRef, isVisible } = useScrollReveal();

  const projects: Project[] = [
    {
      id: 1,
      title: 'PINAR APP',
      description:
        'The POLINEMA Indoor Navigation with Augmented Reality system is an application based on the Android Operating System that utilizes Augmented Reality and GPS technology to show the location and route to the destination according to user instructions.',
      image: '/assets/project-1.jpg',
      techStack: ['Kotlin', 'SQLite', 'Augmented Reality'],
      documentation: 'https://youtu.be/FsXdIOCXfew?si=N1q4C6EIC74Ksi2s',
    },
    {
      id: 2,
      title: 'Belle Indonesia',
      description:
        'Belle is a web app offering high-quality beauty products and detailed services to enhance natural beauty. With extensive experience, Belle prioritizes customer education and satisfaction, helping every user find exactly what they need on their beauty journey.',
      image: '/assets/project-2.jpg',
      techStack: ['Laravel', 'MySQL'],
      documentation: 'https://www.belleindonesia.com/',
    },
    {
      id: 3,
      title: 'Desainovatif',
      description:
        '“DesaInovatif”is an official village government portal that provides public information and participation services, NIK-based document status checks, resident and village statistics, as well as access to budget reports and local potential data—aimed at ensuring transparency and convenience for the community.',
      image: '/assets/project-3.jpg',
      techStack: ['Laravel', 'MySQL'],
      documentation: 'https://desakendi.com/',
    },
  ];

  return (
    <section
      id="projects"
      ref={projectsRef as React.RefObject<HTMLElement>}
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
            Browse My
          </p>
          <h2 className="text-4xl lg:text-6xl font-bold text-gradient mb-4">Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-cyan to-neon-purple mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`glass-card project-card overflow-hidden group transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${(index + 2) * 100}ms` }}
            >
              <div className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-transparent to-transparent opacity-60 z-10" />
                <img
                  src={project.image}
                  alt={`${project.title} Project`}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              <div className="p-6">
                <h3
                  className={`text-2xl font-bold mb-4 ${
                    index === 0
                      ? 'neon-text-cyan'
                      : index === 1
                      ? 'neon-text-purple'
                      : 'neon-text-magenta'
                  }`}
                >
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="skill-badge text-xs px-3 py-1">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <button
                    className="neon-btn text-xs px-4 py-2 flex-1"
                    onClick={() => window.location.href = project.documentation}
                    aria-label={`View ${project.title} GitHub repository`}
                  >
                    Documentation
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

import { useScrollReveal } from '../hooks/useScrollReveal';
import type { Project } from '../types';

const Projects = () => {
  const { ref: projectsRef, isVisible } = useScrollReveal();

  const projects: Project[] = [
    {
      id: 1,
      title: 'Ecowave',
      description:
        'Scalable backend API for environmental tracking and management built with Golang and PostgreSQL.',
      image: '/assets/project-1.jpg',
      techStack: ['Golang', 'PostgreSQL', 'REST API'],
      githubUrl: 'https://github.com/Ecowave-Alterra/ecowave-go',
      apiDocUrl: 'https://documenter.getpostman.com/view/22559948/2s93z894c7',
    },
    {
      id: 2,
      title: 'Victoria Jewelry',
      description:
        'E-commerce backend system with inventory management and transaction processing capabilities.',
      image: '/assets/project-2.jpg',
      techStack: ['Golang', 'MySQL', 'REST API'],
      githubUrl: 'https://github.com/Victoria-Jewelry/victoria-be',
      apiDocUrl: 'https://documenter.getpostman.com/view/22559948/2s93z9bNUq',
    },
    {
      id: 3,
      title: 'Hotelifoz',
      description:
        'Hotel management system API with booking, room management, and customer service features.',
      image: '/assets/project-3.jpg',
      techStack: ['Golang', 'PostgreSQL', 'REST API'],
      githubUrl: 'https://github.com/berrylradianh/go-hotelifoz',
      apiDocUrl: 'https://documenter.getpostman.com/view/22559948/2s93zB6Myp',
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
          <h2 className="text-4xl lg:text-6xl font-bold text-gradient mb-4">API Projects</h2>
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
                  alt={`${project.title} API Project`}
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
                    onClick={() => window.location.href = project.githubUrl}
                    aria-label={`View ${project.title} GitHub repository`}
                  >
                    Github
                  </button>
                  <button
                    className="neon-btn neon-btn-purple text-xs px-4 py-2 flex-1"
                    onClick={() => window.location.href = project.apiDocUrl}
                    aria-label={`View ${project.title} API documentation`}
                  >
                    API Doc
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

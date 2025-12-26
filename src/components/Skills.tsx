import { useScrollReveal } from '../hooks/useScrollReveal';
import type { SkillCategory } from '../types';

const Skills = () => {
  const { ref: skillsRef, isVisible } = useScrollReveal();

  const skillCategories: SkillCategory[] = [
    {
      title: 'Backend Development',
      color: 'cyan',
      skills: [
        { name: 'Node.js', level: 'Advanced' },
        { name: 'Express.js', level: 'Advanced' },
        { name: 'Golang', level: 'Intermediate' },
        { name: 'RESTful API', level: 'Advanced' },
        { name: 'GRPC', level: 'Intermediate' },
        { name: 'Microservice', level: 'Intermediate' },
        { name: 'Kafka', level: 'Intermediate' },
        { name: 'RabbitMQ', level: 'Intermediate' },
      ],
    },
    {
      title: 'Cloud & DevOps',
      color: 'purple',
      skills: [
        { name: 'Google Cloud Platform', level: 'Intermediate' },
        { name: 'AWS', level: 'Intermediate' },
        { name: 'Docker', level: 'Intermediate' },
        { name: 'Kubernetes', level: 'Intermediate' },
        { name: 'CI/CD', level: 'Intermediate' },
        { name: 'Version Control System', level: 'Advanced' },
      ],
    },
    {
      title: 'Database',
      color: 'magenta',
      skills: [
        { name: 'MySQL', level: 'Advanced' },
        { name: 'MariaDB', level: 'Advanced' },
        { name: 'PostgreSQL', level: 'Advanced' },
        { name: 'Elastic', level: 'Intermediate' },
        { name: 'Redis', level: 'Intermediate' },
        { name: 'SQLite', level: 'Intermediate' },
      ],
    },
    {
      title: 'Frontend / Mobile Development',
      color: 'cyan',
      skills: [
        { name: 'React.js', level: 'Intermediate' },
        { name: 'Next.js', level: 'Intermediate' },
        { name: 'TypeScript', level: 'Intermediate' },
        { name: 'Flutter', level: 'Intermediate' },
        { name: 'Kotlin', level: 'Beginner' },
      ],
    },
    {
      title: 'Soft Skills & Languages',
      color: 'purple',
      skills: [
        { name: 'Problem Solving', level: 'Advanced' },
        { name: 'Time Management', level: 'Advanced' },
        { name: 'Project Management', level: 'Intermediate' },
        { name: 'Teamwork', level: 'Advanced' },
        { name: 'Indonesian', level: 'Native' },
        { name: 'English', level: 'Fluent' },
      ],
    },
  ];

  return (
    <section
      id="experience"
      ref={skillsRef as React.RefObject<HTMLElement>}
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
            Explore My
          </p>
          <h2 className="text-4xl lg:text-6xl font-bold text-gradient mb-4">Skills</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-cyan to-neon-purple mx-auto" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {skillCategories.slice(0, 4).map((category, index) => {
            const hoverClass = 
              category.color === 'cyan' ? 'hover-glow-cyan' :
              category.color === 'purple' ? 'hover-glow-purple' :
              category.color === 'magenta' ? 'hover-glow-magenta' :
              'hover-glow-cyan';
            
            return (
              <div
                key={category.title}
                className={`glass-card p-8 ${hoverClass} transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${(index + 2) * 100}ms` }}
              >
                <h3 className={`text-2xl font-bold neon-text-${category.color} mb-8 text-center`}>
                  {category.title}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {category.skills.map((skill) => {
                    const skillHoverColor = 
                      category.color === 'cyan' ? 'group-hover:text-neon-cyan' :
                      category.color === 'purple' ? 'group-hover:text-neon-purple' :
                      category.color === 'magenta' ? 'group-hover:text-neon-magenta' :
                      'group-hover:text-neon-cyan';
                    
                    return (
                      <div key={skill.name} className="flex items-start gap-3 group">
                        <div className="mt-1 flex-shrink-0">
                          <div
                            className={`w-6 h-6 rounded-full bg-neon-${category.color}/20 flex items-center justify-center group-hover:bg-neon-${category.color}/40 transition-colors`}
                          >
                            <svg className={`w-4 h-4 text-neon-${category.color}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                        </div>
                        <div>
                          <h4 className={`text-white font-semibold text-base ${skillHoverColor} transition-colors`}>{skill.name}</h4>
                          <p className="text-gray-400 text-sm">{skill.level}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* Last Category - Centered */}
        {skillCategories[4] && (() => {
          const category = skillCategories[4];
          const hoverClass = 
            category.color === 'cyan' ? 'hover-glow-cyan' :
            category.color === 'purple' ? 'hover-glow-purple' :
            category.color === 'magenta' ? 'hover-glow-magenta' :
            'hover-glow-cyan';
          
          return (
            <div className="flex justify-center">
              <div
                className={`glass-card p-8 ${hoverClass} transition-all duration-700 w-full lg:w-1/2 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${(4 + 2) * 100}ms` }}
              >
                <h3 className={`text-2xl font-bold neon-text-${category.color} mb-8 text-center`}>
                  {category.title}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {category.skills.map((skill) => {
                    const skillHoverColor = 
                      category.color === 'cyan' ? 'group-hover:text-neon-cyan' :
                      category.color === 'purple' ? 'group-hover:text-neon-purple' :
                      category.color === 'magenta' ? 'group-hover:text-neon-magenta' :
                      'group-hover:text-neon-cyan';
                    
                    return (
                      <div key={skill.name} className="flex items-start gap-3 group">
                        <div className="mt-1 flex-shrink-0">
                          <div
                            className={`w-6 h-6 rounded-full bg-neon-${category.color}/20 flex items-center justify-center group-hover:bg-neon-${category.color}/40 transition-colors`}
                          >
                            <svg className={`w-4 h-4 text-neon-${category.color}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                        </div>
                        <div>
                          <h4 className={`text-white font-semibold text-base ${skillHoverColor} transition-colors`}>{skill.name}</h4>
                          <p className="text-gray-400 text-sm">{skill.level}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })()}
      </div>
    </section>
  );
};

export default Skills;

import { useScrollReveal } from '../hooks/useScrollReveal';
import type { SkillCategory } from '../types';

const Skills = () => {
  const { ref: skillsRef, isVisible } = useScrollReveal();

  const skillCategories: SkillCategory[] = [
    {
      title: 'Backend Development',
      color: 'cyan',
      skills: [
        { name: 'Golang', level: 'Intermediate' },
        { name: 'MySQL', level: 'Advanced' },
        { name: 'PostgreSQL', level: 'Intermediate' },
        { name: 'MongoDB', level: 'Intermediate' },
        { name: 'Github', level: 'Intermediate' },
        { name: 'Node.JS', level: 'Intermediate' },
      ],
    },
    {
      title: 'Cloud & DevOps',
      color: 'purple',
      skills: [
        { name: 'AWS', level: 'Beginner' },
        { name: 'GCP', level: 'Beginner' },
        { name: 'CI/CD', level: 'Beginner' },
        { name: 'Docker', level: 'Beginner' },
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className={`glass-card p-8 hover-glow-${category.color} transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${(index + 2) * 100}ms` }}
            >
              <h3 className={`text-2xl font-bold neon-text-${category.color} mb-8 text-center`}>
                {category.title}
              </h3>
              <div className="grid grid-cols-2 gap-6">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="flex items-start gap-3 group">
                    <div className="mt-1 flex-shrink-0">
                      <div
                        className={`w-6 h-6 rounded-full bg-neon-${category.color}/20 flex items-center justify-center group-hover:bg-neon-${category.color}/30 transition-colors`}
                      >
                        <img src="/assets/checkmark.png" alt="" className="w-4 h-4" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-lg">{skill.name}</h4>
                      <p className="text-gray-400 text-sm">{skill.level}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

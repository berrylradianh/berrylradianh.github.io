import { useScrollReveal } from '../hooks/useScrollReveal';
import type { Experience as ExperienceType } from '../types';

const Experience = () => {
  const { ref: experienceRef, isVisible } = useScrollReveal();

  const experiences: ExperienceType[] = [
    {
      id: 1,
      company: 'Kulina',
      position: 'Backend Engineer',
      employmentType: 'Full-time',
      startDate: 'January 2024',
      endDate: 'Present',
      duration: '1 year 6 months',
      description:
        'Developing using Golang and Gin Framework. Make Restful API, unit test using Golang and Using MySQL, Redis, Elasticsearch, and Mongo databases. Work as a team with all divisions. Worked with a team of backend developers, frontend developer, mobile developers and quality assurance team',
      location: 'Jakarta, Indonesia',
      workMode: 'Remote',
    },
    {
      id: 2,
      company: 'Direktorat Jenderal Pendidikan Tinggi, Riset dan Teknologi Kemdikbudristek',
      position: 'Backend Developer',
      employmentType: 'Internship',
      startDate: 'August 2023',
      endDate: 'December 2023',
      duration: '5 months',
      description:
        'Developing using Golang and Echo Framework. Make Restful API and unit test using Golang. Developing microservice application. Work as a team with all divisions. Worked with a team of 4 backend developers, 1 frontend developer, 6 mobile developers and 3 quality assurance team',
      location: 'Jakarta, Indonesia',
      workMode: 'Onsite',
    },
  ];

  return (
    <section
      id="work-experience"
      ref={experienceRef as React.RefObject<HTMLElement>}
      className="relative min-h-screen py-20 px-6 lg:px-8"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-neon-purple text-lg font-semibold mb-3 tracking-wide uppercase">
            Professional Journey
          </p>
          <h2 className="text-4xl lg:text-6xl font-bold text-gradient mb-4">Work Experience</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-cyan to-neon-purple mx-auto" />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-neon-cyan via-neon-purple to-neon-magenta" />

          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className={`relative mb-12 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${(index + 2) * 150}ms` }}
            >
              <div
                className={`flex flex-col md:flex-row gap-8 items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 rounded-full bg-neon-cyan shadow-lg shadow-neon-cyan/50 z-10" />

                {/* Empty space for alternating layout */}
                <div className="hidden md:block md:w-1/2" />

                {/* Experience Card */}
                <div className="w-full md:w-1/2 pl-8 md:pl-0">
                  <div className="glass-card p-6 hover-glow-cyan group">
                    {/* Header */}
                    <div className="mb-4">
                      <h3 className="text-2xl font-bold text-neon-cyan mb-1 group-hover:text-neon-purple transition-colors">
                        {exp.position}
                      </h3>
                      <p className="text-xl text-white font-semibold mb-2">{exp.company}</p>
                      <div className="flex flex-wrap gap-2 mb-3">
                        <span className="skill-badge bg-neon-cyan/10 text-neon-cyan border border-neon-cyan/30">
                          {exp.employmentType}
                        </span>
                        <span className="skill-badge bg-neon-purple/10 text-neon-purple border border-neon-purple/30">
                          {exp.workMode}
                        </span>
                      </div>
                    </div>

                    {/* Date & Duration */}
                    <div className="mb-4 flex flex-wrap gap-4 text-sm text-gray-400">
                      <div className="flex items-center gap-2">
                        <svg
                          className="w-4 h-4 text-neon-cyan"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                        <span>
                          {exp.startDate} - {exp.endDate}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <svg
                          className="w-4 h-4 text-neon-purple"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <span>{exp.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <svg
                          className="w-4 h-4 text-neon-magenta"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-300 leading-relaxed">{exp.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

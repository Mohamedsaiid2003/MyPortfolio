export default function Skills() {
  return (
    <section id="skills" className="py-24 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="section-title">Skills</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {['Java', 'Spring Boot', 'Spring Security', 'PostgreSQL', 'JWT', 'REST API','MySQL', 'Docker','Git'].map(skill => (
            <span 
              key={skill} 
              className="px-6 py-3 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/30 dark:to-purple-900/30 border border-indigo-200 dark:border-purple-500/30 text-gray-800 dark:text-gray-200 rounded-full shadow-lg"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

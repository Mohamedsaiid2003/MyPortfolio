export default function Skills() {
  return (
    <section id="skills" className="py-24 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="section-title">Skills</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {['Java', 'Spring Boot', 'Spring Security', 'PostgreSQL', 'JWT', 'OAuth2', 'REST API', 'Git'].map(skill => (
            <span key={skill} className="px-6 py-3 bg-white/10 backdrop-blur-lg rounded-full border border-white/20">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
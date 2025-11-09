export default function Projects() {
  const projects = [
    { title: "Alarm Api", tech: "Java ,Spring Boot, PostgreSql ,Spring Data Jpa", link: "https://github.com/Mohamedsaiid2003/Alarm-" },
    { title: "Break Time Api", tech: "Java ,Spring Boot, PostgreSql ,Spring Data Jpa , Jwt Token , Spring Security , OAuth2", link: "https://github.com/Mohamedsaiid2003/Break-Time" },
    { title: "Tiba Care Api", tech: "Java ,Spring Boot, PostgreSql ,Spring Data Jpa , Jwt Token , Spring Security , OAuth2", link: "https://github.com/Mohamedsaiid2003/Tiba-Care-" },
  ];

  return (
    <section id="projects" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title">Projects</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map(p => (
            <div key={p.title} className="card">
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{p.title}</h3>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">{p.tech}</p>
              <a href={p.link} target="_blank" className="text-purple-600 dark:text-purple-400 hover:underline font-medium">GitHub Code</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
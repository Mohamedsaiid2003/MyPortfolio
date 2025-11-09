export default function Services() {
  return (
    <section id="service" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title">Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="card text-center">
            <div className="text-4xl mb-4">Backend Development</div>
            <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Backend Development</h3>
            <p className="text-gray-700 dark:text-gray-300">Building RESTful APIs with Spring Boot, JWT, OAuth2, and Rate Limiting</p>
          </div>
          <div className="card text-center">
            <div className="text-4xl mb-4">Code</div>
            <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Database Design</h3>
            <p className="text-gray-700 dark:text-gray-300">PostgreSQL</p>
          </div>
          <div className="card text-center">
            <div className="text-4xl mb-4">Cloud Deployment</div>
            <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Cloud Deployment</h3>
            <p className="text-gray-700 dark:text-gray-300">Render, Railway</p>
          </div>
        </div>
      </div>
    </section>
  );
}
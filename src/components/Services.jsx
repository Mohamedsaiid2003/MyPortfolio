export default function Services() {
  return (
    <section id="service" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title">Services</h2>
        
        <div className="space-y-8 max-w-4xl mx-auto">
          {/* Backend Development */}
          <div className="card">
            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Backend Development</h3>
            <p className="text-gray-700 dark:text-gray-300 text-lg">Building RESTful APIs with Spring Boot, JWT, OAuth2, and Rate Limiting</p>
          </div>

          {/* Database Design */}
          <div className="card">
            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Database Design</h3>
            <p className="text-gray-700 dark:text-gray-300 text-lg">PostgreSQL</p>
          </div>

          {/* Cloud Deployment */}
          <div className="card">
            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Cloud Deployment</h3>
            <p className="text-gray-700 dark:text-gray-300 text-lg">Render, Railway</p>
          </div>
        </div>
      </div>
    </section>
  );
}

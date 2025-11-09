import { Helmet } from 'react-helmet-async';

const SEO = () => {
  return (
    <Helmet>
      {/* Default title and description */}
      <title>Mohamed Saeed - Backend Java Developer | Spring Boot Expert</title>
      <meta name="description" content="Professional Backend Java Developer specializing in Spring Boot, PostgreSQL, and REST API development. Building secure and scalable backend systems." />
      
      {/* Canonical URL */}
      <link rel="canonical" href="https://portfolio-mohamed-saeed.vercel.app/" />
      
      {/* Open Graph */}
      <meta property="og:title" content="Mohamed Saeed - Backend Java Developer" />
      <meta property="og:description" content="Professional Backend Java Developer specializing in Spring Boot, PostgreSQL, and REST API development." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://portfolio-mohamed-saeed.vercel.app/" />
      <meta property="og:image" content="/images/portfolio-preview.png" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Mohamed Saeed - Backend Java Developer" />
      <meta name="twitter:description" content="Professional Backend Java Developer specializing in Spring Boot, PostgreSQL, and REST API development." />
      <meta name="twitter:image" content="/images/portfolio-preview.png" />
    </Helmet>
  );
};

export default SEO;
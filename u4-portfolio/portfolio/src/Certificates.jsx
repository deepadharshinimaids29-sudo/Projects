function Certificates() {
  const certificates = [
    "Artificial Intelligence",
    "Python Programming",
    "Web Development",
    "Data Science",
    "React Development"
  ];

  return (
    <section className="page">
      <h1>Certificates</h1>

      <div className="cards">
        {certificates.map((certificate, index) => (
          <div className="certificate-card" key={index}>
            <h3>{certificate}</h3>
            <p>Certificate of Completion</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Certificates;
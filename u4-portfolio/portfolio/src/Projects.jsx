function Projects() {
  const projects = [
    {
      title: "Student Dashboard",
      description: "React based student dashboard with attendance and subject details."
    },
    {
      title: "ATM Simulator",
      description: "Java OOP based ATM simulation application."
    },
    {
      title: "Quiz Application",
      description: "Python based interactive quiz application."
    },
    {
      title: "Bike Website",
      description: "Responsive website designed using HTML and CSS."
    },
    {
      title: "Password Strength Checker",
      description: "Application that checks password strength."
    }
  ];

  return (
    <section className="page">
      <h1>My Projects</h1>

      <div className="cards">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <button>View Project</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
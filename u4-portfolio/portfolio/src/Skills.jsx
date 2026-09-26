function Skills() {
  const skills = [
    "Python",
    "Java",
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "SQL",
    "DBMS"
  ];

  return (
    <section className="page">
      <h1>My Skills</h1>

      <div className="cards">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <h3>{skill}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
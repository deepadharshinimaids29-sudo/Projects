function SubjectList({ subjects }) {
  return (
    <div className="subject-card">

      <div className="section-title">
        <span>📚</span>
        <div>
          <h2>My Subjects</h2>
          <p>Current semester subjects</p>
        </div>
      </div>

      <ul className="subject-list">
        {subjects.map((subject, index) => (
          <li key={index}>

            <span className="subject-number">
              {String(index + 1).padStart(2, "0")}
            </span>

            <span className="subject-name">
              {subject}
            </span>

            <span className="subject-arrow">
              →
            </span>

          </li>
        ))}
      </ul>

      <div className="subject-total">
        <span>Total Subjects</span>
        <strong>{subjects.length}</strong>
      </div>

    </div>
  );
}

export default SubjectList;
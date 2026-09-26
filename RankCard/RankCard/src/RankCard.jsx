import { useState } from "react";

function RankCard() {
  const [student, setStudent] = useState({
    name: "",
    registerNo: "",
    department: "",
    semester: "",
    python: "",
    java: "",
    dbms: "",
    react: "",
    sql: ""
  });

  const [generated, setGenerated] = useState(false);

  const handleChange = (e) => {
    setStudent({
      ...student,
      [e.target.name]: e.target.value
    });
  };

  const generateRankCard = (e) => {
    e.preventDefault();
    setGenerated(true);
  };

  const total =
    Number(student.python) +
    Number(student.java) +
    Number(student.dbms) +
    Number(student.react) +
    Number(student.sql);

  const percentage = total / 5;

  let rank;

  if (percentage >= 90) {
    rank = 1;
  } else if (percentage >= 80) {
    rank = 2;
  } else if (percentage >= 70) {
    rank = 3;
  } else {
    rank = "N/A";
  }

  return (
    <div className="rank-container">

      <h1>Rank Card Generator</h1>

      {!generated ? (
        <form onSubmit={generateRankCard}>

          <input
            type="text"
            name="name"
            placeholder="Student Name"
            value={student.name}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="registerNo"
            placeholder="Register Number"
            value={student.registerNo}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="department"
            placeholder="Department"
            value={student.department}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="semester"
            placeholder="Semester"
            value={student.semester}
            onChange={handleChange}
            required
          />

          <h3>Enter Marks</h3>

          <input
            type="number"
            name="python"
            placeholder="Python"
            value={student.python}
            onChange={handleChange}
            required
          />

          <input
            type="number"
            name="java"
            placeholder="Java"
            value={student.java}
            onChange={handleChange}
            required
          />

          <input
            type="number"
            name="dbms"
            placeholder="DBMS"
            value={student.dbms}
            onChange={handleChange}
            required
          />

          <input
            type="number"
            name="react"
            placeholder="React"
            value={student.react}
            onChange={handleChange}
            required
          />

          <input
            type="number"
            name="sql"
            placeholder="SQL"
            value={student.sql}
            onChange={handleChange}
            required
          />

          <button type="submit">
            Generate Rank Card
          </button>

        </form>
      ) : (
        <div className="rank-card">

          <h2>COLLEGE RANK CARD</h2>

          <hr />

          <p><b>Name:</b> {student.name}</p>
          <p><b>Register No:</b> {student.registerNo}</p>
          <p><b>Department:</b> {student.department}</p>
          <p><b>Semester:</b> {student.semester}</p>

          <table>
            <thead>
              <tr>
                <th>Subject</th>
                <th>Marks</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Python</td>
                <td>{student.python}</td>
              </tr>

              <tr>
                <td>Java</td>
                <td>{student.java}</td>
              </tr>

              <tr>
                <td>DBMS</td>
                <td>{student.dbms}</td>
              </tr>

              <tr>
                <td>React</td>
                <td>{student.react}</td>
              </tr>

              <tr>
                <td>SQL</td>
                <td>{student.sql}</td>
              </tr>
            </tbody>
          </table>

          <div className="result">
            <p><b>Total:</b> {total} / 500</p>
            <p><b>Percentage:</b> {percentage.toFixed(2)}%</p>
            <p><b>Rank:</b> {rank}</p>
          </div>

          <button onClick={() => setGenerated(false)}>
            Generate Again
          </button>

        </div>
      )}

    </div>
  );
}

export default RankCard;
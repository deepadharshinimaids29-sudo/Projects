import Header from "./header.jsx";
import StudentCard from "./studentcard.jsx";
import SubjectList from "./subjectlist.jsx";
import Footer from "./footer.jsx";
import "./App.css";

import profile from "./assets/profile.jpeg";

function App() {

  const semester = 3;
  const currentYear = "II";

  const student = {
    name: "Deepadharshini M",
    regNo: "411625243012",
    department: "AI & Data Science",
    year: "II",
    cgpa: 8.5,
    attendance: 90,
    photo: profile,
  };

  const subjects = ["React", "Java", "Python", "SQL", "DBMS"];

  return (
    <div className="app">

      <Header />

      <StudentCard
        name={student.name}
        regNo={student.regNo}
        department={student.department}
        year={student.year}
        cgpa={student.cgpa}
        attendance={student.attendance}
        photo={student.photo}
      />

      <div className="info-box">

        <h2>🎓 Academic Information</h2>

        <div className="info-content">

          <p>
            Current Semester
            <b>{semester}</b>
          </p>

          <p>
            Current Year
            <b>{currentYear} Year</b>
          </p>

          <p>
            Total Subjects
            <b>{subjects.length}</b>
          </p>

        </div>

      </div>

      <SubjectList subjects={subjects} />

      <Footer />

    </div>
  );
}

export default App;
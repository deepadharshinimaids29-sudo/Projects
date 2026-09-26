function StudentCard(props) {

  const attendanceEligible = props.attendance >= 75;
  const placementEligible = props.cgpa >= 8;

  return (

    <>

      {/* PROFILE + CGPA + ATTENDANCE */}

      <div className="dashboard-grid">

        {/* Student Profile */}

        <div className="student-card">

          <div className="profile-section">

            <img
              src={props.photo}
              alt="Student"
              className="student-photo"
            />

            <div>

              <h2>
                {props.name}
              </h2>

              <p>
                👤 Reg No: {props.regNo}
              </p>

              <p>
                🎓 Department: {props.department}
              </p>

              <p>
                🕐 Year: {props.year} Year - IV Sem
              </p>

            </div>

          </div>

        </div>


        {/* CGPA */}

        <div className="stat-box cgpa-box">

          <span>📈 CGPA</span>

          <h2>
            {props.cgpa.toFixed(2)}
          </h2>

          <p>Current CGPA</p>

        </div>


        {/* ATTENDANCE */}

        <div className="stat-box attendance-box">

          <span>📅 Attendance</span>

          <h2>
            {props.attendance}%
          </h2>

          <p>Overall Attendance</p>

        </div>

      </div>


      {/* ATTENDANCE PROGRESS */}

      <div className="attendance-section">

        <h3>
          📈 Attendance Progress
        </h3>

        <div className="progress-row">

          <div className="progress-bar">

            <div
              className="progress-fill"
              style={{
                width: `${props.attendance}%`
              }}
            ></div>

          </div>

          <span className="attendance-value">
            {props.attendance}% Attendance
          </span>

        </div>

      </div>


      {/* STATUS */}

      <div className="status-section">

        <div className="status-card">

          <h3>
            📊 Semester Exam
          </h3>

          {attendanceEligible ? (

            <p className="eligible">
              🟢 Eligible for Semester Exam
            </p>

          ) : (

            <p className="not-eligible">
              🔴 Not Eligible
            </p>

          )}

        </div>


        <div className="status-card">

          <h3>
            💼 Placements
          </h3>

          {placementEligible ? (

            <p className="eligible">
              🟢 Eligible
            </p>

          ) : (

            <p className="not-eligible">
              🔴 Need Improvement
            </p>

          )}

        </div>

      </div>

    </>
  );
}

export default StudentCard;
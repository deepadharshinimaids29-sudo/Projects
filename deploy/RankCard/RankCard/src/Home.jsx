import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <h1>Student Rank Card Generator</h1>

      <p>
        Enter student details and marks to generate a rank card.
      </p>

      <Link to="/rankcard">
        <button>Generate Rank Card</button>
      </Link>
    </div>
  );
}

export default Home;
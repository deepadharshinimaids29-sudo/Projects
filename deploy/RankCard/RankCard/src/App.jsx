
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import RankCard from "./RankCard";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <nav className="navbar">
        <h2>Student Rank Card</h2>

        <div>
          <Link to="/">Home</Link>
          <Link to="/rankcard">Rank Card</Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rankcard" element={<RankCard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
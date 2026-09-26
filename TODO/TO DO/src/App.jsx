import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Todo from "./Todo";
import About from "./About";

function App() {
  return (
    <BrowserRouter>

      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/todo">To-Do List</Link> |{" "}
        <Link to="/about">About</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/about" element={<About />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
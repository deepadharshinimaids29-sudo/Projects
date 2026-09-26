function Header() {

  const hour = new Date().getHours();

  let greeting = "";

  if (hour < 12) {
    greeting = "🌅 Good Morning";
  } else if (hour < 17) {
    greeting = "☀️ Good Afternoon";
  } else {
    greeting = "🌙 Good Evening";
  }

  return (

    <header className="header">

      <h1>
        🎓 AI Student Analytics Dashboard
      </h1>

      <h2>
        B.Tech AI & Data Science | 2nd Year
      </h2>

      <div className="welcome">

        <h3>
          {greeting}, Deepadharshini M 👋
        </h3>

        <p>
          📊 B.Tech Artificial Intelligence & Data Science
        </p>

      </div>

    </header>
  );
}

export default Header;
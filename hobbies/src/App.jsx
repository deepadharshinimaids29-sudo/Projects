import "./App.css";

function Hobbies() {
  const hobbies = [
    {
      icon: "💻",
      title: "Coding",
      description:
        "Building ideas into real-world web applications and exploring new technologies.",
    },
    {
      icon: "🎧",
      title: "Listening to Music",
      description:
        "Music helps me relax, stay focused, and bring out my creativity.",
    },
    {
      icon: "🎨",
      title: "Drawing",
      description:
        "Expressing creativity through sketches, designs, and artistic ideas.",
    },
    {
      icon: "📸",
      title: "Photography",
      description:
        "Capturing beautiful moments and discovering unique perspectives.",
    },
    {
      icon: "📚",
      title: "Reading",
      description:
        "Exploring new ideas, stories, and knowledge through books and articles.",
    },
    {
      icon: "🌱",
      title: "Learning",
      description:
        "Always curious to learn something new and improve my skills.",
    },
  ];

  return (
    <section className="hobbies-section">
      <div className="hobbies-header">
        <span>MY INTERESTS</span>
        <h2>Things I Love <b>Doing</b></h2>
        <p>
          A few activities that keep me creative, curious, and inspired.
        </p>
      </div>

      <div className="hobbies-container">
        {hobbies.map((hobby, index) => (
          <div className="hobby-card" key={index}>
            <div className="hobby-icon">{hobby.icon}</div>

            <div className="hobby-content">
              <h3>{hobby.title}</h3>
              <p>{hobby.description}</p>
            </div>

            <div className="card-number">
              0{index + 1}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Hobbies;
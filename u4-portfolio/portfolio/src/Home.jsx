import profile from "./assets/profile.jpeg";
function Home() {
  return (
    <section className="home">
      <div>
        <p className="small-title">HELLO, I'M</p>

        <h1>Deepadharshini M</h1>

        <h2>AI & Data Science Student | Web Developer</h2>

        <p>
          Passionate about Artificial Intelligence, Web Development
          and building real-world applications.
        </p>

        <button>Explore My Portfolio</button>
      </div>

      <div className="profile-box">
        <img src={profile} alt="Deepadharshini" />
      </div>
    </section>
  );
}

export default Home;
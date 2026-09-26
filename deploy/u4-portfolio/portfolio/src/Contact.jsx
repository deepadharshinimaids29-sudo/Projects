import { useState } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(`Thank you ${name}! Your message has been received.`);
    setName("");
    setMessage("");
  };

  return (
    <section className="page contact">
      <h1>Contact Me</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          type="email"
          placeholder="Your Email"
          required
        />

        <textarea
          placeholder="Your Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>

        <button type="submit">Send Message</button>
      </form>

      <div className="social">
        <p>Email: deepadharshini399@gmail.com</p>
        <p>GitHub: deepadharshinimaids29-sudo</p>
        <p>LinkedIn: Deepa Dharshini M</p>
      </div>
    </section>
  );
}

export default Contact;
import React from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const profile = {
  name: "Alan",
  role: "Computer Science Student & ML Engineer",
  bio: "I enjoy building useful software, learning how intelligent systems work, and turning complicated ideas into simple experiences.",
  location: "Almaty, Kazakhstan",
  github: "https://github.com/alanmusabek",
  interests: ["Artificial Intelligence", "Web Development", "Machine Learning", "DevOps"]
};

function Header() {
  return (
    <header className="header">
      <a className="logo" href="#home">A<span>.</span></a>
      <nav>
        <a href="#about">About</a>
        <a href="#skills">Interests</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-text">
        <p className="eyebrow">HELLO, I'M</p>
        <h1>{profile.name}<span>.</span></h1>
        <h2>{profile.role}</h2>
        <p className="bio">{profile.bio}</p>
        <div className="buttons">
          <a className="button primary" href="#about">Get to know me</a>
          <a className="button secondary" href={profile.github} target="_blank" rel="noreferrer">GitHub ↗</a>
        </div>
      </div>

      <div className="portrait-wrap">
        <div className="glow"></div>
        <img
          className="portrait"
          src="C:\Reacts\HomeworkTwo\versions\version3\img\photo_5307553742557226562_y.jpg"
          alt="Professional portrait"
        />
        <div className="floating-card">
          <strong>01</strong>
          <span>curiosity<br />drives me</span>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="section">
      <div className="section-label">01 — ABOUT ME</div>
      <div className="about-grid">
        <div>
          <h2>Building things.<br /><em>Understanding things.</em></h2>
        </div>
        <div className="about-copy">
          <p>
            I am a student interested in the intersection of software engineering,
            artificial intelligence, and human-centered technology.
          </p>
          <p>
            I like projects that combine practical development with real problem
            solving. Outside of programming, I enjoy staying active, exploring new
            ideas, and continuously improving my skills.
          </p>
          <div className="location">⌖ {profile.location}</div>
        </div>
      </div>
    </section>
  );
}

function Interests() {
  return (
    <section id="skills" className="section interests">
      <div className="section-label">02 — WHAT I LIKE</div>
      <h2>Curious by nature.</h2>
      <div className="interest-grid">
        {profile.interests.map((interest, index) => (
          <article className="interest-card" key={interest}>
            <span>0{index + 1}</span>
            <h3>{interest}</h3>
            <p>{[
              "Exploring how machines can learn and make useful decisions.",
              "Creating clean, interactive interfaces for the web.",
              "Turning data into models, insights, and practical solutions.",
              "Building realiable and working projects"
            ][index]}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="section-label">03 — CONTACT</div>
      <h2>Let's connect.</h2>
      <p>Want to see what I'm building? Find me online.</p>
      <a className="contact-link" href={profile.github} target="_blank" rel="noreferrer">
        GitHub <span>↗</span>
      </a>
      <div className="safe-contact">Address: Planet Earth 🌍</div>
    </section>
  );
}

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Interests />
        <Contact />
      </main>
      <footer>© 2026 {profile.name}. Built with React.</footer>
    </>
  );
}

createRoot(document.getElementById("root")).render(<App />);

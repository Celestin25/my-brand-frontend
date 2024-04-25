import { useCustomBehavior } from "./script";
import "./style.css";
import profileImage from './profile.jpg';
const HomePage = () => {
  const { toggleMenu, isMenuOpen, activeSection } = useCustomBehavior();

  const scrollToSection = (sectionId, event) => {
    event.preventDefault(); 
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div>
      <header className="header">
        <div className="logo" onClick={(e) => scrollToSection('home', e)}>Celestin</div>
        <i
          className={`bx bx-menu ${isMenuOpen ? 'bx-x' : ''}`}
          style={{ color: "#ffffff" }}
          onClick={toggleMenu}
        ></i>
        <nav className={`navbar ${isMenuOpen ? "active" : ""}`}>
          <a 
            href="#home"
            onClick={(e) => scrollToSection('home', e)}
            className={activeSection === "home" ? "active" : ""}
          >
            Home
          </a>
          <a 
            href="#about"
            onClick={(e) => scrollToSection('about', e)}
            className={activeSection === "about" ? "active" : ""}
          >
            About Me
          </a>
          <a 
            href="#portfolio"
            onClick={(e) => scrollToSection('portfolio', e)}
            className={activeSection === "portfolio" ? "active" : ""}
          >
            Portfolio
          </a>
          <a 
            href="#skills"
            onClick={(e) => scrollToSection('skills', e)}
            className={activeSection === "skills" ? "active" : ""}
          >
            Skills
          </a>
          <a 
            href="#contact"
            onClick={(e) => scrollToSection('contact', e)}
            className={activeSection === "contact" ? "active" : ""}
          >
            Contact Me
          </a>
          <a href="blog.html">
            Blog
          </a>
          <a href="login.html">
            Login
          </a>
          <a href="/admin">
            Admin Panel
          </a>
        </nav>
      </header>

      <section className="home" id="home">
        <div className="text-content">
          <h1>I'm Celestin HAKORIMANA</h1>
          <div className="text-animation">
            <h2>Back-end Developer and Machine Learning Engineer</h2>
          </div>
          <div className="btn-section">
            <button className="btn">Hire me</button>
            <button className="btn">Let's Talk</button>
          </div>
          <div className="social-media">
            <i className="bx bxl-twitter" style={{ "--vlr": "8" }}></i>
            <i className="bx bxl-facebook" style={{ "--vlr": "9" }}></i>
            <i className="bx bxl-youtube" style={{ "--vlr": "10" }}></i>
          </div>
        </div>
        <img src="my-brand-frontend/src/profile.jpg" alt="profile" />
      </section>

      <section className="about" id="about">
        <h2 className="title">
          About <span>Me</span>
        </h2>
        <img src="my-brand-frontend/src/profile.jpg" alt="" className="aboutImg" />
        <div className="text-content2">
          <h2>Back-End Developer and Machine Learning Engineer</h2>
          <p>
            Greetings! I'm thrilled to introduce myself as a passionate Back-End
            Developer and machine learning engineer interested in leveraging
            technology to create innovative solutions that positively impact.
          </p>
          <button className="btn">Read More</button>
        </div>
      </section>

      <section className="portfolio" id="portfolio">
        <h2 className="title">
          My <span>Portfolio</span>
        </h2>
        <div className="row">
          <div className="column">
            <h2>Projects</h2>
            <div className="box">
              <div className="portfolio-content">
                <div className="content">
                  <h3>AirBnB_clone</h3>
                  <div className="project-links">
                    <a
                      href="https://github.com/Celestin25/AirBnB_clone.git"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      See Project here
                    </a>
                  </div>
                </div>
              </div>

              <div className="portfolio-content">
                <div className="content">
                  <h3>Multiple-disease-prediction</h3>
                  <div className="project-links">
                    <a
                      href="https://github.com/Celestin25/heart-disease-prediction.git"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      See Project here
                    </a>
                  </div>
                </div>
              </div>

              <div className="portfolio-content">
                <div className="content">
                  <h3>Titanic ML</h3>
                  <div className="project-links">
                    <a
                      href="https://heart-disease-prediction-vpfrju28z6dlmfxymaeg9q.streamlit.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      See Project here
                    </a>
                  </div>
                </div>
              </div>

              <div className="portfolio-content">
                <div className="content">
                  <h3>Heart-disease-prediction</h3>
                  <div className="project-links">
                    <a
                      href="https://heart-disease-prediction-vpfrju28z6dlmfxymaeg9q.streamlit.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      See Project here
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="skills" id="skills">
        <h2 className="title">
          My <span>Skills</span>
        </h2>
        <div className="wrapper">
          <div className="skill-content">
            <h3 className="skill-title">Skills</h3>
            <div className="skill-box skill-box1">
              <div className="single-skill">
                <span className="topic">MongoDB</span>
                <span className="topic">80%</span>
              </div>
              <div className="bar-side">
                <div className="bar bar-1"></div>
              </div>
              <div className="single-skill">
                <span className="topic">Express.js</span>
                <span className="topic">70%</span>
              </div>
              <div className="bar-side">
                <div className="bar bar-2"></div>
              </div>
              <div className="single-skill">
                <span className="topic">JavaScript</span>
                <span className="topic">90%</span>
              </div>
              <div className="bar-side">
                <div className="bar bar-3"></div>
              </div>
            </div>
          </div>
          <div className="skill-content">
            <h3 className="skill-title">Skills</h3>
            <div className="skill-box skill-box2">
              <div className="single-skill">
                <span className="topic">Machine Learning Algorithms</span>
                <span className="topic">80%</span>
              </div>
              <div className="bar-side">
                <div className="bar bar-1"></div>
              </div>
              <div className="single-skill">
                <span className="topic">Model Training and Validation</span>
                <span className="topic">75%</span>
              </div>
              <div className="bar-side">
                <div className="bar bar-2"></div>
              </div>
              <div className="single-skill">
                <span className="topic">Mathematics for Machine Learning</span>
                <span className="topic">70%</span>
              </div>
              <div className="bar-side">
                <div className="bar bar-3"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <h2 className="title">
          Contact<span>Me</span>
        </h2>
        <form action="#" id="contactForm">
          <div className="input-box">
            <input type="text" required placeholder="Full Name" id="fullName" />
            <input type="email" required placeholder="Email" id="email" />
          </div>
          <textarea placeholder="Message" id="message" required></textarea>
          <button type="submit" className="btn">
            Send Message
          </button>
        </form>
      </section>

      <footer>
        <div className="text">
          <p>Copyright @ Celestin</p>
        </div>
        <a href="#">
          {" "}
          <i className="bx bx-up-arrow-alt"></i>
        </a>
      </footer>
    </div>
  );
};

export default HomePage;

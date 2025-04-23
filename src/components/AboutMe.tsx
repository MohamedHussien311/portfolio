import { User } from "lucide-react";

const About = () => (
  <section id="about" className="about-section">
    <div className="about-container">
      {/* الصورة */}
      <div className="profile-image-container">
        <img
          src={`${import.meta.env.BASE_URL}personalPhoto.png`}
          alt="Mohamed Hussein"
          className="profile-image"
        />
      </div>

      {/* المحتوى النصي */}
      <div className="about-content">
        <h2 className="section-title">
          <User className="icon" />
          About
        </h2>
        <p className="description">
          Hello! I'm <span className="highlight">Mohamed Hussein</span>, Highly skilled and ISTQB certified software testing engineer with a passion for delivering high-quality software solutions. Proficient in manual, API, and automation testing, with hands-on experience using tools such as Selenium WebDriver, TestNG framework, Java, and Postman.
        </p>
      </div>
    </div>
  </section>
);

export default About;

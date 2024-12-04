import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-page">
      <div className="about-hero">
        <img
          src="images/aboutus.jpg"
          alt="Freelancing Web Design"
          className="about-hero-image"
        />
        <div className="about-hero-text">
          <h1 className="about-heading-top">About Me</h1>
          <p>
            Hi! I'm a passionate web designer dedicated to crafting modern, responsive, and visually appealing websites that help businesses thrive online.
          </p>
        </div>
      </div>

      <div className="about-content">
        <section className="about-section">
          <img
            src="images/media_1132acbaaf72680b84753f2d51880603efeae51b7.png"
           
            alt="Creative Design"
            className="about-image"
          />
          <div className="about-text">
            <h2>My Mission</h2>
            <p>
              I strive to create websites that are not only aesthetically pleasing but also highly functional and user-friendly. Every project I undertake is tailored to meet your specific goals and requirements.
            </p>
          </div>
        </section>
        <section className="about-section reverse">
          <div className="about-text">
            <h2>Why Choose Me?</h2>
            <p>
              With expertise in modern web design trends and technologies, I ensure your website stands out in the digital crowd. I believe in seamless collaboration and delivering results that exceed expectations.
            </p>
          </div>
          <img
            src="images/about-us.png"
            alt="Professional Work"
            className="about-image"
          />
        </section>
      </div>
      <div className="about-cards-row">
        <div className="about-card">
          <h2 className="about-heading-top">Creative Designs</h2>
          <p>
            I create visually stunning and user-friendly designs that align with your brand.
          </p>
        </div>
        <div className="about-card">
          <h2 className="about-heading-top"> Responsive Layouts</h2>
          <p>
            Every website I build is fully responsive, ensuring a seamless experience on all devices.
          </p>
        </div>
        <div className="about-card">
          <h2 className="about-heading-top">Professional Work</h2>
          <p>
            Combining aesthetics and functionality to deliver high-quality results for my clients.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;

import React from 'react';
import './Home.css'; 
const Home = () => {
  
  return (
    <div className="home">
      {/* Intro Card */}
      <section className="intro-card">
        <div className="intro-card-content">
          <h1 className="intro-title">Welcome to <spa className="home-heading-span-sr" >SR websites</spa>   </h1>

          <h1 className="home-heading-top"> Creating the best websites for your company</h1>
          <p className="intro-text">
            I am a passionate web designer with a keen eye for details and a focus on creating visually appealing and user-friendly websites. Explore my work and let's create something amazing together!
          </p>
        <button className='home-top-button'>Contact Now</button>

        </div>
        <div className="intro-card-image">
          <img src="https://hamid.com.au/wp-content/uploads/2024/02/Web-Design-Adelaide-Hamid-Websites-Portfolio.png" alt="Web Design" className="intro-image" />
        </div>
      </section>
      {/* Intro Section */}
      <section className="intro">
        <h1 className="home-heading-services-top">We Providing Web Services</h1>
        <p className="home-paragraph-services-top">
          I specialize in designing modern and responsive websites that deliver exceptional user experiences. Let's build something incredible!
        </p>
      </section>

      {/* Services Section */}
      <section className="services">
        <h2 className="Services-heading-card">Services</h2>
        <div className="service-cards">
          <div className="service-card">
         <img src='images/depositphotos_194982968-stock-photo-office-responsive-devices-website-builder.jpg' className='home-image-services' alt='web-img'/>
            <h3 className='home-services-card-heading'>Web Design</h3>
            <p>I create beautiful and responsive websites that look great on all devices.</p>
          </div>
          <div className="service-card">
         <img src='images/design-mobile-phone-laptop-computer-repair-logo.jpg' className='home-image-services' alt='logo-img' />
            <h3 className='home-services-card-heading'> LOGO designing</h3>
            <p>Optimizing user experience with intuitive and clean user interfaces.</p>
          </div>
          <div className="service-card">
         <img src='images/360_F_207056289_c2sZQ2gc8zdO1KzmSrHWvy8K1wjTRJ5u.jpg' className='home-image-services' alt='logo-img' />
            <h3 className='home-services-card-heading'>POSTERS designing</h3>
            <p>Optimizing user experience with intuitive and clean user interfaces.</p>
          </div>
          <div className="service-card">
         <img src='images/1719016355271.png' className='home-image-services' alt='frontend-img' />
            <h3 className='home-services-card-heading'>Front-End Development</h3>
            <p>Building interactive websites with the latest front-end technologies.</p>
          </div>
        </div>
      </section>
      {/* Skills Section */}
      <section className="skills">
  <h2 className="section-title">Skills & Expertise</h2>
  <div
    className="skills-container"
    style={{
      display: "flex",
      alignItems: "center",
      overflow: "hidden",
      position: "relative",
      width: "100%",
    }}
  >
    <div
      className="skills-scroll"
      style={{
        display: "flex",
        gap: "20px",
        animation: "scrollRight 15s linear infinite",
      }}
    >
      {/* Duplicate cards for infinite scroll */}
      {[...Array(2)].map((_, index) => (
        <React.Fragment key={index}>
          <div
            className="skill-card"
            style={{
              flex: "0 0 auto",
              backgroundColor: "#f8fafc",
              borderRadius: "12px",
              padding: "20px",
              width: "160px",
              textAlign: "center",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            }}
          >
            <img
              src="images/1_MF5V_dkybUTcfzwHFh0VSw.jpg"
              alt="React.js"
              className="skill-img"
              style={{ width: "100%", borderRadius: "8px" }}
            />
            <h3>React.js</h3>
          </div>
          
          <div
            className="skill-card"
            style={{
              flex: "0 0 auto",
              backgroundColor: "#f8fafc",
              borderRadius: "12px",
              padding: "20px",
              width: "160px",
              textAlign: "center",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            }}
          >
            <img
              src="images/919825.png"
              alt="Node.js"
              className="skill-img"
              style={{ width: "100%", borderRadius: "8px" }}
            />
            <h3>Node.js</h3>
          </div>
          <div
            className="skill-card"
            style={{
              flex: "0 0 auto",
              backgroundColor: "#f8fafc",
              borderRadius: "12px",
              padding: "20px",
              width: "160px",
              textAlign: "center",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            }}
          >
            <img
              src="images/png-transparent-mysql-round-logo-tech-companies-thumbnail.png"
              alt="MySQL"
              className="skill-img"
              style={{ width: "100%", borderRadius: "8px" }}
            />
            <h3>MySQL</h3>
          </div>
          <div
            className="skill-card"
            style={{
              flex: "0 0 auto",
              backgroundColor: "#f8fafc",
              borderRadius: "12px",
              padding: "20px",
              width: "160px",
              textAlign: "center",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            }}
          >
            <img
              src="images/images (1).png"
              alt="JavaScript"
              className="skill-img"
              style={{ width: "100%", borderRadius: "8px" }}
            />
            <h3>JavaScript</h3>
          </div>
          <div
            className="skill-card"
            style={{
              flex: "0 0 auto",
              backgroundColor: "#f8fafc",
              borderRadius: "12px",
              padding: "20px",
              width: "160px",
              textAlign: "center",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            }}
          >
            <img
              src="images/images (2).png"
              alt="Hosting"
              className="skill-img"
              style={{ width: "100%", borderRadius: "8px" }}
            />
            <h3>Hosting</h3>
          </div>
        </React.Fragment>
      ))}
    </div>
  </div>

  <style>
    {`
      @keyframes scrollRight {
        0% {
          transform: translateX(0);
        }
        100% {
          transform: translateX(-50%);
        }
      }
    `}
  </style>
</section>



      {/* Portfolio Section */}
      <section className="portfolio">
        <h2 className="section-title">Portfolio</h2>
        <div className="portfolio-container">
          <div className="portfolio-item">
            <img src="https://via.placeholder.com/300" alt="Portfolio 1" className="portfolio-img" />
            <p>Project 1</p>
          </div>
          <div className="portfolio-item">
            <img src="https://via.placeholder.com/300" alt="Portfolio 2" className="portfolio-img" />
            <p>Project 2</p>
          </div>
          <div className="portfolio-item">
            <img src="https://via.placeholder.com/300" alt="Portfolio 3" className="portfolio-img" />
            <p>Project 3</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact">
        <h2 className="section-title">Contact Me</h2>
        <p className="contact-text">Let’s build something amazing together. Feel free to reach out to me!</p>
      </section>
    </div>
  );
};

export default Home;

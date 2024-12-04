  import React from 'react';
  import './Home.css'; 
  const Home = () => {
    const projects = [
      {
        title: "Nirmaan Website",
        description: "We developed a dynamic and responsive website for Nirmaan Institute .",
        link: "https://vizag-nirmaan.vercel.app/home",
        image: "images/Screenshot 2024-12-04 105158.png",
      },
      {
        title: "Beauty Parlor",
        description: "We developed a dynamic and responsive website for beauty-parlour .",
        link: "https://beauty-parlour-xi.vercel.app/",
        image: "images/Screenshot 2024-12-04 110030.png",
      },
      {
        title: "Social Media App",
        description: "A social media platform to connect and share updates with friends.",
        link: "https://example.com/socialmedia",
        image: "https://via.placeholder.com/300x200?text=Social+Media+App",
      },
      {
        title: "Blog Website",
        description: "A fully responsive blog platform with user authentication.",
        link: "https://example.com/blog",
        image: "https://via.placeholder.com/300x200?text=Blog+Website",
      },
    ];
    return (
      <div className="home">
        {/* Intro Card */}
        <section className="intro-card">
          <div className="intro-card-content">
            <h1 className="intro-title">Welcome to <spa className="home-heading-span-sr" >SR designers</spa>   </h1>

            <h1 className="home-heading-top"> Creating the best websites for your company</h1>
            <p className="intro-text">
              I am a passionate web designer with a keen eye for details and a focus on creating visually appealing and user-friendly websites. Explore my work and let's create something amazing together!
            </p>
            <a href='/contact'>
            <button className='home-top-button'>Contact Now</button>

            </a>

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
        <div className="projects-page">
        <h1 className="projects-title">our clients Projects</h1>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <img src={project.image} alt={project.title} className="project-image" />
              <div className="project-details">
                <h2>{project.title}</h2>
                <p>{project.description}</p>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

        {/* Contact Section */}
        <h1 className="projects-title">about us</h1>

        <div className="about-content">
        <div className="freelance-card">
        <div className="card-content">
          <img
            src="images/istockphoto-616902766-612x612.jpg"
            alt="Web Design"
            className="card-image"
          />
          <div className="text-content">
            <h2>We Create  Websites</h2>
            <p>
              At SR designers, we specialize in designing high-quality,
              responsive websites that cater to your business needs. From concept
              to creation, our web design services ensure a seamless experience.
            </p>
            <p>
              Additionally, we provide custom posters and logos that capture your
              brand’s identity and stand out in the digital world.
            </p>
            <p>
              Our goal is to help businesses establish a professional online
              presence that makes an impact.
            </p>

            <p>
              Whether you need a fresh website, a poster for an event, or a unique
              logo, our team is here to bring your vision to life.
            </p>

          </div>
        </div>
      </div>
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
      </div>
    );
  };

  export default Home;

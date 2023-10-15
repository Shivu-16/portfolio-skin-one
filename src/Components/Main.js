import React, { useEffect, useState, useRef } from "react";
import { ReactComponent as BubblesHeader } from "./Resources/Bubbles-header.svg";
import { gsap, CSSPlugin, Expo, Power4 } from "gsap";
// import YourImage from "./Resources/uxwing-svg-icon-editor.png";
import StrokeImage from "./Resources/pngegg.png";
import RaysImage from "./Resources/clipart2176267.png";
import BoyImage from "./Resources/image_processing20210613-1005-391ni3.png";
import BoyTwoImage from "./Resources/2kprfiek79jaass4hrv3b8bai1.png"; //greenTShirtBoy
import BoyThreeImage from "./Resources/1658712442_28-papik-pro-p-drawings-of-a-child-on-a-transparent-backg-28-removebg-preview.png";
import { ReactComponent as InstagramIcon } from "./Resources/icons8-instagram-500.svg";
import { ReactComponent as FaceBookIcon } from "./Resources/icons8-gmail.svg";
import { ReactComponent as LinkedInIcon } from "./Resources/icons8-linkedin.svg";
import { ReactComponent as WhatsappIcon } from "./Resources/icons8-whatsapp.svg";
import { ReactComponent as ArrowIcon } from "./Resources/swirl-arrow-right-icon.svg";
import myPdf from "./Resources/Shivam2CV.2f99bc9b5d9bd1ecd1ea.pdf";
import Navbar from "./Navbar";
import Hero from "./Hero";
// import BoyTwoImage from "./Resources";
// import BoyTwoImage from "./Resources";

// these image have a background
// import TwoChildrenFootball from './Resources/1658712430_8-papik-pro-p-drawings-of-a-child-on-a-transparent-backg-8.png'
// import BoyGreenTshirt from "./Resources/1658712433_14-papik-pro-p-drawings-of-a-child-on-a-transparent-backg-14.png";
// import GirlFootball from "./Resources/1658712437_21-papik-pro-p-drawings-of-a-child-on-a-transparent-backg-21.jpg";
// import GirlLightGreen from "./Resources/1658712440_25-papik-pro-p-drawings-of-a-child-on-a-transparent-backg-25.png";
// import BoyRollerSkates from "./Resources/1658712442_28-papik-pro-p-drawings-of-a-child-on-a-transparent-backg-28.jpg";

gsap.registerPlugin(CSSPlugin);

function Main({ timeline, ease }) {
  useEffect(() => {
    //bubbles function
    const colors = [
      "#66ccff",
      "#110000",
      "#c16100",
      "#be6700",
      "#cdcaa2",
      "#0d004c",
      "#ffffff",
      "#b1a89e",
    ];

    const bubblesHeader = document.getElementById("bubbles-header");
    const screenWidth = window.innerWidth;
    console.log(screenWidth);
    const screenHeight = window.innerHeight;

    const circlePositions = [];

    if (screenWidth < 575) {
      let t;
      t = screenHeight / Math.log(screenWidth / 1.2);
      console.log("screen width is 500 now");
      for (let i = 0; i < 500; i++) {
        const r = getRandom(20, screenWidth);
        const y = t * -Math.log(r) + screenHeight - screenHeight / 2;
        const x = r + getRandom(-screenWidth / 4, screenWidth / 4);
        circlePositions.push({ x, y });
      }

      function createCircle(index) {
        const r = getRandom(50, 70);
        const strokeWidth = 5; // Define the border width
        const circle = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "circle"
        );

        circle.setAttributeNS(null, "r", r);
        circle.setAttributeNS(null, "stroke-width", strokeWidth);
        circle.classList.add("circle");
        positionCircle(circle, index);
        fillColor(circle);

        bubblesHeader.appendChild(circle);
      }

      function positionCircle(circle, index) {
        const position = circlePositions[index];
        circle.setAttributeNS(null, "cx", position.x + 200);
        circle.setAttributeNS(
          null,
          "cy",
          position.y - getRandom(screenHeight / 2, -700)
        );
      }

      function bubbleHover() {
        const circles = bubblesHeader.querySelectorAll("circle");
        circles.forEach((circle) => {
          circle.addEventListener("mouseover", function () {
            fillColor(this);
          });
        });
      }

      function fillColor(circle) {
        const screenWidth = window.innerWidth;
        if (screenWidth < 500) {
          circle.setAttribute(
            "style",
            "fill:" +
              colors[Math.floor(Math.random() * colors.length)] +
              "; stroke:black; stroke-width: 8px;"
          );
        } else {
          circle.setAttribute(
            "style",
            "fill:" +
              colors[Math.floor(Math.random() * colors.length)] +
              "; stroke:black; stroke-width: 8px;"
          );
        }
      }

      function getRandom(min, max) {
        return min + Math.floor(Math.random() * (max - min + 1));
      }

      function buildCircles(count) {
        for (let i = 0; i < count; i++) {
          createCircle(i);
        }
      }

      buildCircles(500);
      bubbleHover();
    } else {
      console.log("screen width is 1200 now");
      const colors = [
        "#66ccff",
        "#110000",
        "#c16100",
        "#be6700",
        "#be6700",
        "#cdcaa2",
        "#0d004c",
        "#ffffff",
        "#b1a89e",
      ];

      const bubblesHeader = document.getElementById("bubbles-header");
      const screenWidth = window.innerWidth;
      const screenHeight = window.innerHeight;

      const circlePositions = [];

      for (let i = 0; i < 2000; i++) {
        const t = screenHeight / Math.log(screenWidth / 1.2);
        const r = getRandom(1, screenWidth);
        const y = t * -Math.log(r) + screenHeight - screenHeight / 2;
        const x = r;
        circlePositions.push({ x, y });
      }

      function createCircle(index) {
        const r = getRandom(4, 26);
        const strokeWidth = 2; // Define the border width
        const circle = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "circle"
        );

        circle.setAttributeNS(null, "r", r);
        circle.setAttributeNS(null, "stroke-width", strokeWidth);
        circle.classList.add("circle");
        positionCircle(circle, index);
        fillColor(circle);

        bubblesHeader.appendChild(circle);
      }

      function positionCircle(circle, index) {
        const position = circlePositions[index];
        circle.setAttributeNS(null, "cx", position.x);
        circle.setAttributeNS(
          null,
          "cy",
          position.y - getRandom(-screenHeight / 2, 0)
        );
      }

      function bubbleHover() {
        const circles = bubblesHeader.querySelectorAll("circle");
        circles.forEach((circle) => {
          circle.addEventListener("mouseover", function () {
            fillColor(this);
          });
        });
      }

      function fillColor(circle) {
        circle.setAttribute(
          "style",
          "fill:" +
            colors[Math.floor(Math.random() * colors.length)] +
            "; stroke:black; stroke-width: 3px;"
        );
      }

      function getRandom(min, max) {
        return min + Math.floor(Math.random() * (max - min + 1));
      }

      function buildCircles(count) {
        for (let i = 0; i < count; i++) {
          createCircle(i);
        }
      }

      buildCircles(2000);
      bubbleHover();
    }
  }, []);

  const heading = useRef(null);
  
  useEffect(() => {
    
    timeline.from(heading, { opacity: 0, y: "100" });
  }, []);

  //loader
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    const count = setInterval(() => {
      setCounter((counter) =>
        counter < 200
          ? counter + 1
          : (clearInterval(count), setCounter(200), reveal())
      );
    }, 25);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  });

  const main = document.querySelector(".main");
  const reveal = () => {
    const t1 = gsap.timeline({
      onComplete: () => {},
    });
    t1.to(".hide", {
      opacity: 0,
      translateY: "-100%",
      duration: 1,
      stagger: {
        amount: 0.5,
      },
      ease: Expo.easeInOut,
    }).to(".loading", {
      opacity: 0,
      translateY: "-100%",
      duration: 0.5,
      stagger: {
        amount: 0.5,
      },
      ease: Power4.inOut,
    });

    gsap.from(main, {
      delay: 3.5,
      height: 0,
      stagger: {
        amount: 0.5,
      },
      ease: Power4.inOut,
    });
  };

  //button follower effect

  //contacts
  const handleInstagramClick = () => {
    window.open("https://www.instagram.com/_shivam_s.16/", "_blank");
  };

  const handleGmailClick = () => {
    window.open("mailto:shivam.sharma.ug21@nsut.ac.in", "_blank");
  };

  const handleWhatsappClick = () => {
    window.open("https://wa.me/+917357622773", "_blank");
  };

  const handleLinkedInClick = () => {
    window.open(
      "https://www.linkedin.com/in/shivam-sharma-04996324a",
      "_blank"
    );
  };

  const [message, setMessage] = useState("");

  const handleInputChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const whatsappLink = `https://wa.me/+917357622773?text=${encodeURIComponent(
      message
    )}`;

    // Open the WhatsApp link in a new tab
    window.open(whatsappLink, "_blank");
  };

  const handleDownloadClick = () => {
    const link = document.createElement("a");
    link.href = myPdf;
    link.download = "myPDF.pdf"; // Change the name as needed
    link.click();
  };

  return (
    <>
      <div className="main" id="main">
        <BubblesHeader className="c-bubbles" id="bubbles-header" />

        <div className="loading">
          <div className="follow"></div>
          <p className="count hide">{Math.floor(counter / 2)}%</p>
        </div>

        <div className="body">
          {/* <section className="navbar">
            <div
              className={`btn ${menuExpanded ? "above-menu expanded" : ""}`}
              id="toggle-btn"
              onClick={handleMenu}
            >
              <div
                className={`btn-outline btn-outline-1 ${
                  menuExpanded ? "expanded" : ""
                }`}
              ></div>
              <div
                className={`btn-outline btn-outline-2 ${
                  menuExpanded ? "expanded" : ""
                }`}
              ></div>
              <div id="hamburger" className={menuExpanded ? "active" : ""}>
                <span></span>
              </div>
            </div>
            <div className="overlay"></div>
            <div className={`menu ${menuExpanded ? "expanded" : ""}`}>
              <div className="primary-menu">
                <div className="menu-container">
                  <div className="wrapper">
                    <div className="menu-item">
                      <a href="#header">
                        <span>I</span>Index
                      </a>
                      <div className="menu-item-revealer"></div>
                    </div>
                    <div className="menu-item">
                      <a href="#projects">
                        <span>II</span>About
                      </a>
                      <div className="menu-item-revealer"></div>
                    </div>
                    <div className="menu-item">
                      <a href="#values">
                        <span>III</span>Values
                      </a>
                      <div className="menu-item-revealer"></div>
                    </div>
                  </div>
                </div>

                <div className="secondary-menu">
                  <div className="menu-container">
                    <div className="wrapper">
                      <div className="menu-item">
                        <a href="#projects">My CV</a>
                        <div className="menu-item-revealer"></div>
                      </div>

                      <div className="menu-item">
                        <a href="https://bradfrost.com/">
                          Credits & Inspirations
                        </a>
                        <div className="menu-item-revealer"></div>
                      </div>

                      <div className="menu-item">
                        <a href="#footer">Stalk Me</a>
                        <div className="menu-item-revealer"></div>
                      </div>

                      <div className="menu-item">
                        <a href="https://shivu-16.github.io/my-portfolio/">
                          Old Portfolio
                        </a>
                        <div className="menu-item-revealer"></div>
                      </div>
                    </div>

                    <div className="wrapper"></div>
                  </div>
                </div>
              </div>
            </div>
          </section> */}
          <section className="navbar">
            <Navbar />
          </section>

          <section className="header" id="header">
            <Hero />
          </section>

          <section className="about" id="about">
            <img src={BoyImage} className="boyImage" alt="none" />
            <div className="aboutContainer">
              <div className="aboutHeading">
                <img src={RaysImage} alt="none" />
                <h1>What I Do?</h1>
              </div>
              <div className="flexContainer">
                <div className="aboutCircles">
                  <span>Studing</span>
                  <span>Designing</span>
                  <span>Developing</span>
                </div>
                <div className="aboutStrokes">
                  <img src={StrokeImage} alt="none" />
                  <img src={StrokeImage} alt="none" />
                  <img src={StrokeImage} alt="none" />
                </div>
                <div className="aboutDescription">
                  <span>B.Tech Junior, NSUT</span>
                  <span>Clean Code, Amazing UI</span>
                  <span>Skills and LifeStyle</span>
                </div>
              </div>
            </div>
          </section>

          <section className="skills" id="skills"></section>

          <section className="projects" id="projects">
            <div className="projectsContainer">
              <div className="skillsContainer">
                <div className="skillsHeading">
                  <h1>My Expertise & Coding</h1>
                  <div className="expertiseContainer">
                    <h1 className="expertiseHeading">FrontEnd Devlopment</h1>
                    <span>
                      I'm Learning, Growing, applying my Devlopment Skills in
                      creating Web Apps Using HTML5, CSS, JS, React and GSAP
                    </span>
                  </div>
                  <div className="languagesContainer">
                    <h1 className="expertiseHeading">Programming Languages</h1>
                    <span>
                      I also have basic knowledge of Computing Languages like
                      Python, C/C++ and MySQL
                    </span>
                  </div>
                  <div className="magnet">
                    <span onClick={handleDownloadClick}>
                      Download My Curriculum-Vitae
                    </span>
                    <ArrowIcon className="arrowIcon" />
                  </div>
                  {/* <div className="HobbiesContainer">
                  <h1 className="expertiseHeading">Hobbies</h1>
                  <span>  I m 1300+ rated on Chess.com and I play basketball for my college team. I have played Badminton for my school in State level events. I love music and musical instruments and plays Harmonium and Tabla.</span>
                </div> */}
                </div>
              </div>
              <div className="myImageContainer">
                {/* <img src={MyImage} alt="none" className="myImageOne"></img> */}
                <img src={BoyTwoImage} alt="none" className="boyTwoImage"></img>
              </div>
            </div>
          </section>

          <section className="values" id="values">
            <div className="valuesContainer">
              <div className="imageContainerTwo">
                <img
                  className="boyThreeImage"
                  src={BoyThreeImage}
                  alt="none"
                ></img>
              </div>
              <div className="hobbiesContainer">
                <h1 className="valuesHeading">Hobbies & Values</h1>
                <span className="hobbiesPara paragraph">
                  I m 1300+ rated on Chess.com and I play basketball for my
                  college team. I have played Badminton for my school in State
                  level events. I love music and musical instruments and plays
                  Harmonium and Tabla.
                </span>
                <span className="valuesPara paragraph">
                  I m 1300+ rated on Chess.com and I play basketball for my
                  college team. I have played Badminton for my school in State
                  level events. I love music and musical instruments and plays
                  Harmonium and Tabla.
                </span>
              </div>
            </div>
          </section>

          <section className="footer" id="footer">
            <div className="footerContainer">
              <div className="links futer">
                <h3 className="footerHeading">Links</h3>
                <a href="https://shivu-16.github.io/portfolio-skin-one/">
                  Home
                </a>
                <a href="https://github.com/Shivu-16">GitHub</a>
                <a href="https://www.hackerrank.com/certificates/97e41b53e846">
                  HackerRank
                </a>
                <a href="https://shivu-16.github.io/my-portfolio/">
                  Old Portfolio
                </a>
              </div>
              <div className="social futer">
                <h3 className="footerHeading">Social</h3>
                <span onClick={handleInstagramClick}>
                  <InstagramIcon className="socialIcons" /> Instagram
                </span>
                <span onClick={handleGmailClick}>
                  <FaceBookIcon className="socialIcons" /> Gmail
                </span>
                <span onClick={handleLinkedInClick}>
                  <LinkedInIcon className="socialIcons" /> LinkedIn
                </span>
                <span onClick={handleWhatsappClick}>
                  <WhatsappIcon className="socialIcons" /> Whatsapp
                </span>
              </div>
              <div className="contact futer">
                <h3 className="footerHeading">Hire Me?</h3>
                <form onSubmit={handleSubmit}>
                  <div className="form">
                    <label htmlFor="message">
                      Enter your name <br />
                      and details below:
                    </label>
                  </div>
                  <div>
                    <textarea
                      id="message"
                      name="message"
                      value={message}
                      onChange={handleInputChange}
                      rows={2}
                      cols={30}
                      required
                    />
                  </div>
                </form>
                <div className="magnet">
                  <span onClick={handleSubmit}>Send on WhatsApp</span>
                  <ArrowIcon className="arrowIcon" />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default Main;

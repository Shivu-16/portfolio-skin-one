import React, { useEffect, useState} from "react";
import { ReactComponent as BubblesHeader } from "./Resources/Bubbles-header.svg";
// import { gsap, Power2, Power4, CSSRulePlugin } from "gsap/all";
// import { ReactComponent as BubblesFooter } from "./Resources/Bubbles-footer.svg";

function Main() {
  useEffect(() => {
    //bubbles function
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
  }, []);

  const [menuExpanded, setMenuExpanded] = useState(false);

  const handleMenu = () => {
    setMenuExpanded(!menuExpanded);
  };

  return (
    <>
      <div className="main" id="main">
        <BubblesHeader className="c-bubbles" id="bubbles-header" />

        <div className="body">
          {/* Button to toggle menu */}
          <div className={`btn ${menuExpanded ? 'above-menu expanded' : ''}`} id="toggle-btn" onClick={handleMenu}>
            <div className={`btn-outline btn-outline-1 ${menuExpanded ? 'expanded' : ''}`}></div>
            <div className={`btn-outline btn-outline-2 ${menuExpanded ? 'expanded' : ''}`}></div>
            <div id="hamburger" className={menuExpanded ? 'active' : ''}>
              <span></span>
            </div>
          </div>

          {/* animation around button */}
          <div className="overlay">
            <svg viewBox="0 0 1000 1000" className={menuExpanded ? 'expanded' : ''}>
              <path d="M0 2S175 1 500 1s500 1 500 1V0H0Z"></path>
            </svg>
          </div>

          <div className={`menu ${menuExpanded ? 'expanded' : ''}`}>
            {/* primary menu */}
            <div className="primary-menu">
              <div className="menu-container">
                <div className="wrapper">
                  <div className="menu-item">
                    <a href="/">
                      <span>I</span>Index
                    </a>
                    <div className="menu-item-revealer"></div>
                  </div>

                  <div className="menu-item">
                    <a href="/">
                      <span>II</span>Work
                    </a>
                    <div className="menu-item-revealer"></div>
                  </div>

                  <div className="menu-item">
                    <a href="/">
                      <span>III</span>About
                    </a>
                    <div className="menu-item-revealer"></div>
                  </div>
                </div>
              </div>

              {/* Secondary menu */}
              <div className="secondary-menu">
                <div className="menu-container">
                  <div className="wrapper">
                    <div className="menu-item">
                      <a href="/">My CV</a>
                      <div className="menu-item-revealer"></div>
                    </div>

                    <div className="menu-item">
                      <a href="/">Blog</a>
                      <div className="menu-item-revealer"></div>
                    </div>

                    <div className="menu-item">
                      <a href="/">Stalk Me</a>
                      <div className="menu-item-revealer"></div>
                    </div>
                  </div>

                  <div className="wrapper">
                    <div className="menu-item">
                      <a href="/">Credits & Inspirations</a>
                      <div className="menu-item-revealer"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mainHeading">
            <h1 className="hero-title">Shivam Sharma</h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;

import React, { useEffect } from "react";
import "./Hero.css";
import gsap from "gsap";
import SplitTextJS from "split-text-js";

export default function Hero() {
  useEffect(() => {
    const titles = gsap.utils.toArray(".text-wrapper p");
    const tlx = gsap.timeline({ repeat: -1, repeatDelay: 0.1 });

    titles.forEach((title) => {
      const splitTitle = new SplitTextJS(title);

      tlx.from(
        splitTitle.chars,
        {
          opacity: 0,
          y: 80,
          rotateX: -90,
          stagger: 0.02,
        },
        "<"
      );

      tlx.to(
        splitTitle.chars,
        {
          opacity: 0,
          y: -80,
          rotateX: 90,
          stagger: 0.02,
        },
        "<1"
      );
    });
    const cursor = document.querySelector(".cursor");
    document.addEventListener("mousemove", (e) => {
      cursor.style.left = e.pageX + "px";
      cursor.style.top = e.pageY + "px";
    });
  }, []);

  return (
    <>
      <div className="hero">
        <div className="hero-title">Shivam Sharma</div>
        <div className="text-wrapper">
          <p>UI designer</p>
          <p>Developer</p>
          <p>Student</p>
          <p>Programmer</p>
          <p>Engineer</p>
        </div>
        <div className="cursor"></div>
      </div>
    </>
  );
}

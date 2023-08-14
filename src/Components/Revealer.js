import React, { useEffect, useState } from "react";
import Main from "./Main";
import { gsap, CSSPlugin, Expo, Power4 } from "gsap";
gsap.registerPlugin(CSSPlugin);

const Revealer = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const count = setInterval(() => {
      setCounter((counter) =>
        counter < 200
          ? counter + 1
          : (clearInterval(count), setCounter(200), reveal())
      );
    }, 25);
  }, []);

  const main = document.querySelector(".main");
  const reveal = () => {
    const t1 = gsap.timeline({
      onComplete: () => {
        console.log("completed");
      },
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

  return (
    <>
      <Main />
      <div className="loading">
        <div className="follow"></div>
        <p className="count hide">{Math.floor(counter/2)}%</p>
      </div>
    </>
  );
};

export default Revealer;

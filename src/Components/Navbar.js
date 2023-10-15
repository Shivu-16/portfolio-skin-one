import React from "react";
import "./Navbar.css";
import plusIcon from "./Resources/house-svgrepo-com.svg";
// import crossIcon from "./Resources/user-hands-svgrepo-com.svg";
import homeIcon from "./Resources/house-svgrepo-com.svg";
import aboutIcon from "./Resources/house-svgrepo-com.svg";
import skillsIcon from "./Resources/house-svgrepo-com.svg";
import hobbiesIcon from "./Resources/house-svgrepo-com.svg";
import contactIcon from "./Resources/house-svgrepo-com.svg";

export default function Navbar() {
  let menuToggle = document.querySelector(".toggle");
  let menu = document.querySelector(".menu");

  const handleToggleClick = () => {
    menu.classList.toggle("active");
    menuToggle.classList.toggle("active");
  };

  const list = document.querySelectorAll("li");
  function activeLink() {
    list.forEach((item) => {
      item.classList.remove("active");
    });
    this.classList.add("active");
  }
  list.forEach((item) => {
    item.addEventListener("click", activeLink);
  });
  return (
    <ul className="menu">
      <div className="toggle" onClick={handleToggleClick}>
        <img src={plusIcon} className="iconImage" alt="none"></img>
      </div>

      <li style={{ "--i": "0" }}>
        <a href="/">
          <img src={homeIcon} className="iconImage" alt="none"></img>
        </a>
      </li>
      <li style={{ "--i": "1" }}>
        <a href="/">
          <img src={aboutIcon} className="iconImage" alt="none"></img>
        </a>
      </li>
      <li style={{ "--i": "2" }}>
        <a href="/">
          <img src={skillsIcon} className="iconImage" alt="none"></img>
        </a>
      </li>
      <li style={{ "--i": "3" }} className="active">
        <a href="/">
          <img src={hobbiesIcon} className="iconImage" alt="none"></img>
        </a>
      </li>
      <li style={{ "--i": "4" }}>
        <a href="/">
          <img src={contactIcon} className="iconImage" alt="none"></img>
        </a>
      </li>
      <li style={{ "--i": "5" }}>
        <a href="/">
          <img src={contactIcon} className="iconImage" alt="none"></img>
        </a>
      </li>
      <li style={{ "--i": "6" }}>
        <a href="/">
          <img src={contactIcon} className="iconImage" alt="none"></img>
        </a>
      </li>
      <li style={{ "--i": "7" }}>
        <a href="/">
          <img src={contactIcon} className="iconImage" alt="none"></img>
        </a>
      </li>
      <div className="indicator"></div>
    </ul>
  );
}

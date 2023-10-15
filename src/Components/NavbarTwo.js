import React from "react";
import "./NavbarTwo.css";
import plusIcon from "./Resources/house-svgrepo-com.svg";
import crossIcon from "./Resources/user-hands-svgrepo-com.svg";
import homeIcon from "./Resources/house-svgrepo-com.svg";
import aboutIcon from "./Resources/house-svgrepo-com.svg";
import skillsIcon from "./Resources/house-svgrepo-com.svg";
import hobbiesIcon from "./Resources/house-svgrepo-com.svg";
import contactIcon from "./Resources/house-svgrepo-com.svg";

export default function NavbarTwo() {
  let menuToggle = document.querySelector(".toggle");
  let menu = document.querySelector(".menu");
  const handleToggleClick = () => {
    menu.classList.toggle("active");
    menuToggle.classList.toggle("active");
  };

  const list = document.querySelectorAll(".list");
  function activeList (){
    list.forEach((item)=>{
        item.classList.remove('active')
    })
    this.classList.add('active')
  }
  list.forEach((item)=>{
    item.addEventListener('click',activeList);
  })
  return (
    <ul className="menu">
      <div className="toggle" onClick={handleToggleClick}>
        <img src={plusIcon} className="iconImage" alt="none"></img>
      </div>
      <li style={{ "--i": "13.6" }} className="list active iconOne">
        <a href="/">
          <img src={homeIcon} className="iconImage"></img>
        </a>
      </li>
      <li style={{ "--i": "12.3" }} className="list iconTwo active">
        <a href="/">
          <img src={aboutIcon} className="iconImage"></img>
        </a>
      </li>
      <li style={{ "--i": "11" }} className="list iconThree active">
        <a href="/">
          <img src={skillsIcon} className="iconImage"></img>
        </a>
      </li>
      <li style={{ "--i": "9.7" }} className="list iconFour active">
        <a href="/">
          <img src={hobbiesIcon} className="iconImage"></img>
        </a>
      </li>
      <li style={{ "--i": "8.4" }} className="list iconFive active">
        <a href="/">
          <img src={contactIcon} className="iconImage"></img>
        </a>
      </li>
    </ul>
  );
}

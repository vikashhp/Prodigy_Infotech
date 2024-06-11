import React from "react";
import "./Hero.css";
import profileImg from "../../assets/profile_img.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
  return (
    <div className="hero" id="home">
      <img src={profileImg} alt="" />
      <h1>
        <span>I'm Vikash Keshri,</span>FrontEnd Developer based in India
      </h1>
      <p>I am a FrontEnd Developer from Hazaribagh,Jharkhand as Fresher</p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect With Me
          </AnchorLink>
        </div>
        <div className="hero-resume">My Resume</div>
      </div>
    </div>
  );
};

export default Hero;

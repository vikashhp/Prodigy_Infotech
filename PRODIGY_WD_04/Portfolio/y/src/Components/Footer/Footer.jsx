import React from "react";
import "./Footer.css";
import footerLogo from "../../assets/footer_logo.svg";
import useIcon from '../../assets/user_icon.svg';

const Footer = () => {
  return (
    <div className="footer" id='footer'>
      <div className="footer-top">
        <div className="footer-top-left">
          <img src={footerLogo} alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla,
            praesentium?Lorem ipsum dolor sit amet, consectetur adipisicing
            elit. Obcaecati, illum.
          </p>
        </div>
        <div className="footer-top-right">
            <div className="footer-email-input">
                <img src={useIcon} alt="" />
                <input type="email" placeholder="Enter Your Email" />
            </div>
            <div className="footer-subscibe">
                Subscribe
            </div>
        
        </div>
        <hr />
        <div className="footer-bottom">
            <p className="footer-bottom-left">Lorem, ipsum dolor sit amet consectetur adipisicing elit.
             Expedita, beatae?</p>
             <div className="footer-bottom-right">
                <p>Term of Services</p>
                <p>Privacy Policy</p>
                <p>Connect With Me</p>
             </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

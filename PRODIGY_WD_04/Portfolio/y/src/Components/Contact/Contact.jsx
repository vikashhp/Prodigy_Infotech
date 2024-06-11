import React from "react";
import "./Contact.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mailIcon from "../../assets/mail_icon.svg";
import locationIcon from "../../assets/location_icon.svg";
import callIcon from "../../assets/call_icon.svg";

const Contact = () => {
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "75250895-c503-4f0e-99ed-ea84d3b1ed55");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
         alert(res.message)
        }
    }

  return (
    <div className="contact" id='contact'>
      <div className="Contact-title">
        <h1>Get In Touch</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's Talk</h1>
          <p>
            I'm Currently available to take new Projects,so feel free to send me
            a message about anything you want.You can Contact Anytime.
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mailIcon} alt="" />
              <p>keshriVikash664@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={callIcon} alt="" />
              <p>7004696959</p>
            </div>
            <div className="contact-detail">
              <img src={locationIcon} alt="" />
              <p>Hazaribagh</p>
            </div>
          </div>
        </div>
        <form className="contact-right" onSubmit={onSubmit}>
          <label htmlFor="">Your Name</label>
          <input type="text" placeholder="Enter Your Name" name="name" />
          <label htmlFor="">Your Email</label>
          <input type="email" placeholder="Enter Your Email" name="email" />
          <label htmlFor="">Write Your Message Here</label>
          <textarea
            name="message"
            rows="8"
            placeholder="Enter Your Message"
          ></textarea>
          <button className="contact-submit" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

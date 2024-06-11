import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import ProfileImg from "../../assets/about_profile.svg";

const About = () => {
  return (
    <div className="about" id='about'>
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} />
      </div>
      <div className="about-section">
        <div className="about-left">
          <img src={ProfileImg} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              nisi itaque reiciendis ipsam hic cumque vitae maiores
              consequuntur. Placeat voluptatibus commodi ut cumque provident
              beatae quo? Rem aliquid error ea quaerat voluptatibus esse dolorum
              delectus, libero itaque sapiente deserunt, repellendus veniam.
              Dicta dolor expedita soluta illum quo, nobis nihil? Quaerat
              incidunt illum cumque assumenda quibusdam ipsum unde atque nam.
              Alias?{" "}
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
              pariatur cupiditate consequuntur hic corporis fugiat adipisci
              tenetur inventore? Veniam voluptates minus beatae, ipsa labore
              non, culpa perspiciatis, harum cupiditate necessitatibus in aut
              consequatur nihil obcaecati libero hic mollitia modi dolore!
              Tempore omnis expedita nam quas temporibus voluptatem, explicabo
              nihil iusto.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>JavaScript</p>
              <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>React.js</p>
              <hr style={{ width: "60%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>Fresher</h1>
          <p>Years of Experiance</p>
        </div>
        <div className="about-achievement">
          <h1>5+</h1>
          <p>Projects Completed</p>
        </div>
        <div className="about-achievement">
          <h1>15+</h1>
          <p>Always Eager to Learn New Technologies</p>
        </div>
      </div>
    </div>
  );
};

export default About;

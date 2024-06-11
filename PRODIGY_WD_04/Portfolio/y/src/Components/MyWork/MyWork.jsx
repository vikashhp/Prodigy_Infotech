import React from "react";
import "./MyWork.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mywork_data from "../../assets/mywork_data";
import arrowIcon from '../../assets/arrow_icon.svg'

const MyWork = () => {
  return (
    <div className="myWork" id='work'>
      <div className="mywork-title">
        <h1>My Latest Work</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="myWorkContainer">
        {mywork_data.map((work, index) => {
          return <img key={index} src={work.w_img} />;
        })}
      </div>
      <div className="myWorkShowMore">
        <p>Show More</p>
        <img src={arrowIcon} alt="" />
      </div>
    </div>
  );
};

export default MyWork;

import "./Header.css";
import React from "react";
import img from "./Images/g.jpg";
import { BsFillTelephoneFill } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import { ImLocation } from "react-icons/im";
import { MdLabelImportant } from "react-icons/md";
import { Resume } from "./Resumedetails";


function Header() {
  return (
    <div className="wrapper">
    <div className="print-area">
      <div className="header">
        <div className="header-text">
          <h3>{Resume.Firstname}</h3>
          <h3>{Resume.Lastname}</h3>
          <p>{Resume.Profile}</p>
        </div>
      </div>

      <div className="content">
        <div className="left-area">
          <div className="img2">
            <img className="img" src={img} alt="img" />
          </div>
          <div className="profile">
            <h3>PROFILE</h3>
            <div className="pa">
            <p className="pa">
              Business Administration student. <br />
              I consider my self a responsible
              and orderly person.  <br />
              I am looking foward for my first work
              experience.
            </p>
            </div>
            <h3>CONTACT ME</h3>
            <p><span className="span1"><BsFillTelephoneFill/></span>{Resume.Mobile}</p>
            <p><span className="span1"><GrMail/></span>{Resume.Email}</p>
            <p><span className="span1"><ImLocation/></span>{Resume.Location}</p>
          </div>
        </div>

        <div className="right-area">
          <div className="education">
            <h3><span><MdLabelImportant /></span>EDUCATION</h3>
            <h5>{Resume.College}</h5>
            <p>Business Administration career, in progress.</p><br />
            <h5>{Resume.University}</h5>
            <p>2017-2021</p>
          </div>
          <div className="language">
          <h3><span><MdLabelImportant /></span>LANGUAGE</h3>
          <p>{Resume.Language}</p>
          <p>{Resume.Language2}</p>
          </div>
          <div className="computer-skill">
          <h3><span><MdLabelImportant /></span>Programming Language</h3>
          <p>{Resume.Programming1}</p>
          <p>{Resume.Programming2}</p>
          <p>{Resume.Programming3}</p>
          </div>
          <div className="volunteer">
          <h3><span><MdLabelImportant /></span>Volunteer experience</h3>
          <h5>Velveral foods inc.</h5>
          <p>Participation in collections to distribute in low-income schools.</p>
          </div>
          
        </div>
      </div>
    </div>
    </div>
  );
}

export default Header;

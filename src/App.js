import React from "react";
import home from "./img/house.png";
import mail from "./img/envelope-simple.png";
import { useState } from "react";
import ProfilePic from "./img/srivijaiPic.jpg";
import gmail from "./img/microsoft-outlook-logo.png";
import phoneimg from "./img/phone.png";
import pdf from "./SrivijaiSResume.pdf";

export default function App() {
  // function handleClose() {
  //   setHome(() => !maill);
  // }
  return (
    <div className="full">
      <NavBar />
      <Profile />
      <Summary />
    </div>
  );
}
function NavBar() {
  const [homee, setHome] = useState(false);
  const [maill, setMail] = useState(false);
  function handleMail() {
    setMail(() => !maill);
  }
  function handleHome() {
    setHome(() => !homee);
  }
  return (
    <div className="navprofile">
      <span className="name"></span>
      <div className="navlist">
        <img
          style={{ cursor: "pointer" }}
          className="icon"
          src={home}
          alt="home"
          onClick={handleHome}
        />

        <img
          style={{ cursor: "pointer" }}
          className="icon"
          src={mail}
          alt="mail"
          onClick={handleMail}
        />
      </div>

      {maill && (
        <div className="MailOpen">
          <p>
            <center>
              <br />
              <img
                style={{
                  position: "absolute",
                  top: "25px",
                  left: "15px",
                  cursor: "pointer",
                }}
                src={phoneimg}
                alt="phoneim"
              />
              +91 8870378385
              <br /> <br />
              <a href="mailto:srivijai.sekar@gmail.com">
                <img
                  style={{
                    position: "absolute",
                    width: "35px",
                    top: "62px",
                    left: "5px",
                    cursor: "pointer",
                  }}
                  src={gmail}
                  alt="mail"
                ></img>
              </a>
              srivijai.sekar@gmail.com
              <br />
            </center>
          </p>
        </div>
      )}
    </div>
  );
}
function Profile() {
  return (
    <div className="home">
      <img className="profilePic" src={ProfilePic} alt="profilepic" />
      <h1>SRIVIJAI </h1>
      <div className="profile_line" />
      <h3>Web Developer</h3>
    </div>
  );
}
function Summary() {
  return (
    <div className="summary">
      <p>
        <center>Hello</center>

        <p className="summaryBody">Here's who I am & what I do</p>
      </p>

      <a className="resumeP" href={pdf}>
        <button className="btn_resume">
          <strong> RESUME</strong>
        </button>
      </a>

      <button className="btn_project">
        <strong>PROJECTS</strong>
      </button>
      <p className="summarydetail">
        &nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Skilled
        and proficient entry-level website designer with tremendous dedication
        to work and a demonstrated ability in customer administration and
        satisfaction. A passionate designer can develop wireframes with
        specialized functionality to improve the user's experience.
      </p>
    </div>
  );
}

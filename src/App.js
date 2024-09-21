import React from "react";
import home from "./img/house.png";
import list from "./img/list.png";
import { useState } from "react";
import ProfilePic from "./img/srivijaiPic.jpg";
import gmail from "./img/microsoft-outlook-logo.png";
import phoneimg from "./img/phone.png";
import pdf from "./SrivijaiSResume.pdf";
import cancel from "./img/x.png";
export default function App() {
  // function handleClose() {
  //   setHome(() => !maill);
  // }
  return (
    <div className="full">
      <span className="astroid" />
      <span className="astroid3" />
      <span className="astroid2" />
      <div className="star"> ⭐</div>
      <div className="star2"> ⭐</div>
      <div className="star3"> ⭐</div>
      <div className="star4"> ⭐</div>
      <NavBar />
      <Profile />
      <Summary />
    </div>
  );
}
function NavBar() {
  const [homee, setHome] = useState(false);
  const [listOpen, setlistOpen] = useState(false);
  function handleList() {
    setlistOpen(() => !listOpen);
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
        {listOpen && (
          <img
            style={{ cursor: "pointer" }}
            className="listicon"
            src={cancel}
            alt="cancel"
            onClick={handleList}
          />
        )}
        {!listOpen && (
          <img
            style={{ cursor: "pointer" }}
            className="listicon"
            src={list}
            alt="list"
            onClick={handleList}
          />
        )}
      </div>

      {listOpen && (
        <div className="listOpen" style={{ color: "white" }}>
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
                    height: "35px",
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
      <p className="glow">
        <center>Hello!</center>
      </p>
      <p style={{ color: "white " }} className="summaryBody">
        <center>Frontend Developer</center>
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
        &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ambitious and
        adaptable graduate with <Degree /> Possessing strong interpersonal
        skills, I am eager to kickstart my career and contribute positively to a
        forwardthinking organization.
      </p>
    </div>
  );
}
function Degree() {
  return (
    <div className="degree" style={{ fontSize: "20px" }}>
      Master's degree in Computer Application.
    </div>
  );
}

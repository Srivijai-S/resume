import React from "react";
import home from "./img/house.png";
import mail from "./img/envelope-simple.png";
import prochat from "./img/projector-screen-chart.png";
import { useState } from "react";
import ProfilePic from "./img/srivijaiPic.jpg";
export default function App() {
  return (
    <div className="full">
      <NavBar />
      <Profile />
      <Summary />
    </div>
  );
}
function NavBar() {
  const [project, setProject] = useState(false);
  const [homee, setHome] = useState(false);
  const [maill, setMail] = useState(false);
  function handleMail() {
    setMail(() => !maill);
  }
  function handleHome() {
    setHome(() => !homee);
  }
  function handleProject() {
    setProject(() => !project);
  }
  return (
    <div className="navprofile">
      <span className="name"></span>
      <div className="navlist">
        <img className="icon" src={home} alt="home" onClick={handleHome} />
        <img
          className="icon"
          src={prochat}
          alt="project"
          onClick={handleProject}
        />

        <img className="icon" src={mail} alt="mail" onClick={handleMail} />
      </div>

      {maill && <div className="MailOpen"></div>}
      {project && <div className="ProjectOpen"></div>}
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
    <div>
      <div className="summary">
        <p>
          <center>Hello</center>

          <p className="summaryBody">Here's who I am & what I do</p>
        </p>
        <button className="btn_resume">
          <strong> RESUME</strong>
        </button>
        <button className="btn_project">
          <strong>PROJECTS</strong>
        </button>
        <p className="summarydetail">
          Skilled and proficient entry-level website designer with tremendous
          dedication to work and a demonstrated ability in customer
          administration and satisfaction. A passionate designer can develop
          wireframes with specialized functionality to improve the user's
          experience.
        </p>
      </div>
    </div>
  );
}

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
      <span className="name">SrivijaiS</span>
      <div className="navlist">
        <img clasName="icon" src={home} alt="home" onClick={handleHome} />
        <img clasName="icon" src={prochat} alt="project" onClick={handleProject} />

        <img clasName="icon" src={mail} alt="mail" onClick={handleMail} />
      </div>

      {maill && (
        <div className="MailOpen">
          <p> srivijai.sekar@gamil.com</p>
        </div>
      )}
      {project && (
        <div className="ProjectOpen">
          <option>front end</option>
          <option>front end</option>
        </div>
      )}
    </div>
  );
}
function Profile() {
  return (
    <div className="home">
      <img className="profilePic" src={ProfilePic} alt="profilepic" />
    </div>
  );
}

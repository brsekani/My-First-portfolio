import { GoDotFill } from "react-icons/go";
import { TiHtml5 } from "react-icons/ti";
import { FaCss3Alt } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiVisualstudiocode } from "react-icons/si";

function AboutMe() {
  return (
    <div className="container">
      <div className="about-me-header">
        <div className="about-me">
          <h1>About Me</h1>
          <GoDotFill color="#fcd65c" size={30} />
        </div>
        <div>
          <hr />
        </div>
      </div>

      <div className="about-me-sub">
        <h2>My Expertise</h2>
        <p>
          I am a tech enthusiast with a fervor for coding. My expertise lies in
          designing and building innovative web applications.
        </p>
      </div>

      <div className="skills-div">
        <div className="skills">
          <h3>DESIGN</h3>
          <div className="skill-icons">
            <TiHtml5 size={85} color="#e54d26" />
            <FaCss3Alt size={75} color="#264de4" />
          </div>
          <p>
            The primary objective of a website's design should center around
            catering to its intended user base, ensuring a user-focused approach
            guides the entire design process.
          </p>
        </div>

        <div className="skills">
          <h3>CODE</h3>
          <div className="skill-icons">
            <SiJavascript size={75} color="#f0db4f" />
            <FaReact size={75} color="#61DBFB" />
          </div>
          <p>
            I find pleasure in coding projects from the ground up and take
            delight in translating concepts into reality on the web. I
            prioritize straightforward content organization, uncluttered design
            principles, and purposeful user interactions.
          </p>
        </div>

        <div className="skills">
          <h3>TOOLS</h3>
          <div className="skill-icons">
            <SiVisualstudiocode size={75} color="#0078d7" />
            <FaGithub size={75} />
          </div>
          <p>
            Debugging is twice as challenging as the initial code-writing
            process. Hence, if you compose the code with maximum cleverness, it
            implies that you lack the intelligence required for effective
            debugging.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;

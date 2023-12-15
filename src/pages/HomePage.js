// ICONS FROM REACT ICONS
import { LuFolderHeart } from "react-icons/lu";
import { IoPersonCircle } from "react-icons/io5";
import { FaPenToSquare } from "react-icons/fa6";
import { MdOutgoingMail } from "react-icons/md";
import { IoMdMail } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import { Link } from "react-router-dom";

function HomePage() {
  const iconStyle = {
    cursor: "pointer",
  };

  return (
    <div className="container">
      <nav>
        <Link to="/" style={{ textDecoration: "none", color: "#fcd65c" }}>
          <div>
            <h1>SEKANI</h1>
            <GoDotFill color="#fcd65c" size={30} />
          </div>
        </Link>
        <div>
          <a
            href="https://drive.google.com/file/d/1YxSTXm3aQuEcxGaAOWhLMIh_6enA_K5r/view"
            style={{ textDecoration: "none", color: "#fcd65c" }}
          >
            <button>My CV</button>
          </a>
        </div>
      </nav>
      <main>
        <div className="main-text">
          <h6>Hello 👋</h6>
          <h1>I'm Lawal Temidayo</h1>
          <p>
            a passionate and self-taught frontend developer with a keen eye for
            design and a love for creating intuitive and visually appealing user
            experiences.
          </p>

          <a
            href="https://drive.google.com/file/d/1v0DEoeh4-cnUQ8Firzgb6OdNVDjPkTgO/view?usp=drive_link"
            style={{ textDecoration: "none", color: "#232323" }}
          >
            <button> Download Resume</button>
          </a>
        </div>

        <div className="main-icons">
          <Link
            to="/project"
            style={{ textDecoration: "none", color: "white" }}
          >
            <div>
              <LuFolderHeart style={iconStyle} size={50} />
              <p>My Project</p>
            </div>
          </Link>
          <Link
            to="/aboutMe"
            style={{ textDecoration: "none", color: "white" }}
          >
            <div>
              <IoPersonCircle style={iconStyle} size={50} />
              <p>About me</p>
            </div>
          </Link>

          <Link to="blog" style={{ textDecoration: "none", color: "white" }}>
            <div>
              <FaPenToSquare style={iconStyle} size={40} />
              <p>My Blog</p>
            </div>
          </Link>

          <Link
            to="/contactMe"
            style={{ textDecoration: "none", color: "white" }}
          >
            <div>
              <MdOutgoingMail style={iconStyle} size={50} />
              <p>Contact me</p>
            </div>
          </Link>
        </div>
      </main>

      <footer>
        <a
          style={{ textDecoration: "none", color: "white" }}
          href="mailto::lawaltemidayo06@gmail.com"
        >
          <IoMdMail size={25} style={iconStyle} />
        </a>
        <a
          style={{ textDecoration: "none", color: "white" }}
          href="https://github.com/brsekani/"
        >
          <FaGithub size={25} style={iconStyle} />
        </a>

        <a
          style={{ textDecoration: "none", color: "white" }}
          href="https://www.linkedin.com/in/lawal-temidayo-0b024b270/"
        >
          <FaLinkedin size={25} style={iconStyle} />
        </a>

        <a
          style={{ textDecoration: "none", color: "white" }}
          href="https://twitter.com/SeKaNi_TeCh"
        >
          <FaTwitter size={25} style={iconStyle} />
        </a>
      </footer>
    </div>
  );
}

export default HomePage;

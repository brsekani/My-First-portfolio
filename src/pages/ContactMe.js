// ICONS FROM REACT IC
import { GoDotFill } from "react-icons/go";
import { IoMdMail } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

function ContactMe() {
  const iconStyle = {
    cursor: "pointer",
  };

  return (
    <div className="container">
      <div className="contact-me-header">
        <div className="contect-me">
          <h1>Contact Me</h1>
          <GoDotFill color="#fcd65c" size={30} />
        </div>
        <div>
          <hr />
        </div>
      </div>

      <div className="contact-me-body">
        <div className="contact-me-body-article">
          <h2>Let's talk about everything!</h2>
          <p>
            Feel free to get in touch with me. I am always open to discussing
            new projects, creative ideas or opportunities to be part of your
            vision.
          </p>
          <div>
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
          </div>
        </div>

        <div className="contact-me-body-input">
          <div>
            <form>
              <label>Full Name</label>
              <input placeholder="Your full name" />
            </form>

            <form>
              <label>Email</label>
              <input placeholder="Your email address" />
            </form>
          </div>

          <form className="subject-input">
            <label>Subject</label>
            <input placeholder="Your subject" />
          </form>

          <form>
            <label>Message</label>
            <textarea
              className="message-input"
              placeholder="Your Message"
            ></textarea>
          </form>

          <button>Send Message</button>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;

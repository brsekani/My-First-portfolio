import { GoDotFill } from "react-icons/go";
import { IoMdMail } from "react-icons/io";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

function ContactMe() {
  const iconStyle = {
    cursor: "pointer",
  };

  return (
    <div className="flex flex-col items-center  min-h-screen bg-[#232323] text-white font-['Varela_Round'] w-full px-10">
      <div className="flex items-center justify-center mt-10 mb-4 w-full">
        <div className="flex items-center">
          <h1 className="text-[#fcd65c] text-3xl text-nowrap">Contact Me</h1>
          <GoDotFill color="#fcd65c" size={30} />
        </div>
        <hr className="flex-grow border-t w-full border-gray-400 ml-4 hidden sm:flex" />
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-between mt-8 mb-8 gap-10">
        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-[#fcd65c] text-2xl text-nowrap">
            Let's talk about everything!
          </h2>
          <p className="w-full lg:w-96 mt-2 text-justify leading-6">
            Feel free to get in touch with me. I am always open to discussing
            new projects, creative ideas or opportunities to be part of your
            vision.
          </p>
          <div className="flex items-center gap-4 mt-4">
            <a
              href="mailto:lawaltemidayo06@gmail.com"
              className="text-white"
              style={iconStyle}
            >
              <IoMdMail size={25} />
            </a>
            <a
              href="https://github.com/brsekani/"
              className="text-white"
              style={iconStyle}
            >
              <FaGithub size={25} />
            </a>
            <a
              href="https://www.linkedin.com/in/lawal-temidayo-0b024b270/"
              className="text-white"
              style={iconStyle}
            >
              <FaLinkedin size={25} />
            </a>
            <a
              href="https://twitter.com/SeKaNi_TeCh"
              className="text-white"
              style={iconStyle}
            >
              <FaTwitter size={25} />
            </a>
          </div>
        </div>

        <div className="w-full lg:w-1/2">
          <div className="flex flex-col lg:flex-row gap-4 mb-4">
            <form className="w-full">
              <label className="block mb-1 text-[#fcd65c]">Full Name</label>
              <input
                placeholder="Your full name"
                className="w-full h-10 rounded-full bg-gray-700 px-4"
              />
            </form>
            <form className="w-full">
              <label className="block mb-1 text-[#fcd65c]">Email</label>
              <input
                placeholder="Your email address"
                className="w-full h-10 rounded-full bg-gray-700 px-4"
              />
            </form>
          </div>

          <form className="w-full mb-4">
            <label className="block mb-1 text-[#fcd65c]">Subject</label>
            <input
              placeholder="Your subject"
              className="w-full h-10 rounded-full bg-gray-700 px-4"
            />
          </form>

          <form className="w-full mb-4">
            <label className="block mb-1 text-[#fcd65c]">Message</label>
            <textarea
              placeholder="Your Message"
              className="w-full h-32 rounded-lg bg-gray-700 p-4"
            ></textarea>
          </form>

          <button className="w-full lg:w-1/3 h-10 bg-[#fcd65c] text-gray-800 rounded-full border-2 border-[#fcd65c] hover:bg-gray-800 hover:text-[#fcd65c]">
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;

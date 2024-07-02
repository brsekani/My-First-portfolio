import { GoDotFill } from "react-icons/go";
import { TiHtml5 } from "react-icons/ti";
import { FaCss3Alt } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiVisualstudiocode } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";

function AboutMe() {
  return (
    <div className="flex flex-col items-center  min-h-screen bg-[#232323] text-white font-['Varela_Round'] w-full px-5 pb-10">
      <div className="flex items-center justify-center mt-10 mb-4 w-full">
        <div className="flex items-center">
          <h1 className="text-[#fcd65c] text-3xl text-nowrap">About Me</h1>
          <GoDotFill color="#fcd65c" size={30} />
        </div>
        <hr className="flex-grow border-t w-full border-gray-400 ml-4 hidden sm:flex" />
      </div>

      <div className="about-me-sub flex flex-col items-center text-center mt-10  mb-16">
        <h2 className="text-2xl font-semibold">My Expertise</h2>
        <p className="mt-4 text-lg">
          I am a tech enthusiast with a fervor for coding. My expertise lies in
          designing and building innovative web applications.
        </p>
      </div>

      <div className="flex lg:flex-row flex-col items-center gap-8 mx-2">
        <div className="skills flex flex-col items-center">
          <h3 className="text-xl font-semibold">DESIGN</h3>
          <div className="skill-icons flex justify-center gap-4 mt-4">
            <TiHtml5 size={85} color="#e54d26" />
            <FaCss3Alt size={75} color="#264de4" />
            <SiTailwindcss size={75} color="#264de4" />
          </div>
          <p className="mt-4 text-center">
            The primary objective of a website's design should center around
            catering to its intended user base, ensuring a user-focused approach
            guides the entire design process.
          </p>
        </div>

        <div className="skills flex flex-col items-center">
          <h3 className="text-xl font-semibold">CODE</h3>
          <div className="skill-icons flex justify-center gap-4 mt-4">
            <SiJavascript size={75} color="#f0db4f" />
            <FaReact size={75} color="#61DBFB" />
          </div>
          <p className="mt-4 text-center">
            I find pleasure in coding projects from the ground up and take
            delight in translating concepts into reality on the web. I
            prioritize straightforward content organization, uncluttered design
            principles, and purposeful user interactions.
          </p>
        </div>

        <div className="skills flex flex-col items-center">
          <h3 className="text-xl font-semibold">TOOLS</h3>
          <div className="skill-icons flex justify-center gap-4 mt-4">
            <SiVisualstudiocode size={75} color="#0078d7" />
            <FaGithub size={75} />
          </div>
          <p className="mt-4 text-center">
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

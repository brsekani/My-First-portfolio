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
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#232323] text-white font-['Varela_Round']">
      <nav className="flex items-center justify-between w-full max-w-5xl px-2 mt-8">
        <Link to="/" className="flex items-center text-[#fcd65c] no-underline">
          <h1 className="text-2xl">SEKANI</h1>
          <GoDotFill className="ml-1" color="#fcd65c" size={30} />
        </Link>

        <a
          href="https://drive.google.com/file/d/1VMWQZvMDFwwCA8zqzvnaNF6bvfU5lbR_/view?usp=drive_link"
          className="text-[#fcd65c] no-underline"
        >
          <button className="w-24 h-10 border-2 border-[#fcd65c] bg-[#232323] text-[#fcd65c] hover:bg-[#fcd65c] hover:text-[#232323]">
            My CV
          </button>
        </a>
      </nav>

      <main className="flex flex-col items-center justify-between gap-12 px-5 mt-12 lg:flex-row lg:gap-24 lg:mt-32">
        <div className="md:text-left">
          <h6 className="text-[#fcd65c] text-lg">Hello 👋</h6>
          <h1 className="mt-4 text-4xl font-bold">I'm Lawal Temidayo</h1>
          <p className="max-w-lg mt-4 leading-7">
            a passionate and self-taught frontend developer with a keen eye for
            design and a love for creating intuitive and visually appealing user
            experiences.
          </p>

          <a
            href="https://drive.google.com/file/d/1VMWQZvMDFwwCA8zqzvnaNF6bvfU5lbR_/view?usp=drive_link"
            className="text-[#232323] no-underline"
          >
            <button className="w-44 h-12 mt-4 font-bold bg-[#fcd65c] text-[#232323] hover:bg-[#232323] hover:text-[#fcd65c] border-none">
              Download Resume
            </button>
          </a>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <Link
            to="/project"
            className="flex flex-col items-center justify-center w-36 h-28 border-2 border-[#fcd65c] rounded-lg hover:bg-[#fcd65c] text-white no-underline"
          >
            <LuFolderHeart className="text-3xl" />
            <p className="mt-2 text-sm">My Project</p>
          </Link>
          <Link
            to="/aboutMe"
            className="flex flex-col items-center justify-center w-36 h-28 border-2 border-[#fcd65c] rounded-lg hover:bg-[#fcd65c] text-white no-underline"
          >
            <IoPersonCircle className="text-3xl" />
            <p className="mt-2 text-sm">About me</p>
          </Link>

          <Link
            to="blog"
            className="flex flex-col items-center justify-center w-36 h-28 border-2 border-[#fcd65c] rounded-lg hover:bg-[#fcd65c] text-white no-underline"
          >
            <FaPenToSquare className="text-2xl" />
            <p className="mt-2 text-sm">My Blog</p>
          </Link>

          <Link
            to="/contactMe"
            className="flex flex-col items-center justify-center w-36 h-28 border-2 border-[#fcd65c] rounded-lg hover:bg-[#fcd65c] text-white no-underline"
          >
            <MdOutgoingMail className="text-3xl" />
            <p className="mt-2 text-sm">Contact me</p>
          </Link>
        </div>
      </main>

      <footer className="flex items-center justify-center gap-6 mt-10 mb-10">
        <a
          href="mailto:lawaltemidayo06@gmail.com"
          className="text-white no-underline"
        >
          <IoMdMail className="text-2xl" style={iconStyle} />
        </a>
        <a
          href="https://github.com/brsekani/"
          className="text-white no-underline"
        >
          <FaGithub className="text-2xl" style={iconStyle} />
        </a>
        <a
          href="https://www.linkedin.com/in/lawal-temidayo-0b024b270/"
          className="text-white no-underline"
        >
          <FaLinkedin className="text-2xl" style={iconStyle} />
        </a>
        <a
          href="https://twitter.com/SeKaNi_TeCh"
          className="text-white no-underline"
        >
          <FaTwitter className="text-2xl" style={iconStyle} />
        </a>
      </footer>
    </div>
  );
}

export default HomePage;

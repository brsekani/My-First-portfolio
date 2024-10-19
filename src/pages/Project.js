import { useState } from "react";
import { GoDotFill } from "react-icons/go";

function Project() {
  const [loading, setLoading] = useState({});

  const handleImageLoad = (key) => {
    setLoading((prevLoading) => ({ ...prevLoading, [key]: false }));
  };

  const projects = [
    {
      name: "chariz Interiors",
      link: "https://chariz.bojisua.com/",
      image: "/images/charizInteriors.png",
      alt: "chariz Interiors",
      key: "chariz",
      technologies: "React, Tailwind CSS, Framer Motion",
      role: "Frontend",
    },
    {
      name: "HR Solution",
      link: "https://hr-solutions-3lbh.vercel.app/",
      image: "/images/HRSolutionPage.png",
      alt: "HR Solution",
      key: "HR Solution",
      technologies: "NextJss, Tailwind CSS, Framer Motion",
      role: "Frontend",
    },
    {
      name: "Kanban Manager",
      link: "https://enchanting-pastelito-dafd8b.netlify.app/",
      image: "/images/kanbanManger.png",
      alt: "Kanban Manager",
      key: "kanban",
      technologies: "React, Tailwind CSS, Framer Motion",
      role: "Frontend",
    },
    {
      name: "Fashion Frenzy",
      link: "https://mellow-zabaione-fe430d.netlify.app/",
      image: "/images/e-commerceScreenshot.PNG",
      alt: "Fashion Frenzy",
      key: "fashion",
      technologies: "React, CSS",
      role: "Frontend",
    },
    {
      name: "Sneaker",
      link: "https://cheerful-lollipop-7b95f8.netlify.app/",
      image: "/images/sneakerCompany.PNG",
      alt: "Sneaker",
      key: "sneaker",
      technologies: "HTML, CSS, Javascript",
      role: "Frontend",
    },
    {
      name: "Where in the World",
      link: "https://endearing-pudding-b463ef.netlify.app/",
      image: "/images/countryAPIScreenShot.PNG",
      alt: "Where in the World",
      key: "world",
      technologies: "HTML, CSS, Javascript",
      role: "Frontend",
    },
  ];

  return (
    <div className="flex flex-col items-center min-h-screen bg-[#232323] text-white font-['Varela_Round'] w-full px-10 pb-10">
      <div className="flex items-center justify-center w-full mt-10 mb-4">
        <div className="flex items-center">
          <h1 className="text-[#fcd65c] text-3xl text-nowrap">Projects</h1>
          <GoDotFill color="#fcd65c" size={30} />
        </div>
        <hr className="flex-grow hidden w-full ml-4 border-t border-gray-400 sm:flex" />
      </div>

      <div className="flex flex-wrap items-center justify-center gap-6 mt-12">
        {projects.map((project) => (
          <a
            key={project.key}
            className="text-white no-underline project-link"
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="relative w-full max-w-xs overflow-hidden transition-shadow duration-300 rounded-lg shadow-lg project-item">
              {loading[project.key] && <div className="spinner"></div>}
              <img
                src={project.image}
                alt={project.alt}
                onLoad={() => handleImageLoad(project.key)}
                className={`project-image block w-full h-auto rounded-lg transition-transform duration-300 ${
                  loading[project.key] ? "hidden" : "block"
                }`}
              />
              <div className="p-4">
                <p className="text-lg font-semibold text-custom-yellow">
                  {project.name}
                </p>
                <p className="mt-2 text-sm">{project.technologies}</p>
                <p className="mt-1 text-sm text-gray-400">{project.role}</p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Project;

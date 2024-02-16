import { useState } from "react";
import { GoDotFill } from "react-icons/go";

function Project() {
  const [loading, setLoading] = useState(true);

  const handleImageLoad = () => {
    setLoading(false);
  };

  return (
    <div className="container">
      <div className="project-header">
        <div className="project">
          <h1>Projects</h1>
          <GoDotFill color="#fcd65c" size={30} />
        </div>
        <div>
          <hr />
        </div>
      </div>

      <div className="project-body">
        <a
          style={{ textDecoration: "none", color: "white" }}
          href="https://enchanting-pastelito-dafd8b.netlify.app/"
        >
          <div>
            <p>Kanban Manager</p>
            {loading && <div className="spinner"></div>}
            <img
              src="\images\kanban manger ss.png"
              alt="project"
              onLoad={handleImageLoad}
              style={{ display: loading ? "none" : "block" }}
            />
          </div>
        </a>

        <a
          style={{ textDecoration: "none", color: "white" }}
          href="https://mellow-zabaione-fe430d.netlify.app/"
        >
          <div>
            <p>Fashion Frenzy</p>
            {loading && <div className="spinner"></div>}
            <img
              src="/images/E-commerce screenshot.PNG"
              alt="project"
              onLoad={handleImageLoad}
              style={{ display: loading ? "none" : "block" }}
            />
          </div>
        </a>

        <a
          style={{ textDecoration: "none", color: "white" }}
          href="https://cheerful-lollipop-7b95f8.netlify.app/"
        >
          <div>
            <p>Sneaker</p>
            {loading && <div className="spinner"></div>}
            <img
              src="/images/sneakerCompany.PNG"
              alt="project"
              onLoad={handleImageLoad}
              style={{ display: loading ? "none" : "block" }}
            />
          </div>
        </a>

        <a
          style={{ textDecoration: "none", color: "white" }}
          href="https://endearing-pudding-b463ef.netlify.app/"
        >
          <div>
            <p>Where in the world</p>
            {loading && <div className="spinner"></div>}
            <img
              src="/images/countryAPIScreenShot.PNG"
              alt="project"
              onLoad={handleImageLoad}
              style={{ display: loading ? "none" : "block" }}
            />
          </div>
        </a>
      </div>
    </div>
  );
}

export default Project;

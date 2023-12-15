import { GoDotFill } from "react-icons/go";

function Project() {
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
          href="https://mellow-zabaione-fe430d.netlify.app/"
        >
          <div>
            <img src="/images/E-commerce screenshot.PNG" alt="project" />
            <p>Fashion Frenzy</p>
          </div>
        </a>

        <a
          style={{ textDecoration: "none", color: "white" }}
          href="https://cheerful-lollipop-7b95f8.netlify.app/"
        >
          <div>
            <img src="/images/sneakerCompany.PNG" alt="project" />
            <p>Sneaker</p>
          </div>
        </a>

        <a
          style={{ textDecoration: "none", color: "white" }}
          href="https://endearing-pudding-b463ef.netlify.app/"
        >
          <div>
            <img src="/images/countryAPIScreenShot.PNG" alt="project" />
            <p>Where in the world</p>
          </div>
        </a>
      </div>
    </div>
  );
}

export default Project;

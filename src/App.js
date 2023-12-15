import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContactMe from "./pages/ContactMe";
import HomePage from "./pages/HomePage";
import AboutMe from "./pages/AboutMe";
import Project from "./pages/Project";
import Blog from "./pages/Blog";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" Component={HomePage} />
          <Route path="/contactMe" Component={ContactMe} />
          <Route path="/aboutMe" Component={AboutMe} />
          <Route path="/project" Component={Project} />
          <Route path="blog" Component={Blog} />
          <Route path="*" Component={PageNotFound} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

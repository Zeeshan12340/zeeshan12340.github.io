import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Fade } from "react-awesome-reveal";
import Header from "./Header";
import ProjectCard from "./projects/ProjectCard";
import FallbackSpinner from "./FallbackSpinner";
import projects from "../constants/projects.json";

const Projects = (props) => {
  const { header } = props;
  const [data, setData] = useState(null);

  useEffect(() => {
    setData(projects);
  }, []);

  return (
    <div>
      <Header title={header} />
      {data ? (
        <div className="projects-container">
          {data.projects?.map((project) => (
            <Fade key={project.title} className="project-fade">
              <ProjectCard project={project} />
            </Fade>
          ))}
        </div>
      ) : (
        <FallbackSpinner />
      )}
    </div>
  );
};

Projects.propTypes = {
  header: PropTypes.string.isRequired,
};

export default Projects;

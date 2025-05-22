import React, { useState, useEffect, useContext } from "react";
import { Button } from "react-bootstrap";
import { ThemeContext } from "styled-components";
import PropTypes from "prop-types";
import { Fade } from "react-awesome-reveal";
import Header from "./Header";
import ProjectCard from "./projects/ProjectCard";
import FallbackSpinner from "./FallbackSpinner";
import projects from "../constants/projects.json";

const styles = {
  rowStyle: {
    justifyContent: "center",
  },
  showMoreStyle: {
    margin: 25,
  },
};

const Projects = (props) => {
  const theme = useContext(ThemeContext);
  const { header } = props;
  const [data, setData] = useState(null);
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    setData(projects);
  }, []);
  const numberOfItems = showMore && data ? data.length : 6;
  return (
    <div>
      <Header title={header} />
      {data ? (
        <div>
          <div className="projects-container">
            {data.projects?.slice(0, numberOfItems).map((project) => (
              <Fade key={project.title}>
                <ProjectCard project={project} />
              </Fade>
            ))}
          </div>
          <div>
            {!showMore && (
              <Button
                style={styles.showMoreStyle}
                variant={theme.bsSecondaryVariant}
                onClick={() => setShowMore(true)}
              >
                show more
              </Button>
            )}
          </div>
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

import React, { useContext } from "react";
import { Button, Card } from "react-bootstrap";
import PropTypes from "prop-types";
import { ThemeContext } from "styled-components";
import ReactMarkdown from "react-markdown";

const styles = {
  cardTitleStyle: {
    fontFamily: "var(--font-display)",
    fontSize: 21,
    fontWeight: 700,
    color: "var(--text)",
  },
  cardTextStyle: {
    textAlign: "left",
  },
  buttonStyle: {
    margin: 0,
  },
};

const ProjectCard = (props) => {
  const theme = useContext(ThemeContext);
  const { project } = props;

  return (
    <Card
      className="glow-card project-card"
      style={{ borderRadius: 10, backgroundColor: theme.cardBackground }}
      text={theme.bsSecondaryVariant}
    >
      <Card.Img
        variant="top"
        src={project?.image}
        style={{
          height: 190,
          width: "100%",
          objectFit: "cover",
          backgroundColor: "var(--card-footer-bg)",
        }}
      />
      <Card.Body>
        <Card.Title style={styles.cardTitleStyle}>{project.title}</Card.Title>
        <Card.Text style={styles.cardTextStyle} as="div">
          <ReactMarkdown>{project.bodyText}</ReactMarkdown>
        </Card.Text>
      </Card.Body>
      <Card.Footer
        style={{
          backgroundColor: theme.cardFooterBackground,
          borderTop: "1px solid var(--card-border)",
        }}
      >
        {project?.links && (
          <div className="project-card__actions">
            {project.links.map((link) => (
              <Button
                key={link.href}
                className="accent-btn"
                style={styles.buttonStyle}
                variant={"outline-" + theme.bsSecondaryVariant}
                onClick={() => window.open(link.href, "_blank")}
              >
                {link.text}
              </Button>
            ))}
          </div>
        )}
        {project.tags && (
          <div className="tag-list">
            {project.tags.map((tag) => (
              <span key={tag} className="tag">
                {tag}
              </span>
            ))}
          </div>
        )}
      </Card.Footer>
    </Card>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    bodyText: PropTypes.string.isRequired,
    image: PropTypes.string,
    links: PropTypes.arrayOf(
      PropTypes.shape({
        text: PropTypes.string.isRequired,
        href: PropTypes.string.isRequired,
      })
    ),
    tags: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};

export default ProjectCard;

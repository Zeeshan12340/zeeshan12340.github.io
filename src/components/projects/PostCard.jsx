import React, { useContext } from "react";
import { Badge, Card } from "react-bootstrap";
import PropTypes from "prop-types";
import { ThemeContext } from "styled-components";
import ReactMarkdown from "react-markdown";

const styles = {
  cardTitleStyle: {
    fontSize: 24,
    fontWeight: 700,
    marginBottom: 10,
  },
  buttonStyle: {
    margin: 5,
  },
};

const PostCard = (props) => {
  const theme = useContext(ThemeContext);

  const { project } = props;

  return (
    <div>
      <Card
        style={{
          borderRadius: 10,
          backgroundColor: theme.cardBackground,
          borderColor: theme.cardBorderColor,
          width: 500,
          height: 325,
          marginLeft: 100,
          marginRight: 100,
          marginBottom: 50,
        }}
        text={theme.bsSecondaryVariant}
      >
        <Card.Img variant="top" src={project?.image} style={{ height: 175 }} />
        <Card.Body style={{ minHeight: "150px" }}>
          <Card.Title style={styles.cardTitleStyle}>{project.title}</Card.Title>
          <Card.Text style={{ textAlign: 'left' }} as="div">
            <ReactMarkdown>{project.bodyText}</ReactMarkdown>
          </Card.Text>
        </Card.Body>

        {project.tags && (
          <Card.Footer style={{ backgroundColor: theme.cardFooterBackground }}>
            {project.tags.map((tag) => (
              <Badge
                key={tag}
                pill
                bg={theme.bsSecondaryVariant}
                text={theme.bsPrimaryVariant}
                style={{ marginRight: 5, marginLeft: 5}}
              >
                {tag}
              </Badge>
            ))}
          </Card.Footer>
        )}
      </Card>
    </div>
  );
};

PostCard.propTypes = {
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

export default PostCard;

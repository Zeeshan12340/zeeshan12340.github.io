import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import PropTypes from "prop-types";
import { Fade } from "react-awesome-reveal";
import { Container } from "react-bootstrap";
import Header from "./Header";
import FallbackSpinner from "./FallbackSpinner";
import skills from "../constants/skills.json";
import particlesOptions from "../particles.json";
import Particles, {initParticlesEngine} from "@tsparticles/react";
import {loadFull} from "tsparticles";

const styles = {
  iconStyle: {
    height: 75,
    width: 75,
  },
  introTextContainer: {
    whiteSpace: "pre-wrap",
  },
};

function Skills(props) {
  const { header } = props;
  const [data, setData] = useState(null);
  const [init, setInit] = useState(false);

  const renderSkillsIntro = (intro) => (
    <h4 style={styles.introTextContainer}>
      <ReactMarkdown>{intro}</ReactMarkdown>
    </h4>
  );

  function handleToggle(title) {
    const newData = JSON.parse(JSON.stringify(data));
    newData.skills.map((skill) => {
      skill.items.map((item) => {
        if (item.title === title) {
          item.show = !item.show;
        }
      });
    });
    setData(newData);
  }

  useEffect(() => {
    setData(skills);
    if (init) {
      return;
    }
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, [init]);

  return (
    <div>
      {init && <Particles options={particlesOptions}/>}
      <Header title={header} />
      {data ? (
        <Fade>
          <div className="section-content-container">
            <Container>
              {renderSkillsIntro(data.intro)}
              {data.skills?.map((rows) => (
                <div key={rows.title}>
                  <br />
                  <h3>{rows.title}</h3>
                  {rows.items.map((item) => (
                    <div key={item.title} style={{ display: "inline-block" }}>
                      <button
                        type="button"
                        className="btn m-1"
                        onClick={() => {
                          handleToggle(item.title);
                        }}
                      >
                        <img
                          style={styles.iconStyle}
                          src={item.icon}
                          alt={item.title}
                        />
                      </button>
                      <p>{item.title}</p>
                    </div>
                  ))}
                </div>
              ))}
              {data.skills.map((skill) => (
                <div key={skill.title} className="skills-container">
                  {skill.items.map(
                    (item) =>
                      item.show && (
                        <div className="skill-item" key={item.title}>
                          <div style={{ margin: 10 }}>
                            <div className="h4">
                              <ReactMarkdown>{item.title}</ReactMarkdown>
                            </div>
                            <ReactMarkdown>{item.detail}</ReactMarkdown>
                          </div>
                        </div>
                      )
                  )}
                </div>
              ))}
            </Container>
          </div>
        </Fade>
      ) : (
        <FallbackSpinner />
      )}
    </div>
  );
}

Skills.propTypes = {
  header: PropTypes.string.isRequired,
};

export default Skills;

import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import PropTypes from 'prop-types';
import { Fade } from 'react-awesome-reveal';
import { Container } from 'react-bootstrap';
import Header from './Header';
import FallbackSpinner from './FallbackSpinner';
import skills from '../constants/skills.json';

const styles = {
  iconStyle: {
    height: 75,
    width: 75,
  },
  introTextContainer: {
    whiteSpace: 'pre-wrap',
  },
};

function Skills(props) {
  const { header } = props;
  const [data, setData] = useState(null);

  const renderSkillsIntro = (intro) => (
    <h4 style={styles.introTextContainer}>
      <ReactMarkdown children={intro} />
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
    setData(skills)
  }, [])

  return (
    <>
      <Header title={header} />
      {data ? (
        <Fade>
          <div className="section-content-container">
            <Container>
              {renderSkillsIntro(data.intro)}
              {data.skills?.map((rows, index) => (
                <div key={index}>
                  <br />
                  <h3>{rows.title}</h3>
                  {rows.items.map((item, index) => (
                    <>
                      <div key={index} style={{ display: 'inline-block' }}>
                        <button type="button" className="btn m-1" onClick={() => {handleToggle(item.title)}}>
                          <img
                            style={styles.iconStyle} src={item.icon} alt={item.title}
                          />
                        </button>
                        <p>{item.title}</p>
                      </div>
                    </>
                  ))}
                </div>
              ))}
              {data.skills.map((skill, index) => (
                <>
                  <div key={index} className='d-flex justify-content-center'>
                    {skill.items.map((item, index) => (
                      <div key={index}>
                        {item.show && (
                          <div style={{margin: 10}}>
                            <div className='h4'>
                              <ReactMarkdown children={item.title} />
                            </div>
                            <ReactMarkdown children={item.detail} />
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </>
              ))}
            </Container>
          </div>
        </Fade>
      ) : <FallbackSpinner /> }
    </>
  );
}

Skills.propTypes = {
  header: PropTypes.string.isRequired,
};

export default Skills;

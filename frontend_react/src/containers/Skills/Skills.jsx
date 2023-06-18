import React, { useEffect, useState } from 'react';
import { Tooltip } from 'react-tooltip';

import { motion } from 'framer-motion';
import { images } from '../../constants/index';
import { urlFor, client } from '../../client';

import AppWrap from '../../wrapper/AppWrap';

import './Skills.scss';

const Skills = () => {
  const [skills, setSkills] = useState([]);
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    const skillsQuery = '*[_type=="skills"]';
    const experienceQuery = '*[_type=="experiences"]';

    client.fetch(skillsQuery).then((data) => {
      setSkills(data);
    });

    client.fetch(experienceQuery).then((data) => {
      setExperiences(data);
    });
  }, []);
  console.log(experiences);

  return (
    <>
      <h2 className="head-text">Skills & experience</h2>
      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills.map((skill, index) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={skill.name}
            >
              <div
                className="app__flex"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={urlFor(skill.icon)} alt={skill.title} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
        <motion.div className="app__skills-exp">
          {experiences?.map((experience, index) => (
            <motion_div className="app__skills-exp-item" key={experience.year}>
              <div className="app__skills-exp-year">
                <p className="bold-text">{experience.year}</p>
              </div>
              <motion.div className="app__skills-exp-works">
                {experience?.works?.map((work) => (
                  <>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className="app__skills-exp-work"
                      data-tip
                      data-for={work.name}
                      key={work.name}
                    >
                      <h4 className="bold-text">{work.name}</h4>
                      <p className="p-text">{work.company}</p>
                    </motion.div>
                    <Tooltip
                      id={work.name}
                      effect="solid"
                      arrowColor="#fff"
                      className="skills-tooltip"
                    >
                      {work.desc}
                    </Tooltip>
                  </>
                ))}
              </motion.div>
            </motion_div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default AppWrap(Skills, 'skills');

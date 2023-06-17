import React, { useEffect, useState } from 'react';
import ReactTooltip from 'react-tooltip';

import { motion } from 'framer-motion';
import { images } from '../../constants/index';
import { urlFor, client } from '../../client';

import AppWrap from '../../wrapper/AppWrap';

import './Skills.scss';

const Skills = () => {
  const [skills, setSkills] = useState([]);
  const [experiences, setExperience] = useState([]);

  useEffect(() => {
    const skillsQuery = '*[_type=="skills"]';
    const experienceQuery = '*[_type=="experience"]';

    client.fetch(skillsQuery).then((data) => {
      setSkills(data);
    });
    client.fetch(experienceQuery).then((data) => {
      setSkills(data);
    });
  }, []);

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
                <p className="p-text">{skill.name}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default AppWrap(Skills, 'skill');

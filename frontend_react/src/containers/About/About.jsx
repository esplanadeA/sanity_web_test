import React, { useEffect, useState } from 'react';
import './About.scss';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';
import { images } from '../../constants/index';
import { AppWrap, MotionWrap } from '../../wrapper';

import { urlFor, client } from '../../client';

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type=="abouts"]';
    client.fetch(query).then((data) => {
      setAbouts(data);
    });
  }, []);

  //   const abouts = [
  //     {
  //       title: 'web development',
  //       description: 'i am a good web developer',
  //       imgUrl: images.about01,
  //     },
  //   ];

  return (
    <>
      <h2 className="head-text">
        From <span>Physical Spatial Design</span>
        <br />
        to <span>Virtual Experience.</span>
      </h2>
      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
      <a href={images.resume} download="Resume_Anna_Li">
        <button className="Resume_button">Click for My Resume</button>
      </a>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, 'app__about'),
  'about',
  'app__whitebg'
);

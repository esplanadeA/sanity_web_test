import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';

import './Footer.scss';
import { client } from '../../client';

const Footer = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    message: '',
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { username, email, message } = formData;

  function handleChangeInPut(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  const handleSubmit = () => {
    setLoading(true);
    const contact = {
      _type: 'contact',
      name: formData.username,
      email: formData.email,
      message: formData.message,
    };

    client
      .create(contact)
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <h2 className="heat-text">Take A coffe & chat with me</h2>
      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={images.email} alt="location" />
          <a
            href="https://www.google.com/maps/place/Tauranga/@-37.7539917,176.0690809,12z/data=!3m1!4b1!4m6!3m5!1s0x6d6e76e77bd464e5:0x500ef6143a39926!8m2!3d-37.6869653!4d176.1654272!16zL20vMDFuNmx6?entry=ttu"
            target="_blank"
            className="p-text"
            rel="noreferrer"
          >
            Tauranga New Zealand
          </a>
        </div>
        <div className="app__footer-card">
          <img src={images.email} alt="email" />
          <a href="mailto:anna.li.dev@gmail.com" className="p-text">
            anna.li.dev@gmail.com
          </a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="mobile" />
          <a href="tel:+6422128439" className="p-text">
            0221208439
          </a>
        </div>
      </div>
      {!isFormSubmitted ? (
        <div className="app__footer-form app__flex">
          <div className="app__flex">
            <input
              className="p-text"
              type="name"
              placeholder="You Name"
              name="username"
              value={username}
              onChange={handleChangeInPut}
            />
          </div>
          <div>
            <input
              className="p-text"
              type="email"
              placeholder="example@email.com"
              name="email"
              value={email}
              onChange={handleChangeInPut}
            ></input>
          </div>
          <div>
            <textarea
              className="p-text"
              placeholder="Your Message"
              value={message}
              name="message"
              onChange={handleChangeInPut}
            ></textarea>
          </div>
          <button type="button" className="p-text" onClick={handleSubmit}>
            {loading ? 'Sending' : 'Send Message'}
          </button>
        </div>
      ) : (
        <div>
          <h3 className="head-text">Thank you for getting in touch!</h3>
        </div>
      )}
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__whitebg'
);

import React from 'react';
import { BsTwitter, BsInstagram } from 'react-icons/bs';
import { BsFacebook, FaFacebook } from 'react-icons/fa';

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <BsTwitter />
      </div>
      <div>
        <FaFacebook />
      </div>
      <div>
        <BsInstagram />
      </div>
      SocialMedia
    </div>
  );
};

export default SocialMedia;

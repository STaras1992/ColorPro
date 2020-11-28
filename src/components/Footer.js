import React from 'react';

import './styles/Footer.css';

const Footer = ({ paletteName }) => {
  return (
    <div className='footer'>
      <div className='palette-name'>
        <span>{paletteName}</span>
      </div>
    </div>
  );
};

export default Footer;

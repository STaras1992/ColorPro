import React, { useEffect, useState } from 'react';

import { CopyToClipboard } from 'react-copy-to-clipboard';

import './styles/ColorBox.css';

const ColorBox = ({ color, colorName }) => {
  const [isCopied, setIsCopied] = useState(false);
  const [isShowing, setIsShowing] = useState(false);

  const handleCopy = () => {
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  //   useEffect(() => {
  //     setTimeout(() => setIsCopied(false), 2000);
  //   }, [isShowing]);

  return (
    <div style={{ background: color }} className='colorBox'>
      <div style={{ background: color }} className={isCopied ? 'copy-overlay show' : 'copy-overlay'}></div>
      <div className={isCopied ? 'copy-overlay-message show' : 'copy-overlay-message'}>
        <h1>Copied!</h1>
        <h2>{color}</h2>
      </div>
      <div className='copy-container'>
        <div className='box-content'>
          <span>{colorName}</span>
        </div>
        <CopyToClipboard text={color} onCopy={handleCopy}>
          <button className='copy-button'>copy</button>
        </CopyToClipboard>
      </div>
      <span className='see-more'>more</span>
    </div>
  );
};

export default ColorBox;

import React, { useEffect, useState } from 'react';
import chroma from 'chroma-js';
import { Link } from 'react-router-dom';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { withStyles } from '@material-ui/styles';
import './styles/ColorBox.css';

//props => {chroma(props.color).luminance() > 0.3 ? "rgba(0,0,0,0.7)" : "white"},
const style = {
  colorBox: {
    height: (props) => (props.isSingleColor ? '50%' : '25%'),
    width: '20%',
    display: 'inline-block',
    position: 'relative',
    margin: '0 auto',
    marginBottom: '-4.5px',
  },
};

const ColorBox = ({ color, colorName, paletteId, colorId, isSingleColor, classes }) => {
  const [isCopied, setIsCopied] = useState(false);
  const [isShowing, setIsShowing] = useState(false);

  const handleCopy = () => {
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const brightness = chroma(color).luminance(); //1-bright, 0-dark
  console.log(brightness);

  return (
    <div style={{ background: color }} className={`colorBox ${brightness > 0.3 ? 'bright' : 'dark'}`}>
      <div style={{ background: color }} className={isCopied ? 'copy-overlay show' : 'copy-overlay'}></div>
      <div className={isCopied ? 'copy-overlay-message show' : 'copy-overlay-message'}>
        <h1 className={classes.copyMessage}>Copied!</h1>
        <h2 className={classes.copyMessage}>{color}</h2>
      </div>
      <div className='copy-container'>
        <div className='box-content'>
          <span>{colorName}</span>
        </div>
        <CopyToClipboard text={color} onCopy={handleCopy}>
          <button className='copy-button'>copy</button>
        </CopyToClipboard>
      </div>
      {!isSingleColor && (
        <Link to={`/palette/${paletteId}/${colorId}`} onClick={(e) => e.stopPropagation()}>
          <span className='see-more'>more</span>
        </Link>
      )}
    </div>
  );
};

export default withStyles(style)(ColorBox);

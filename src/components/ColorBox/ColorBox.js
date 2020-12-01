/*global_imports*/
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CopyToClipboard } from 'react-copy-to-clipboard';
/*materia-ui imports*/
import { withStyles } from '@material-ui/styles';
/*my imports*/
import styles from './ColorBoxStyles.js';

const ColorBox = ({ color, colorName, paletteId, colorId, isSingleColor, classes }) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div className={classes.colorBox}>
      <div className={isCopied ? `${classes.copyOverlay} ${classes.copyOverlayShow}` : `${classes.copyOverlay}`}></div>
      <div
        className={
          isCopied ? `${classes.copyOverlayMessage} ${classes.copyOverlayMessageShow}` : `${classes.copyOverlayMessage}`
        }
      >
        <h1>Copied!</h1>
        <h2>{color}</h2>
      </div>
      <div>
        <div className={classes.boxContent}>
          <span>{colorName}</span>
        </div>
        <CopyToClipboard text={color} onCopy={handleCopy}>
          <button className={classes.copyButton}>copy</button>
        </CopyToClipboard>
      </div>
      {!isSingleColor && (
        <Link to={`/palette/${paletteId}/${colorId}`} onClick={(e) => e.stopPropagation()}>
          <span className={classes.seeMore}>more</span>
        </Link>
      )}
    </div>
  );
};

export default withStyles(styles)(ColorBox);

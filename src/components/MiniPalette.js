import React from 'react';
import { withStyles } from '@material-ui/styles';
import styles from './styles/MiniPaletteStyles.js';

const MiniPalette = ({ classes, paletteName, colors, handleClick, id }) => {
  const miniColorBoxes = colors.map((color) => (
    <div key={color.name} className={classes.miniColorBox} style={{ backgroundColor: color.color }}></div>
  ));

  return (
    <div className={classes.root} onClick={() => handleClick(id)}>
      <div className={classes.colors}>{miniColorBoxes}</div>
      <h5 className={classes.title}>{paletteName}</h5>
    </div>
  );
};

export default withStyles(styles)(MiniPalette);

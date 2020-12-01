/*global_imports*/
import React from 'react';
/*material-ui imports*/
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import { withStyles } from '@material-ui/styles';
/*my imports*/
import styles from './MiniPaletteStyles.js';

const MiniPalette = ({ classes, paletteName, colors, handleClick, id, deletePalette }) => {
  const miniColorBoxes = colors.map((color) => (
    <div key={color.name} className={classes.miniColorBox} style={{ backgroundColor: color.color }}></div>
  ));

  const handleDelete = (e) => {
    e.stopPropagation();
    deletePalette(id);
  };

  return (
    <div className={classes.root} onClick={() => handleClick(id)}>
      <div className={classes.colors}>{miniColorBoxes}</div>
      <h5 className={classes.title}>{paletteName}</h5>
      <div id='del' className={classes.delete}>
        <IconButton className={classes.deleteButton} onClick={handleDelete}>
          <DeleteIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default withStyles(styles)(MiniPalette);

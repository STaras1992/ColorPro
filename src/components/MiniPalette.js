import React from 'react';
import { withStyles } from '@material-ui/styles';

const styles = {
  root: {
    backgroundColor: 'white',
    borderRadius: '5px',
    padding: '0.5rem',
    position: 'relative',
    overflow: 'hidden',
    '&:hover': {
      cursor: 'pointer',
    },
  },
  colors: {
    backgroundColor: 'white',
    height: '150px',
    width: '100%',
    borderRadius: '5px',
    overflow: 'hidden',
  },
  title: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '0',
    color: 'black',
    paddingTop: '0.5rem',
    fontSize: '1rem',
    position: 'relative',
  },
  miniColorBox: {
    height: '25%',
    width: '20%',
    display: 'inline-block',
    margin: '0 auto',
    position: 'relative',
    marginBottom: '-4px',
  },
};

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
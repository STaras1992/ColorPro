import React from 'react';
import MiniPalette from './MiniPalette.js';
import { withStyles } from '@material-ui/styles';
import { Link } from 'react-router-dom';

const styles = {
  root: {
    backgroundColor: 'blue',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  container: {
    width: '50%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  nav: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
  },
  palettes: {
    boxSizing: 'border-box',
    width: '100%',
    display: 'grid',
    gridTemplateColumns: 'repeat(3,30%)',
    gridGap: '5%',
  },
};

const PaletteList = ({ paletts, classes, history }) => {
  const goToPalette = (id) => {
    history.push(`palette/${id}`);
  };

  const miniPallets = paletts.map((palette) => <MiniPalette key={palette.id} {...palette} handleClick={goToPalette} />);

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <nav className={classes.nav}>
          <h1>Color Palettes</h1>
        </nav>
        <div className={classes.palettes}>{miniPallets}</div>
      </div>
    </div>
  );
};

export default withStyles(styles)(PaletteList);

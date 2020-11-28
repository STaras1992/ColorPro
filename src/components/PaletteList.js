import React from 'react';
import MiniPalette from './MiniPalette.js';
import { withStyles } from '@material-ui/styles';
import { Link } from 'react-router-dom';
import styles from './styles/PaletteListStyles.js';

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

import React, { useState, useEffect } from 'react';
import Navbar from './Navbar.js';
import Footer from './Footer.js';
import ColorBox from './ColorBox';
import Snackbar from '@material-ui/core/Snackbar';
import { withStyles } from '@material-ui/styles';

import { HEX, RGB, RGBA } from '../constants/formats.js';
import styles from './styles/PaletteStyles.js';
import 'rc-slider/assets/index.css';

const Palette = ({ palette, classes }) => {
  const [level, setLevel] = useState(500);
  const [format, setFormat] = useState(HEX);
  const [popUpOpen, setPopUpOpen] = useState(false);

  const colorBoxes = palette.colors[level].map((color) => (
    <ColorBox
      key={color.name}
      color={color.hex}
      colorName={color.name}
      paletteId={palette.id}
      colorId={color.id}
      isSingleColor={false}
    />
  ));

  const updateSliderLevel = (newLevel) => {
    setLevel(newLevel);
  };

  const updateColorFormat = (event) => {
    setFormat(event.target.value);
  };

  useEffect(() => {
    setPopUpOpen(true);
    setTimeout(() => setPopUpOpen(false), 2000);
  }, [format]);

  return (
    <div className={classes.palette}>
      <Navbar
        sliderLevel={level}
        format={format}
        updateLevel={updateSliderLevel}
        updateFormat={updateColorFormat}
        isSingleColorPalette={false}
      />
      <div className={classes.paletteColors}>{colorBoxes}</div>
      <div>
        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          open={popUpOpen}
          message={<span in='messagePopUp'>{`Color format changed to ${format.toUpperCase()}`}</span>}
          contentProps={{ 'aria-describedby': 'messagePopUp' }}
        />
      </div>
      <Footer paletteName={palette.paletteName} />
    </div>
  );
};

export default withStyles(styles)(Palette);

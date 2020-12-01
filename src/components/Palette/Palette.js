/*global_imports*/
import React, { useState, useEffect } from 'react';
import 'rc-slider/assets/index.css';
/*material-ui imports*/
import Snackbar from '@material-ui/core/Snackbar';
import { withStyles } from '@material-ui/styles';
/*my imports*/
import Navbar from './Navbar.js';
import Footer from './Footer.js';
import ColorBox from '../ColorBox/ColorBox.js';
import { HEX, RGB, RGBA } from '../../constants/formats.js';
import styles from './PaletteStyles.js';

const Palette = ({ palette, classes }) => {
  const [level, setLevel] = useState(500);
  const [format, setFormat] = useState(HEX);
  const [popUpOpen, setPopUpOpen] = useState(false);

  const colorBoxes = palette.colors[level].map((color) => (
    <ColorBox
      key={color.name}
      color={color[format]}
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

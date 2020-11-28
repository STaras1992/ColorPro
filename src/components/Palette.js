import React, { useState, useEffect } from 'react';
import Navbar from './Navbar.js';
import Footer from './Footer.js';
import ColorBox from './ColorBox';
import Snackbar from '@material-ui/core/Snackbar';

import { HEX, RGB, RGBA } from '../constants/formats.js';

import 'rc-slider/assets/index.css';
import './styles/Palette.css';

const Palette = ({ palette }) => {
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
    <div className='palette'>
      <Navbar
        sliderLevel={level}
        format={format}
        updateLevel={updateSliderLevel}
        updateFormat={updateColorFormat}
        isSingleColorPalette={false}
      />
      <div className='palette-colors'>{colorBoxes}</div>
      <div className='snackbar'>
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

export default Palette;

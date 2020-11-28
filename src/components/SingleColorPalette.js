import React, { useEffect, useState } from 'react';
import Navbar from './Navbar.js';
import Footer from './Footer.js';
import ColorBox from './ColorBox';
import Snackbar from '@material-ui/core/Snackbar';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';

import styles from './styles/SingleColorPaletteStyles.js';
import { getShades } from '../utills/colorHelpers.js';
import { HEX, RGB, RGBA } from '../constants/formats.js';

const SingleColorPalette = ({ colorId, palette, classes }) => {
  const [format, setFormat] = useState(HEX);
  const [popUpOpen, setPopUpOpen] = useState(false);

  const shades = getShades(palette, colorId);
  const colorBoxes = shades.map((color) => (
    <ColorBox key={color.name} colorName={color.name} color={color.hex} isSingleColor={true} />
  ));

  const updateColorFormat = (event) => {
    setFormat(event.target.value);
  };

  useEffect(() => {
    setPopUpOpen(true);
    setTimeout(() => setPopUpOpen(false), 2000);
  }, [format]);

  return (
    <div className={classes.palette}>
      <Navbar format={format} updateFormat={updateColorFormat} isSingleColorPalette={true} />
      <div className={classes.paletteColors}>
        {colorBoxes}
        <div className={classes.goBackBox}>
          <Link to={`/palette/${palette.id}`} className={classes.backButton}>
            Go Back
          </Link>
        </div>
      </div>
      <div>
        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          open={popUpOpen}
          message={<span in='messagePopUp'>{`Color format changed to ${format.toUpperCase()}`}</span>}
          contentProps={{ 'aria-descrybedby': 'messagePopUp' }}
        />
      </div>
      <Footer paletteName={palette.paletteName} />
    </div>
  );
};

export default withStyles(styles)(SingleColorPalette);

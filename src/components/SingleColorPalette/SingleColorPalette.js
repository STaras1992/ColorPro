/*global_imports*/
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
/*material-ui imports*/
import Snackbar from '@material-ui/core/Snackbar';
import { withStyles } from '@material-ui/styles';
/*my imports*/
import Navbar from '../Palette/Navbar.js';
import Footer from '../Palette/Footer.js';
import ColorBox from '../ColorBox/ColorBox.js';
import { getShades } from '../../utills/colorHelpers.js';
import { HEX, RGB, RGBA } from '../../constants/formats.js';
import styles from './SingleColorPaletteStyles.js';

const SingleColorPalette = ({ colorId, palette, classes }) => {
  const [format, setFormat] = useState(HEX);
  const [popUpOpen, setPopUpOpen] = useState(false);

  const shades = getShades(palette, colorId);
  const colorBoxes = shades.map((color) => (
    <ColorBox key={color.name} colorName={color.name} color={color[format]} isSingleColor={true} />
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

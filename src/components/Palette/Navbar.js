/*global_imports*/
import React from 'react';
import Slider from 'rc-slider';
import { Link } from 'react-router-dom';
import 'rc-slider/assets/index.css';
/*material-ui imports*/
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { withStyles } from '@material-ui/styles';
/*my imports*/
import { HEX, RGB, RGBA } from '../../constants/formats.js';
import styles from './NavbarStyles.js';

const Navbar = ({ sliderLevel, updateLevel, format, updateFormat, isSingleColorPalette, classes }) => {
  return (
    <header className={classes.navbar}>
      <div className={classes.logo}>
        <Link style={{ textDecoration: 'none' }} to='/'>
          Home
        </Link>
      </div>
      {!isSingleColorPalette && (
        <div>
          <span className={classes.brightnessIcon}>
            <WbSunnyIcon />
          </span>
          {/* <span> Level:{sliderLevel} </span> */}
          <div className={classes.slider}>
            <Slider
              defaultValue={sliderLevel}
              min={100}
              max={900}
              step={100}
              onAfterChange={(level) => updateLevel(level)}
            />
          </div>
        </div>
      )}
      <div className={classes.selectContainer}>
        <Select value={format} onChange={updateFormat}>
          <MenuItem value={HEX}>HEX</MenuItem>
          <MenuItem value={RGB}>RGB</MenuItem>
          <MenuItem value={RGBA}>RGBA</MenuItem>
        </Select>
      </div>
    </header>
  );
};

export default withStyles(styles)(Navbar);

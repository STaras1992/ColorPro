import React from 'react';
import Slider from 'rc-slider';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';

import { HEX, RGB, RGBA } from '../constants/formats.js';

import styles from './styles/NavbarStyles.js';
import 'rc-slider/assets/index.css';

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
          <span> Level:{sliderLevel} </span>
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

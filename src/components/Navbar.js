import React from 'react';
import Slider from 'rc-slider';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

import { HEX, RGB, RGBA } from '../constants/formats.js';

import 'rc-slider/assets/index.css';
import './styles/Navbar.css';

const Navbar = ({ sliderLevel, updateLevel, format, updateFormat }) => {
  console.log(format);
  return (
    <header className='navbar'>
      <div className='logo'>Logo </div>
      <div className='slider-container'>
        <span> Level:{sliderLevel} </span>
        <div className='slider'>
          <Slider
            defaultValue={sliderLevel}
            min={100}
            max={900}
            step={100}
            onAfterChange={(level) => updateLevel(level)}
          />
        </div>
      </div>
      <div className='select-container'>
        <Select value={format} onChange={updateFormat}>
          <MenuItem value={HEX}>HEX</MenuItem>
          <MenuItem value={RGB}>RGB</MenuItem>
          <MenuItem value={RGBA}>RGBA</MenuItem>
        </Select>
      </div>
    </header>
  );
};

export default Navbar;

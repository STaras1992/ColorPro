import React, { useState, useEffect } from 'react';
import Slider from 'rc-slider';

import ColorBox from './ColorBox';

import './Palette.css';
import 'rc-slider/assets/index.css';

const Palette = ({ palette }) => {
  const [level, setLevel] = useState(500);

  useEffect(() => {}, [level]);
  const colorBoxes = palette.colors[level].map((color) => <ColorBox color={color.hex} colorName={color.name} />);

  return (
    <div className='palette'>
      <Slider defaultValue={level} min={50} max={900} onAfterChange={(level) => setLevel(level)} />
      <div className='palette-colors'>{colorBoxes}</div>
    </div>
  );
};

export default Palette;

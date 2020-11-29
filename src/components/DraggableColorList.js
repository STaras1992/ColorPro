import React from 'react';
import DraggableColorBox from './DraggableColorBox.js';
import { SortableContainer } from 'react-sortable-hoc';

const DraggableColorList = SortableContainer(({ paletteColors, removeColor }) => {
  console.log(paletteColors);
  const colorBoxes = paletteColors.map((color, index) => (
    <DraggableColorBox key={color.name} index={index} color={color.color} name={color.name} deleteBox={removeColor} />
  ));
  return <div style={{ height: '100%' }}>{colorBoxes}</div>;
});

export default DraggableColorList;

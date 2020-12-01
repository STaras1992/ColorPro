/*global_imports*/
import React from 'react';
import { SortableContainer } from 'react-sortable-hoc';
/*my imports*/
import DraggableColorBox from '../ColorBox/DraggableColorBox.js';

const DraggableColorList = SortableContainer(({ paletteColors, removeColor }) => {
  const colorBoxes = paletteColors.map((color, index) => (
    <DraggableColorBox key={color.name} index={index} color={color.color} name={color.name} deleteBox={removeColor} />
  ));
  return <div style={{ height: '100%' }}>{colorBoxes}</div>;
});

export default DraggableColorList;

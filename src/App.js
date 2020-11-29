import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';

import Palette from './components/Palette.js';
import PaletteList from './components/PaletteList.js';
import SingleColorPalette from './components/SingleColorPalette.js';
import CustomPalette from './components/CustomPalette.js';

import seedColors from './utills/seedColors.js';
import { generatePalette } from './utills/colorHelpers.js';
import './App.css';

const App = (props) => {
  const [palettes, setPalettes] = useState(seedColors);
  const findPalette = (id) => {
    return palettes.find((palette) => {
      return palette.id === id;
    });
  };

  const savePalette = (newPalette) => {
    setPalettes([...palettes, newPalette]);
  };

  return (
    <Switch>
      <Route exact path='/' render={(routeProps) => <PaletteList paletts={palettes} {...routeProps} />} />
      <Route
        exact
        path='/palette/new'
        render={(routeParams) => <CustomPalette savePalette={savePalette} palettes={palettes} {...routeParams} />}
      />
      <Route
        exact
        path='/palette/:id'
        render={(routeProps) => <Palette palette={generatePalette(findPalette(routeProps.match.params.id))} />}
      />
      <Route
        exact
        path='/palette/:paletteId/:color'
        render={(routeProps) => (
          <SingleColorPalette
            colorId={routeProps.match.params.color}
            palette={generatePalette(findPalette(routeProps.match.params.paletteId))}
          />
        )}
      />
    </Switch>
  );
};

export default App;

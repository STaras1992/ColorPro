import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Palette from './components/Palette.js';
import PaletteList from './components/PaletteList.js';
import SingleColorPalette from './components/SingleColorPalette.js';
import CustomPalette from './components/CustomPalette.js';

import seedColors from './utills/seedColors.js';
import { generatePalette } from './utills/colorHelpers.js';
import './App.css';

const App = (props) => {
  console.log(window.location.pathname);
  const findPalette = (id) => {
    return seedColors.find((palette) => {
      return palette.id === id;
    });
  };
  return (
    <Switch>
      <Route exact path='/' render={(routeProps) => <PaletteList paletts={seedColors} {...routeProps} />} />
      <Route exact path='/palette/new' render={() => <CustomPalette />} />
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

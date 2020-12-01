import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';

import Palette from './components/Palette.js';
import PaletteList from './components/PaletteList.js';
import SingleColorPalette from './components/SingleColorPalette.js';
import CustomPalette from './components/CustomPalette.js';
import Page from './components/Page.js';

import seedColors from './utills/seedColors.js';
import { generatePalette } from './utills/colorHelpers.js';
import './App.css';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const App = ({ location }) => {
  const [palettes, setPalettes] = useState(seedColors);

  const findPalette = (id) => {
    return palettes.find((palette) => {
      return palette.id === id;
    });
  };

  const savePalette = (newPalette) => {
    setPalettes([...palettes, newPalette]);
  };

  const deletePalette = (id) => {
    let tempPalettes = [...palettes];
    tempPalettes = tempPalettes.filter((p) => p.id !== id);
    setPalettes(tempPalettes);
  };

  return (
    // <Route
    //   render={({ location }) => (
    //     <TransitionGroup>
    //       <CSSTransition key={location.key} classNames='fade' timeout={500}>
    <Switch location={location}>
      <Route
        exact
        path='/'
        render={(routeProps) => (
          <Page>
            <PaletteList paletts={palettes} {...routeProps} deletePalette={deletePalette} />
          </Page>
        )}
      />
      <Route
        exact
        path='/palette/new'
        render={(routeParams) => (
          <Page>
            <CustomPalette savePalette={savePalette} palettes={palettes} {...routeParams} />
          </Page>
        )}
      />
      <Route
        exact
        path='/palette/:id'
        render={(routeProps) => (
          <Page>
            <Palette palette={generatePalette(findPalette(routeProps.match.params.id))} />
          </Page>
        )}
      />
      <Route
        exact
        path='/palette/:paletteId/:color'
        render={(routeProps) => (
          <Page>
            <SingleColorPalette
              colorId={routeProps.match.params.color}
              palette={generatePalette(findPalette(routeProps.match.params.paletteId))}
            />
          </Page>
        )}
      />
      {/*default route*/}
      <Route
        render={(routeProps) => (
          <Page>
            <PaletteList paletts={palettes} {...routeProps} deletePalette={deletePalette} />
          </Page>
        )}
      />
    </Switch>
    //       </CSSTransition>
    //     </TransitionGroup>
    //   )}
    // />
  );
};

export default App;

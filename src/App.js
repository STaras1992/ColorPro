/*global_imports*/
import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
/*my imports*/
import Palette from './components/Palette/Palette.js';
import PaletteList from './components/PalettesList/PalettesList.js';
import SingleColorPalette from './components/SingleColorPalette/SingleColorPalette.js';
import CustomPalette from './components/CustomPalette/CustomPalette.js';
import Page from './components/Common/Page.js';
import seedColors from './utills/seedColors.js';
import { generatePalette } from './utills/colorHelpers.js';

const App = ({ location }) => {
  const [palettes, setPalettes] = useState(seedColors);

  // check if palette exist in storage
  const findPalette = (id) => {
    return palettes.find((palette) => {
      return palette.id === id;
    });
  };

  //save palette to storage
  const savePalette = (newPalette) => {
    setPalettes([...palettes, newPalette]);
  };

  /*remove palette with current id from storage,if exist */
  const deletePalette = (id) => {
    let tempPalettes = [...palettes];
    tempPalettes = tempPalettes.filter((p) => p.id !== id);
    setPalettes(tempPalettes);
  };

  //render
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

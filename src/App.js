import './App.css';
import Palette from './components/Palette.js';
import PaletteList from './components/PaletteList.js';
import { Route, Switch } from 'react-router-dom';
import seedColors from './utills/seedColors.js';
import { generatePalette } from './utills/colorHelpers.js';

const App = () => {
  const findPalette = (id) => {
    seedColors.find((palette) => {
      return palette.id === id;
    });
  };
  return (
    <Switch>
      <Route exact path='/' render={() => <PaletteList />} />
      <Route
        exact
        path='/:id'
        render={(routeProps) => <Palette palette={generatePalette(findPalette(routeProps.match.params.id))} />}
      />
    </Switch>

    // {/* <div className='App'>
    //   <Palette palette={generatePalette(seedColors[4])} />
    // </div> */}
  );
};

export default App;

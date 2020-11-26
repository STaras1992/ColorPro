import './App.css';
import Palette from './components/Palette.js';
import seedColors from './utills/seedColors.js';
import { generatePalette } from './utills/colorHelpers.js';

const App = () => {
  console.log(generatePalette(seedColors[4]));
  return (
    <div className='App'>
      <Palette palette={generatePalette(seedColors[4])} />
    </div>
  );
};

export default App;

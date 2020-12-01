import mediaSize from '../../constants/mediaSizes.js';
import image from '../../images/back4.svg';

const styles = {
  '@global': {
    '.fade-exit': { opacity: 1 },
    '.fade-exit-active': { opacity: 0, transition: 'opacity 500ms ease-out' },
  },

  root: {
    backgroundColor: '#ffe62b',
    backgroundImage: `url(${image})`,
    /* background by SVGBackgrounds.com */
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    overflow: 'scroll',
  },

  container: {
    width: '55%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    [mediaSize.down('lg')]: { width: '60%' },
    [mediaSize.down('md')]: { width: '70%' },
    [mediaSize.down('sm')]: { width: '60%' },
    [mediaSize.down('xs')]: { width: '55%' },
  },
  nav: {
    display: 'flex',
    width: '95%',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: 'white',
  },
  palettes: {
    boxSizing: 'border-box',
    width: '100%',
    display: 'grid',
    gridTemplateColumns: 'repeat(3,30%)',
    gridGap: '1.5rem',
    [mediaSize.down('sm')]: { gridTemplateColumns: 'repeat(2,50%)' },
    [mediaSize.down('xs')]: { gridTemplateColumns: 'repeat(1,100%)', gridGap: '1rem' },
  },
  title: {
    fontSize: '2.5rem',
    color: '#f2bd2c',
  },
  createNewLink: {
    fontSize: '1.5rem',
    color: 'silver',
  },
};

export default styles;

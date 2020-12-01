import mediaSize from '../../constants/mediaSizes.js';

const styles = {
  root: {
    width: '100%',
  },

  colorPicker: {
    width: '100% !important',
    marginTop: '2rem',
  },

  addButton: {
    width: '100%',
    marginTop: '2rem',
    fontSize: '2.0rem',
    [mediaSize.down('md')]: { fontSize: '1.5rem' },
    [mediaSize.down('sm')]: { fontSize: '1rem' },
  },

  colorNameInput: {
    marginTop: '1rem',
    width: '100%',
    height: '4rem',
    [mediaSize.down('md')]: { height: '3.5rem' },
    [mediaSize.down('sm')]: { height: '3rem' },
  },
};

export default styles;

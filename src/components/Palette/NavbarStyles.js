import mediaSize from '../../constants/mediaSizes.js';

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'flex-start',
    backgroundColor: '#394bad',
    alignItems: 'center',
    height: '5vh',
  },

  logo: {
    marginRight: '15px',
    padding: '0 13px',
    fontSize: '1.5rem',
    fontWeight: 'bold',
    borderRadius: '20%',
    color: 'black',
    backgroundColor: 'rgb(250, 250, 250)',
    fontFamily: 'Roboto',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
    [mediaSize.down('xs')]: { fontSize: '1rem', padding: '0 0' },
  },

  slider: {
    width: '720px',
    margin: '0 10',
    padding: '6px',
    display: 'inline-block',
    '& .rc-slider-track': {
      backgroundColor: 'clouds',
    },
    '& .rc-slider-rail': {
      height: '8px',
      backgroundColor: 'clouds',
    },
    '& .rc-slider-handle, .rc-slider-handle:active, .rc-slider-handle:focus,.rc-slider-handle:hover': {
      backgroundColor: 'black',
      outline: 'none',
      border: '2px solid red',
      boxShadow: 'none',
      width: '17px',
      height: '17px',
      marginLeft: '-4px',
      marginTop: '-3px',
    },

    [mediaSize.down('lg')]: { width: '580px' },
    [mediaSize.down('md')]: { width: '320px' },
    [mediaSize.down('xs')]: { width: '240px' },
  },

  brightnessIcon: {
    color: 'yellow',
  },

  selectContainer: {
    padding: '2px',
    backgroundColor: 'white',
    marginLeft: 'auto',
    marginRight: '1rem',
  },
};

export default styles;

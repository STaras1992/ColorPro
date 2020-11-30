import mediaSize from '../../constants/mediaSizes.js';

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: '5vh',
  },

  logo: {
    marginRight: '15px',
    padding: '0 13px',
    fontSize: '1.5rem',
    backgroundColor: 'rgb(240, 229, 229)',
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
    display: 'inline-block',

    [mediaSize.down('lg')]: { width: '580px' },
    [mediaSize.down('md')]: { width: '320px' },
    [mediaSize.down('xs')]: { width: '240px' },
  },

  selectContainer: {
    marginLeft: 'auto',
    marginRight: '1rem',
  },
};

export default styles;

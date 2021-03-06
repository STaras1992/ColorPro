import mediaSize from '../../constants/mediaSizes.js';

const styles = {
  palette: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
  },

  paletteColors: {
    height: '90vh',
    marginBottom: '-2px',
  },

  goBackBox: {
    background: 'black',
    height: '50%',
    width: '20%',
    display: 'inline-block',
    position: 'relative',
    margin: '0 auto',
    marginBottom: '-4.5px',
    [mediaSize.down('md')]: {
      height: '20%',
      width: '50%',
    },
    [mediaSize.down('xs')]: {
      height: '10%',
      width: '100%',
    },
  },

  backButton: {
    width: '100px',
    height: '30px',
    top: '50%',
    left: '50%',
    marginLeft: '-50px',
    marginTop: '-15px',
    textAlign: 'center',
    outline: 'none',
    background: 'rgba(255, 255, 255, 0.3)',
    fontSize: '1rem',
    lineHeight: '30px',
    color: 'white',
    textTransform: 'uppercase',
    border: 'none',
    opacity: '1',
    position: 'absolute',
    cursor: 'pointer',
    display: 'inline-block',
    textDecoration: 'none',
  },
};

export default styles;

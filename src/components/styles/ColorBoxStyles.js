import chroma from 'chroma-js';
import mediaSize from '../../constants/mediaSizes.js';

const styles = {
  colorBox: {
    background: (props) => props.color,
    height: (props) => (!props.isSingleColor ? '25%' : '50%'),
    width: '20%',
    display: 'inline-block',
    position: 'relative',
    margin: '0 auto',
    marginBottom: '-4.5px',
    '&:hover button': { opacity: '1', transition: '0.5s' },
    [mediaSize.down('lg')]: {
      width: (props) => (!props.isSingleColor ? '25%' : '20%'),
      height: (props) => (!props.isSingleColor ? '20%' : '50%'),
    },
    [mediaSize.down('md')]: {
      width: (props) => (!props.isSingleColor ? '50%' : '50%'),
      height: (props) => (!props.isSingleColor ? '10%' : '20%'),
    },
    [mediaSize.down('xs')]: {
      width: (props) => (!props.isSingleColor ? '100%' : '100%'),
      height: (props) => (!props.isSingleColor ? '5%' : '10%'),
    },
  },

  boxContent: {
    position: 'absolute',
    left: '0px',
    bottom: '0px',
    padding: '10px',
    color: (props) => (chroma(props.color).luminance() > 0.3 ? 'rgba(0,0,0,0.7)' : 'white'),
    letterSpacing: '1px',
    textTransform: 'uppercase',
    fontSize: '12px',
  },

  seeMore: {
    background: 'rgba(255, 255, 255, 0.3)',
    position: 'absolute',
    border: 'none',
    right: '0',
    bottom: '0',
    color: (props) => (chroma(props.color).luminance() > 0.3 ? 'rgba(0,0,0,0.7)' : 'white'),
    width: '60px',
    height: '30px',
    textAlign: 'center',
    lineHeight: '30px',
    textTransform: 'uppercase',
  },

  copyButton: {
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
    color: (props) => (chroma(props.color).luminance() > 0.3 ? 'rgba(0,0,0,0.7)' : 'white'),
    textTransform: 'uppercase',
    border: 'none',
    opacity: '0',
    position: 'absolute',
    cursor: 'pointer',
    display: 'inline-block',
    textDecoration: 'none',
  },

  copyOverlay: {
    background: (props) => props.color,
    opacity: '0',
    zIndex: '0',
    width: '100%',
    height: '100%',
    transition: 'transform 0.8s ease-in-out',
    transform: 'scale(0.1)',
  },

  copyOverlayShow: {
    opacity: '1',
    transform: 'scale(50)',
    zIndex: '10',
    position: 'absolute',
  },

  copyOverlayMessage: {
    color: (props) => (chroma(props.color).luminance() > 0.3 ? 'rgba(0,0,0,0.7)' : 'white'),
    opacity: '0',
    position: 'fixed',
    top: '0px',
    left: '0px',
    right: '0px',
    bottom: '0px',
    fontSize: '3rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    transform: 'scale(0.1)',
    textTransform: 'uppercase',
    [mediaSize.down('xs')]: { fontSize: '2rem' },
  },

  copyOverlayMessageShow: {
    opacity: '1',
    transform: 'scale(1)',
    transition: 'all 0.6s ease-in-out',
    transitionDelay: '0.9s',
    zIndex: '20',
  },
};

export default styles;

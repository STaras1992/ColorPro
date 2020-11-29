import chroma from 'chroma-js';

const styles = {
  root: {
    background: (props) => props.color,
    height: '25%',
    width: '20%',
    display: 'inline-block',
    position: 'relative',
    margin: '0 auto',
    marginBottom: '-4.5px',
    '&:hover svg': {
      //color: (props) => (chroma(props.color).luminance() < 0.3 ? 'rgba(0,0,0,0.7)' : 'white'),
      transform: 'scale(1.4)',
    },
  },
  boxContent: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    position: 'absolute',
    left: '0px',
    bottom: '0px',
    padding: '10px',
    color: (props) => (chroma(props.color).luminance() > 0.3 ? 'rgba(0,0,0,0.7)' : 'white'),
    letterSpacing: '1px',
    textTransform: 'uppercase',
    fontSize: '12px',
  },
  deleteIcon: {
    color: (props) => (chroma(props.color).luminance() > 0.3 ? 'rgba(0,0,0,0.7)' : 'white'),
    transition: 'all 0.3s ease-in-out',
  },
};

export default styles;

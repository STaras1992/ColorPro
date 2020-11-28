const styles = {
  root: {
    backgroundColor: 'blue',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  container: {
    width: '50%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  nav: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: 'white',
    '& a': { color: 'white' },
  },
  palettes: {
    boxSizing: 'border-box',
    width: '100%',
    display: 'grid',
    gridTemplateColumns: 'repeat(3,30%)',
    gridGap: '5%',
  },
};

export default styles;

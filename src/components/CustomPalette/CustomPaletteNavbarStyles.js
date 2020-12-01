import { DRAWER_WIDTH } from '../../constants/measures.js';
import mediaSize from '../../constants/mediaSizes.js';

const styles = (theme) => ({
  root: {
    display: 'flex',
  },

  hide: {
    display: 'none',
  },

  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  appBarShift: {
    width: `calc(100% - ${DRAWER_WIDTH}px)`,
    marginLeft: DRAWER_WIDTH,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    [mediaSize.down('md')]: { width: `calc(100% - ${DRAWER_WIDTH * 0.75}px)` },
    [mediaSize.down('sm')]: { width: `calc(100% - ${DRAWER_WIDTH * 0.5}px)` },
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  navButtons: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    padding: '0 10px',
    alignItems: 'center',
    '& button': { margin: '0 0.5rem' },
    '& a': { textDecoration: 'none' },
  },
});

export default styles;

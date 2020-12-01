import { DRAWER_WIDTH } from '../../constants/measures.js';
import mediaSize from '../../constants/mediaSizes.js';

const styles = (theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    width: DRAWER_WIDTH,
    flexShrink: 0,
    height: '100vh',
    [mediaSize.down('md')]: { width: DRAWER_WIDTH * 0.75 },
    [mediaSize.down('sm')]: { width: DRAWER_WIDTH * 0.5 },
  },
  drawerPaper: {
    backgroundColor: '#bfe4e6',
    width: DRAWER_WIDTH,
    display: 'flex',
    alignItems: 'center',
    [mediaSize.down('md')]: { width: DRAWER_WIDTH * 0.75 },
    [mediaSize.down('sm')]: { width: DRAWER_WIDTH * 0.5 },
  },
  drawerHeader: {
    backgroundColor: '#394bad',
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    padding: '0 8px',
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  drawerTitle: {
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    width: '100%',
  },

  drawerContainer: {
    width: '90%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },

  content: {
    flexGrow: 1,
    height: '90vh',
    padding: theme.spacing(0),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -DRAWER_WIDTH,
    [mediaSize.down('md')]: { marginLeft: -DRAWER_WIDTH * 0.75 },
    [mediaSize.down('sm')]: { marginLeft: -DRAWER_WIDTH * 0.5 },
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
});

export default styles;

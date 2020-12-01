import React from 'react';
import { withStyles } from '@material-ui/styles';

import styles from './PageStyles.js';

/*Wrapper for route animation */

const Page = ({ classes, children }) => {
  return <section className={classes.page}>{children}</section>;
};

export default withStyles(styles)(Page);

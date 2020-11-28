import React from 'react';

import { withStyles } from '@material-ui/styles';

import styles from './styles/DraggableColorBoxStyles.js';

const DraggableColorBox = ({ color, classes }) => {
  return <div className={classes.root}></div>;
};

export default withStyles(styles)(DraggableColorBox);

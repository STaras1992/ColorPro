/*global_imports*/
import React from 'react';
/*materia-ui imports */
import { withStyles } from '@material-ui/styles';
/*my imports*/
import styles from './FooterStyles.js';

const Footer = ({ paletteName, classes }) => {
  return (
    <div className={classes.footer}>
      <div className={classes.footerTitle}>
        <span>{paletteName}</span>
      </div>
    </div>
  );
};

export default withStyles(styles)(Footer);

import React from 'react';
import { withStyles } from '@material-ui/styles';
import styles from './styles/FooterStyles.js';

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

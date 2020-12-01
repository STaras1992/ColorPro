/*global_imports*/
import React from 'react';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
/*material-ui imports*/
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import { withStyles } from '@material-ui/core/styles';
/*my imports*/
import PaletteNameDialog from './PaletteNameDialog.js';
import styles from './CustomPaletteNavbarStyles.js';

const CustomPaletteNavbar = ({
  classes,
  open,
  newPaletteName,
  handlePaletteNameChange,
  saveCurrentPalette,
  handleDrawerOpen,
}) => {
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position='fixed'
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            onClick={handleDrawerOpen}
            edge='start'
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <ChevronRightIcon />
          </IconButton>
        </Toolbar>
        <div className={classes.navButtons}>
          <PaletteNameDialog
            newPaletteName={newPaletteName}
            handlePaletteNameChange={handlePaletteNameChange}
            saveCurrentPalette={saveCurrentPalette}
          />
          <Link to='/'>
            <Button variant='contained' color='secondary'>
              Go back
            </Button>
          </Link>
        </div>
      </AppBar>
    </div>
  );
};

export default withStyles(styles, { withTheme: true })(CustomPaletteNavbar);

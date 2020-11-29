import React, { useEffect, useState } from 'react';

import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Button from '@material-ui/core/Button';

import DraggableColorBox from './DraggableColorBox.js';

import { ChromePicker } from 'react-color';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

//import styles from './styles/CustomPaletteStyles.js';

const drawerWidth = 400;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    height: '90vh',
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

const CustomPalette = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [newColor, setNewColor] = useState('');
  const [newName, setNewName] = useState('');
  const [paletteColors, setPaletteColors] = useState([]);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleColorChange = (color) => {
    setNewColor(color);
  };

  const handleNameChange = (e) => {
    setNewName(e.target.value);
  };

  const addNewColor = (e) => {
    let colors = [...paletteColors];
    colors.push({ color: newColor.hex, name: newName });
    setPaletteColors(colors);
  };

  useEffect(() => {
    ValidatorForm.addValidationRule('isColorNameUnique', (value) => {
      return paletteColors.every((color) => {
        return color.name !== value;
      });
    });

    ValidatorForm.addValidationRule('isColorUnique', () => {
      return paletteColors.every((color) => {
        console.log(`color in pallete:${color.color}, newColor:${newColor.hex}`);
        return color.color !== newColor.hex;
      });
    });

    return () => {
      ValidatorForm.removeValidationRule('isColorNameUnique');
      ValidatorForm.removeValidationRule('isColorUnique');
    };
  }, [paletteColors, newColor]);

  const colorBoxes = paletteColors.map((color) => (
    <DraggableColorBox key={color.name} color={color.color} name={color.name} />
  ));

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
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant='persistent'
        anchor='left'
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <Typography variant='h4'>Design your palette</Typography>
        <div>
          <Button variant='contained' color='secondary'>
            Clear palette
          </Button>
          <Button variant='contained' color='primary'>
            Save palette
          </Button>
        </div>
        <ChromePicker color={newColor} onChange={handleColorChange} />
        <ValidatorForm onSubmit={addNewColor}>
          <TextValidator
            value={newName}
            onChange={handleNameChange}
            validators={['required', 'isColorNameUnique', 'isColorUnique']}
            errorMessages={['Color name required', 'Color name already used', 'Color alrady in the palette']}
          />
          <Button
            type='submit'
            variant='contained'
            color='primary'
            style={{ backgroundColor: newColor.hex, marginTop: '10px' }}
          >
            Add color
          </Button>
        </ValidatorForm>
        {/* <Button variant='contained' color='primary' style={{ backgroundColor: newColor.hex }} onClick={addNewColor}>
          Add color
        </Button> */}
        <Divider />
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        {colorBoxes}
      </main>
    </div>
  );
};

export default CustomPalette;

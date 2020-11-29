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

import DraggableColorList from './DraggableColorList.js';

import { arrayMove } from 'react-sortable-hoc';
import { ChromePicker } from 'react-color';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

import { MAX_PALETTE_SIZE } from '../constants/measures.js';

//import styles from './styles/CustomPaletteStyles.js';

const drawerWidth = 400;
const MAX_COLORS = 20;

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
    height: '80vh',
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

const CustomPalette = ({ savePalette, palettes, history }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [newColor, setNewColor] = useState('');
  const [newColorName, setNewColorName] = useState('');
  const [newPaletteName, setNewPaletteName] = useState('');
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

  const handleColorNameChange = (e) => {
    setNewColorName(e.target.value);
  };

  const handlePaletteNameChange = (e) => {
    setNewPaletteName(e.target.value);
  };

  const addNewColor = (e) => {
    let colors = [...paletteColors];
    colors.push({ color: newColor.hex, name: newColorName });
    setPaletteColors(colors);
  };

  const removeColor = (colorName) => {
    let colors = [...paletteColors];
    colors = colors.filter((color) => color.name !== colorName);
    setPaletteColors(colors);
  };

  const clearPalette = () => {
    setPaletteColors([]);
  };

  const saveCurrentPalette = (e) => {
    let paletteName = newPaletteName;
    const newPalette = {
      paletteName: paletteName,
      id: paletteName.toLowerCase().replace(/ /g, '-'),
      colors: paletteColors,
    };
    savePalette(newPalette);
    history.push('/');
  };

  const onSortEnd = ({ oldIndex, newIndex }) => {
    setPaletteColors(arrayMove(paletteColors, oldIndex, newIndex));
  };

  useEffect(() => {
    ValidatorForm.addValidationRule('isColorNameUnique', (value) => {
      return paletteColors.every((color) => {
        return color.name !== value;
      });
    });

    return () => {
      ValidatorForm.removeValidationRule('isColorNameUnique');
    };
  }, [paletteColors]);

  useEffect(() => {
    ValidatorForm.addValidationRule('isColorUnique', () => {
      return paletteColors.every((color) => {
        console.log(`color in pallete:${color.color}, newColor:${newColor.hex}`);
        return color.color !== newColor.hex;
      });
    });

    return () => {
      ValidatorForm.removeValidationRule('isColorUnique');
    };
  }, [paletteColors, newColor]);

  useEffect(() => {
    ValidatorForm.addValidationRule('isPaletteNameUnique', () => {
      return palettes.every((palette) => {
        return palette.paletteName !== newPaletteName;
      });
    });

    return () => {
      ValidatorForm.removeValidationRule('isPaletteNameUnique');
    };
  }, [palettes, newPaletteName]);

  <DraggableColorList paletteColors={paletteColors} removeColor={removeColor} />;
  //   const colorBoxes = paletteColors.map((color) => (
  //     <DraggableColorBox key={color.name} color={color.color} name={color.name} deleteBox={removeColor} />
  //   ));

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
          <ValidatorForm onSubmit={saveCurrentPalette}>
            <TextValidator
              label='Palette Name'
              name='newPaletteName'
              value={newPaletteName}
              onChange={handlePaletteNameChange}
              validators={['required', 'isPaletteNameUnique']}
              errorMessages={['Palette name is required', 'Palette name alredy used']}
            />
            <Button variant='contained' type='submit' color='primary'>
              Save palette
            </Button>
          </ValidatorForm>
          {/* <Button variant='contained' color='primary' onClick={saveCurrentPalette}>
            Save palette
          </Button> */}
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
          <Button variant='contained' color='secondary' onClick={clearPalette}>
            Clear palette
          </Button>
        </div>
        <ChromePicker color={newColor} onChange={handleColorChange} />
        <ValidatorForm onSubmit={addNewColor}>
          <TextValidator
            value={newColorName}
            onChange={handleColorNameChange}
            validators={['required', 'isColorNameUnique', 'isColorUnique']}
            errorMessages={['Color name required', 'Color name already used', 'Color alrady in the palette']}
          />
          <Button
            type='submit'
            variant='contained'
            color='primary'
            disabled={paletteColors.length >= MAX_PALETTE_SIZE}
            style={{
              backgroundColor: paletteColors.length < MAX_PALETTE_SIZE ? newColor.hex : 'grey',
              marginTop: '10px',
            }}
          >
            Add color
          </Button>
        </ValidatorForm>
        <Divider />
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        <DraggableColorList paletteColors={paletteColors} removeColor={removeColor} axis='xy' onSortEnd={onSortEnd} />;
      </main>
    </div>
  );
};

export default CustomPalette;

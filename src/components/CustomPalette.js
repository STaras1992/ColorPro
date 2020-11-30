import React, { useEffect, useState } from 'react';

import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Button from '@material-ui/core/Button';

import DraggableColorList from './DraggableColorList.js';
import CustomPaletteNavbar from './CustomPaletteNavbar.js';
import ColorPickerForm from './ColorPickerForm.js';

import { arrayMove } from 'react-sortable-hoc';
import { ValidatorForm } from 'react-material-ui-form-validator';

import styles from './styles/CustomPaletteStyles.js';

const CustomPalette = ({ classes, savePalette, palettes, history }) => {
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

  return (
    <div className={classes.root}>
      <CustomPaletteNavbar
        open={open}
        newPaletteName={newPaletteName}
        handlePaletteNameChange={handlePaletteNameChange}
        saveCurrentPalette={saveCurrentPalette}
        handleDrawerOpen={handleDrawerOpen}
      />
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
        <div className={classes.drawerContainer}>
          <Typography variant='h4'>Create color</Typography>
          <div>
            <Button variant='contained' color='secondary' onClick={clearPalette}>
              Clear palette
            </Button>
          </div>
          <ColorPickerForm
            paletteColors={paletteColors}
            clearPalette={clearPalette}
            handleColorChange={handleColorChange}
            newColor={newColor}
            addNewColor={addNewColor}
            newColorName={newColorName}
            handleColorNameChange={handleColorNameChange}
          />
          <Divider />
        </div>
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

export default withStyles(styles, { withThem: true })(CustomPalette);

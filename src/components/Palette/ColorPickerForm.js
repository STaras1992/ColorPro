/*global_imports*/
import { ChromePicker } from 'react-color';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import React from 'react';
/*material-ui imports*/
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
/*my imports*/
import { MAX_PALETTE_SIZE } from '../../constants/measures.js';
import styles from './ColorPickerFormStyles.js';

const ColorPickerForm = ({
  classes,
  paletteColors,
  clearPalette,
  handleColorChange,
  newColor,
  addNewColor,
  newColorName,
  handleColorNameChange,
}) => {
  return (
    <div className={classes.root}>
      <ChromePicker className={classes.colorPicker} color={newColor} onChange={handleColorChange} />
      <ValidatorForm onSubmit={addNewColor}>
        <TextValidator
          className={classes.colorNameInput}
          variant='filled'
          placeholder='color name'
          value={newColorName}
          onChange={handleColorNameChange}
          validators={['required', 'isColorNameUnique', 'isColorUnique']}
          errorMessages={['Color name required', 'Color name already used', 'Color alrady in the palette']}
        />
        <Button
          className={classes.addButton}
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
    </div>
  );
};

export default withStyles(styles)(ColorPickerForm);
//export default ColorPickerForm;

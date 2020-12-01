/*global_imports*/
import React, { useState } from 'react';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
/*material-ui imports*/
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
/*my imports*/

const PaletteNameDialog = ({ saveCurrentPalette, newPaletteName, handlePaletteNameChange }) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant='contained' color='secondary' onClick={handleClickOpen}>
        Save palette
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby='form-dialog-title'>
        <DialogTitle id='form-dialog-palette-name'>Palette name</DialogTitle>
        <ValidatorForm onSubmit={saveCurrentPalette}>
          <DialogContent>
            <DialogContentText>Please enter an unique name for your new Palette</DialogContentText>
            <TextValidator
              label='Palette Name'
              name='newPaletteName'
              value={newPaletteName}
              onChange={handlePaletteNameChange}
              validators={['required', 'isPaletteNameUnique']}
              errorMessages={['Palette name is required', 'Palette name alredy used']}
            />
          </DialogContent>
          <DialogActions>
            <Button variant='contained' onClick={handleClose} color='secondary'>
              Cancel
            </Button>
            <Button variant='contained' type='submit' color='primary'>
              Save
            </Button>
          </DialogActions>
        </ValidatorForm>
      </Dialog>
    </div>
  );
};

export default PaletteNameDialog;

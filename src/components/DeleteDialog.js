import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const DeleteDialog = ({ open, handleDelete }) => {
  console.log('delete dialog');
  return (
    <div>
      <Dialog open={open} onClose={() => handleDelete(false)} aria-labelledby='delete-dialog'>
        <DialogTitle id='delete-dialog'>Delete palette?</DialogTitle>
        <DialogContent>
          <DialogContentText id='delete-dialog-description'>
            <Typography component='span' variant='h6'>
              Are you sure you want to delete selected palette?
            </Typography>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant='contained' color='primary' onClick={() => handleDelete(false)} color='primary'>
            Cancel
          </Button>
          <Button variant='contained' onClick={() => handleDelete(true)} color='primary' autoFocus>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default DeleteDialog;

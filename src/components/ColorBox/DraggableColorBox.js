import React from 'react';

import { withStyles } from '@material-ui/styles';
import { SortableElement } from 'react-sortable-hoc';
import DeleteIcon from '@material-ui/icons/Delete';

import styles from './DraggableColorBoxStyles.js';

const DraggableColorBox = SortableElement(({ name, classes, deleteBox }) => {
  return (
    <div className={classes.root}>
      <div className={classes.boxContent}>
        <span>{name}</span>
        <DeleteIcon className={classes.deleteIcon} onClick={() => deleteBox(name)} />
      </div>
    </div>
  );
});

export default withStyles(styles)(DraggableColorBox);

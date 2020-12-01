/*global_imports*/
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
/*material-ui imports*/
import { withStyles } from '@material-ui/styles';
/*my imports*/
import MiniPalette from './MiniPalette.js';
import DeleteDialog from './DeleteDialog.js';
import styles from './PalettesListStyles.js';

const PaletteList = ({ paletts, classes, history, deletePalette }) => {
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [deleteId, setDeleteId] = useState(null);

  const goToPalette = (id) => {
    history.push(`palette/${id}`);
  };

  const handleDelete = (id) => {
    setDeleteId(id);
    setShowDeleteDialog(true);
  };

  const handleDeleteConfirm = (accept) => {
    setShowDeleteDialog(false);
    if (accept) deletePalette(deleteId);
  };

  const miniPallets = paletts.map((palette) => (
    <CSSTransition key={palette.id} classNames='fade' timeout={500}>
      <MiniPalette deletePalette={handleDelete} {...palette} handleClick={goToPalette} />
    </CSSTransition>
  ));

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <nav className={classes.nav}>
          <h1 className={classes.title}>Color Palettes</h1>
          <Link className={classes.createNewLink} to='/palette/new'>
            Create palette
          </Link>
        </nav>
        <TransitionGroup className={classes.palettes}>{miniPallets}</TransitionGroup>
        <DeleteDialog open={showDeleteDialog} handleDelete={handleDeleteConfirm} />
      </div>
    </div>
  );
};

export default withStyles(styles)(PaletteList);

import React, { useState } from 'react';
import MiniPalette from './MiniPalette.js';
import DeleteDialog from './DeleteDialog.js';

import { withStyles } from '@material-ui/styles';
import { Link } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import styles from './styles/PaletteListStyles.js';

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

  // const acceptDelete = () => {
  //   setShowDeleteDialog(false);
  //   deletePalette(deleteId);
  // };

  // const rejectDelete = () => {
  //   setShowDeleteDialog(false);
  // };

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

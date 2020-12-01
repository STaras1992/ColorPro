const styles = {
  root: {
    backgroundColor: 'white',
    borderRadius: '5px',
    padding: '0.5rem',
    position: 'relative',
    border: '1px solid black',
    overflow: 'hidden',
    '&:hover': {
      cursor: 'pointer',
      '& #del': {
        opacity: 0.8,
      },
    },
  },
  colors: {
    backgroundColor: 'white',
    border: '1px solid #ccc',
    height: '150px',
    width: '100%',
    borderRadius: '5px',
    overflow: 'hidden',
  },
  title: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '0',
    color: 'black',
    paddingTop: '0.5rem',
    fontSize: '1rem',
    position: 'relative',
  },
  miniColorBox: {
    height: '25%',
    width: '20%',
    display: 'inline-block',
    margin: '0 auto',
    position: 'relative',
    marginBottom: '-4px',
  },

  delete: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    zIndex: '10',
    opacity: '0',
    backgroundColor: 'red',
    transition: 'all 0.5s ease-in-out',
  },
  deleteButton: {
    color: 'white',
    height: '3rem',
    width: '3rem',
  },
};

export default styles;

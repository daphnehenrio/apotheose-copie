import React from 'react';
import Paper from '@material-ui/core/Paper';
import EditIcon from '@material-ui/icons/Edit';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import InputBase from '@material-ui/core/InputBase';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


import InputBase from '@material-ui/core/InputBase';


import {
  actionSetNoteContent,
  actionChangeNoteContent,
} from 'src/actions/user_note';


const Transition = React.forwardRef((props, ref) => <Slide direction="up" ref={ref} {...props} />);


const Notepad = withStyles({
  paper: {
    width: '30rem',
  },
})(Dialog);

const NotepadContent = withStyles({
  root: {
    width: '100%',
  },
})(InputBase);


const Note = () => {
  const dispatch = useDispatch();

  const [noteCategorie, setNoteCategorie] = React.useState('');
  const [openSelect, setOpenSelect] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const { noteContent, notes, addNote, newNoteContent, newNoteTitle } = useSelector(((state) => state.user_note));
  const allCategory = useSelector((state) => state.menu.category)


  const handleClickOpen = (noteContent, noteID, noteTitle) => {
    const noteObj = {
      id: noteID,
      content: noteContent,
      title: noteTitle,
    };
    dispatch(actionSetNoteContent(noteObj));
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (noteContent, noteID, noteTitle) => {
    const noteObj = {
      id: noteID,
      content: noteContent,
      title: noteTitle,
    };
    dispatch(actionSetNoteContent(noteObj));
  };

  const handleChangeTiltle = (value) => {
    dispatch(actionSetNewTitle(value))
  }

  const handleChangeContent = (value) => {
    dispatch(actionSetNewContent(value))
  }

  const handleCloseAddNote = () => {
    dispatch(actionOpenAddNote())
  }

  const handleChangeSelect = (event) => {
    setNoteCategorie(event.target.value);
  };

  const handleCloseSelect = () => {
    setOpenSelect(false);
  };

  const handleOpenSelect = () => {
    setOpenSelect(true);
  };



  const noteCards = notes.map((note) => {
    return (
      <Paper component="div" key={note.id} className="notes-infos" onClick={console.log('test')}>
        <div className="note-header">
          <h4 className="notes-infos-title">{note.title}</h4>
          <IconButton
            aria-label="edit"
            onClick={(evt) => {
              handleClickOpen(note.content, note.id, note.title);
            }}
          >
            <EditIcon />
          </IconButton>
        </div>
        <p
          className="note-body"
          onDoubleClick={(evt) => {
            handleClickOpen(note.content, note.id, note.title);
          }}
        >
          {note.content}
        </p>
      </Paper>
    );
  });


  return (
    <div className="tab-content">
      {/* <Paper className='notes-infos' onClick={console.log('test')}>
                <div className='note-header'>
                    <h4 className='notes-infos-title'>Note 1</h4>
                    <IconButton aria-label="delete" onClick={(evt) => {
                        getNoteContent('1');
                        handleClickOpen();
                    }}>
                        <EditIcon />
                    </IconButton>
                </div>
                <p className='note-body' noteid='1' onDoubleClick={(evt) => {
                    dispatch(actionSetNoteContent(evt.target.textContent));
                    handleClickOpen();
                }}>
                    {noteContent}
                </p>
            </Paper> */}
      {noteCards}


      <Tooltip title="Ajouter une note" placement="right-start">
        <img className='note-plus' src={Plus} onClick={(evt) => {
            dispatch(actionOpenAddNote());
        }} />
      </Tooltip>

        {/* Ajouter une nouvelle note */}
      <Notepad
      open={addNote}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-labelledby="alert-dialog-slide-title"
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle>
        <NotepadContent
          id="filled-multiline-flexible"
          multiline
          value={newNoteTitle}
          onChange={(evt) => {
            handleChangeTiltle(evt.target.value);
          }}
        />
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-slide-description">
          <NotepadContent
            id="filled-multiline-flexible"
            multiline
            value={newNoteContent}
            onChange={(evt) => {
              handleChangeContent(evt.target.value);
            }}
          />
        </DialogContentText>

      <FormControl>
        <InputLabel id="demo-controlled-open-select-label">Category</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={openSelect}
          onClose={handleCloseSelect}
          onOpen={handleOpenSelect}
          value={noteCategorie}
          onChange={handleChangeSelect}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
            {allCategory.map((cat) => {
              return (
                <MenuItem value={cat.id}>{cat.name}</MenuItem>
              )
            })}
        </Select>
      </FormControl>

      </DialogContent>
      <DialogActions>
        <Button
          onClick={(evt) => {
            dispatch(actionSaveNewNote());
            handleCloseAddNote();
          }}
          color="secondary"
        >
          Sauvegarder
        </Button>
        <Button onClick={handleCloseAddNote}>
          Fermer
        </Button>
      </DialogActions>
    </Notepad>

        {/* Modifier une note existante */}
      <Notepad
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>
          <NotepadContent
            id="filled-multiline-flexible"
            multiline
            value={noteContent.title}
            onChange={(evt) => {
              handleChange(noteContent.content, noteContent.id, evt.target.value);
            }}
          />
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            <NotepadContent
              id="filled-multiline-flexible"
              multiline
              value={noteContent.content}
              onChange={(evt) => {
                handleChange(evt.target.value, noteContent.id, noteContent.title);
              }}
            />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={(evt) => {
              dispatch(actionChangeNoteContent(noteContent));
              handleClose();
            }}
            color="secondary"
          >
            Sauvegarder
          </Button>
          <Button onClick={handleClose}>
            Fermer
          </Button>
        </DialogActions>
      </Notepad>
    </div>
  );
};

export default Note;

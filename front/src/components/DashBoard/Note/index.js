import React from 'react';
import Paper from '@material-ui/core/Paper';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import Button from '@material-ui/core/Button';
import { useDispatch, useSelector } from 'react-redux';
import TextField from '@material-ui/core/TextField';

import InputBase from '@material-ui/core/InputBase';


import {
  actionSetNoteContent,
  actionChangeNoteContent,
} from '../../../actions/profil';


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
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();
  const noteContent = useSelector(((state) => state.profil.noteContent));
  const notes = useSelector((state) => state.profil.notes);
  console.log('notecontent', noteContent);


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


  const noteCards = notes.map((note) => {
    console.log(notes, note);
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

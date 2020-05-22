import React from 'react';
import { hexToRgba } from 'hex-and-rgba';
import { useDispatch, useSelector } from 'react-redux';

import Paper from '@material-ui/core/Paper';
import EditIcon from '@material-ui/icons/Edit';
import { createMuiTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import DeleteSweepIcon from '@material-ui/icons/DeleteSweep';
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
import Alert from '@material-ui/lab/Alert';

import Plus from 'src/assets/image/documents/plus.png';


import {
  actionSetNoteContent,
  actionChangeNoteContent,
  actionUpdateNote,
  actionOpenAddNote,
  actionSetNewTitle,
  actionSetNewContent,
  actionSaveNewNote,
  actionSetCategoryNewNote
} from 'src/actions/user_note';


import './styles.scss';
import { actionDeleteNote } from '../../../actions/user_note';

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
  const [openSelectUpdate, setOpenSelectUpdate] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [openDelete, setOpenDelete] = React.useState(false);
  const [error, setError] = React.useState(false);
  const { noteContent, notes, addNote, newNoteContent, newNoteTitle } = useSelector(((state) => state.user_note));
  const allCategory = useSelector((state) => state.menu.category)

  const handleClickOpen = (noteContent, noteID, noteTitle, noteCategory) => {
    const noteObj = {
      id: noteID,
      content: noteContent,
      title: noteTitle,
      category_id: noteCategory
    };
    dispatch(actionSetNoteContent(noteObj));
    setOpen(true);
  };

  const handleClickOpenDelete = (noteContent, noteID, noteTitle, noteCategory) => {
    const noteObj = {
      id: noteID,
      content: noteContent,
      title: noteTitle,
      category_id: noteCategory
    };
    dispatch(actionSetNoteContent(noteObj));
    setOpenDelete(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (noteContent, noteID, noteTitle, noteCategory) => {
    const noteObj = {
      id: noteID,
      content: noteContent,
      title: noteTitle,
      category_id: noteCategory

    };
    dispatch(actionSetNoteContent(noteObj));
  };

  const handleChangeTiltle = (value) => {
    dispatch(actionSetNewTitle(value))
  };

  const handleChangeContent = (value) => {
    dispatch(actionSetNewContent(value))
  };

  const handleCloseAddNote = () => {
    dispatch(actionOpenAddNote())
  };
  const handleChangeSelect = (event) => {
    setNoteCategorie(event.target.value);
    dispatch(actionSetCategoryNewNote(event.target.value))
  };

  const handleCloseSelect = () => {
    setOpenSelect(false);
  };

  const handleOpenSelect = () => {
    setOpenSelect(true);
  };


  const handleCloseSelectUpdate = () => {
    setOpenSelectUpdate(false);
  };

  const handleOpenSelectUpdate = () => {
    setOpenSelectUpdate(true);
  };

  const handleCloseDelete = () => {
    setOpenDelete(false);
  }

  const handleSubmitDelete = () => {
    dispatch(actionDeleteNote(noteContent.id))
    setOpenDelete(false);
  }


  const noteCards = notes.map((note) => {

    let bgcolor = "#ffffff"
    let color = "#000000"
    if(note.category_id && note.category_id !== null){
      const rgbaColor = hexToRgba(note.category.color);
      bgcolor = `rgba(${rgbaColor[0]},${rgbaColor[1]}, ${rgbaColor[2]}, 0.8 )`;
      color = "#ffffff"
    }

    return (
      <Paper component="div" key={note.id} className="notes-infos" >
        <div className="note-header" style={{backgroundColor:`${bgcolor}`, color: `${color}`}}>
          <h4 className="notes-infos-title">{note.title}</h4>
          <IconButton
            aria-label="edit"
            onClick={(evt) => {
              handleClickOpen(note.content, note.id, note.title, note.category_id);
            }}
          >
            <EditIcon />
          </IconButton>
        </div>
        <p
          className="note-body"
          onDoubleClick={(evt) => {
            handleClickOpen(note.content, note.id, note.title, note.category_id);
          }}
        >
          {note.content}
        </p>

        {note.category_id &&( <span className="note-cat">{note.category.name}</span>)}

        <IconButton
            className="button-delete"
            aria-label="delete"
            onClick={(evt) => {
              handleClickOpenDelete(note.content, note.id, note.title, note.category_id);
            }}
          >
            <DeleteSweepIcon />
          </IconButton>
      </Paper>
    );
  });

  return (
    <div className="tab-content">

      {noteCards}

      <Tooltip title="Ajouter une note" placement="right-start">
        <img className='note-plus' src={Plus} onClick={(evt) => {
            dispatch(actionOpenAddNote());
        }} />
      </Tooltip>

      <Dialog
        open={openDelete}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleCloseDelete}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">Confirmation</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Êtes vous sûre de vouloir supprimer la note suivante :

              <span className="li-title">{noteContent.title}</span>
              <span className="li-content">{noteContent.content}</span>


          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDelete} color="secondary">
            Annuler
          </Button>
          <Button onClick={handleSubmitDelete} color="primary">
            Confirmer
          </Button>
        </DialogActions>
      </Dialog>

        {/* Ajouter une nouvelle note */}
      <Notepad
      open={addNote}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-labelledby="alert-dialog-slide-title"
      aria-describedby="alert-dialog-slide-description"
    >
      {error && (
        <Alert severity="error">Le titre et le contenu ne peuvent être vide</Alert>
      )}
      <DialogTitle>
        <NotepadContent
          id="filled-multiline-flexible"
          multiline
          placeholder="Titre"
          value={newNoteTitle}
          onChange={(evt) => {
            handleChangeTiltle(evt.target.value);
            setError(false);
          }}
        />
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-slide-description">
          <NotepadContent
            id="filled-multiline-flexible"
            multiline
            placeholder="Contenu de ma nouvelle note"
            value={newNoteContent}
            onChange={(evt) => {
              handleChangeContent(evt.target.value);
              setError(false);
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
          <MenuItem value={null} >
            <em>Aucune</em>
          </MenuItem>
            {allCategory.map((cat) => {
              return (
                <MenuItem key={cat.id} value={cat.id}>{cat.name}</MenuItem>
              )
            })}
        </Select>
      </FormControl>

      </DialogContent>

      <DialogActions>
        <Button
          onClick={(evt) => {
            if(!newNoteTitle || !newNoteContent){
              setError(true)
              return;
            }
            dispatch(actionSaveNewNote());
            handleCloseAddNote();
          }}
          color="secondary"
        >
          Sauvegarder
        </Button>
        <Button
          onClick={() => {
            handleCloseAddNote();
            setError(false);
          }}
        >
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
        {error && (
          <Alert severity="error">Le titre et le contenu ne peuvent être vide</Alert>
        )}
        <DialogTitle>
          <NotepadContent
            id="filled-multiline-flexible"
            multiline
            value={noteContent.title}
            onChange={(evt) => {
              handleChange(noteContent.content, noteContent.id, evt.target.value, noteContent.category_id);
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
                handleChange(evt.target.value, noteContent.id, noteContent.title, noteContent.category_id);
              }}
            />
          </DialogContentText>
          <FormControl>
        <InputLabel id="demo-controlled-open-select-label">Category</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={openSelectUpdate}
          onClose={handleCloseSelectUpdate}
          onOpen={handleOpenSelectUpdate}
          value={noteContent.category_id}
          onChange={(evt) => {
            handleChange(noteContent.content, noteContent.id, noteContent.title, evt.target.value)

          }}
        >
          <MenuItem value={null} >
            <em>Aucune</em>
          </MenuItem>
            {allCategory.map((cat) => {
              return (
                <MenuItem key={cat.id} value={cat.id}>{cat.name}</MenuItem>
              )
            })}
        </Select>
      </FormControl>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={(evt) => {
              dispatch(actionChangeNoteContent(noteContent));
              dispatch(actionUpdateNote(noteContent))
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

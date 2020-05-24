import React from 'react';
import { hexToRgba } from 'hex-and-rgba';
import { useSelector, useDispatch } from 'react-redux';

import { createMuiTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';


import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import EditIcon from '@material-ui/icons/Edit';
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
import AddCircleIcon from '@material-ui/icons/AddCircle';


import {
  actionSetMemoContent,
  actionSaveNewMemo,
  actionUpdateMemo,
  actionDeleteMemo,
  actionSetNewIdentifyMemo,
  actionSetNewServiceMemo,
  actionSetNewPhoneMemo,
  actionSetNewAddressMemo,
  actionSetNewReferentMemo,
  actionSetNewNoteMemo,
  actionSetNewCategoryMemo,
  actionChanqeContentMemo,
} from '../../../actions/user_memo';

import './styles.scss';

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

const Transition = React.forwardRef((props, ref) => <Slide direction="up" ref={ref} {...props} />);


const Memo = () => {


  const dispatch = useDispatch();
  const {
    memos,
    memoContent,
    newMemoIdentify,
    newMemoServiceName,
    newMemoServicePhone,
    newMemoServiceAddress,
    newMemoServiceReferent,
    newMemoNote,
  } = useSelector((state) => state.user_memo);
  const allCategory = useSelector((state) => state.menu.category)

  const [memoCategory, setMemoCategory] = React.useState('');
  const [openSelect, setOpenSelect] = React.useState(false);
  const [openSelectUpdate, setOpenSelectUpdate] = React.useState(false);
  const [openUpdate, setOpenUpdate] = React.useState(false);
  const [openAdd, setOpenAdd] = React.useState(false);
  const [openDelete, setOpenDelete] = React.useState(false);
  const [error, setError] = React.useState(false);

  const preventDefault = (event) => event.preventDefault();


  // ------------------------------- UPDATE -------------------------------

  const handleClickOpenUpdate = (id, name, identify, phone, address, referent, note, category) => {
    const memoObj ={
      id: id,
      service_name: name,
      identify: identify,
      service_phone: phone,
      service_address: address,
      service_referent: referent,
      note_file: note,
      category_id: category,

    }
    dispatch(actionSetMemoContent(memoObj));
    setOpenUpdate(true);
  }

  const handleCloseUpdate = () => {
    setOpenUpdate(false);
  };

  const handleChange = (id, name, identify, phone, address, referent, note, category) => {
    const noteObj = {
      id: id,
      service_name: name,
      identify: identify,
      service_phone: phone,
      service_address: address,
      service_referent: referent,
      note_file: note,
      category_id: category,

    };
    dispatch(actionSetMemoContent(noteObj));
  };

  const handleChangePhone = (value) => {
    dispatch(actionSetNewServiceMemo(value))
  };

  const handleChangeName = (value) => {
    dispatch(actionSetNewPhoneMemo(value))
  };

  const handleChangeIdentify = (value) => {
    dispatch(actionSetNewIdentifyMemo(value))
  };

  const handleChangeAddress = (value) => {
    dispatch(actionSetNewAddressMemo(value))
  };

  const handleChangeReferent = (value) => {
    dispatch(actionSetNewReferentMemo(value))
  };

  const handleChangeNote = (value) => {
    dispatch(actionSetNewNoteMemo(value))
  };

  const handleCloseSelectUpdate = () => {
    setOpenSelectUpdate(false);
  };

  const handleOpenSelectUpdate = () => {
    setOpenSelectUpdate(true);
  };

  const handleChangeSelectUpdate = (value) => {
    setMemoCategory(event.target.value);
    dispatch(actionSetNewCategoryMemo(value))
  };

  // ------------------------------- ADD NEW -------------------------------

  const handleCloseAdd = () => {
    setOpenAdd(false)
  };

  const handleChangeSelect = (event) => {
    setMemoCategory(event.target.value);
    dispatch(actionSetNewCategoryMemo(event.target.value))
  };

  const handleCloseSelect = () => {
    setOpenSelect(false);
  };

  const handleOpenSelect = () => {
    setOpenSelect(true);
  };


  // ------------------------------- DELETE -------------------------------

  const handleClickOpenDelete = (id, name) => {
    const memoObj = {
      id: id,
      service_name: name,
    };
    dispatch(actionSetMemoContent(memoObj));
    setOpenDelete(true);
  };

  const handleCloseDelete = () => {
    setOpenDelete(false);
  }

  const handleSubmitDelete = () => {
    dispatch(actionDeleteMemo(memoContent.id))
    setOpenDelete(false);
  }



  return (
    <div className="tab-content">

    { memos.map((memo) => {

      let bgcolor = "#1976D2"
      if(memo.category_id && memo.category_id !== null){
        const rgbaColor = hexToRgba(memo.category.color);
        bgcolor = `rgba(${rgbaColor[0]},${rgbaColor[1]}, ${rgbaColor[2]}, 0.8 )`;

      }

      return (
      <Paper className="cards-infos-memo" key={memo.id}>
        <h4 className="cards-infos-title" style={{backgroundColor:`${bgcolor}`}}>
          {memo.service_name}
          <EditIcon  onClick={(evt) => {
              handleClickOpenUpdate(memo.id, memo.service_name, memo.identify, memo.service_phone,memo.service_address,memo.service_referent );
            }}
          />

        </h4>
        <ul>
          <li><span className='memo-sub-title'>Identifiant:</span> {memo.identify}</li>
          <li><span className='memo-sub-title'>Téléphone:</span> {memo.service_phone}</li>
          <li><span className='memo-sub-title'>Adresse:</span> {memo.service_address}</li>
          <li><span className='memo-sub-title'>Referent:</span> {memo.service_referent}</li>
        </ul>
        <div className="cards-infos-footer">
          <Link href="#" onClick={preventDefault}>
            Plus
          </Link>
        <IconButton
            className="button-delete"
            aria-label="delete"
            onClick={(evt) => {
              handleClickOpenDelete(memo.id, memo.service_name);
            }}
          >
            <DeleteSweepIcon />
          </IconButton>
        </div>
      </Paper>
      )
    }) }

    <Paper component="div" className="memo-card--plus"
      onClick={(evt) => {
        setOpenAdd(true)
      }}
    >

    <Tooltip title="Ajouter une note" placement="right-start">

      <AddCircleIcon
        color="action"
        fontSize="large"

      />
    </Tooltip>

    </Paper>




    {/* Ajouter un nouveau memo */}
    <Notepad
      open={openAdd}
      TransitionComponent={Transition}

      onClose={handleCloseAdd}
      aria-labelledby="alert-dialog-slide-title"
      aria-describedby="alert-dialog-slide-description"
    >
      {error && (
        <Alert severity="error">Le titre ne peut être vide</Alert>
      )}
      <DialogTitle>
        <NotepadContent
          id="filled-multiline-flexible"
          multiline
          placeholder="Titre"
          value={newMemoServiceName}
          onChange={(evt) => {
            dispatch(actionSetNewServiceMemo(evt.target.value));
            setError(false);
          }}
        />
      </DialogTitle>
      <DialogContent>

      <DialogContentText id="alert-dialog-slide-description">
        <NotepadContent
          id="filled-multiline-flexible"
          multiline
          placeholder="Identifiant"
          value={newMemoIdentify}
          onChange={(evt) => {
            dispatch(actionSetNewIdentifyMemo(evt.target.value));
            setError(false);
          }}
        />
        </DialogContentText>

        <DialogContentText id="alert-dialog-slide-description">
          <NotepadContent
            id="filled-multiline-flexible"
            multiline
            placeholder="Téléphone"
            value={newMemoServicePhone}
            onChange={(evt) => {
              dispatch(actionSetNewPhoneMemo(evt.target.value));
              setError(false);
            }}
          />
        </DialogContentText>

        <DialogContentText id="alert-dialog-slide-description">
          <NotepadContent
            id="filled-multiline-flexible"
            multiline
            placeholder="Addresse postal et/ ou mail"
            value={newMemoServiceAddress}
            onChange={(evt) => {
              dispatch(actionSetNewAddressMemo(evt.target.value));
              setError(false);
            }}
          />
        </DialogContentText>

        <DialogContentText id="alert-dialog-slide-description">
          <NotepadContent
            id="filled-multiline-flexible"
            multiline
            placeholder="Reférent / Contact"
            value={newMemoServiceReferent}
            onChange={(evt) => {
              dispatch(actionSetNewReferentMemo(evt.target.value));
              setError(false);
            }}
          />
        </DialogContentText>

        <DialogContentText id="alert-dialog-slide-description">
          <NotepadContent
            id="filled-multiline-flexible"
            multiline
            placeholder="Note"
            value={newMemoNote}
            onChange={(evt) => {
              dispatch(actionSetNewNoteMemo(evt.target.value));
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
          value={memoCategory}
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
            if(!newMemoServiceName){
              setError(true)
              return;
            }
            dispatch(actionSaveNewMemo());
            handleCloseAdd();
          }}
          color="secondary"
        >
          Sauvegarder
        </Button>

        <Button

          onClick={() => {
            handleCloseAdd();
            setError(false);
          }}
        >
          Fermer
        </Button>
      </DialogActions>
    </Notepad>


    {/* Modifier un memo existant */}

    <Notepad
      open={openUpdate}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleCloseUpdate}
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
          value={memoContent.service_name}
          onChange={(evt) => {
            handleChange(
              memoContent.id,
              evt.target.value,
              memoContent.identify ,
              memoContent.service_phone ,
              memoContent.service_address ,
              memoContent.service_referent ,
              memoContent.note_file ,
              memoContent.category_id
              );
          }}
        />
      </DialogTitle>
      <DialogContent>
      <DialogContentText id="alert-dialog-slide-description">
            <NotepadContent
              id="filled-multiline-flexible"
              multiline
              placeholder="Identifiant"
              value={memoContent.identify}
              onChange={(evt) => {
                handleChange(
                  memoContent.id,
                  memoContent.service_name,
                  evt.target.value,
                  memoContent.service_phone ,
                  memoContent.service_address ,
                  memoContent.service_referent ,
                  memoContent.note_file ,
                  memoContent.category_id
                  );
              }}
            />
          </DialogContentText>
          <DialogContentText id="alert-dialog-slide-description">
            <NotepadContent
              id="filled-multiline-flexible"
              multiline
              placeholder="Téléphone"
              value={memoContent.service_phone}
              onChange={(evt) => {
                handleChange(
                  memoContent.id,
                  memoContent.service_name,
                  memoContent.identify ,
                  evt.target.value,
                  memoContent.service_address ,
                  memoContent.service_referent ,
                  memoContent.note_file ,
                  memoContent.category_id
                  );
              }}
            />
          </DialogContentText>
          <DialogContentText id="alert-dialog-slide-description">
            <NotepadContent
              id="filled-multiline-flexible"
              multiline
              placeholder="Addresse postal et/ ou mail"
              value={memoContent.service_address}
              onChange={(evt) => {
                handleChange(
                  memoContent.id,
                  memoContent.service_name,
                  memoContent.identify ,
                  memoContent.service_phone ,
                  evt.target.value ,
                  memoContent.service_referent ,
                  memoContent.note_file ,
                  memoContent.category_id
                  );
              }}
            />
          </DialogContentText>
          <DialogContentText id="alert-dialog-slide-description">
            <NotepadContent
              id="filled-multiline-flexible"
              multiline
              placeholder="Reférent / Contact"
              value={memoContent.service_referent}
              onChange={(evt) => {
                handleChange(
                  memoContent.id,
                  memoContent.service_name,
                  memoContent.identify ,
                  memoContent.service_phone ,
                  memoContent.service_address ,
                  evt.target.value,
                  memoContent.note_file ,
                  memoContent.category_id
                );
              }}
            />
          </DialogContentText>
          <DialogContentText id="alert-dialog-slide-description">
            <NotepadContent
              id="filled-multiline-flexible"
              multiline
              placeholder="Note"
              value={memoContent.note_file}
              onChange={(evt) => {
                handleChange(
                  memoContent.id,
                  memoContent.service_name,
                  memoContent.identify ,
                  memoContent.service_phone ,
                  memoContent.service_address ,
                  memoContent.service_referent ,
                  evt.target.value,
                  memoContent.category_id
                );

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
        value={memoContent.category_id}
        onChange={(evt) => {
          handleChange(
            memoContent.id,
            memoContent.service_name,
            memoContent.identify ,
            memoContent.service_phone ,
            memoContent.service_address ,
            memoContent.service_referent ,
            memoContent.note_file,
            evt.target.value)
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
            dispatch(actionChanqeContentMemo(memoContent));
            dispatch(actionUpdateMemo(memoContent))
            handleCloseUpdate();
          }}
          color="secondary"
        >
          Sauvegarder
        </Button>
        <Button onClick={handleCloseUpdate}>
          Fermer
        </Button>
      </DialogActions>
    </Notepad>


  { /* Delete memo */}

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
        Êtes vous sûre de vouloir supprimer le memo suivante :
        <span className="li-title">{memoContent.service_name}</span>
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


    </div>
  );
};

export default Memo;

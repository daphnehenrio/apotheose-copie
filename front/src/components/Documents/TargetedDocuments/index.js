// == Import npm
import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';

// == Import material-ui
import { emphasize, withStyles } from '@material-ui/core/styles';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Chip from '@material-ui/core/Chip';
import FolderIcon from '@material-ui/icons/Folder';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import InputBase from '@material-ui/core/InputBase';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Link from '@material-ui/core/Link';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import Tooltip from '@material-ui/core/Tooltip';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

// == Import img
import File from 'src/assets/image/documents/file.png';
import Plus from 'src/assets/image/documents/plus.png';
import DownloadImg from 'src/assets/image/documents/download.png'

// == Import Components
import AddFile from './Addfile';
import FileReader from '../ReadDocument'


// == Import actions
import { actionChangePage } from '../../../actions/routes';
import { actionOpenAddFile, actionOpenSuccessMessage, actionGetOneFile, actionDownloadFile, actionGetDocuments } from '../../../actions/document';


const SelectDoc = withStyles((theme) => ({
    input: {
        fontSize: '1.4rem',
        color: 'white',
        padding: '0.7rem 1rem',
        '&:hover, &:focus': {
            backgroundColor: 'rgba(128, 128, 128,0.3)',
            borderRadius: '10px',
        }
    },
}))(InputBase);

const StyledSelect = withStyles((theme) => ({
    icon: {
        color: 'white',
    }
}))(Select);

const StyledInput = withStyles((theme) => ({
    root: {
        width: '5rem',
    }
}))(AddIcon);




// -------------------------- Export --------------------------

export default function TargetedDocuments() {
    const history = useHistory();
    const dispatch = useDispatch();
    const { successUpload, files, checkFiles, current_sub_cat_id, totalFile } = useSelector((state) => state.document);

    const [open, setOpen] = React.useState(false);

    const [currentFile, setCurrentFile] = React.useState({})

    useEffect(() => {

      if(!checkFiles && (files.lenght !== totalFile || totalFile === 0)){
        dispatch(actionGetDocuments(current_sub_cat_id))
      }
    }, [checkFiles] )

    const handleOpenModal = () => {
      setOpen(true);
    };

    const handleCloseModal = () => {
      setOpen(false);
    };


    function Alert(props) {
        return <MuiAlert elevation={6} variant="filled" {...props} />;
    }


    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        dispatch(actionOpenSuccessMessage(false));
    };

    const readFile = (file_document) => {
      console.log(file_document)
      setCurrentFile(file_document);
      dispatch(actionGetOneFile(file_document.id));
      setTimeout(handleOpenModal, 1000);
    }

    const downloadFile = () => {
      dispatch(actionDownloadFile(currentFile.id, currentFile.name))
    }

    const ModalReader = () => {
      return (
        <Modal
        className="reader-modal"
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleCloseModal}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div>
            <FileReader />
              <img src={DownloadImg} className="download-img" onClick={downloadFile} />
          </div>
        </Fade>

        </Modal>
      )
    }

    const filesJsx = files.map((file) => {
      return (
        <div className='single-document-container' key={file.id}>
          <img className='img-folder' src={File} onClick={() => readFile(file)}/>
          <p className='doc-title'>{file.name}</p>

        </div>
      )
    })


    // ----------------- Return ------------------ //

    return (
        <div className='document-page'>
            <div className='header-document-page'>
                <Breadcrumbs aria-label="breadcrumb" className='breadcrumb'>
                    <Link href="#" className='link-document' onClick={(evt) => {
                        evt.preventDefault();
                        dispatch(actionChangePage('/mes-documents', history));
                    }}>
                        Documents
                    </Link>

                    <StyledSelect
                        labelId="demo-customized-select-label"
                        id="demo-customized-select"
                        input={<SelectDoc />}
                        defaultValue={'Etat'}
                    >
                        <MenuItem value={'Etat'}>Etat</MenuItem>
                        <MenuItem value={'Pole emploi'}>Pole emploi</MenuItem>
                    </StyledSelect>
                </Breadcrumbs>
            </div>
            <div className='documents-container'>

               {filesJsx}

                <Tooltip title="Ajouter un document" placement="right-start">
                    <img className='plus' src={Plus} onClick={(evt) => {
                        dispatch(actionOpenAddFile(true));
                    }} />
                </Tooltip>
            </div>
            <AddFile />
            <Snackbar open={successUpload} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success">
                    Vos documents ont été importés avec succès !
            </Alert>
            </Snackbar>
            <ModalReader />
        </div >
    );
}

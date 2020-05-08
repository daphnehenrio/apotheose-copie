// == Import npm
import React from 'react';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';

// == Import material-ui
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


// == Import actions
import { actionOpenAddFile } from '../../../../actions/document';

// == Import images
import Upload from 'src/assets/image/documents/upload.png';




// -------------------------- Export --------------------------

export default function AddFile() {
    const dispatch = useDispatch();
    const openAddFile = useSelector((state) => state.document.openAddFile);

    // ----------------- Return ------------------ //

    return (
        <Dialog open={openAddFile} onClose={(evt) => {
            dispatch(actionOpenAddFile(false))
        }} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Ajouter un document </DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Ajoutez des documents. Ceux-ci seront ensuite utilisés pour remplir
                    automatiquement les checklists.
                </DialogContentText>
                <form className= 'form-upload'>
                    <div className="image-upload-container">
                        <label htmlFor="file-input">
                            <img src={Upload} className='image-upload' />
                        </label>

                        <input id="file-input" type="file" />
                    </div>
                    <input type="submit" onClick={(evt) =>{
                        evt.preventDefault();
                    }}/>
                </form>
            </DialogContent>
            <DialogActions>
                <Button onClick={(evt) => {
                    dispatch(actionOpenAddFile(false))
                }} color="primary">
                    Fermer
                </Button>
                <Button onClick={(evt) => {
                    dispatch(actionOpenAddFile(false))
                }} color="primary">
                    Ajouter
                </Button>
            </DialogActions>
        </Dialog>
    );
}

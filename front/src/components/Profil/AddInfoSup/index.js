import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import {
    actionAddInfoSup,
    actionSetInfoSupTitle,
    actionSetInfoSupValue,
    actionClearAddInfoSup,
    actionSetOpenAddInfoSup,
} from '../../../actions/profil';


export default function AddInfoSup() {
    const dispatch = useDispatch();
    const infoSup = useSelector((state) => state.profil.infoSupToAdd);
    const openAddInfoSup = useSelector((state) => state.profil.openAddInfoSup);

    const handleAddInfoSup = (bool) => {
        dispatch(actionSetOpenAddInfoSup(bool));
    }

    return (
        <Dialog open={openAddInfoSup} onClose={(evt) => handleAddInfoSup(false)} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Ajouter une info</DialogTitle>
                <DialogContent>
                    <div className='add-infos-sup-container'>
                        <TextField
                            id="standard-basic"
                            onChange={(evt) => {dispatch(actionSetInfoSupTitle(evt.target.value))}}
                        />
                        <p className='add-infos-sup-separator'> : </p>
                        <TextField
                            id="standard-basic"
                            onChange={(evt) => {dispatch(actionSetInfoSupValue(evt.target.value))}}
                        />
                    </div>
                </DialogContent>
                <DialogActions>
                    <Button onClick={(evt) => {dispatch(actionSetOpenAddInfoSup(false))}} color="primary">
                        Cancel
                    </Button>
                    <Button
                        onClick={(evt) => {  
                            if(infoSup.title === '' || infoSup.value ===''){
                                console.log(infoSup);
                                dispatch(actionAddInfoSup(infoSup));
                                dispatch(actionClearAddInfoSup());
                            }                         
                            dispatch(actionSetOpenAddInfoSup(false));
                        }}
                        color="primary">
                        Sauvegarder
                    </Button>
                </DialogActions>
            </Dialog>
    )
}
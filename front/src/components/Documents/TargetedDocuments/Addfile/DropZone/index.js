import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ClipLoader from "react-spinners/ClipLoader";
import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';


import 'react-dropzone-uploader/dist/styles.css'
import Dropzone, { defaultClassNames } from 'react-dropzone-uploader'

import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
// == Import images
import Doc from 'src/assets/image/documents/doc.png';

// == import action
import {actionOpenAddFile, actionSendFiles, actionChangeFileName, actionAddFileToState, actionOpenSuccessMessage } from '../../../../../actions/document';



const StyledBadge = withStyles((theme) => ({
    badge: {
        right: 10,
        height: '1rem',
        width: '1rem',
        top: 13,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '10px',
        borderRadius: '50%',
    },
}))(Badge);


const Preview = ({ fileWithMeta, meta }) => {
    const { name, id, percent, status } = meta;
    const { cancel, remove, restart } = fileWithMeta;
    const dispatch = useDispatch();
    const files = useSelector((state) => state.document.filesToUpload);

    const findValue = () => {
      let value = files.find(file => {
        if (file.id === id) {
            return file.name;
        }
        return
      })

      if (value){

        return value.name
      } else return
    }

    const path = window.location.path

    return (
        <div className='file-box'>
            <div>
                <StyledBadge
                    badgeContent={
                        status === 'done' ?
                            <IconButton aria-label="delete" onClick={remove}>
                                <CloseIcon style={{ fontSize: 10, color: 'white' }} />
                            </IconButton>
                            :
                            <ClipLoader
                                size={10}
                                color={"white"}
                                loading={status !== 'done'}
                            />
                    }
                    color="primary">
                    <img src="/images/document/doc.png" className='img-upload-doc' />
                </StyledBadge>
            </div>
            <InputBase
                className="input-name-add-doc"
                inputProps={{ 'aria-label': 'naked' }}
                value={findValue()}
                onChange={(evt) => {
                    dispatch(actionChangeFileName(id, evt.target.value));
                }}
            />

        </div>
    )
}

const Layout = ({ input, previews, submitButton, dropzoneProps, files, extra: { maxFiles } }) => {
    return (
        <div>
            <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
                {previews}
            </div>
            {files.length >= 1 ? (
                <div {...dropzoneProps}  >
                    {files.length < maxFiles && input}
                </div>
            )
                :
                <div {...dropzoneProps} >
                    {files.length < maxFiles && input}
                </div>
            }

            {files.length > 0 && submitButton}
        </div>
    )
}

const AddFileDropzone = () => {
    const dispatch = useDispatch();
    const files = useSelector((state) => state.document.filesToUpload);


    const path = window.location.pathname
    const pathArray = path.split(new RegExp('/'))
    const categoryFolder = pathArray[2];
    const subCategoryFolder = pathArray[3]

    const getUploadParams = ({ file, meta }) => {

        const goodMeta = files.find((file) => meta.id === file.id);

        const body = new FormData();
        body.append('file', file);
        meta.name = goodMeta.name;
        body.append('meta', JSON.stringify(meta));

        dispatch(actionSendFiles(body, categoryFolder, subCategoryFolder));
        dispatch(actionOpenAddFile(false));

    }

    const handleChangeStatus = ({ meta }) => {
        const { name, id, status } = meta;
        if (status === 'done') {
            dispatch(actionAddFileToState(id, name));
        }


    }

    const handleSubmit = (files, allFiles) => {
        files.forEach(doc => {
            getUploadParams(doc);
        });

    }


    return (
        <div>
            <Dropzone
                /* getUploadParams={getUploadParams} */
                LayoutComponent={Layout}
                onChangeStatus={handleChangeStatus}
                onSubmit={handleSubmit}
                autoUpload={false}
                PreviewComponent={Preview}
                accept="application/pdf, image/*"
                inputContent={(files, extra) => (extra.reject ? 'Seul les fichiers pdf sont acceptés' : 'Ajoutez un document ...')}
                classNames={{ inputLabelWithFiles: defaultClassNames.inputLabel }}
                inputWithFilesContent='Ajoutez un document ...'
                styles={{
                    dropzone: { overflowX: 'hidden', overflowY: 'auto' },
                    preview: { display: 'flex', flexDirection: 'row' },
                    inputLabel: (files, extra) => (extra.reject ? { color: 'red', backgroundColor: 'rgba(255,0,0, 0.2)' } : {})
                }}
                submitButtonContent='Valider'
                onSubmit={handleSubmit}
            />
        </div>
    )
};

export default AddFileDropzone;





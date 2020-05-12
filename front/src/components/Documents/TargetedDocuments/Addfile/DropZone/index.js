import React from 'react';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { css } from "@emotion/core";
import ClipLoader from "react-spinners/ClipLoader";
import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';

import 'react-dropzone-uploader/dist/styles.css'
import Dropzone, { defaultClassNames } from 'react-dropzone-uploader'

import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import RemoveIcon from '@material-ui/icons/Remove';

// == Import images
import Doc from 'src/assets/image/documents/doc.png';

// == import action
import { actionSendFiles, actionChangeFileName, actionAddFileToState } from '../../../../../actions/document';


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
                    <img src={Doc} className='img-upload-doc' />
                </StyledBadge>
            </div>
            <InputBase
                inputProps={{ 'aria-label': 'naked' }}
                value={files.map(file => {
                    if (file.id === id) {
                        return file.name;
                    }
                })}
                onChange={(evt) => {
                    dispatch(actionChangeFileName(id, evt.target.value));
                    console.log(evt.target.value, 'filesssssssssssssssssssss');
                }}
            />

        </div>
    )
}

const Layout = ({ input, previews, submitButton, dropzoneProps, files, extra: { maxFiles } }) => {
    console.log(files, 'dropzone props');
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
    // const files = useSelector((state) => state.document.filesToUpload);

    const getUploadParams = ({ file, meta }) => {

        const body = new FormData();
        body.append('file', file);
        meta.name = 'tets';
        body.append('meta', JSON.stringify(meta));
        // console.log('C LA METAAAAA', meta);
        // console.log(Array.from(body), 'C LE BOOOODYYYY');

        dispatch(actionSendFiles(body))
    }

    const handleChangeStatus = ({ meta }) => {
        const { name, id, status } = meta;
        console.log(meta, 'STATUS AND META');
        if (status === 'done') {
            dispatch(actionAddFileToState(id, name));
        }


    }

    const handleSubmit = (files, allFiles) => {
        /* dispatch(actionSendFiles(files)); */
        console.log(files, 'ON SUBMIT FILES');
        files.forEach(doc => {
            console.log(doc, 'C LE DOOOOOC');
            getUploadParams(doc);
        });

    }


    return (
        <Dropzone
            /* getUploadParams={getUploadParams} */
            LayoutComponent={Layout}
            onChangeStatus={handleChangeStatus}
            onSubmit={handleSubmit}
            autoUpload= {false}
            PreviewComponent={Preview}
            accept="application/pdf"
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
    )
};

export default AddFileDropzone;





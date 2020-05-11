import React from 'react';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { css } from "@emotion/core";
import ClipLoader from "react-spinners/ClipLoader";
import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';

import 'react-dropzone-uploader/dist/styles.css'
import Dropzone, { defaultClassNames } from 'react-dropzone-uploader'

import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import RemoveIcon from '@material-ui/icons/Remove';

// == Import images
import Doc from 'src/assets/image/documents/doc.png';

// == import action
import { actionSendFiles } from '../../../../../actions/document';


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
    console.log(fileWithMeta, 'META');
    const { name, percent, status } = meta;
    const { cancel, remove, restart } = fileWithMeta;
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
            {name}

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
    const getUploadParams = ({ meta }) => {
        const url = 'https://httpbin.org/post'
        return { url, meta: { fileUrl: `${url}/${encodeURIComponent(meta.name)}` } }
    }

    const handleChangeStatus = ({ meta }, status) => {
        console.log(status, meta)
    }

    const handleSubmit = (files, allFiles) => {
        console.log(files, typeof allFiles, 'TYPE OF FILES JKDFSBFDUI');
        console.log(typeof Object.values(files), 'OBJECT VALUE');
        dispatch(actionSendFiles(files));
    }


    return (
        <Dropzone
            /* getUploadParams={getUploadParams} */
            LayoutComponent={Layout}
            onChangeStatus={handleChangeStatus}
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
            onSubmit= {handleSubmit}
            autoUpload={false}
        />
    )
};

export default AddFileDropzone;





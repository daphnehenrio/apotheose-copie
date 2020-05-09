import React from 'react';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';

import 'react-dropzone-uploader/dist/styles.css'
import Dropzone from 'react-dropzone-uploader'

import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

// == Import images
import Doc from 'src/assets/image/documents/doc.png';

const Preview = ({ fileWithMeta, meta }) => {
    console.log(fileWithMeta, 'META');
    const { name, percent, status } = meta;
    const { cancel, remove, restart } = fileWithMeta;
    return (
        <div>
            <img src={Doc} className='img-folder' />
            <span>
                {name}, {Math.round(percent)}%, {status}
            </span>
            <IconButton aria-label="delete" onClick={remove}>
                <CloseIcon />
            </IconButton>
        </div>
    )
}

const AddFileDropzone = () => {
    const getUploadParams = ({ meta }) => {
        const url = 'https://httpbin.org/post'
        return { url, meta: { fileUrl: `${url}/${encodeURIComponent(meta.name)}` } }
    }

    const handleChangeStatus = ({ meta }, status) => {
        console.log(status, meta)
    }

    const handleSubmit = (files, allFiles) => {
        console.log(files.map(f => f.meta))
        allFiles.forEach(f => f.remove())
    }

    return (
        <Dropzone
            getUploadParams={getUploadParams}
            onChangeStatus={handleChangeStatus}
            onSubmit={handleSubmit}
            PreviewComponent={Preview}
            canRemove={true}
            accept=".pdf"
            inputContent={(files, extra) => (extra.reject ? 'Seul les fichiers pdf sont acceptés' : 'Ajoutez un document ...')}
            inputWithFilesContent='Ajouter un autre fichier'
            styles={{
                dropzone: { overflowY: 'hidden', overflowX: 'auto' },
                inputLabel: (files, extra) => (extra.reject ? { color: 'red', backgroundColor: 'rgba(255,0,0, 0.2)' } : {})
            }}
            submitButtonContent='Valider'
        />
    )
};

export default AddFileDropzone;





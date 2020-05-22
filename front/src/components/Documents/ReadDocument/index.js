import React, { Component } from 'react';
import FileViewer from 'react-file-viewer';
import { CustomErrorComponent } from 'custom-error';
import { useSelector } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import Backdrop from '@material-ui/core/Backdrop';

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));



export default function FileReader() {
  const { file, fileType, loading } = useSelector((state) => state.document);
  const classes = useStyles();
  console.log(loading, 'LOADIIING');

  console.log(fileType)
  let type = '';

  switch (fileType) {
    case 'application/pdf':
      type = 'pdf'
      break;
    case 'image/png':
      type = 'png'
      break;
    case 'image/jpg':
      type = 'jpg'
      break;
    case 'image/jpeg':
      type = 'jpeg'
      break;
    case 'application/vnd.openxmlformats-officedocument.wordprocessingml.document':
      type = 'docx'
      break;
  }

  console.log(type)
  const onError = (e) => {
    console.log(e, 'error in file-viewer');
  }
  if (loading) {
    return (
      <Backdrop className={classes.backdrop} open={loading}>
        <CircularProgress color="inherit" />
      </Backdrop>
    )
  }
  if (file) {
    return (
      <FileViewer
        fileType={type}
        filePath={file}
        errorComponent={CustomErrorComponent}
        onError={(e) => onError(e)} />
    );
  } else {
    return;
  }
}


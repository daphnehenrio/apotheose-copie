import React, { Component } from 'react';
import FileViewer from 'react-file-viewer';
import { CustomErrorComponent } from 'custom-error';
import { useSelector } from 'react-redux';


export default function FileReader() {
    const { file, fileType } = useSelector((state) => state.document)

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

    const onError = (e) => {
      console.log(e, 'error in file-viewer');
    }
    if(file){
      return (
        <FileViewer
          fileType={type}
          filePath={file}
          errorComponent={CustomErrorComponent}
          onError={(e) => onError(e)}/>
      );
    } else {
      return;
    }
  }


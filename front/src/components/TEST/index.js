import React, { Component } from 'react';
import FileViewer from 'react-file-viewer';
import { CustomErrorComponent } from 'custom-error';
import { useSelector } from 'react-redux';


export default function MyComponent() {
    const file = useSelector((state) => state.document.file)
    const type = 'pdf'

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

    }
  }


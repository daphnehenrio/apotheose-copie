import React from 'react';
import Paper from '@material-ui/core/Paper';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';




const Note = () => {
    return (
        <div className='tab-content'>
            <Paper className='notes-infos' onClick={console.log('test')}>
                <div className='note-header'>
                    <h4 className='notes-infos-title'>Note 1</h4>
                    <IconButton aria-label="delete">
                        <EditIcon />
                    </IconButton>
                </div>
                <p className='note-body'>
                    Lorem Ipsum is simply dummy text of the printing
                    and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and
                    scrambled it to make a type specimen book.
                        </p>
            </Paper>
            <Paper className='notes-infos'>
            <div className='note-header'>
                    <h4 className='notes-infos-title'>Note 2</h4>
                    <IconButton aria-label="delete">
                        <EditIcon />
                    </IconButton>
                </div>
                <p>
                    Lorem Ipsum
                        </p>
            </Paper>
            <Paper className='notes-infos'>
            <div className='note-header'>
                    <h4 className='notes-infos-title'>Note 3</h4>
                    <IconButton aria-label="delete">
                        <EditIcon />
                    </IconButton>
                </div>
                <p>
                    Lorep ipsum
                        </p>
            </Paper>
        </div>
    );
};

export default Note;
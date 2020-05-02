import React from 'react';
import Paper from '@material-ui/core/Paper';



const Note = () => {
    return (
        <div className= 'tab-content'>
             <Paper className='notes-infos'>
                        <h4 className='notes-infos-title'>Note 1</h4>
                        <p className='note-body'>
                            Lorem Ipsum is simply dummy text of the printing
                            and typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book.
                        </p>
                    </Paper>
                    <Paper className='notes-infos'>
                        <h4 className='notes-infos-title'>Note 2</h4>
                        <p>
                            Lorem Ipsum
                        </p>
                    </Paper>
                    <Paper className='notes-infos'>
                        <h4 className='notes-infos-title'>Note 3</h4>
                        <p>
                            Lorep ipsum
                        </p>
                    </Paper>
                    <Paper className='notes-infos'>
                        <h4 className='notes-infos-title'>Note 3</h4>
                        <p>
                            Lorep ipsum
                        </p>
                    </Paper>
                    <Paper className='notes-infos'>
                        <h4 className='notes-infos-title'>Note 3</h4>
                        <p>
                            Lorep ipsum
                        </p>
                    </Paper>
                    <Paper className='notes-infos'>
                        <h4 className='notes-infos-title'>Note 3</h4>
                        <p>
                            Lorep ipsum
                        </p>
                    </Paper>
        </div>
    );
};

export default Note;
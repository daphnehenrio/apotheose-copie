// == Import npm
import React from 'react';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';

// == Import material-ui
import { emphasize, withStyles } from '@material-ui/core/styles';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Chip from '@material-ui/core/Chip';
import FolderIcon from '@material-ui/icons/Folder';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

// == Import img
import Back from 'src/assets/image/documents/back.png';
import File from 'src/assets/image/documents/file.png';

// == Import actions
import { actionChangePage } from '../../../actions/routes';

const StyledBreadcrumb = withStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.grey[100],
        height: 'theme.spacing(3)',
        fontSize: '1.2rem',
        color: theme.palette.grey[800],
        fontWeight: theme.typography.fontWeightRegular,
        padding: '1.2rem',
        '&:hover, &:focus': {
            backgroundColor: theme.palette.grey[300],
        },
        '&:active': {
            boxShadow: theme.shadows[1],
            backgroundColor: emphasize(theme.palette.grey[300], 0.12),
        },
    },
}))(Chip);


// -------------------------- Export --------------------------

export default function TargetedDocuments() {
    const history = useHistory();
    const dispatch = useDispatch();

    const handleClick = (event) => {
        event.preventDefault();
    }

    // ----------------- Return ------------------ //

    return (
        <div className='document-page'>
            <div className='header-document-page'>
                <Breadcrumbs aria-label="breadcrumb">
                    <StyledBreadcrumb
                        component="a"
                        href="#"
                        label="Document"
                        icon={<FolderIcon fontSize="small" />}
                        onClick={(evt) => {
                            evt.preventDefault();
                            dispatch(actionChangePage('/mes-documents', history));
                        }}
                    />
                    <StyledBreadcrumb
                        label="Caf"
                        deleteIcon={<ExpandMoreIcon />}
                        onClick={handleClick}
                        onDelete={handleClick}
                    />
                </Breadcrumbs>
            </div>
            <div className='documents-container'>
                <div className='single-document-container'>
                    <img className='img-folder' src={File} />
                    <p className ='doc-title'>Grimoire</p>
                </div>

                <div className='single-document-container'>
                    <img className='img-folder' src={File} />
                    <p className ='doc-title'>Bible</p>
                </div>

                <div className='single-document-container'>
                    <img className='img-folder' src={File} />
                    <p className ='doc-title'>Document</p>
                </div>
            </div>
        </div>
    );
}

// == Import npm
import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import slugify from '@sindresorhus/slugify';


// == Import material-ui
import { emphasize, withStyles } from '@material-ui/core/styles';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Chip from '@material-ui/core/Chip';
import FolderIcon from '@material-ui/icons/Folder';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import InputBase from '@material-ui/core/InputBase';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Link from '@material-ui/core/Link';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import Tooltip from '@material-ui/core/Tooltip';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { lighten, fade, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import DeleteIcon from '@material-ui/icons/Delete';
import SearchIcon from '@material-ui/icons/Search';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import GetAppIcon from '@material-ui/icons/GetApp';
import EditIcon from '@material-ui/icons/Edit';
import Skeleton from '@material-ui/lab/Skeleton';
import CircularProgress from '@material-ui/core/CircularProgress';



// == Import img
import File from 'src/assets/image/documents/file.png';
import DownloadImg2 from 'src/assets/image/documents/download2.png';
import NotFound from 'src/assets/image/documents/page-not-found.png';


// == Import Components
import AddFile from './Addfile';
import FileReader from '../ReadDocument'


// == Import actions
import { actionChangePage } from '../../../actions/routes';
import { actionOpenAddFile, actionOpenSuccessMessage, actionGetOneFile, actionDownloadFile, actionGetDocuments, actionSetSearch } from '../../../actions/document';


const SelectDoc = withStyles((theme) => ({
  input: {
    fontSize: '1.4rem',
    color: 'black',
    padding: '0.7rem 1rem',
    '&:hover, &:focus': {
      backgroundColor: 'rgba(128, 128, 128,0.3)',
      borderRadius: '10px',
    }
  },
}))(InputBase);

const StyledSelect = withStyles((theme) => ({
  icon: {
    color: 'black',
  },
  select: {
    borderRadius: '2px',
    '&:hover': {
      backgroundColor: 'rgba(128,128,128,0.1)',
      borderRadius: '2px',

    },
    '&:focus': {
      backgroundColor: 'rgba(128,128,128,0.1)',
      borderRadius: '2px',

    },
    '&:active': {
      backgroundColor: 'rgba(128,128,128,0.1)',
      borderRadius: '2px',

    }
  },
}))(Select);

const StyledSelectGrey = withStyles((theme) => ({
  icon: {
    color: 'rgba(128,128,128,0.1)',
  },
  select: {
    color: 'rgba(128,128,128,0.6)',
    borderRadius: '2px',
    '&:hover': {
      backgroundColor: 'rgba(128,128,128,0.1)',
      borderRadius: '2px',

    },
    '&:focus': {
      backgroundColor: 'rgba(128,128,128,0.1)',
      borderRadius: '2px',

    },
    '&:active': {
      backgroundColor: 'rgba(128,128,128,0.1)',
      borderRadius: '2px',

    }
  },
}))(Select);

const StyledInput = withStyles((theme) => ({
  root: {
    width: '5rem',
  }
}))(AddIcon);


function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  { id: 'name', numeric: false, disablePadding: true, label: 'Nom' },

];

function EnhancedTableHead(props) {
  const { classes, order, orderBy, rowCount, onRequestSort } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">

        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'default'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <span className={classes.visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </span>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  classes: PropTypes.object.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

const useToolbarStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1),
  },
  highlight:
    theme.palette.type === 'light'
      ? {
        color: 'dimgrey',
        backgroundColor: 'rgba(182,220,254,0.2)',
      }
      : {
        color: theme.palette.text.primary,
        backgroundColor: theme.palette.secondary.dark,
      },
  title: {
    flex: '1 1 100%',
  },
  search: {
    position: 'relative',
    borderBottom: '1px solid dimgrey',
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

const EnhancedTableToolbar = (props) => {
  const classes = useToolbarStyles();
  const { category } = props;
  const history = useHistory();
  const dispatch = useDispatch();
  const categoriesFolder = useSelector((state) => state.document.category);
  const goodSub_categories = categoriesFolder.find((cat) => cat.name === category.category);
  return (
    <Toolbar
      className={clsx(classes.root, {
        [classes.highlight]: false,
      })}
    >
      <div className='header-document-page'>
        <Breadcrumbs aria-label="breadcrumb" className='breadcrumb' separator={<ArrowForwardIosIcon />}>
          <Link href="#" className='link-document grey' onClick={(evt) => {
            evt.preventDefault();
            dispatch(actionChangePage('/mes-documents', history));
          }}>
            Documents
          </Link>
          <StyledSelectGrey
            labelId="demo-customized-select-label"
            id="demo-customized-select"
            input={<SelectDoc />}
            defaultValue={goodSub_categories.name}
            onChange={(evt) => {
              dispatch(actionChangePage(`/mes-documents/${slugify(evt.target.value)}`, history))
            }
            }
          >
            {categoriesFolder.map((category) => {
              return (
                <MenuItem value={category.name} >{category.name}</MenuItem>
              )
            })
            }
          </StyledSelectGrey>
          <StyledSelect
            labelId="demo-customized-select-label"
            id="demo-customized-select"
            input={<SelectDoc />}
            defaultValue={category.sub}
            onChange={(evt) => {
              const goodSubCatTarget = goodSub_categories.sub_category.find((cat) => {
                return cat.name === evt.target.value;
              });
              dispatch(actionGetDocuments(goodSubCatTarget.id));
              dispatch(actionChangePage(`/mes-documents/${slugify(goodSub_categories.name)}/${slugify(evt.target.value)}`, history));
            }
            }
          >
            {goodSub_categories.sub_category.map((sub_cat) => {
              return (
                <MenuItem value={sub_cat.name}>{sub_cat.name}</MenuItem>
              )
            })
            }
          </StyledSelect>
        </Breadcrumbs>

      </div>
      <Button
        startIcon={<AddIcon />}
        onClick={(evt) => {
          dispatch(actionOpenAddFile(true));
        }}
      >
        Ajouter un document
          </Button>
      <div className={classes.search}>
        <div className={classes.searchIcon}>
          <SearchIcon />
        </div>
        <InputBase
          onChange={(evt) => {
            dispatch(actionSetSearch(evt.target.value));
          }}
          placeholder="Rechercher ..."
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          inputProps={{ 'aria-label': 'search' }}
        />
      </div>

    </Toolbar>
  );
};


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  paper: {
    width: '100%',
    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: 750,
  },
  visuallyHidden: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    top: 20,
    width: 1,
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));




// -------------------------- Export --------------------------

export default function TargetedDocuments(category) {
  const dispatch = useDispatch();
  const { successUpload, files, checkFiles, current_sub_cat_id, totalFile } = useSelector((state) => state.document);


  const [open, setOpen] = React.useState(false);

  const [currentFile, setCurrentFile] = React.useState({})

  useEffect(() => {

    if (!checkFiles && (files.lenght !== totalFile || totalFile === 0)) {
      dispatch(actionGetDocuments(current_sub_cat_id))
    }
  }, [checkFiles])

  const handleOpenModal = () => {
    setOpen(true);
  };

  const handleCloseModal = () => {
    setOpen(false);
  };


  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }


  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    dispatch(actionOpenSuccessMessage(false));
  };

  const readFile = (file_document) => {
    setCurrentFile(file_document);
    dispatch(actionGetOneFile(file_document.id));
    setTimeout(handleOpenModal, 1000);
  }

  const downloadFile = () => {
    dispatch(actionDownloadFile(currentFile.id, currentFile.name))
  }

  const ModalReader = () => {
    return (
      <Modal
        className="reader-modal"
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleCloseModal}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div>
            <FileReader />
          </div>
        </Fade>

      </Modal>
    )
  }






  const classes = useStyles();
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('name');
  const search = useSelector((state) => state.document.search);
  const loading = useSelector((state) => state.document.loading);

  const rows =
    search !== '' ?
      files.filter((file) => {
        if (file.name.startsWith(search.charAt(0).toUpperCase() + search.slice(1).toLowerCase())) {
          return true;
        }
        return false;
      }).map((file) => {
        return { name: file.name, file }
      })
      :
      files.map((file) => {
        return { name: file.name, file }
      })


  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };



  // ----------------- Return ------------------ //

  return (
    <div className='document-page'>

      <div className='documents-container'>

        <div className={classes.root}>
          <Paper className={classes.paper}>

            <EnhancedTableToolbar category={category} />
            {rows.length !== 0 ?
              <TableContainer>
                <Table
                  className={classes.table}
                  aria-labelledby="tableTitle"
                  size='medium'
                  aria-label="enhanced table"
                >
                  <EnhancedTableHead
                    classes={classes}
                    order={order}
                    orderBy={orderBy}
                    onRequestSort={handleRequestSort}
                    rowCount={rows.length}
                  />
                  <TableBody>
                    {stableSort(rows, getComparator(order, orderBy)).map((row, index) => {
                      const labelId = `enhanced-table-checkbox-${index}`;

                      return (
                        <TableRow
                          hover
                          onClick={() => readFile(row.file)}
                          role="checkbox"
                          tabIndex={-1}
                          key={row.name}
                        >
                          <TableCell style={{ padding: '5px', width: '70px' }}>
                            <IconButton aria-label="download" onClick={(evt) => {
                              evt.stopPropagation();
                              dispatch(actionDownloadFile(row.file.id, row.file.name));

                            }}>
                              <img src="/images/document/download2.png" style={{ width: '2rem' }} />
                            </IconButton>
                          </TableCell>
                          <TableCell component="th" id={labelId} scope="row" padding="none">
                                <div className='file-container'>
                                  <img className='img-folder' src="/images/document/file.png" />
                                  {row.name}
                                </div>
                          </TableCell>
                          <TableCell style={{ padding: '5px', width: '70px' }}>
                            <IconButton aria-label="edit" onClick={(evt) => {
                              evt.stopPropagation();

                            }}>
                              <EditIcon />
                            </IconButton>
                          </TableCell>
                          <TableCell style={{ padding: '5px', width: '70px' }}>
                            <IconButton aria-label="delete" onClick={(evt) => {
                              evt.stopPropagation();

                            }}>
                              <DeleteIcon />
                            </IconButton>
                          </TableCell>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              </TableContainer>
              :
              !loading ? (
                <div className='not-found'>
                  <img src="/images/document/page-not-found.png" />
                  <p>Aucun Dossier ne correspond à la recherche</p>
                </div>
              ) : null
            }
          </Paper>
          <Backdrop className={classes.backdrop} open={loading}>
            <CircularProgress color="inherit" />
          </Backdrop>

        </div>
      </div>



      <AddFile />
      <Snackbar open={successUpload} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          Vos documents ont été importé avec succès !
                </Alert>
      </Snackbar>
      <ModalReader />

    </div >
  );
}

// == Import npm
import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import slugify from '@sindresorhus/slugify';


// == Import img
import Folder from 'src/assets/image/documents/folder2.png';
import NotFound from 'src/assets/image/documents/page-not-found.png';

// Import material ui
import Breadcrumbs from '@material-ui/core/Breadcrumbs';

import Link from '@material-ui/core/Link';

import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import CircularProgress from '@material-ui/core/CircularProgress';
import Backdrop from '@material-ui/core/Backdrop';







// == Import actions
import { actionChangePage } from 'src/actions/routes';
import { actionSetSearch } from 'src/actions/document';

// == Import styles
import '../styles.scss';






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
    width: '100%',
    marginTop: '2rem',
    borderBottom: '1px solid dimgrey',
    marginRight: theme.spacing(2),
    marginLeft: 0,
    [theme.breakpoints.up('xl')]: {
      marginTop: '0',
    },
    [theme.breakpoints.up('md')]: {
      width: 'fit-content'

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
  const dispatch = useDispatch();
  const search = useSelector((state) => state.document.search);
  return (
    <Toolbar
      className={clsx(classes.root, {
        [classes.highlight]: false,
      })}
    >
      <div className='header-document-page'>
        <Breadcrumbs aria-label="breadcrumb" className='breadcrumb'>
          <Link href="#" className='link-document' onClick={(evt) => {
            evt.preventDefault();
            dispatch(actionChangePage('/mes-documents', history));
          }}>
            Documents
          </Link>
        </Breadcrumbs>
      </div>
      <div className={classes.search}>
        <div className={classes.searchIcon}>
          <SearchIcon />
        </div>
        <InputBase
          onChange={(evt) => {
            dispatch(actionSetSearch(evt.target.value));
            console.log(search, 'search');
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
  )
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
    minWidth: 'auto',
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

export default function DocumentsCategory() {
  const history = useHistory();
  const dispatch = useDispatch();

  const loading = useSelector((state) => state.document.loading);

  const categoriesFolder = useSelector((state) => state.document.category);

  const classes = useStyles();
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('name');

  const search = useSelector((state) => state.document.search);


  const rows =
    search !== '' ?
      categoriesFolder.filter((category) => {
        if (category.name.startsWith(search.charAt(0).toUpperCase() + search.slice(1).toLowerCase())) {
          return true;
        }
        return false;
      }).map((category) => {
        return { name: category.name }
      })
      :
      categoriesFolder.map((category) => {
        return { name: category.name }
      });



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
            <EnhancedTableToolbar />
            {rows.length !== 0 && !loading ?
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
                          key={row.name}
                          hover
                          onClick={(event) => dispatch(actionChangePage(`/mes-documents/${slugify(row.name)}`, history))}
                          role="checkbox"
                          tabIndex={-1}
                        >
                          <TableCell padding="checkbox">

                          </TableCell>
                          <TableCell component="th" id={labelId} scope="row" padding="none">
                            <div className='file-container'>
                              <img className='img-folder' src={Folder} />
                              {row.name}
                            </div>
                          </TableCell>
                        </TableRow>
                      );
                    })
                    }


                  </TableBody>
                </Table>
              </TableContainer>
              :
              !loading ? (
                <div className='not-found'>
                  <img src={NotFound} />
                  <p>Aucun Dossier ne correspond à la recherche</p>
                </div>
              ) : null
            }
          </Paper>

        </div>
      </div>
      <Backdrop className={classes.backdrop} open={loading}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
}

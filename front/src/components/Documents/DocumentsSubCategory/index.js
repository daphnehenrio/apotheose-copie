// == Import npm
import React from 'react';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';


// Import material ui
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import InputBase from '@material-ui/core/InputBase';
import MenuItem from '@material-ui/core/MenuItem';
import { withStyles } from '@material-ui/core/styles';
import Select from '@material-ui/core/Select';
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
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';



// == Import img
import Folder from 'src/assets/image/documents/folder2.png';

// == Import actions
import { actionChangePage } from 'src/actions/routes';

import slugify from '@sindresorhus/slugify';
import { actionGetDocuments, actionSetSearch } from '../../../actions/document';

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
  icon: {
    color: 'black',
  }
}))(Select);

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

          <StyledSelect
            labelId="demo-customized-select-label"
            id="demo-customized-select"
            input={<SelectDoc />}
            defaultValue={goodSub_categories.name}
            onChange={(evt) => {
              console.log(evt.target);
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
          </StyledSelect>
        </Breadcrumbs>

      </div>
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
}));




// -------------------------- Export --------------------------

export default function DocumentsSubCategory(category) {
  const history = useHistory();
  const dispatch = useDispatch();

  const categoriesFolder = useSelector((state) => state.document.category)
  const goodSub_categories = categoriesFolder.find((cat) => cat.name === category.category);

  console.log(goodSub_categories, 'GOOOD SUUUB CATTT');

  const handleClickSubfile = (evt) => {
    const subCat = goodSub_categories.sub_category.find((cat) => cat.name === evt);
    dispatch(actionGetDocuments(subCat.id));
    dispatch(actionChangePage(`/mes-documents/${slugify(goodSub_categories.name)}/${slugify(subCat.name)}`, history));

  }



  const classes = useStyles();
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('name');
  const search = useSelector((state) => state.document.search);
  const rows =
    search !== '' ?
      goodSub_categories.sub_category.filter((sub_cat) => {
        if (sub_cat.name.startsWith(search.charAt(0).toUpperCase() + search.slice(1).toLowerCase())) {
          return true;
        }
        return false;
      }).map((sub_cat) => {
        return { name: sub_cat.name }
      })
      :
      goodSub_categories.sub_category.map((sub_cat) => {
        return { name: sub_cat.name }
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
            <EnhancedTableToolbar category={category} />
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
                        onClick={(evt) => { handleClickSubfile(row.name) }}
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
                  })}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>

        </div>
      </div>
    </div>
  );
}

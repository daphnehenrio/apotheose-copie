import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import PlaylistAddCheckIcon from '@material-ui/icons/PlaylistAddCheck';
import NoteIcon from '@material-ui/icons/Note';
import MemoryIcon from '@material-ui/icons/Memory';
import NotificationsIcon from '@material-ui/icons/Notifications';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import EventIcon from '@material-ui/icons/Event';
import Box from '@material-ui/core/Box';


// == Import styles
import './styles.scss';

// == Import components
import Memo from 'src/components/DashBoard/Memo';
import Note from 'src/components/DashBoard/Note';
import Todo from 'src/components/DashBoard/Todo';
import Checklist from 'src/components/DashBoard/Checklist';
import Article from 'src/components/DashBoard/Article';
import Agenda from './Agenda';

function TabPanel(props) {
  const {
    children, value, index, ...other
  } = props;

  return (
    <div
      className="tab-panel"
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <div>{children}</div>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-force-tab-${index}`,
    'aria-controls': `scrollable-force-tabpanel-${index}`,
  };
}


export default function ScrollableTabsButtonForce() {
  const [value, setValue] = React.useState(0);

  const preventDefault = (event) => event.preventDefault();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="tab-content">
      <div className="tab-panel">
        <AppBar position="static" color="default">
          <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons="on"
            indicatorColor="primary"
            textColor="primary"
            aria-label="scrollable force tabs example"
          >
            <Tab label="Memos" icon={<MemoryIcon />} {...a11yProps(0)} />
            <Tab label="Notes" icon={<NoteIcon />} {...a11yProps(1)} />
            <Tab label="Todo" icon={<FormatListBulletedIcon />} {...a11yProps(2)} />
            <Tab label="Checklists" icon={<PlaylistAddCheckIcon />} {...a11yProps(3)} />
            <Tab label="Articles" icon={<BookmarkIcon />} {...a11yProps(4)} />
            <Tab label="Notifications" icon={<NotificationsIcon />} {...a11yProps(5)} />
            <Tab label="Agenda" icon={<EventIcon />} {...a11yProps(6)} />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>
          <Memo />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Note />
        </TabPanel>

        <TabPanel value={value} index={2}>
          <Todo />
        </TabPanel>

        <TabPanel value={value} index={3}>
          <Checklist />
        </TabPanel>
        <TabPanel value={value} index={4}>
          <Article />
        </TabPanel>
        <TabPanel value={value} index={5}>
          Item One
        </TabPanel>
        <TabPanel value={value} index={6}>
          <Agenda />
        </TabPanel>

      </div>
    </div>
  );
}

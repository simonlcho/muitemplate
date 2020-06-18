import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Typography from '@material-ui/core/Typography';
import {Link, useLocation} from "react-router-dom"

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  }, 
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },  
  drawerHeaderTitle: {
    marginRight: '4.5em'
  },
  drawerPaper: {
    width: drawerWidth,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

export default function NestedList(props) {
  const classes = useStyles();
  const query = new URLSearchParams(useLocation().search);

  const windowsPath = window.location.pathname;
  const [openSubMenu1, setOpenSubMenu1] = React.useState(windowsPath.indexOf("/subfunction13") < 0 ? false : true);
  const [openSubMenu2, setOpenSubMenu2] = React.useState(windowsPath.indexOf("/subfunction14") < 0 ? false : true);
  const [openDrawer, setOpenDrawer] = React.useState(true);
  
  const handleDrawerClose = () => {
    setOpenDrawer(false);
    props.setShowSideBar(false);
  };

  const handleSubMenu1Click = () => {
    setOpenSubMenu1(!openSubMenu1);
  };

  const handleSubMenu2Click = () => {
    setOpenSubMenu2(!openSubMenu2);
  };

  const getId = () => {
    let id = query.get("id");
    return id;
  };

  return (
    <Drawer 
      className={classes.drawer} 
      variant="persistent"
      open={openDrawer}      
      classes={{
        paper: classes.drawerPaper,
      }}
      anchor="left"      
    >
      <div className={classes.drawerHeader}>
        <div className={classes.drawerHeaderTitle}>
          <Typography variant="h6">
            Function 1
          </Typography>  
        </div>
        <IconButton onClick={handleDrawerClose}>
          <ChevronLeftIcon />          
        </IconButton>
      </div>
      <Divider />      
      <List
        component="nav"
      >
        <ListItem button component={Link} to={"/subfunction11?id=" + getId()} selected={windowsPath.indexOf("/subfunction11") >= 0}>
          <ListItemText primary="Sub Function 11" />
        </ListItem>
        <ListItem button component={Link} to="/subfunction12" selected={windowsPath.indexOf("/subfunction12") >= 0}>
          <ListItemText primary="Sub Function 12" />
        </ListItem>
        <ListItem button onClick={handleSubMenu1Click}>
          <ListItemText primary="Sub Function 13" />
          {openSubMenu1 ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={openSubMenu1} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button className={classes.nested} component={Link} to="/subfunction131" selected={windowsPath.indexOf("/subfunction131") >= 0}>
              <ListItemText primary="Sub Function 131" />
            </ListItem>
            <ListItem button className={classes.nested} component={Link} to="/subfunction132" selected={windowsPath.indexOf("/subfunction132") >= 0}>
              <ListItemText primary="Sub Function 132" />
            </ListItem>
            <ListItem button className={classes.nested} component={Link} to="/subfunction133" selected={windowsPath.indexOf("/subfunction133") >= 0}>
              <ListItemText primary="Sub Function 133" />
            </ListItem>            
          </List>
        </Collapse>
        <ListItem button onClick={handleSubMenu2Click}>
          <ListItemText primary="Sub Function 14" />
          {openSubMenu2 ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={openSubMenu2} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button className={classes.nested} component={Link} to="/subfunction141" selected={windowsPath.indexOf("/subfunction141") >= 0}>
              <ListItemText primary="Sub Function 141" />
            </ListItem>
            <ListItem button className={classes.nested} component={Link} to="/subfunction142" selected={windowsPath.indexOf("/subfunction142") >= 0}>
              <ListItemText primary="Sub Function 142" />
            </ListItem>
            <ListItem button className={classes.nested} component={Link} to="/subfunction143" selected={windowsPath.indexOf("/subfunction143") >= 0}>
              <ListItemText primary="Sub Function 143" />
            </ListItem>            
          </List>
        </Collapse>
      </List>
    </Drawer>    
  );
}
import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { noteActions } from "../../actions";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import {
  Drawer,
  AppBar,
  Toolbar,
  List,
  CssBaseline,
  Typography,
  Divider,
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemText,
  TextField,
  InputAdornment,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import DescriptionIcon from "@material-ui/icons/Description";
import { Add, Home } from "@material-ui/icons";
import SearchIcon from "@material-ui/icons/Search";
// import HomeIcon from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: 240,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    width: 240,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  title: {
    cursor: "pointer",
  },
  search: {
    margin: "10px",
  },
}));

function Sidebar(props) {
  const classes = useStyles();
  // const theme = useTheme();
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const noteReducer = useSelector((state) => state.noteReducer);

  const handleClick = (index, directory) => {
    props.history.push(directory);
    dispatch(noteActions.selectNote(index));
  };

  const handleDrawer = () => {
    setOpen(!open);
  };

  const handleSearch = (event) => {
    dispatch(noteActions.doSearchNotes(event.target.value));
  };

  return (
    <div>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawer}
            edge="start"
          >
            <MenuIcon />
          </IconButton>
          <Typography
            className={classes.title}
            variant="h4"
            noWrap
            onClick={() => {
              handleClick(null, "/");
            }}
          >
            Note Taking App
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={classes.drawerOpen}
        classes={{
          paper: clsx({ [classes.drawerOpen]: true }),
        }}
        // variant="permanent"
        // className={clsx(classes.drawer, {
        //   [classes.drawerOpen]: open,
        //   [classes.drawerClose]: !open,
        // })}
        // classes={{
        //   paper: clsx({
        //     [classes.drawerOpen]: open,
        //     [classes.drawerClose]: !open,
        //   }),
        // }}
      >
        <div className={classes.toolbar} />
        <Divider />
        <List>
          <ListItem>
            <TextField
              id="outlined-basic"
              variant="outlined"
              className={classes.search}
              label="Search"
              color="primary"
              size="small"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
              onChange={(event) => {
                handleSearch(event);
              }}
            />
          </ListItem>
          <ListItem
            button
            selected={-1 === noteReducer.selectedNote}
            onClick={() => handleClick(-1, "/")}
          >
            <ListItemIcon>
              <Home />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem
            button
            selected={-2 === noteReducer.selectedNote}
            onClick={() => handleClick(-2, "/add-note")}
          >
            <ListItemIcon>
              <Add />
            </ListItemIcon>
            <ListItemText primary="Add Note" />
          </ListItem>
        </List>
        <Divider />
        <List>
          {noteReducer.filteredData.map((item, index) => {
            return (
              <ListItem
                key={index}
                button
                selected={index === noteReducer.selectedNote}
                onClick={() => {
                  handleClick(index, `/note/${item.id}`);
                }}
              >
                <ListItemIcon>
                  <DescriptionIcon />
                </ListItemIcon>
                <Typography className={classes.title} variant="h6" noWrap>
                  {item.name}
                </Typography>
              </ListItem>
            );
          })}
        </List>
      </Drawer>
    </div>
  );
}

export default withRouter(Sidebar);

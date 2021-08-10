import clsx from "clsx";
import React from "react";
import { useHistory, useLocation } from "react-router-dom";

import { useTheme } from "@material-ui/core/styles";
import { useStyles } from "./LayoutStyle";

import {
  Avatar,
  AppBar,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@material-ui/core";

import SubjectOutlined from "@material-ui/icons/SubjectOutlined";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import DashboardIcon from "@material-ui/icons/Dashboard";
import HomeIcon from "@material-ui/icons/Home";
import AssignmentIcon from "@material-ui/icons/Assignment";
import MenuIcon from "@material-ui/icons/Menu";
import { useContext } from "react";
import { AuthContext } from "context/AuthContext";
import Landing from "components/landing_page/Landing";

export default function MiniDrawer({ children }) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const history = useHistory();
  const location = useLocation();

  const menuItems = [
    {
      text: "Dashboard",
      icon: <HomeIcon color="action" />,
      path: "/dashboard",
    },
    {
      text: "Projects",
      icon: <AssignmentIcon color="action" />,
      path: "/projects",
    },
  ];

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const { user } = useContext(AuthContext);

  return (
    <>
      {!user ? (
        <Landing />
      ) : (
        <div className={classes.root}>
          <CssBaseline />
          <AppBar
            elevation={2}
            position="fixed"
            className={clsx(classes.appBar, {
              [classes.appBarShift]: open,
            })}
          >
            <Toolbar>
              <IconButton
                // color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                className={clsx(classes.menuButton, {
                  [classes.hide]: open,
                })}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" noWrap className={classes.app}>
                {/* <strong>MAKE MY DAY</strong> */}
              </Typography>
              <div>
                {/* <Typography>WELCOME!! {user && user.user_name}</Typography> */}
              </div>
              <Avatar src={user && user.avatar} className={classes.avatar} />
            </Toolbar>
          </AppBar>
          <Drawer
            variant="permanent"
            className={clsx(classes.drawer, {
              [classes.drawerOpen]: open,
              [classes.drawerClose]: !open,
            })}
            classes={{
              paper: clsx({
                [classes.drawerOpen]: open,
                [classes.drawerClose]: !open,
              }),
            }}
          >
            <div className={classes.toolbar}>
              <IconButton onClick={handleDrawerClose}>
                {theme.direction === "rtl" ? (
                  <ChevronRightIcon />
                ) : (
                  <ChevronLeftIcon />
                )}
              </IconButton>
            </div>

            <Divider />
            <br />
            <List>
              {menuItems.map((item) => (
                <ListItem
                  button
                  key={item.text}
                  onClick={() => history.push(item.path)}
                  className={
                    location.pathname === item.path ? classes.active : null
                  }
                >
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText>{item.text}</ListItemText>
                </ListItem>
              ))}
            </List>
            <Divider />
          </Drawer>
          <div className={classes.content}>
            <div className={classes.toolbar}></div>
            {children}
          </div>
        </div>
      )}
    </>
  );
}

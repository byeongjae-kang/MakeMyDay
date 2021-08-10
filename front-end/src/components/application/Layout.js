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
  Tooltip,
  Button,
} from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import SubjectOutlined from "@material-ui/icons/SubjectOutlined";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

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
      text: <Typography variant="body2">Dashboard</Typography>,
      icon: <HomeIcon className={classes.icons} />,
      path: "/dashboard",
    },
    {
      text: <Typography variant="body2">Projects</Typography>,
      icon: <AssignmentIcon className={classes.icons} />,
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
                // onClick={handleDrawerOpen}
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
                <Button
                  variant="outlined"
                  size="small"
                  title="https://github.com/byeongjae-kang/MakeMyDay"
                  className={classes.btnbtn}
                  onClick={() =>
                    window.open("https://github.com/byeongjae-kang/MakeMyDay")
                  }
                  startIcon={<GitHubIcon />}
                >
                  Github Link
                </Button>
                {/* <Typography>WELCOME!! {user && user.user_name}</Typography> */}
              </div>
              <Tooltip
                style={{ cursor: "pointer" }}
                title={`Hi ${user.user_name}`}
              >
                <Avatar className={classes.avatar}>
                  {user.user_name.charAt(0)}
                </Avatar>
              </Tooltip>
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

            {/* <Divider /> */}
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
                  <ListItemIcon
                    className={
                      location.pathname === item.path ? classes.active : null
                    }
                  >
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText>{item.text}</ListItemText>
                </ListItem>
              ))}
            </List>
            {/* <Divider /> */}
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

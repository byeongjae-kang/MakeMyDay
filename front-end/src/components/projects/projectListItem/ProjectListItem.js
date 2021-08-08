import React from "react";
import { useHistory, useRouteMatch } from "react-router-dom";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Typography from "@material-ui/core/Typography";
import { Avatar, CardActions, Divider } from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { useStyles } from "./ProjectListItemStyle";

const options = ["Edit", "Delete"];

export default function ProjectListItems({
  project,
  state,
  handleDelete,
  handleClickOpen
}) {
  const classes = useStyles(project);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const history = useHistory();
  const currentRoute = useRouteMatch();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (e, projectId, state) => {
    const value = e.target.getAttribute("value");
    if (value === "Delete") {
      handleDelete(projectId);
    }
    if (value === "Edit") {
      handleClickOpen(projectId, value);
      history.push(`${currentRoute.url}/${projectId}`);
    }

    setAnchorEl(null);
  };

  return (
    <Card elevation={1} className={classes.root} variant="outlined">
      <CardHeader
        title={project.name}
        action={
          <div>
            <IconButton
              aria-label="more"
              aria-controls="long-menu"
              aria-haspopup="true"
              onClick={handleClick}
            >
              <MoreVertIcon />
            </IconButton>
            <Menu
              id="long-menu"
              anchorEl={anchorEl}
              keepMounted
              open={open}
              onClose={handleClose}
              PaperProps={{
                style: {
                  maxHeight: 220,
                  width: "20ch"
                }
              }}
            >
              {options.map((option) => (
                <MenuItem
                  key={option}
                  value={option}
                  onClick={(e) => handleClose(e, project.id, state)}
                >
                  {option}
                </MenuItem>
              ))}
            </Menu>
          </div>
        }
      />

      <Divider />

      <CardContent
        className={classes.content}
        onClick={() => history.push(`${currentRoute.url}/${project.id}/tasks`)}
      >
        <Typography variant="body2" color="textSecondary">
          {project.description}
        </Typography>
      </CardContent>

      <div className={classes.footer}>
        <Typography
          className={classes.status}
          variant="body2"
          color="textSecondary"
        >
          {project.status}
        </Typography>
        <CardActions>
          {project.users.map((user) => {
            return (
              <IconButton key={user.id} className={classes.person}>
                <Avatar alt={user.name} src={user.avatar} />
              </IconButton>
            );
          })}
        </CardActions>
      </div>
    </Card>
  );
}
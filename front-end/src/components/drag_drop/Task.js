import { useState, useContext } from "react";
import ProjectContext from "../../context/ProjectContext";
import { Card, Typography, Grid } from "@material-ui/core";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import { Avatar, Divider, makeStyles } from "@material-ui/core";
import { Draggable } from "react-beautiful-dnd";
import ModalForm from "../form/ModalForm";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { green, pink, yellow } from "@material-ui/core/colors";
import { useParams } from "react-router-dom";
import AvatarGroup from "@material-ui/lab/AvatarGroup";
const useStyle = makeStyles((theme) => ({
  // task: {
  //   padding: theme.spacing(1, 1, 1, 2),
  //   margin: theme.spacing(1),
  //   display: "flex",
  //   flexDirection: "columns",
  //   justifyContent: "space-between",

  //   background: "#fff",
  //   "&:hover": {
  //     backgroundColor: "lightblue",
  //   },
  // },
  // rightModal: {
  //   display: "flex",
  //   alignItems: "center",
  // },
  listItem: {
    minWidth: 275,
  },
  status: {
    color: (project) => {
      if (project.status === "On hold") {
        return yellow[700];
      }
      if (project.status === "Cancelled") {
        return pink[500];
      }
      return green[700];
    },
  },
  content: {
    marginBottom: 20,
  },

  person: {
    height: 10,
    padding: 0,
    margin: theme.spacing(1),
    width: theme.spacing(3),
  },
  footer: {
    padding: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  divide: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: 20,
  },
}));

const PriorityIcon = (props) => {
  if (props.priority === "1") {
    return <div color="red">High</div>;
  } else if (props.priority === "2") {
    return <div color="red">Medium</div>;
  } else {
    return <div color="red">Low</div>;
  }
};

export default function Task({ index, updateTask, task }) {
  const { deleteTasks, users } = useContext(ProjectContext);

  const classes = useStyle();

  const [openPopup, setOpenPopup] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const projectId = useParams().id;
  let projectUsers = users[projectId];
  return (
    <Draggable draggableId={task.id.toString()} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.dragHandleProps}
          {...provided.draggableProps}
        >
          <Card elevation={1} variant="outlined">
            <CardHeader
              title={<Typography fontSize="16">{task.name}</Typography>}
              action={
                <div>
                  <MoreVertIcon
                    aria-controls="simple-menu"
                    style={{ cursor: "pointer" }}
                    aria-haspopup="true"
                    onClick={handleClick}
                  >
                    Open Menu
                  </MoreVertIcon>
                  <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                  >
                    <MenuItem
                      onClick={() => setOpenPopup(true)}
                      variant="outlined"
                      color="primary"
                    >
                      Edit
                    </MenuItem>
                    <Divider />
                    <MenuItem onClick={() => deleteTasks(task.id)}>
                      Delete
                    </MenuItem>
                  </Menu>
                </div>
              }
            />
            <Divider />
            <CardContent>
              <Grid container className={classes.divide}>
                <Grid className={classes.rightModal}>
                  <ModalForm
                    closePopup={() => setOpenPopup(false)}
                    openPopup={openPopup}
                    setOpenPopup={setOpenPopup}
                    task={task}
                    updateTask={updateTask}
                    projectUsers={projectUsers}
                    users={users}
                  />
                  <Grid group className={classes.divide}>
                    <Grid />
                    <Grid>
                      <PriorityIcon priority={task.priority} />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid>
                  <AvatarGroup max={1}>
                    <Avatar alt="Remy Sharp" src={task.avatar} />
                  </AvatarGroup>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </div>
      )}
    </Draggable>
  );
}

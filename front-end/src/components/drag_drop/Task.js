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
import { yellow, pink, green } from "@material-ui/core/colors";
import { useParams } from "react-router-dom";
import AvatarGroup from "@material-ui/lab/AvatarGroup";
import NaturalDragAnimation from "natural-drag-animation-rbdnd";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
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
  priority: {
    marginTop: 10,
  },

  person: {
    height: 10,
    padding: 0,
    margin: theme.spacing(1),
    width: theme.spacing(3),
  },

  divide: {
    display: "flex",
    justifyContent: "space-between",
  },
  card: {
    borderRadius: 8,
    marginBottom: 5,
  },
}));

export default function Task({ index, updateTask, task }) {
  const { deleteTasks, users, selectedUsers, setSelectedUsers } =
    useContext(ProjectContext);

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
  const PriorityIcon = (props) => {
    if (props.priority === "1") {
      return (
        <ArrowUpwardIcon className={classes.priority} style={{ fill: "red" }} />
      );
    } else if (props.priority === "2") {
      return (
        <ArrowUpwardIcon
          className={classes.priority}
          style={{ fill: "orange" }}
        />
      );
    } else {
      return (
        <ArrowDownwardIcon
          className={classes.priority}
          style={{ fill: "green" }}
        />
      );
    }
  };
  return (
    <Draggable draggableId={task.id.toString()} index={index}>
      {(provided, snapshot) => (
        <NaturalDragAnimation
          style={provided.draggableProps.style}
          snapshot={snapshot}
        >
          {(style) => (
            <div
              ref={provided.innerRef}
              {...provided.dragHandleProps}
              {...provided.draggableProps}
              style={style}
            >
              <Card className={classes.card} elevation={1} variant="outlined">
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
                        PaperProps={{
                          style: {
                            maxHeight: 220,
                            width: "20ch",
                          },
                        }}
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
                    <ModalForm
                      closePopup={() => setOpenPopup(false)}
                      openPopup={openPopup}
                      setOpenPopup={setOpenPopup}
                      task={task}
                      updateTask={updateTask}
                      projectUsers={projectUsers}
                      users={users}
                    />

                    <PriorityIcon priority={task.priority} />

                    <Avatar
                      style={{ height: "30px", width: "30px" }}
                      alt="Remy Sharp"
                      src={task.avatar}
                    />
                  </Grid>
                </CardContent>
              </Card>
            </div>
          )}
        </NaturalDragAnimation>
      )}
    </Draggable>
  );
}

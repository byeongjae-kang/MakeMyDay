import { useState, useContext } from "react";
import ProjectContext from "../../context/ProjectContext";
import axios from "axios";
import cloneDeep from "lodash/cloneDeep";
import {
  deleteTask,
  HaveProjectWithUsers,
  findIndex,
} from "../../hooks/helpers";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { Avatar } from "@material-ui/core";
import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  FormControl,
  FormControlLabel,
  FormLabel,
  FormGroup,
  Radio,
  RadioGroup,
  TextField,
  Grid,
} from "@material-ui/core";
import useStyles from "./Styles";
import CloseIcon from "@material-ui/icons/Close";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";

const findUser = (userId, projectUsers) => {
  if (projectUsers?.users) {
    return projectUsers.users.find((x) => x.id === userId);
  }
  return null;
};

export default function Form(props) {
  const classes = useStyles();

  const { openPopup, task, closePopup, projectUsers } = props;
  const { projects, setState } = useContext(ProjectContext);
  const [title, setTitle] = useState(task.name);
  const [priority, setPriority] = useState(task.priority);
  const [status, setStatus] = useState(task.status);
  const [description, setDescription] = useState(task.description || "");
  const [startDate, setStartDate] = useState(
    new Date(task.start).toISOString().split("T")[0]
  );
  const [endDate, setEndDate] = useState(
    new Date(task.end).toISOString().split("T")[0]
  );
  const [selectedUsers, setSelectedUsers] = useState(() =>
    findUser(task.user_id, projectUsers)
  );

  // console.log("user:", selectedUsers);
  // console.log("task.user_id:", task.user_id);
  // console.log("projectUsers:", projectUsers?.users);
  // console.log("foundUser:", findUser(task.user_id, projectUsers));
  const handleSubmit = (e, taskId, projectId) => {
    e.preventDefault();

    const editTask = {
      name: title,
      description: description,
      status: status,
      start: startDate.split("T")[0],
      end: endDate.split("T")[0],
      priority: priority,
      user_id: selectedUsers.id,
    };

    axios
      .put(`/api/projects/${projectId}/tasks/${taskId}`, editTask)
      .then((result) => {
        console.log("result in edit", result.data);
        return axios.get(`http://localhost:8080/api/tasks/${result.data.id}`);

        // let user = findUser(result.data.user_id, projectUsers);
        // setSelectedUsers(user);
        // let project = cloneDeep(projects[result.data.project_id]);
        // let tasks = project.tasks;
        // tasks = deleteTask(result.data.id, tasks);
        // const newTask = [...tasks, result.data];
        // project.tasks = newTask;
        // setState((prev) => ({ ...prev, [result.data.project_id]: project }));
      })
      .then((responce) => {
        console.log("response after get------", responce);
        let project = cloneDeep(projects[responce.data[0].project_id]);
        console.log("project before", project);
        let tasks = project.tasks;
        tasks = deleteTask(responce.data[0].id, tasks);
        const newTask = [...tasks, responce.data[0]];
        project.tasks = newTask;
        setState((prev) => ({
          ...prev,
          [responce.data[0].project_id]: project,
        }));
      });
  };

  return (
    <Dialog
      classes={{
        paper: classes.radius,
      }}
      fullWidth
      onClose={closePopup}
      open={openPopup}
    >
      <Grid container>
        <Grid container className={classes.divide}>
          <Grid />
          <CloseIcon
            onClick={closePopup}
            className={classes.closeIcon}
          ></CloseIcon>
        </Grid>
      </Grid>
      {/*-----------------------------Start of Form--------------------------------------- */}
      <form onSubmit={(e) => handleSubmit(e, task.id, task.project_id)}>
        <DialogTitle>
          <FormGroup>
            <FormLabel>Title</FormLabel>
            <TextField
              multiline
              fullWidth
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
          </FormGroup>
        </DialogTitle>

        <DialogContent dividers>
          {/*-----------------------------Enter Description Component---------------------------------------- */}
          <FormGroup>
            <FormLabel>Enter Description</FormLabel>
            <TextField
              className={classes.field}
              multiline
              variant="filled"
              fullWidth
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            />
          </FormGroup>
          {/*-----------------------------Select Users Component---------------------------------------- */}
          <br />

          <div className={classes.root}>
            <Autocomplete
              onChange={(e, value) => setSelectedUsers(value)}
              limitTags={1}
              required
              id="multiple-limit-tags"
              value={() => selectedUsers}
              options={projectUsers?.users}
              getOptionLabel={(option) => option.user_name}
              renderOption={(user) => (
                <div className={classes.members}>
                  <Avatar
                    className={classes.avatar}
                    alt={user.user_name}
                    src={user.avatar}
                  />
                  <p>
                    {user.user_name}
                    <br />
                    {user.email}
                  </p>
                </div>
              )}
              renderInput={(params) => (
                <TextField
                  {...params}
                  variant="outlined"
                  label="Assign Team Member"
                  placeholder="Add members"
                  color="secondary"
                />
              )}
            />
          </div>

          {/* --------------------------------Status Component-------------------------------------------------- */}
          <br />
          <div className={classes.divide}>
            <FormGroup>
              <FormControl>
                <FormLabel>Project Status</FormLabel>
                <RadioGroup
                  value={status}
                  onChange={(e) => {
                    setStatus(e.target.value);
                  }}
                >
                  <FormControlLabel
                    value="In Progress"
                    control={<Radio />}
                    label="In Progress"
                  />
                  <FormControlLabel
                    value="Backlog"
                    control={<Radio />}
                    label="Backlog"
                  />
                  <FormControlLabel
                    value="On Hold"
                    control={<Radio />}
                    label="On Hold"
                  />
                  <FormControlLabel
                    value="Completed"
                    control={<Radio />}
                    label="Completed"
                  />
                </RadioGroup>
              </FormControl>
            </FormGroup>

            <div>
              {/* ----------------------------------Date Range Component----------------------------------------- */}

              <FormGroup>
                <FormLabel>Select Start Date</FormLabel>
                <div className={classes.container} noValidate>
                  <TextField
                    id="date"
                    type="date"
                    value={startDate}
                    className={classes.textField}
                    onChange={(e) => setStartDate(e.target.value)}
                  />
                </div>
              </FormGroup>
              <FormGroup>
                <FormLabel>Select End Date</FormLabel>
                <div className={classes.container} noValidate>
                  <TextField
                    id="date"
                    type="date"
                    value={endDate}
                    className={classes.textField}
                    onChange={(e) => setEndDate(e.target.value)}
                  />
                </div>
              </FormGroup>

              {/* --------------------------------Priority Component------------------------------------------------- */}
              <br />
              <FormGroup>
                <FormLabel>Priority</FormLabel>
                <Select
                  className={classes.select}
                  value={priority}
                  onChange={(e) => {
                    setPriority(e.target.value);
                  }}
                >
                  <MenuItem value="1">High</MenuItem>
                  <MenuItem value="2">Medium</MenuItem>
                  <MenuItem value="3">Low</MenuItem>
                </Select>
              </FormGroup>
            </div>
          </div>
          {/* ---------------------------------Save Button -------------------------------------- */}
          <Grid group className={classes.divide}>
            <Grid />
            <Grid>
              <Button
                className={classes.button}
                type="submit"
                color="secondary"
                variant="contained"
                endIcon={<KeyboardArrowRightIcon />}
                onClick={closePopup}
              >
                Save
              </Button>
            </Grid>
          </Grid>
        </DialogContent>
      </form>
    </Dialog>
  );
}

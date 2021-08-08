import { useState, useContext } from "react";
import ProjectContext from "../../context/ProjectContext";
import axios from "axios";
import cloneDeep from "lodash/cloneDeep";
import { deleteTask } from "../../hooks/helpers";

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
  Grid
} from "@material-ui/core";
import useStyles from "./Styles";
import CloseIcon from "@material-ui/icons/Close";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
export default function Form(props) {
  // const { state, setState } = useApplicationData();

  const classes = useStyles();
  const { openPopup, task, closePopup } = props;
  const { projects, setState } = useContext(ProjectContext);
  const [title, setTitle] = useState(task.name);
  // const [avatar, setAvatar] = useState("");
  const [priority, setPriority] = useState(task.priority);
  const [status, setStatus] = useState(task.status);
  const [description, setDescription] = useState(task.description || "");
  const [startDate, setStartDate] = useState(
    new Date(task.start).toISOString().split("T")[0]
  );
  const [endDate, setEndDate] = useState(
    new Date(task.end).toISOString().split("T")[0]
  );

  // console.log("state here", state);
  // description: null
  // end: "2021-08-08T07:00:00.000Z"
  // id: 11
  // name: "create routes for back end"
  // priority: "1"
  // project_id: 1
  // start: "2021-08-04T07:00:00.000Z"
  // status: "Completed"
  // user_id: 1
  console.log(task);
  const handleSubmit = (e, taskId, projectId) => {
    e.preventDefault();
    console.log(projectId);
    console.log(taskId);
    console.log(title);
    console.log(description);
    console.log(status);
    console.log(startDate);
    console.log(endDate);
    console.log(priority);

    const editTask = {
      name: title,
      description: description,
      status: status,
      start: startDate.split("T")[0],
      end: endDate.split("T")[0],
      priority: priority,
    };

    if (startDate > endDate)
      //   alert("Start date cannot be greater than end date");
      // } else if (endDate < startDate) {
      // alert("End date cannot be less than start date") else {
      axios
        .put(`/api/projects/${projectId}/tasks/${taskId}`, editTask)
        .then((result) => {
          console.log("result in edit", result.data);
          let project = cloneDeep(projects[result.data.project_id]);
          let tasks = project.tasks;
          tasks = deleteTask(result.data.id, tasks);
          const newTask = [...tasks, result.data];
          project.tasks = newTask;
          setState((prev) => ({ ...prev, [result.data.project_id]: project }));
          // axios.get(`/api/task`).then((result) => {
          //   console.log(result.data);
          // setState({
          //   ...state,
          //   tasks: result.data,
        });
    // handleClose();
    // });
    //     })
    //     .catch((err) => console.log(err.message));
  };

  // console.log(setEndDate);
  return (
    <Dialog fullWidth onClose={closePopup} open={openPopup}>
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
              className={classes.field}
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
          <FormGroup>
            <FormLabel>Assign Member</FormLabel>
            <Select fullWidth>
              <MenuItem value="1">UserSelector</MenuItem>
              {/* <UserSelector></UserSelector> */}
            </Select>
          </FormGroup>

          {/* <div className={classes.root}>
          <Autocomplete
            onChange={(event, value) => getUserIds(value)}
            multiple
            limitTags={2}
            id="multiple-limit-tags"
            options={users}
            defaultValue={getDefaultUsers(userId, users)}
            getOptionLabel={(user) => user.user_name}
            renderOption={(user) => (
              <div className={classes.members}>
                <Avatar
                  className={classes.avatar}
                  alt={user.name}
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
                label="Team members"
                placeholder="Add members"
                color="secondary"
              />
            )}
          />
        </div> */}
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
          <Grid Group container className={classes.divide}>
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

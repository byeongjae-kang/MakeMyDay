import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import {
  Button,
  Container,
  Dialog,
  DialogContent,
  DialogTitle,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
  Typography
} from "@material-ui/core";

import AddIcon from "@material-ui/icons/Add";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";

import axios from "axios";
import DatePickers from "../datePicker/DatePicker";
import UserSelector from "../userSelector/UserSelector";
import { useStyles } from "./CreateProjectStyle";

export default function CreateProject({ users, state, setState }) {
  const classes = useStyles();
  const history = useHistory();
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [titleError, setTitleError] = useState(false);
  const [description, setdescription] = useState("");
  const [descriptionError, setdescriptionError] = useState(false);
  const [status, setStatus] = useState("In progress");
  const [userId, setuserId] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split("T")[0]);

  const getUserIds = (selectedusers) => {
    const arrUserIds = selectedusers.map((user) => user.id);
    setuserId(arrUserIds);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTitleError(false);
    setdescriptionError(false);

    if (title === "") {
      setTitleError(true);
    }
    if (description === "") {
      setdescriptionError(true);
    }

    const copiedState = { ...state };
    const copiedProjects = copiedState.projects;
    const newProject = {
      name: title,
      description: description,
      status: status,
      users: userId,
      start_date: new Date().toISOString().split("T")[0],
      due_Date: selectedDate
    }
    copiedProjects.push(newProject)

    if (title && description) {
      return axios
        .post(`/api/projects`, newProject)
        .then(() => {
          axios.get(`/api/projects`)
            .then(result => {
              setState({
                ...state,
                projects: result.data
              });
              history.push("/projects");
              console.log(state);
            })
        })
        .catch((err) => console.log(err.message));
    }
  };

  return (
    <div>
      <Button variant="outlined" color="secondary" onClick={handleClickOpen}>
        <AddIcon />
        CREATE NEW PROJECTS
      </Button>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          <Typography
            variant="h6"
            color="textSecondary"
            component="h2"
            gutterBottom
          >
            Create a New Project
          </Typography>
        </DialogTitle>
        <DialogContent dividers>
          <Container size="sm">
            <form noValidate autoComplete="off" onSubmit={handleSubmit}>
              <TextField
                className={classes.field}
                onChange={(e) => setTitle(e.target.value)}
                label="Project Title"
                variant="outlined"
                color="secondary"
                fullWidth
                required
                error={titleError}
              />
              <TextField
                className={classes.field}
                onChange={(e) => setdescription(e.target.value)}
                label="description"
                variant="outlined"
                color="secondary"
                multiline
                rows={4}
                fullWidth
                required
                error={descriptionError}
              />

              <UserSelector users={users} getUserIds={getUserIds} />

              <div className={classes.divide}>
                <FormControl className={classes.field}>
                  <FormLabel>Project Status</FormLabel>
                  <RadioGroup
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                  >
                    <FormControlLabel
                      value="In progress"
                      control={<Radio />}
                      label="In progress"
                    />
                    <FormControlLabel
                      value="Completed"
                      control={<Radio />}
                      label="Completed"
                    />
                    <FormControlLabel
                      value="On hold"
                      control={<Radio />}
                      label="On hold"
                    />
                    <FormControlLabel
                      value="Cancelled"
                      control={<Radio />}
                      label="Cancelled"
                    />
                  </RadioGroup>
                </FormControl>

                <DatePickers
                  selectedDate={selectedDate}
                  handleDateChange={handleDateChange}
                />
              </div>
              <Button
                type="submit"
                color="secondary"
                variant="contained"
                endIcon={<KeyboardArrowRightIcon />}
                onClick={handleClose}
              >
                Save
              </Button>
            </form>
          </Container>
        </DialogContent>
      </Dialog>
    </div>
  );
}

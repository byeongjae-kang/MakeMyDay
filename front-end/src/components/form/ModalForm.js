import { useState } from "react";
import {
  Button,
  Container,
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
  Typography,
  Grid,
  Paper,
  Card,
} from "@material-ui/core";
import useStyles from "./Styles";
import CloseIcon from "@material-ui/icons/Close";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
export default function Form(props) {
  const classes = useStyles();
  const { openPopup, closePopup, task } = props;
  const [title, setTitle] = useState(task.name);
  const [avatar, setAvatar] = useState("");
  const [priority, setPriority] = useState(task.priority);
  const [status, setStatus] = useState(task.status);
  const [description, setDescription] = useState(task.description || "");
  const [startDate, setStartDate] = useState(
    new Date(task.start).toISOString().split("T")[0]
  );
  const [endDate, setEndDate] = useState(
    new Date(task.end).toISOString().split("T")[0]
  );

  console.log(setEndDate);
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
              <form className={classes.container} noValidate>
                <TextField
                  id="date"
                  type="date"
                  value={startDate}
                  className={classes.textField}
                  onChange={(e) => setStartDate(e.target.value)}
                />
              </form>
            </FormGroup>
            <FormGroup>
              <FormLabel>Select End Date</FormLabel>
              <form className={classes.container} noValidate>
                <TextField
                  id="date"
                  type="date"
                  value={endDate}
                  className={classes.textField}
                  onChange={(e) => setEndDate(e.target.value)}
                />
              </form>
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
    </Dialog>
  );
}

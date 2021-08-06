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
  Radio,
  RadioGroup,
  TextField,
  Typography,
  Grid,
  Paper,
} from "@material-ui/core";
import useStyles from "./Styles";
import Avatar from "@material-ui/core/Avatar";
import CloseIcon from "@material-ui/icons/Close";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import Select from "@material-ui/core/Select";
import DatePickers from "components/projects/datePicker/DatePicker";
import "./Calendar.css";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import UserSelector from "components/projects/userSelector/UserSelector";
// import useApplicationData from "../../hooks/useApplicationData";
// import UserSelector from "components/projects/userSelector/UserSelector";
export default function Form(props) {
  const { openPopup, closePopup, task } = props;
  const [title, setTitle] = useState(task.name);
  const [avatar, setAvatar] = useState("");
  const [priority, setPriority] = useState(task.priority);
  const [status, setStatus] = useState(task.status);
  const [description, setDescription] = useState("");

  const classes = useStyles();

  // console.log(props);

  return (
    <Dialog onClose={closePopup} open={openPopup}>
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
        <FormLabel>Title</FormLabel>
        <TextField
          className={classes.field}
          multiline
          variant="outlined"
          fullWidth
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          onKeyDown={(e) => {
            e.preventDefault();
            if (e.charCode == 13) {
              console.log(e.target.value);
            }
          }}
        />
      </DialogTitle>
      {/* ---------------------------------------------------------------------------------- */}

      <DialogContent dividers>
        <br />
        {/*-----------------------------Select Users Component---------------------------------------- */}
        <FormLabel>Select Members</FormLabel>
        <Select fullWidth className={classes.select}>
          <MenuItem value="1">UserSelector</MenuItem>
          {/* <UserSelector></UserSelector> */}
        </Select>

        {/* --------------------------------Status Component-------------------------------------------------- */}
        <div className={classes.divide}>
          <FormControl>
            <br />
            <br />
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

          {/* --------------------------------Priority Component------------------------------------------------- */}
          <div>
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
            {/* ----------------------------------Start Date Component----------------------------------------- */}
            <FormLabel>Select Start Date</FormLabel>

            <DatePickers
            // selectedDate={selectedDate}
            // handleDateChange={handleDateChange}
            />
            {/* ----------------------------------End Date Component----------------------------------------- */}
            <FormLabel>Select End Date</FormLabel>
            <DatePickers
            // selectedDate={selectedDate}
            // handleDateChange={handleDateChange}
            />
          </div>
        </div>

        {/* ---------------------------------Save Button -------------------------------------- */}
        <Grid container className={classes.divide}>
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

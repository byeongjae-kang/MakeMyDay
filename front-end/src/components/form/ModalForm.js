import { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Divider,
} from "@material-ui/core/";
import {
  Grid,
  Button,
  TextField,
  Typography,
  Container,
  Box,
  // ButtonGroup,
  // Button,
  // Card,
  // Paper,
} from "@material-ui/core";
import useStyles from "./Styles";
import Avatar from "@material-ui/core/Avatar";
import CloseIcon from "@material-ui/icons/Close";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Menu from "@material-ui/core/Menu";
import Select from "@material-ui/core/Select";
import { DateRangePickerComponent } from "@syncfusion/ej2-react-calendars";
import "./Calendar.css";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import AutoComplete from "./AutoComplete";
// import useApplicationData from "../../hooks/useApplicationData";
// import UserSelector from "components/projects/userSelector/UserSelector";
export default function Form(props) {
  const {
    openPopup,
    setOpenPopup,
    closePopup,
    users,
    getUserIds,
    task,
    key,
    updateTask,
  } = props;
  const [title, setTitle] = useState(task.name);
  const [avatar, setAvatar] = useState("");
  const [priority, setPriority] = useState("");
  const [description, setDescription] = useState("");

  const classes = useStyles();

  const handleChange = (e) => {
    setDescription(e.target.value);
  };

  return (
    <Dialog onClose={closePopup} open={openPopup}>
      <Grid container className={classes.alignRight}>
        <Grid container className={classes.divide}>
          <Grid />
          <CloseIcon
            onClick={closePopup}
            className={classes.closeIcon}
          ></CloseIcon>
        </Grid>
      </Grid>
      <DialogTitle>
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

      <DialogContent dividers className={classes.dialogSize}>
        <Grid container className={classes.divide}>
          <Grid />
          <Grid className={classes.selectContainer}>
            <Typography>Select Members</Typography>
            <Select className={classes.select}>
              <MenuItem value="In Progress">In Progress</MenuItem>
            </Select>
          </Grid>
        </Grid>
        <Grid className={classes.selectContainer}>
          <Typography>Select Date Range</Typography>
          <DateRangePickerComponent
            placeholder="Enter Date Range"
            format="MMM dd yyyy"
          ></DateRangePickerComponent>
          <Grid container className={classes.divide}>
            <Grid className={classes.selectContainer}>
              <Typography>Priority</Typography>
              <Select className={classes.select}>
                <MenuItem value="High">High</MenuItem>
                <MenuItem value="Medium">Medium</MenuItem>
                <MenuItem value="Low">Low</MenuItem>
              </Select>
            </Grid>
            <Grid className={classes.selectContainer}>
              <Typography>Status</Typography>
              <Select className={classes.select}>
                <MenuItem value="In Progress">In Progress</MenuItem>
                <MenuItem value="Backlog">Backlog</MenuItem>
                <MenuItem value="Completed">Completed</MenuItem>
                <MenuItem value="On Hold">On Hold</MenuItem>
              </Select>
            </Grid>
          </Grid>
          <Grid container className={classes.divide}>
            <Grid />
            <Grid className={classes.alignRight}>
              <Button
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
        </Grid>
      </DialogContent>
    </Dialog>
  );
}

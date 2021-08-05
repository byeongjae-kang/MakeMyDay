import { useState } from "react";
import { Dialog, DialogTitle, DialogContent } from "@material-ui/core/";
import {
  Grid,
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
import Select from "@material-ui/core/Select";
import { DateRangePickerComponent } from "@syncfusion/ej2-react-calendars";
import "./Calendar.css";
import axios from "axios";
import useApplicationData from "../../hooks/useApplicationData";

export default function Form(props) {
  const { openPopup, setOpenPopup, closePopup } = props;
  const [title, setTitle] = useState("");
  const [avatar, setAvatar] = useState("");
  const [priority, setPriority] = useState("");
  const [description, setDescription] = useState("");

  const classes = useStyles();

  const handleChange = (e) => {
    setDescription(e.target.value);
  };

  console.log(props);

  return (
    <Dialog onClose={closePopup} open={openPopup}>
      <button onClick={closePopup} className={classes.closeIcon}></button>
      <Container className={classes.modalForm}>
        <DialogTitle></DialogTitle>
        <DialogContent></DialogContent>

        <br />
        <br />
        <TextField
          multiline
          variant="outlined"
          fullWidth
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              console.log(e.target.value);
            }
          }}
        />
        <Typography>Select Date Range</Typography>
        <DateRangePickerComponent
          placeholder="Enter Date Range"
          format="MMM dd yyyy"
        ></DateRangePickerComponent>
        <Typography>Priority</Typography>
        <FormControl className={classes.formControl}>
          <Select>
            <MenuItem value="High">High</MenuItem>
            <MenuItem value="Medium">Medium</MenuItem>
            <MenuItem value="Low">Low</MenuItem>
          </Select>
        </FormControl>
        <Typography>Status</Typography>
        <FormControl className={classes.formControl}>
          <Select>
            <MenuItem value="In Progress">In Progress</MenuItem>
            <MenuItem value="Backlog">Backlog</MenuItem>
            <MenuItem value="Completed">Completed</MenuItem>
            <MenuItem value="On Hold">On Hold</MenuItem>
          </Select>
        </FormControl>
        <Grid container className={classes.titleArea}>
          <Typography>members</Typography>
          <Grid item className={classes.textArea}>
            <div className={classes.root}>
              <Avatar className={classes.orange}>B</Avatar>
              <Avatar className={classes.orange} />
              <Avatar src="/broken-image.jpg" />
            </div>
          </Grid>
          <Typography variant="h4">Comments</Typography>
          {props.children}
          <Box justifyContent="flex-end" className={classes.commentContainer}>
            <Avatar>B</Avatar>
            <Typography>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </Typography>
          </Box>
          <Grid className={classes.commentArea}>
            {/* Description */}
            <Avatar className={classes.purple}>OP</Avatar>
            <TextField
              placeholder="Add Comments..."
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
              variant="outlined"
              fullWidth
            />
          </Grid>
        </Grid>
      </Container>
    </Dialog>
  );
}

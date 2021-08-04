import { useState } from "react";
import {
  Grid,
  Paper,
  TextField,
  Button,
  Typography,
  Container,
  ButtonGroup,
  Card,
  Box,
} from "@material-ui/core";
import SaveIcon from "@material-ui/icons/Save";
import DeleteIcon from "@material-ui/icons/Delete";
import useStyles from "./Styles";
import CloseIcon from "@material-ui/icons/Close";
import Avatar from "@material-ui/core/Avatar";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { DateRangePickerComponent } from "@syncfusion/ej2-react-calendars";
import "./Calendar.css";

export default function Form(props) {
  const [description, setDescription] = useState("");
  const classes = useStyles();

  return (
    <div>
      <Container className={classes.modalForm}>
        <TextField
          placeholder="Title goes here!"
          multiline
          variant="outlined"
          fullWidth
        />
        <br />
        <br />
        <CloseIcon className={classes.closeIcon}></CloseIcon>
        <br />
        <br />
        <Typography>Select Date Range</Typography>
        <DateRangePickerComponent
          placeholder="Enter Date Range"
          format="MMM dd yyyy"
        ></DateRangePickerComponent>
        <Typography>Priority</Typography>
        <FormControl className={classes.formControl}>
          <Select>
            <MenuItem value={3}>High</MenuItem>
            <MenuItem value={2}>Medium</MenuItem>
            <MenuItem value={1}>Low</MenuItem>
          </Select>
        </FormControl>
        <Typography>Status</Typography>
        <FormControl className={classes.formControl}>
          <Select>
            <MenuItem value={10}>In Progress</MenuItem>
            <MenuItem value={20}>Backlog</MenuItem>
            <MenuItem value={30}>On Hold</MenuItem>
            <MenuItem value={30}>Completed</MenuItem>
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
              variant="outlined"
              fullWidth
            />
          </Grid>
        </Grid>
        {/* <ButtonGroup className={classes.buttons}>
          <Grid item>
            <Button
              color="primary"
              variant="contained"
              type="submit"
              startIcon={<SaveIcon />}
            >
              Save
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="outlined"
              type="submit"
              color="primary"
              startIcon={<DeleteIcon />}
            >
              Cancel
            </Button>
          </Grid>
        </ButtonGroup> */}
      </Container>
    </div>
  );
}

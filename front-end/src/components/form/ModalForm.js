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

export default function Form(props) {
  const [description, setDescription] = useState("");
  const classes = useStyles();
  return (
    <div>
      <Container className={classes.modalForm}>
        <Typography>Priority</Typography>
        <FormControl className={classes.formControl}>
          <Select>
            <MenuItem value={10}>Low</MenuItem>
            <MenuItem value={20}>Medium</MenuItem>
            <MenuItem value={30}>High</MenuItem>
          </Select>
        </FormControl>
        <Typography>Status</Typography>
        <FormControl className={classes.formControl}>
          <Select>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
        <Grid container className={classes.titleArea}>
          <CloseIcon className={classes.closeIcon}></CloseIcon>
          <Grid item className={classes.textArea}>
            {/* title */}
            <div className={classes.root}>
              <Avatar
                alt="Remy Sharp"
                src="/broken-image.jpg"
                className={classes.orange}
              >
                B
              </Avatar>
              <Avatar
                alt="Remy Sharp"
                src="/broken-image.jpg"
                className={classes.orange}
              />
              <Avatar src="/broken-image.jpg" />
            </div>
            <TextField
              placeholder="Add Comments..."
              multiline
              variant="outlined"
            />
          </Grid>
          <Typography>members</Typography>

          <Typography variant="h4">Comments</Typography>
          <Box justifyContent="flex-end" className={classes.commentContainer}>
            <Avatar
              alt="Remy Sharp"
              src="/broken-image.jpg"
              className={classes.orange}
            >
              B
            </Avatar>{" "}
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
            <Avatar
              alt="Remy Sharp"
              src="/broken-image.jpg"
              className={classes.orange}
            >
              B
            </Avatar>
            <TextField placeholder="Add Comments..." variant="outlined" />
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

import { useState } from "react";
import {
  Card,
  FormHelperText,
  Paper,
  Typography,
  Grid,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { Draggable } from "react-beautiful-dnd";
import ModalContainer from "../form/ModalContainer";
import ModalForm from "../form/ModalForm";
import Button from "@material-ui/core/Button";
const useStyle = makeStyles((theme) => ({
  task: {
    padding: theme.spacing(1, 1, 1, 2),
    margin: theme.spacing(1),
    display: "flex",
    flexDirection: "columns",
    justifyContent: "space-between",

    background: "#fff",
    "&:hover": {
      backgroundColor: "lightblue",
    },
  },
  rightModal: {
    display: "flex",
    alignItems: "center",
  },
}));

const PriorityIcon = (props) => {
  if (props.priority === "1") {
    return <div>1</div>;
  } else if (props.priority === "2") {
    return <div>2</div>;
  } else {
    return <div>3</div>;
  }
};

export default function Task({ task, index }) {
  const classes = useStyle();
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <Draggable draggableId={task.id.toString()} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.dragHandleProps}
          {...provided.draggableProps}
        >
          <Paper
            className={classes.task}
            onClick={() => handleOpen()}
            style={{ cursor: "pointer" }}
          >
            <Typography>{task.name}</Typography>
            <Grid className={classes.rightModal}>
              <ModalContainer
                isDialogOpened={isOpen}
                handleCloseDialog={() => setIsOpen(false)}
              >
                <ModalForm />
              </ModalContainer>
              <PriorityIcon priority={task.priority} />
            </Grid>
          </Paper>
        </div>
      )}
    </Draggable>
  );
}

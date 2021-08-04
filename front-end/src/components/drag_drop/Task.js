import { useState } from "react";
import { Card, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Draggable } from "react-beautiful-dnd";
import ModalContainer from "../form/ModalContainer";
import ModalForm from "../form/ModalForm";
import Button from "@material-ui/core/Button";
const useStyle = makeStyles((theme) => ({
  task: {
    padding: theme.spacing(1, 1, 1, 2),
    margin: theme.spacing(1),

    background: "#fff",
    "&:hover": {
      backgroundColor: "lightblue",
    },
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
  // console.log("task----", task)
  return (
    <Draggable draggableId={task.id.toString()} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.dragHandleProps}
          {...provided.draggableProps}
        >
          <Paper className={classes.task}>
            <ModalContainer>
              <ModalForm />
            </ModalContainer>
            <Typography>{task.name}</Typography>
            <PriorityIcon priority={task.priority} />
          </Paper>
        </div>
      )}
    </Draggable>
  );
}

import React, { useState } from "react";
import { InputBase, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import useApplicationData from "../../hooks/useApplicationData";
const useStyle = makeStyles((theme) => ({
  task_input: {
    padding: theme.spacing(1, 1, 1, 2),
    margin: theme.spacing(1),
  },
}));

export default function TaskInput(props) {
  // const { state, createTasks } = useApplicationData()
  // console.log("before       ", state)
  let name;
  const classes = useStyle();
  function handleKeyPress(target) {
    if (target.charCode == 13) {
      console.log("name", name);
      props.onSubmit(name);
      props.setOpen(false);
    }
  }

  return (
    <Paper className={classes.task_input}>
      <InputBase
        multiline
        fullWidth
        placeholder="Enter title for the task"
        value={name}
        onChange={(event) => (name = event.target.value)}
        onKeyPress={handleKeyPress}
      />
    </Paper>
  );
}

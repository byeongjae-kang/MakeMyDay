import React, { useState } from "react";
import { Collapse, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import TaskInput from "./TaskInput";

const useStyle = makeStyles((theme) => ({
  top: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  new_task: {
    padding: theme.spacing(1, 1, 1, 2),
    margin: theme.spacing(1),
    color: "blue",
    "&:hover": {
      backgroundColor: "lightblue",
    },
  },
}));

export default function NewTask(props) {
  const classes = useStyle();
  const [open, setOpen] = useState(false);
  return (
    <div className={classes.top}>
      <Collapse in={open}>
        <TaskInput setOpen={setOpen} />
      </Collapse>
      <Collapse in={!open}>
        <Paper
          className={classes.new_task}
          elevation={0}
          onClick={() => setOpen(!open)}
        >
          <Typography>+ New task</Typography>
        </Paper>
      </Collapse>
    </div>
  );
}

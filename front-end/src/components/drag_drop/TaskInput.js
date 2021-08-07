import React, {useContext} from "react";
import { InputBase, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ProjectContext from "../../context/ProjectContext";
import { useParams } from "react-router";

const useStyle = makeStyles((theme) => ({
  task_input: {
    padding: theme.spacing(1, 1, 1, 2),
    margin: theme.spacing(1),
  },
}));

export default function TaskInput(props) {
  const { createTask } = useContext(ProjectContext)
  const projectId = useParams().id
  let name;
  const classes = useStyle();
  function handleKeyPress(e) {
    if (e.charCode == 13) {
      e.preventDefault();
      createTask(name, projectId);
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

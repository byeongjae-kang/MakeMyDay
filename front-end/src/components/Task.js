import React from 'react';
import { Paper, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { Draggable } from 'react-beautiful-dnd';
const useStyle = makeStyles((theme) => ({
  task: {
    padding: theme.spacing(1, 1, 1, 2),
    margin: theme.spacing(1),

    background: "#fff",
    "&:hover": {
      backgroundColor: ('lightblue')
    }
  }
}));

export default function Task({ task, index }) {
  const classes = useStyle();

  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef} {...provided.dragHandleProps} {...provided.draggableProps} 
        >
          <Paper className={classes.task}>
            <Typography>
              {task.name}
            </Typography>
          </Paper>
        </div>
      )}
    </Draggable>

  )
}
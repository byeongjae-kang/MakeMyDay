import React, { useState } from "react";
import { Paper, CssBaseline } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Task from "./Task";
import ListTitle from "./ListTitle";
import NewTask from "./NewTask";
import TaskInput from "./TaskInput";
import { Droppable } from "react-beautiful-dnd";

const useStyle = makeStyles((theme) => ({
  list: {
    width: "300px",
    backgroundColor: "#EDECF0",
    marginLeft: theme.spacing(1),
    padding: theme.spacing(0.1),
  },
}));

export default function List({
  list,
  title,
  onSubmit,
  deleteTask,
  updateTask,
}) {
  const classes = useStyle();
  const sortedTasks = list.tasks.sort((a, b) => {
    return a.priority - b.priority;
  });

  return (
    <Paper className={classes.list}>
      <CssBaseline />
      <ListTitle title={title} length={list.tasks.length} />
      {title === "In Progress" ? <NewTask onSubmit={onSubmit} /> : null}
      <Droppable droppableId={list.id.toString()}>
        {(provided) => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            {sortedTasks.map((task, index) => (
              <Task
                task={task}
                key={task.id}
                index={index}
                deleteTask={deleteTask}
                updateTask={updateTask}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </Paper>
  );
}

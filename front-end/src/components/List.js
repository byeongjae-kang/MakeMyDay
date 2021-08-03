import React, { useState } from 'react';
import { Paper, CssBaseline } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Task from './Task';
import ListTitle from './ListTitle';
import NewTask from './NewTask';
import TaskInput from './TaskInput';
import { lists, updateLists } from '../utils/fakeData'
import { Droppable } from 'react-beautiful-dnd';

const useStyle = makeStyles((theme) => ({
  list: {
    width: '300px',
    backgroundColor: '#EDECF0',
    marginLeft: theme.spacing(1),
    padding: theme.spacing(0.1)
  }
}));

export default function List({ list, title, index }) {
  const classes = useStyle();
  return (
    <Paper className={classes.list}>
      <CssBaseline />
      <ListTitle title={title} />
      {title === "In Progress" ? <NewTask /> : null}
      <Droppable droppableId={list.id}>
        {(provided) => (
          <div
          ref={provided.innerRef} {...provided.droppableProps}>
            {list.tasks.map((task, index) =>
          (<Task task={task} key={task.id} index={index}/>
            ))}
        {provided.placeholder} 
          </div>
        )}
        
      </Droppable>

    </Paper>
  )
}

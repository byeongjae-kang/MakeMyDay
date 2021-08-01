import React, { useState } from 'react';
import { lists, updateLists } from '../utils/fakeData'
import List from './List';
import { flexbox } from '@material-ui/system';
import { Box } from '@material-ui/core';
import { DragDropContext } from 'react-beautiful-dnd'

export default function TasksBody() {
  const [data, updateData] = useState(updateLists(lists));

  const onDragEnd = (result) => {
    const {destination, source, draggableId} = result;
    console.log("destination", destination)
    console.log("source", source)
    console.log("draggableId", draggableId)  
    console.table("source", source)

       if(!destination) {
      return;
    }
    
    const sourceList = data.find((list) => { 
      return list.id === source.droppableId
    })
    const sourceTasks = sourceList.tasks.map(task => task.id)
    const destinationList = data.find((list) => { 
      return list.id === destination.droppableId
    })
    const destinationTasks = destinationList.tasks.map(task => task.id)
    const dragging
    if (source.droppableId === destination.droppableId) {
      sourceTasks.splice(source.index, 1);
      destinationTasks.splice(destination.index, 0, task)

    }
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div>
        <Box display="flex" flexDirection="row">
          {data.map((list) =>
            <List title={list.name} list={list} key={list.id} />
          )}
        </Box>
      </div>
    </DragDropContext>
  )
}

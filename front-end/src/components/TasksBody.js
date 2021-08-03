import React, { useState } from 'react';
import { lists, updateLists } from '../utils/fakeData'
import List from './List';
import { flexbox } from '@material-ui/system';
import { Box } from '@material-ui/core';
import { DragDropContext } from 'react-beautiful-dnd'


export default function TasksBody() {
  const [data, updateData] = useState(updateLists(lists));

  const onDragEnd = ({ destination, source, draggableId }) => {
    let newState = [...data]

    if (!destination) {
      return;
    }

    const sourceList = newState.filter((list) => {
      return list.id === source.droppableId
    })


    const sourceTasks = sourceList[0].tasks.map((task, index) => index)


    const taskToBeMoved = sourceList[0].tasks[source.index]

    sourceList[0].tasks.splice(source.index, 1);



    if (source.droppableId === destination.droppableId) {
      sourceList[0].tasks.splice(destination.index, 0, taskToBeMoved)
    } else {
      const destinationList = data.filter((list) => {
        return list.id === destination.droppableId
      })

      destinationList[0].tasks.splice(destination.index, 0, taskToBeMoved)
    }



  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div>
        <Box display="flex" flexDirection="row">
          {data.map((list, index) =>
            <List title={list.name} list={list} key={list.id} index={index} />
          )}
        </Box>
      </div>
    </DragDropContext>
  )
}

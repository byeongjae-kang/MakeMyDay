import React, { useState } from "react";
import List from "./List";
import { flexbox } from "@material-ui/system";
import { Box } from "@material-ui/core";
import { DragDropContext } from "react-beautiful-dnd";
import useApplicationData from "../../hooks/useApplicationData";
import axios from "axios";
import cloneDeep from "lodash/cloneDeep";

export default function TasksBody(props) {
  const {
    state,
    setState,
    updateDragDrop,
    createTasks,
    deleteTask,
    updateTask,
  } = useApplicationData();
  // console.log("state--------", state)
  const onDragEnd = ({ destination, source, draggableId }) => {
    let newState = cloneDeep(state.lists);

    if (!destination) {
      return;
    }

    const sourceList = state.lists.filter((list) => {
      return list.id === source.droppableId;
    });
    console.log("destination", destination);
    // const sourceTasks = sourceList[0].tasks.map((task, index) => index)

    const taskToBeMoved = sourceList[0].tasks[source.index];

    sourceList[0].tasks.splice(source.index, 1);
    // console.log('sourceList after---', sourceList[0])
    if (source.droppableId === destination.droppableId) {
      sourceList[0].tasks.splice(destination.index, 0, taskToBeMoved);

      updateDragDrop(destination.droppableId, draggableId);
    } else {
      const destinationList = newState.filter((list) => {
        return list.id === destination.droppableId;
      });
      destinationList[0].tasks.splice(destination.index, 0, taskToBeMoved);
      // console.log('state before---', state.lists[0].tasks)
      updateDragDrop(destination.droppableId, draggableId);
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div>
        <Box display="flex" flexDirection="row">
          {state.lists.map((list, index) => (
            <List
              title={list.name}
              list={list}
              key={list.id}
              index={index}
              onSubmit={createTasks}
              description={list.description}
              status={list.status}
              end={list.end}
              start={list.start}
              deleteTask={deleteTask}
              updateTask={updateTask}
            />
          ))}
        </Box>
      </div>
    </DragDropContext>
  );
}

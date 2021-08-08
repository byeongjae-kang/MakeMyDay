import React, { useState, useContext, useEffect } from "react";
import List from "./List";
import { flexbox } from "@material-ui/system";
import { Box } from "@material-ui/core";
import { DragDropContext } from "react-beautiful-dnd";
import { listForProject, HaveProjectWithUsers } from "hooks/helpers";
import cloneDeep from "lodash/cloneDeep";
import { useParams } from "react-router-dom";
import ProjectContext from "../../context/ProjectContext";
import axios from "axios";
export default function TasksBody(props) {
  // const [state, setState] = useState({
  //   users: [],
  //   projects: [],
  // });

  // useEffect(() => {
  //   Promise.all([axios.get("/api/users"), axios.get("api/projects")]).then(
  //     (all) => {
  //       setState({
  //         ...state,
  //         projects: all[1].data,
  //         users: all[0].data,
  //       });
  //     }
  //   );
  // }, []);

  const { projects, updateDragDrop } = useContext(ProjectContext);

  // console.log("state", state.users);

  const projectID = useParams().id;
  const projectList = listForProject(projects[projectID].tasks);

  const onDragEnd = ({ destination, source, draggableId }) => {
    if (!destination) {
      return;
    }

    const sourceList = projectList.filter((list) => {
      return list.id === source.droppableId;
    });

    const taskToBeMoved = sourceList[0].tasks[source.index];

    sourceList[0].tasks.splice(source.index, 1);

    if (source.droppableId === destination.droppableId) {
      sourceList[0].tasks.splice(destination.index, 0, taskToBeMoved);

      updateDragDrop(destination.droppableId, draggableId);
    } else {
      const destinationList = projectList.filter((list) => {
        return list.id === destination.droppableId;
      });
      destinationList[0].tasks.splice(destination.index, 0, taskToBeMoved);

      updateDragDrop(destination.droppableId, draggableId);
    }
  };

  // if (!state.users.length) {
  //   return null;
  // } else {
  //   let projectUsers = HaveProjectWithUsers(projects, users)[projectID];
  // }

  const lists = projectList.map((list, index) => (
    <List
      title={list.name}
      list={list}
      key={list.id}
      index={index}
      // projectUsers={projectUsers}
    />
  ));

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div>
        <Box display="flex" flexDirection="row">
          {lists}
        </Box>
      </div>
    </DragDropContext>
  );
}

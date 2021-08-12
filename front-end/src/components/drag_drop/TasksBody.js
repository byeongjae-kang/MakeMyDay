import React, { useContext } from "react";
import List from "./List";
import { Box } from "@material-ui/core";
import { DragDropContext } from "react-beautiful-dnd";

import { useParams } from "react-router-dom";
import ProjectContext from "../../context/ProjectContext";
import cloneDeep from "lodash/cloneDeep";



export default function TasksBody() {

  const listForUser = function (lists, id) {

    for (let list of lists) {
      let newTasks = list.tasks.filter(task => task.user_id === id)
      list.tasks = newTasks
    }
    return lists
  }

  function listForProject(tasks) {
    let listSchema = [
      {
        id: "1",
        name: "In Progress",
        tasks: [],
      },
      {
        id: "2",
        name: "Backlog",
        tasks: [],
      },
      {
        id: "3",
        name: "On Hold",
        tasks: [],
      },
      {
        id: "4",
        name: "Completed",
        tasks: [],
      },
    ];
  
    if (!tasks.length) {
      return listSchema
    }
  
    for (let list of listSchema) {
      for (let task of tasks) {
        let taskDetails = {};
        if (task.status === list.name) {
          taskDetails["id"] = task.id;
          taskDetails["name"] = task.name;
          taskDetails["priority"] = task.priority;
          taskDetails["status"] = task.status;
          taskDetails["start"] = task.start;
          taskDetails["end"] = task.end;
          taskDetails["user_id"] = task.user_id;
          taskDetails["avatar"] = task.avatar;
          taskDetails["user_name"] = task.user_name;
          taskDetails["description"] = task.description;
          taskDetails["project_id"] = task.project_id;
          list.tasks.push(taskDetails);
        }
      }
    }
    return listSchema;
  }
  

  const { projects, updateDragDrop, userId, filter } = useContext(ProjectContext);

  const projectID = useParams().id;
  const projectList = listForProject(projects[projectID].tasks);
  let listCopy = cloneDeep(projectList)
  const userLists = listForUser(listCopy, userId)

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

  const lists = projectList.map((list, index) => (
    <List
      title={list.name}
      list={list}
      key={list.id}
      index={index}
    />
  ));

  const userList = userLists.map((list, index) => (
    <List
      title={list.name}
      list={list}
      key={list.id}
      index={index}
    />
  ));

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div>
        <Box display="flex" flexDirection="row">

          {filter ? userList : lists}
        </Box>
      </div>
    </DragDropContext>
  );
}

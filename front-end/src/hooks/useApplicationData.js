import React, { useState, useEffect } from "react";
import axios from "axios";
import { lists } from "../utils/fakeData";
import cloneDeep from 'lodash/cloneDeep';
export default function useApplicationData() {
  const listSchema = [
    {
      id: "1",
      name: "In Progress",
      tasks: []
    },
    {
      id: "2",
      name: "Backlog",
      tasks: []
    },
    {
      id: "3",
      name: "On Hold",
      tasks: []
    },
    {
      id: "4",
      name: "Completed",
      tasks: []
    }
  ];

  const [state, setState] = useState({
    tasks: [],
    lists: listSchema
  });

  function tasksFilter(tasks, listTitle) {
    let tasksForList = [];
    for (let task of tasks) {
      let taskDetails = {};
      if (task.status === listTitle) {
        taskDetails['id'] = task.id;
        taskDetails['name'] = task.name;
        taskDetails['priority'] = task.priority;
        tasksForList.push(taskDetails);
      }
    }
    return tasksForList
  };


  function updateLists(lists, tasks) {
    console.log("lists outside loop", lists)
    for (let list of lists) {
      
      list.tasks = [...tasksFilter(tasks, list.name)]
    }
    console.log("lists after loop", lists)
    return [lists, tasks]
  };

  useEffect(() => {
    axios.get("http://localhost:8080/api/tasks")
      .then((result) => {
      
        let [initialListState, tasks] = updateLists(listSchema, result.data)
     
        setState(prev => ({ ...prev, tasks: tasks, lists: initialListState }))
      })
      .catch(err => console.log(err))
  }, [])


  function updateDragDrop(destinationId, draggableId) {
    let id = parseInt(draggableId)
    let newStatus = listSchema[destinationId - 1].name

    axios.put(`http://localhost:8080/api/tasks/${id}`, { status: newStatus })
      .then(result => {
        console.log("result in drag and drop---", result)
        let [listState, tasks] = updateLists(state.lists, result.data)
        setState(prev => ({ ...prev, tasks: tasks, lists: listState }))
       
      })
  }

  function createTasks(name) {
    const stateCopy = cloneDeep(state)
   
    axios.post("http://localhost:8080/api/tasks", { name: name })
    .then(result => {
      console.log("result------", result)
      let [listState, tasks] = updateLists(state.lists, result.data)
     
      setState(prev => ({ ...prev, tasks: tasks, lists: listState }))

    }) 
    .catch(err => console.log(err))
  }
     
return { state, setState, updateDragDrop, createTasks }
}
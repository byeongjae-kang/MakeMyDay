import React, { useState, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProjectContext from "../../context/ProjectContext";
import axios from "axios";
import { reformatState, deleteTask } from "../../hooks/helpers";
import Gantt from "components/gantt/Gantt";
import TasksBody from "components/drag_drop/TasksBody";
import cloneDeep from "lodash/cloneDeep";

function ProjectView() {
  const [projects, setState] = useState({});

  const [view, setView] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/tasks")
      .then((result) => {
        setState((prev) => ({ ...prev, ...reformatState(result.data) }));
      })
      .catch((err) => console.log(err));
  }, []);

  const projectId = useParams().id;

  const updateTask = function (id, start_date, end_date, status, priority) {
    axios
      .put(`http://localhost:8080/api/tasks/${id}`, {
        status: status,
        start: start_date,
        end: end_date,
        priority: priority,
      })
      .then((result) => {
        let project = cloneDeep(projects[result.data[0].project_id]);
        let tasks = project.tasks;
        tasks = deleteTask(result.data[0].id, tasks);
        const newTask = [...tasks, result.data[0]];
        project.tasks = newTask;
        setState((prev) => ({ ...prev, [result.data[0].project_id]: project }));
      })
      .catch((err) => console.log(err));
  };

  const listSchema = [
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

  const updateDragDrop = function (destinationId, draggableId) {
    let id = parseInt(draggableId);
    let newStatus = listSchema[destinationId - 1].name;

    axios
      .put(`http://localhost:8080/api/tasks/${id}`, { status: newStatus })
      .then((result) => {
        console.log("result in drag and drop---", result);
        let project = cloneDeep(projects[result.data[0].project_id]);
        let tasks = project.tasks;
        tasks = deleteTask(result.data[0].id, tasks);
        const newTask = [...tasks, result.data[0]];
        project.tasks = newTask;
        setState((prev) => ({ ...prev, [result.data[0].project_id]: project }));
      });
  };

  const createTask = function (name, id) {
    axios
      .post("http://localhost:8080/api/tasks", { name: name, project_id: id })
      .then((result) => {
        console.log("result in createTask------", result);
        let project = cloneDeep(projects[result.data[0].project_id]);
        project.tasks.push(result.data[0]);
        setState((prev) => ({ ...prev, [result.data[0].project_id]: project }));
      })
      .catch((err) => console.log(err));
  };

  const deleteTasks = function (id) {
    axios.delete(`http://localhost:8080/api/tasks/${id}`).then((result) => {
      let project = cloneDeep(projects[result.data[0].project_id]);
      let newTask = deleteTask(result.data[0].id, project.tasks);
      project.tasks = newTask;
      setState((prev) => ({ ...prev, [result.data[0].project_id]: project }));
    });
  };

  if (!Object.keys(projects).length && !projects[projectId]) {
    return null;
  }

  function toggleView() {
    setView(!view);
  }

  const stateData = {
    projects,
    updateTask,
    updateDragDrop,
    createTask,
    deleteTasks,
  };

  return (
    <ProjectContext.Provider value={stateData}>
      <h2>{projects[projectId].name}</h2>
      <div>
        <h4>{view ? "Project View" : "Gantt View"}</h4>
        <button onClick={toggleView}>
          {view ? "Gantt View" : "Project View"}
        </button>
      </div>
      {view && <TasksBody />}
      {!view && <Gantt />}
    </ProjectContext.Provider>
  );
}

export default ProjectView;

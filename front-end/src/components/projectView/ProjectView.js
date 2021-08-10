import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProjectContext from "../../context/ProjectContext";
import { Button, Box, Typography } from "@material-ui/core";
import axios from "axios";
import {
  reformatState,
  deleteTask,
  HaveProjectWithUsers,
  findIndex,
} from "../../hooks/helpers";
import Gantt from "components/gantt/Gantt";
import TasksBody from "components/drag_drop/TasksBody";
import cloneDeep from "lodash/cloneDeep";
import EventAvailableIcon from "@material-ui/icons/EventAvailable";
import ListIcon from "@material-ui/icons/List";
function ProjectView() {
  const [projects, setState] = useState({});
  const [users, setUsers] = useState({});
  const [view, setView] = useState(true);

  useEffect(() => {
    Promise.all([
      axios.get("/api/users"),
      axios.get("/api/projects"),
      axios.get("/api/tasks"),
    ])
      .then((result) => {
        // console.log("result in useEfect", result);
        setState((prev) => ({
          ...prev,
          ...reformatState(result[2].data, result[1].data),
        }));
        setUsers((prev) => ({
          ...prev,
          ...HaveProjectWithUsers(result[1].data, result[0].data),
        }));
      })
      .catch((err) => console.log(err));
  }, []);

  const projectId = useParams().id;

  const updateTask = function (id, start_date, end_date) {
    axios
      .put(`http://localhost:8080/api/tasks/${id}`, {
        start: start_date,
        end: end_date,
      })
      .then((result) => {
        return axios.get(
          `http://localhost:8080/api/tasks/${result.data[0].id}`
        );
      })
      .then((response) => {
        let project = cloneDeep(projects[response.data[0].project_id]);
        let tasks = project.tasks;
        tasks = deleteTask(response.data[0].id, tasks);
        const newTask = [...tasks, response.data[0]];
        project.tasks = newTask;
        setState((prev) => ({
          ...prev,
          [response.data[0].project_id]: project,
        }));
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
        // console.log("result in drag and drop---", result);
        let project = cloneDeep(projects[result.data[0].project_id]);
        let tasks = project.tasks;
        let index = findIndex(result.data[0].id, tasks);
        project.tasks[index].status = result.data[0].status;
        setState((prev) => ({ ...prev, [result.data[0].project_id]: project }));
      });
  };

  const createTask = function (name, id) {
    axios
      .post("http://localhost:8080/api/tasks", { name: name, project_id: id })
      .then((result) => {
        console.log("result  after post req", result);
        return axios.get(
          `http://localhost:8080/api/tasks/${result.data[0].id}`
        );
      })
      .then((responce) => {
        console.log("response after get------", responce);
        let project = cloneDeep(projects[responce.data[0].project_id]);
        project.tasks.push(responce.data[0]);
        setState((prev) => ({
          ...prev,
          [responce.data[0].project_id]: project,
        }));
      })
      .catch((err) => console.log(err));
  };

  const deleteTasks = function (id) {
    axios.delete(`http://localhost:8080/api/tasks/${id}`).then((result) => {
      // console.log("result in delete", result)
      let project = cloneDeep(projects[result.data[0].project_id]);
      // console.log("project before", project)
      let newTask = deleteTask(result.data[0].id, project.tasks);
      // console.log("updated tasks", newTask)
      project.tasks = newTask;
      // console.log("project after", project)
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
    setState,
    updateTask,
    updateDragDrop,
    createTask,
    deleteTasks,
    users,
  };

  return (
    <ProjectContext.Provider value={stateData}>
      <Box display="flex" flexGrow={1}>
        <Typography style={{ marginTop: "5px" }} variant="body2">
          Project / {projects[projectId].name}
        </Typography>

        {/* <h4>{view ? "Project View" : "Gantt View"}</h4> */}
        <Box ml={1.5}>
          <Button
            size="small"
            type="submit"
            color={view ? "primary" : "secondary"}
            startIcon={view ? <EventAvailableIcon /> : <ListIcon />}
            variant="contained"
            onClick={toggleView}
          >
            {view ? "Kanban Board" : "Gantt Chart"}
          </Button>
        </Box>
      </Box>

      <br />
      {view && <TasksBody />}
      {!view && <Gantt />}
    </ProjectContext.Provider>
  );
}

export default ProjectView;

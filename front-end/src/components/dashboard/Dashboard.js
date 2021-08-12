import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "context/AuthContext";
import axios from "axios";

// import { getProjectsWithTasks, getProjectNames } from "../../hooks/helpers";
import { Box, Typography, makeStyles, Tooltip } from "@material-ui/core";

import DashbordProject from "./DashbordProject";

import { withStyles } from "@material-ui/core/styles";
// const options = ["Edit", "Delete"];
const LightTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: theme.palette.common.white,
    color: "rgba(0, 0, 0, 0.87)",
    boxShadow: theme.shadows[1],
    fontSize: 14
  }
}))(Tooltip);
const useStyle = makeStyles((theme) => ({
  text: {
    color: "black",
    fontWeight: "500"
  }
}));

function Dashboard() {
  const classes = useStyle();
  const { user } = useContext(AuthContext);
  const [userState, setUserState] = useState({
    tasks: []
  });

  const getProjectNames = function(tasks) {
    const projectNames =[];
    for (let task of tasks) {
      if (!projectNames.includes(task.project_name)){
  projectNames.push(task.project_name)
      }
    }
    return projectNames;
  }
  

  const getIncompleteTasks = function(tasks, id) {
    let incompleteTasks = [];
  
    for (let task of tasks) {
      if (task.user_id===id && task.status !== "Completed") {
        incompleteTasks.push(task)
      } 
    }
    
   return incompleteTasks;
  }
  useEffect(() => {
    axios.get("api/tasks").then((result) => {
      setUserState((prev) => ({ ...prev, tasks: result.data }));
    });
  }, []);

  console.log("user", user);

  

  const getProjectNames = function (tasks) {
    const projectNames = [];
    for (let task of tasks) {
      if (!projectNames.includes(task.project_name)) {
        projectNames.push(task.project_name);
      }
    }
    return projectNames;
  };

  const getIncompleteTasks = function (tasks, id) {
    let incompleteTasks = [];

    for (let task of tasks) {
      if (task.user_id === id && task.status !== "Completed") {
        incompleteTasks.push(task);
      }
    }

    return incompleteTasks;
  };

  if (!userState.tasks.length) {
    return null;
  }
  console.log(userState);
  let incompleteTasks = getIncompleteTasks(userState.tasks, user.id);

  let projects = getProjectNames(incompleteTasks);
  const displayProjects = projects.map((project, index) => (
    <LightTooltip style={{ cursor: "pointer" }} title={project.name}>
      <DashbordProject title={project} key={index} tasks={incompleteTasks} />
    </LightTooltip>
  ));

  return (
    <div>
      <h2>Welcome back, {user.user_name}</h2>
      <Typography className={classes.text}>
        you have {incompleteTasks.length} incomplete tasks in {projects.length}{" "}
        projects
      </Typography>
      <Box display="flex" flexDirection="row">
        {displayProjects}
      </Box>
    </div>
  );
}

export default Dashboard;

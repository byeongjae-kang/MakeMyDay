import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from 'context/AuthContext';
import axios from 'axios';
import { getIncompleteTasks, getProjectsWithTasks, getProjectNames } from '../../hooks/helpers'
import { Paper, Box, Typography, makeStyles } from '@material-ui/core';
import DashbordProject from './DashbordProject';
const useStyle = makeStyles((theme) => ({

  text: {
    color: "black",
    fontWeight: "500",

  },
}));

function Dashboard() {
  const classes = useStyle();
  const { user } = useContext(AuthContext);
  const [userState, setUserState] = useState({
    tasks: []

  });
  useEffect(() => {
    axios.get("api/tasks")
      .then((result) => {
        setUserState((prev) => ({ ...prev, tasks: result.data }))
      })
  }, [])

  console.log("user", user)

  if (!userState.tasks.length) {
    return null;
  }
console.log(userState)
  let incompleteTasks = getIncompleteTasks((userState.tasks), (user.id));


  let projects = getProjectNames(incompleteTasks)
  const displayProjects = projects.map((project, index) =>
    <DashbordProject title={project} key={index} tasks={incompleteTasks} />
  );

  return (
    <div>
      <h2>Welcome back, {user.user_name}</h2>
      <Typography className={classes.text}>
        you have {incompleteTasks.length} incomplete tasks in {projects.length} projects
      </Typography>
      <Box display="flex" flexDirection="row">
        {displayProjects}
      </Box>
    </div>
  )
}

export default Dashboard

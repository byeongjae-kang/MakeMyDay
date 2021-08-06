import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Container from "@material-ui/core/Container";
import Masonry from "react-masonry-css";
import ProjectListItems from "./ProjectListItem";
import axios from "axios";
import "./ProjectList.css";
import ProjectForm from "./projectForm/ProjectForm";
import AddIcon from "@material-ui/icons/Add";
import { Button } from "@material-ui/core";

export default function ProjectList() {
  const [state, setState] = useState({
    users: [],
    projects: []
  });

  useEffect(() => {
    Promise.all([axios.get("/api/users"), axios.get("api/projects")]).then(
      (all) => {
        setState({
          ...state,
          users: all[0].data,
          projects: all[1].data
        });
      }
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleDelete = (projectId) => {
    axios
      .delete(`api/projects/${projectId}`)
      .then((result) => {
        axios.get(`api/projects`).then((result) => {
          setState({
            ...state,
            projects: [...result.data]
          });
        });
      })
      .catch((err) => console.error("could not delete", err.message));
  };

  const HaveProjectWithUsers = (project, users) => {
    const updatedProject = project.users.map((userId) =>
      users.find((userDetail) => userDetail.id === userId)
    );

    return {
      ...project,
      users: updatedProject
    };
  };

  const breakpoints = {
    default: 3,
    1100: 2,
    700: 1
  };

  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [titleError, setTitleError] = useState(false);
  const [description, setdescription] = useState("");
  const [descriptionError, setdescriptionError] = useState(false);
  const [status, setStatus] = useState("In progress");
  const [userId, setuserId] = useState([]);
  const [selectedDate, setSelectedDate] = useState(
    new Date().toISOString().split("T")[0]
  );
  const history = useHistory();
  


  const handleClickOpen = (projectId, value) => {
    if ("Edit" === value) {
      handleEdit(projectId);
    } else {
      setTitle('')
      setTitleError(false)
      setdescription('')
      setdescriptionError(false)
      setStatus("In progress")
      setuserId([])
      setSelectedDate(new Date().toISOString().split("T")[0])
      setOpen(true);
    }
  };

  const handleEdit = (projectId) => {
    
    Promise.all([
      axios.get(`/api/projects/${projectId}`),
      axios.get(`/api/user_projects/${projectId}`)
    ]).then((result) => {
    
      const { name, description, status, due_date } = result[0].data[0];
      setTitle(name)
      setdescription(description)
      setStatus(status)
      setSelectedDate(due_date.split("T")[0])
      const users = result[1].data.map(user => user.user_id)
      setuserId(users)
      console.log(userId)
      setOpen(true);
    });
    
  };

  const getUserIds = (selectedusers) => {
    const arrUserIds = selectedusers.map((user) => user.id);
    setuserId(arrUserIds);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleClose = () => {
    setOpen(false);
    history.push(`/projects`);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTitleError(false);
    setdescriptionError(false);

    if (title === "") {
      setTitleError(true);
    }
    if (description === "") {
      setdescriptionError(true);
    }

    const copiedState = { ...state };
    const copiedProjects = copiedState.projects;
    const newProject = {
      name: title,
      description: description,
      status: status,
      users: userId,
      start_date: new Date().toISOString().split("T")[0],
      due_Date: selectedDate
    };
    copiedProjects.push(newProject);

    if (title && description) {
      return axios
        .post(`/api/projects`, newProject)
        .then(() => {
          axios.get(`/api/projects`).then((result) => {
            setState({
              ...state,
              projects: result.data
            });
            history.push("/projects");
          });
        })
        .catch((err) => console.log(err.message));
    }
  };

  return (
    <Container>
      <Button variant="outlined" value={"Create"} color="secondary" onClick={handleClickOpen}>
        <AddIcon />
        CREATE NEW PROJECTS
      </Button>
      <ProjectForm
        users={state.users}
        handleDateChange={handleDateChange}
        handleClose={handleClose}
        handleSubmit={handleSubmit}
        selectedDate={selectedDate}
        open={open}
        titleError={titleError}
        descriptionError={descriptionError}
        setdescription={setdescription}
        description={description}
        title={title}
        setTitle={setTitle}
        status={status}
        setStatus={setStatus}
        getUserIds={getUserIds}
        userId={userId}
      />
      <br />
      <Masonry
        breakpointCols={breakpoints}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {[...state.projects].reverse().map((project, index) => (
          <div key={index}>
            <ProjectListItems
              project={HaveProjectWithUsers(project, state.users)}
              handleEdit={handleEdit}
              handleDelete={handleDelete}
              handleClickOpen={handleClickOpen}
            />
          </div>
        ))}
      </Masonry>
    </Container>
  );
}

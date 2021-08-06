import React, { useEffect, useState } from "react";
import Container from "@material-ui/core/Container";
import Masonry from "react-masonry-css";
import ProjectListItems from "./ProjectListItem";
import axios from "axios";
import "./ProjectList.css";
import CreateProject from "./createProject/CreateProject";

export default function ProjectList() {
  const [state, setState] = useState({
    users: [],
    projects: [],
  });

  useEffect(() => {
    Promise.all([axios.get("/api/users"), axios.get("api/projects")]).then(
      (all) => {
        setState({
          ...state,
          users: all[0].data,
          projects: all[1].data,
        });
      }
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const handleEdit = async (id) => {
    await axios.patch(`http://localhost8080/api/projects/${id}`);
  };

  const handleDelete = (projectId) => {
    axios
      .delete(`api/projects/${projectId}`)
      .then((result) => {
        axios.get(`api/projects`).then((result) => {
          setState({
            ...state,
            projects: [...result.data],
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
      users: updatedProject,
    };
  };

  const breakpoints = {
    default: 3,
    1100: 2,
    700: 1,
  };

  return (
    <Container>
      <CreateProject users={state.users} state={state} setState={setState} />
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
            />
          </div>
        ))}
      </Masonry>
    </Container>
  );
}

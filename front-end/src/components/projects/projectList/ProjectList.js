import React, { useState } from "react";
import Masonry from "react-masonry-css";

import AddIcon from "@material-ui/icons/Add";
import Button from "@material-ui/core/Button";

import ProjectForm from "../projectForm/ProjectForm";
import ProjectListItems from "../projectListItem/ProjectListItem";
import useProjectData from "hooks/useProjectData";
import "./ProjectList.css";
import { MessageContextProvider } from "context/MessageContext";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup
} from "@material-ui/core";

export default function ProjectList() {
  const {
    handleClickOpen,
    state,
    selectedDate,
    handleDateChange,
    handleClose,
    handleSubmit,
    open,
    titleError,
    descriptionError,
    setdescription,
    description,
    title,
    setTitle,
    status,
    setStatus,
    getUserIds,
    userId,
    breakpoints,
    HaveProjectWithUsers,
    handleDelete
  } = useProjectData();

  const [filteredProjects, setFilteredProjects] = useState(null);
  const [filteredProcess, setFilteredProcess] = useState(null);

  const filterByUser = (e) => {
    setFilteredProjects(null);
    const userId = e.target.getAttribute("alt");
    const newProjects = [...state.projects].filter((project) => {
      const foundId = project.users.find((id) => id === parseInt(userId));
      return foundId === parseInt(userId);
    });
    setFilteredProjects(newProjects);
  };

  const filterByStatus = (e) => {
    const status = e.target.value;
    console.log(status);
    const newProjects = [...state.projects].filter((project) => {
      return status && project.status.toLowerCase() === status.toLowerCase();
    });
    setFilteredProjects(newProjects);
  };

  const projects = filteredProjects ? filteredProjects : [...state.projects];

  const sortedProjects = projects.reverse().map((project, index) => (
    <div key={index}>
      <ProjectListItems
        project={HaveProjectWithUsers(project, state.users)}
        handleDelete={handleDelete}
        handleClickOpen={handleClickOpen}
      />
    </div>
  ));

  return (
    <div>
      <div className="project_top_section">
        <Button
          variant="contained"
          value={"Create"}
          color="primary"
          onClick={handleClickOpen}
          startIcon={<AddIcon />}
        >
          CREATE NEW PROJECT
        </Button>

        <ProjectForm
          handleDateChange={handleDateChange}
          selectedDate={selectedDate}
          handleClose={handleClose}
          handleSubmit={handleSubmit}
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
        <div className="filter_by_users">
          <label>
            <h4>Filter By Users</h4>
          </label>
          <div className="filter_by_users_Info">
            {state.users.map((user, index) => {
              return (
                <img
                  key={index}
                  className="filter_by_users_avatar avatar"
                  src={user.avatar}
                  alt={user.id}
                  onClick={filterByUser}
                />
              );
            })}
          </div>
        </div>
        <div>
          <FormControl className='filter_by_status'>
            <h4>Filter by Status</h4>
            <RadioGroup
              className="filter_by_status_radio"
              value={filteredProcess}
              onChange={(e) => setFilteredProcess(e.target.value)}
              onClick={filterByStatus}
            >
              <FormControlLabel
                value="In progress"
                control={<Radio />}
                label="In progress"
              />
              <FormControlLabel
                value="Completed"
                control={<Radio />}
                label="Completed"
              />
              <FormControlLabel
                value="On hold"
                control={<Radio />}
                label="On hold"
              />
              <FormControlLabel
                value="Cancelled"
                control={<Radio />}
                label="Cancelled"
              />
            </RadioGroup>
          </FormControl>
        </div>
      </div>
      <br />
      <MessageContextProvider>
        <Masonry
          breakpointCols={breakpoints}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {sortedProjects}
        </Masonry>
      </MessageContextProvider>
    </div>
  );
}

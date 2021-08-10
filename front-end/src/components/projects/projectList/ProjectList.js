import React from "react";
import Masonry from "react-masonry-css";
import { Grid } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import ProjectForm from "../projectForm/ProjectForm";
import ProjectListItems from "../projectListItem/ProjectListItem";
import useProjectData from "hooks/useProjectData";
import "./ProjectList.css";

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
    handleDelete,
  } = useProjectData();

  const sortedProjects = [...state.projects].reverse().map((project, index) => (
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
      <br />
      <Masonry
        breakpointCols={breakpoints}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {sortedProjects}
      </Masonry>
    </div>
  );
}

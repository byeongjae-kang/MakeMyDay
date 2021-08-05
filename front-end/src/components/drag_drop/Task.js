import { useState } from "react";
import {
  Card,
  FormHelperText,
  Paper,
  Typography,
  Grid,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { Draggable } from "react-beautiful-dnd";
import ModalForm from "../form/ModalForm";
import Button from "@material-ui/core/Button";
const useStyle = makeStyles((theme) => ({
  task: {
    padding: theme.spacing(1, 1, 1, 2),
    margin: theme.spacing(1),
    display: "flex",
    flexDirection: "columns",
    justifyContent: "space-between",

    background: "#fff",
    "&:hover": {
      backgroundColor: "lightblue",
    },
  },
  rightModal: {
    display: "flex",
    alignItems: "center",
  },
}));

const PriorityIcon = (props) => {
  if (props.priority === "1") {
    return <div>1</div>;
  } else if (props.priority === "2") {
    return <div>2</div>;
  } else {
    return <div>3</div>;
  }
};

export default function Task({ task, index, key }) {
  const classes = useStyle();
  const [openPopup, setOpenPopup] = useState(false);

  return (
    <div>
      <Card className={classes.task} style={{ cursor: "pointer" }}>
        <button onClick={() => setOpenPopup(true)}></button>
        <Typography>{task.name}</Typography>
        <Grid className={classes.rightModal}>
          <ModalForm
            closePopup={() => setOpenPopup(false)}
            openPopup={openPopup}
            setOpenPopup={setOpenPopup}
            task={task}
          />
          <PriorityIcon priority={task.priority} />
        </Grid>
      </Card>
    </div>
  );
}

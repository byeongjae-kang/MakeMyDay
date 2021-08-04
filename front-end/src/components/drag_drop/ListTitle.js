import React from "react";
import { Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles((theme) => ({
  title: {
    padding: theme.spacing(1, 1, 1, 2),
    margin: theme.spacing(1),
  },
  text: {
    fontSize: "1.2rem",
    fontWeight: "bold",
    textAlign: "center",
  },
}));

export default function ListTitle(props) {
  const classes = useStyle();
  return (
    <Paper className={classes.title}>
<<<<<<< HEAD:front-end/src/components/drag_drop/ListTitle.js
      <Typography className={classes.text}>
        {props.title} {" "} ({props.length})
      </Typography>
=======
      <Typography className={classes.text}>{props.title}</Typography>
>>>>>>> backup:front-end/src/components/ListTitle.js
    </Paper>
  );
}

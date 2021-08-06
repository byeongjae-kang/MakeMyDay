/* eslint-disable no-use-before-define */
import React from "react";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 500,
    "& > * + *": {
      marginTop: theme.spacing(3),
    },
  },
}));

export default function LimitTags() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Autocomplete
        multiple
        limitTags={2}
        id="multiple-limit-tags"
        getOptionLabel={(option) => option.title}
        defaultValue={""}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="outlined"
            label="limitTags"
            placeholder="Favorites"
          />
        )}
      />
    </div>
  );
}

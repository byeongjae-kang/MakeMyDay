import React from "react";
import TextField from "@material-ui/core/TextField";
import { useStyles } from "./DatePickerStyle";

export default function DatePickers({ selectedDate, handleDateChange }) {
  const classes = useStyles();

  return (
    <form className={classes.container} noValidate>
      <TextField
        id="date"
        label="Due Date"
        type="date"
        value={selectedDate}
        onChange={(e) => handleDateChange(e.target.value)}
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </form>
  );
}

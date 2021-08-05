import React from "react";
import { useStyles } from "./UserSelectorStyle";
import { Avatar, TextField } from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";

export default function UserSelector({ users, getUserIds }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Autocomplete
        onChange={(event, value) => getUserIds(value)}
        multiple
        limitTags={2}
        id="multiple-limit-tags"
        options={users}
        getOptionLabel={(user) => user.user_name}
        renderOption={(user) => (
          <div className={classes.members}>
            <Avatar
              className={classes.avatar}
              alt={user.name}
              src={user.avatar}
            />
            <p>
              {user.user_name}
              <br />
              {user.email}
            </p>
          </div>
        )}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="outlined"
            label="Team members"
            placeholder="Add members"
            color="secondary"
          />
        )}
      />
    </div>
  );
}

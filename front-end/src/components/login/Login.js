import {
  Grid,
  Box,
  makeStyles,
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
  Typography,
  Link,
  CircularProgress,
  Grow,
  Paper,
} from "@material-ui/core";
import axios from "axios";
import { AuthContext } from "context/AuthContext";
import React from "react";
import { useContext } from "react";
import { useRef } from "react";
import GoogleButton from "./GoogleButton";
function Login(props) {
  const email = useRef();
  const password = useRef();
  const { isFetching, dispatch } = useContext(AuthContext);

  const loginCall = async (userCredential, dispatch) => {
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/login", userCredential);
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE", payload: err });
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    loginCall(
      { email: email.current.value, password: password.current.value },
      dispatch
    );
  };

  return props.trigger ? (
    <Box className="card">
      <Grid align="center">{/* <GoogleButton /> */}</Grid>
      <br />
      <form onSubmit={submitHandler}>
        <TextField
          fullWidth
          variant="outlined"
          color="secondary"
          label="email"
          placeholder="Enter Email Address"
          required
          type="email"
          inputRef={email}
        />
        <br />
        <br />
        <TextField
          variant="outlined"
          color="secondary"
          label="password"
          type="password"
          placeholder="enter password"
          fullWidth
          required
          inputRef={password}
        />
        <br />
        <br />

        <div className="divide">
          {/* <Typography>Forgot password?</Typography> */}

          {/* <FormControlLabel
            control={<Checkbox name="checkedB" />}
            label="Remember me"
          /> */}
        </div>
        <Button
          variant="contained"
          type="submit"
          color="primary"
          fullWidth
          disabled={isFetching}
        >
          {isFetching ? (
            <CircularProgress color="primary" size="16px" />
          ) : (
            "Sign In"
          )}
        </Button>
      </form>
      <br />
      {/* <Typography align="center">
        Don't have an account? <Link>Sign up</Link>
      </Typography> */}
    </Box>
  ) : (
    ""
  );
}

export default Login;

import {
  Grid,
  Paper,
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
  Typography,
  Link,
  CircularProgress
} from "@material-ui/core";
import axios from "axios";
import { AuthContext } from "context/AuthContext";
import React from "react";
import { useContext } from "react";
import { useRef } from "react";

function Login(props) {
  const paperStyle = {
    padding: 20,
    height: "60vh",
    width: 450,
    margin: "150px auto"
  };
  const btnStyle = { margin: "15px 0", height: "45px" };
  const textStyle = { margin: "0 0 10px 0" };
  const linkStyle = { fontSize: "13px", margin: "15px 0" };
  const googleStyle = { margin: "30px 0" };
  const orStyle = { fontSize: "13px" };

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
    console.log(email.current.value)
console.log(password.current.value)
    loginCall(
      { email: email.current.value, password: password.current.value },
      dispatch
    );

  }


  return props.trigger ? (
    <Grid>
      <Paper style={paperStyle}>
        {/* elevation={10} */}
        <Grid align="center" style={googleStyle}>
          {/* <GoogleButton/> */}
        </Grid>
        <Typography align="center" style={linkStyle}>
          Or
        </Typography>
        <form onSubmit={submitHandler}>
          <TextField
            label="email"
            placeholder="enter email"
            fullWidth
            required
            type="email"
            inputRef={email}
          />
          <TextField
            label="password"
            type="password"
            placeholder="enter password"
            fullWidth
            required
            inputRef={password}
            style={textStyle}
          />
          <Link style={linkStyle}>Forgot password?</Link>
          <br />
          <FormControlLabel
            control={<Checkbox name="checkedB" color="primary" />}
            label="Remember me"
          />
          <Button
            variant="contained"
            type="submit"
            color="primary"
            fullWidth
            style={btnStyle}
            disabled={isFetching}
          >
               {isFetching ? (
                <CircularProgress color="primary" size="20px" />
              ) : (
                "Log In"
              )}
          </Button>
        </form>

        <Typography style={orStyle} align="center">
          Don't have an account? <Link>Sign up</Link>
        </Typography>
      </Paper>
    </Grid>
  ) : (
    ""
  );
}

export default Login;

import {
  Grid,
  Paper,
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
  Typography,
  Link,
} from "@material-ui/core";
import React from "react";
import GoogleButton from "./GoogleButton";

function Login(props) {
  const paperStyle = {
    padding: 20,
    height: "60vh",
    width: 450,
    margin: "150px auto",
  };
  const btnStyle = { margin: "15px 0", height: "45px" };
  const textStyle = { margin: "0 0 10px 0" };
  const linkStyle = { fontSize: "13px", margin: "15px 0" };
  const googleStyle = { margin: "30px 0" };
  const orStyle = { fontSize: "13px" };

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
        <TextField label="email" placeholder="enter email" fullWidth required />
        <TextField
          label="password"
          placeholder="enter password"
          fullWidth
          required
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
        >
          Log in
        </Button>

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

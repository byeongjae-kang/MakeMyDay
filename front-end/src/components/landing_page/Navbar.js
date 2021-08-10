import { Typography } from "@material-ui/core";
import "./Navbar.css";
function Navbar(props) {
  return (
    <>
      <nav className="navbar">
        <Typography>make.my.day</Typography>

        <Typography
          onClick={() => {
            props.setTrigger(!props.trigger);
          }}
        >
          Sign in
        </Typography>

        <Typography>Register</Typography>
      </nav>
    </>
  );
}

export default Navbar;

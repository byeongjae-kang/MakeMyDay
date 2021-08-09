import { Typography } from "@material-ui/core";
import { typography } from "@material-ui/system";
import "./Navbar.css";

function Navbar(props) {
  return (
    <>
      <nav className="navbar">
        <Typography className="navbar-logo">make.my.day</Typography>
        <ul className="navbar-list">
          <li>
            <Typography
              className="navbar-logo"
              onClick={() => {
                props.setTrigger(!props.trigger);
              }}
            >
              Log in
            </Typography>
          </li>
          <li>
            <Typography className="navbar-logo">Register</Typography>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;

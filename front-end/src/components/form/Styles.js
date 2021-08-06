import { makeStyles } from "@material-ui/core/styles";
import { deepOrange, deepPurple } from "@material-ui/core/colors";
const useStyles = makeStyles((theme) => ({
  closeIcon: {
    "&:hover": {
      color: "red",
    },
    marginRight: 20,
    cursor: "pointer",
    marginTop: 20,
  },
  divide: {
    display: "flex",
    justifyContent: "space-between",
  },
  select: {
    minWidth: 260,
  },
  button: {
    marginTop: 20,
  },
}));

export default useStyles;

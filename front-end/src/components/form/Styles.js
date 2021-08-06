import { makeStyles } from "@material-ui/core/styles";
import { deepOrange, deepPurple } from "@material-ui/core/colors";
const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  closeIcon: {
    "&:hover": {
      color: "red",
    },
    marginRight: 20,
  },
  divide: {
    display: "flex",
    justifyContent: "space-between",
  },
  root: {
    width: 500,
    color: "secondary",
    "& > * + *": {
      marginTop: theme.spacing(3),
    },
  },
  members: {
    display: "flex",
    alignItems: "center",
  },
  avatar: {
    width: 30,
    height: 30,
    marginRight: 20,
  },
  select: {
    minWidth: 260,
  },
  selectContainer: {
    marginTop: 20,
  },
  alignRight: {
    marginTop: 20,
    display: "flex",
  },
  dialogSize: {
    minHeight: "35vh",
    minWidth: "80vh",
  },
}));

export default useStyles;

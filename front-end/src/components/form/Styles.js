import { makeStyles } from "@material-ui/core/styles";

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
    width: 260,
  },
  button: {
    marginTop: 100,
  },
  card: {
    padding: theme.spacing(1, 1, 1, 2),
    margin: theme.spacing(1),
  },
  paper: {
    backgroundColor: "#EDECF0",
    padding: theme.spacing(1, 1),
  },
  container: {
    display: "flex",
    flexWrap: "wrap",
    marginTop: 20,
  },
  textField: {
    marginRight: theme.spacing(1),
    marginBottom: theme.spacing(1),
    width: 260,
  },
}));

export default useStyles;

import { makeStyles } from "@material-ui/core/styles";
import { deepOrange } from "@material-ui/core/colors";
const useStyles = makeStyles((theme) => ({
  modalContainer: {},
  modalForm: {
    padding: "20px",
    overflow: "hidden",
    position: "relative",
  },
  buttons: {
    display: "flex",
    justifyContent: "flex-end",
    padding: theme.spacing(1),
  },
  titleArea: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
  },
  commentArea: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
  },
  commentContainer: {
    padding: "20px",
    margin: "20px",
    display: "flex",
    justifyContent: "flex-end",
  },
  closeIcon: {
    position: "absolute",
    display: "flex",
    justifyContent: "flex-end",
  },
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  orange: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default useStyles;

import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import { DialogContent } from "@material-ui/core";
import Slide from "@material-ui/core/Slide";
import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";
import Message from "./message/Message";
import Members from "./members/Members";
import { Tooltip } from "@material-ui/core";
import "./Chat.css";
import { withStyles } from "@material-ui/core/styles";
const LightTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: theme.palette.common.white,
    color: "rgba(0, 0, 0, 0.87)",
    boxShadow: theme.shadows[1],
    fontSize: 14,
  },
}))(Tooltip);
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Chat({ project }) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <LightTooltip title="Chat with team members">
        <QuestionAnswerIcon
          style={{
            cursor: "pointer",
            width: 40,
            height: 40,
            color: "#8561c5",
          }}
          onClick={handleClickOpen}
        />
      </LightTooltip>
      <Dialog
        BackdropProps={{ style: { backgroundColor: "transparent" } }}
        PaperProps={{
          style: {
            backgroundColor: "rgba(0, 0, 0 , 0.44)",
            border: "rgba(255, 255, 255, 0.25)",
            borderRadius: "10px",
            boxShadow: "none",
            backdropFilter: "blur(15px)",
          },
        }}
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
      >
        {/* <DialogTitle id="alert-dialog-slide-title">
          Chat Room: {project.name}
        </DialogTitle> */}
        <DialogContent>
          {/* <Members usersInProject={project.users} /> */}
          <Message project={project} />
        </DialogContent>
      </Dialog>
    </div>
  );
}

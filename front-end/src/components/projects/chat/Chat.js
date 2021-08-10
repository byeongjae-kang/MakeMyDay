import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";
import Message from "./message/Message";
import Members from "./members/Members";
import "./Chat.css";
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
      <QuestionAnswerIcon color="secondary" onClick={handleClickOpen} />
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
      >
        <DialogTitle id="alert-dialog-slide-title">
          Chat Room: {project.name}
        </DialogTitle>

        <div className="divider">
          <div className="project_chat_content">
            <Members usersInProject={project.users} />
            <Message project={project}/>
          </div>
        </div>
      </Dialog>
    </div>
  );
}

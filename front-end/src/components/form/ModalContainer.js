import { useState } from "react";
import Dialog from "@material-ui/core/Dialog";
import { Button, Container } from "@material-ui/core";
import CreateIcon from "@material-ui/icons/Create";
export default function ModalContainer(props) {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <CreateIcon
        color="secondary"
        onClick={handleClickOpen}
        style={{ cursor: "pointer" }}
      ></CreateIcon>
      <Dialog onClose={handleClose} open={open}>
        <Container
          id="customized-dialog-title"
          onClose={handleClose}
        ></Container>
        {props.children}
      </Dialog>
    </div>
  );
}

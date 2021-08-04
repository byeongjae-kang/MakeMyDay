import { useState } from "react";
import Dialog from "@material-ui/core/Dialog";
import { Button, Container } from "@material-ui/core";

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
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Sign Up
      </Button>
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

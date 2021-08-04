import { useState, useEffect } from "react";
import Dialog from "@material-ui/core/Dialog";
import { Button, Container } from "@material-ui/core";
import CreateIcon from "@material-ui/icons/Create";
import ModalForm from "./ModalForm";
export default function ModalContainer({ isDialogOpened, handleCloseDialog }) {
  // const [open, setOpen] = useState(handleClickOpen);

  // const handleClickOpen = () => {
  //   //   setOpen(true);
  // };
  const handleClose = () => {
    // setOpen(false);
    handleCloseDialog(false);
    // console.log("-----clickedCloseIcon");
  };

  return (
    <div>
      {/* <CreateIcon
        color="secondary"
        onClick={handleClickOpen}
        style={{ cursor: "pointer" }}
      ></CreateIcon> */}
      <Dialog onClose={handleClose} open={isDialogOpened}>
        <Container
          id="customized-dialog-title"
          onClose={handleClose}
        ></Container>
        <ModalForm clickCloseIcon={handleClose} />
      </Dialog>
    </div>
  );
}

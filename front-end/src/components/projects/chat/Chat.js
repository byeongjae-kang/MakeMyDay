import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Chat({project}) {
  const [open, setOpen] = React.useState(false);

  console.log(project)

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
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">chatroom</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            hello
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            send
          </Button>
          <Button onClick={handleClose} color="primary">
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
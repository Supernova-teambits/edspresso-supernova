import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Modal } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const CloseButton = ({ buttonName, message }) => {
  const [isOpen, setIsOpen] = useState(false);
  const classes = useStyles();
  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);
  const handleLeaveQuiz = () => {
    navigate("/app/lesson/1");
  };
  const navigate = useNavigate();

  return (
    <>
      <Button variant="contained" onClick={handleOpen}>
        {buttonName}
      </Button>
      <Modal
        className={classes.modal}
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <div className={classes.paper}>
          <p>{message}</p>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleLeaveQuiz}>Leave</Button>
        </div>
      </Modal>
    </>
  );
};

export default CloseButton;

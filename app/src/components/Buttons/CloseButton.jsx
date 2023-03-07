import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Modal } from "@mui/material";
import { styled } from "@mui/system";

const ModalWrapper = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "white",
  boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.2)",
  padding: "24px",
  borderRadius: "8px",
  width: "200px",
  height: "200px",
  margin: "auto",
  position: "absolute",
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
});

const CloseButton = ({ buttonName, messageHeader, message }) => {
  const [isOpen, setIsOpen] = useState(false);
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
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <ModalWrapper
          sx={{
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <h3>{messageHeader}</h3>
          <p>{message}</p>
          <div sx={{ display: "flex", padding: "15px" }}>
            <Button sx={{ padding: "15px" }} onClick={handleClose}>
              Cancel
            </Button>
            <Button sx={{ padding: "15px" }} onClick={handleLeaveQuiz}>
              Leave
            </Button>
          </div>
        </ModalWrapper>
      </Modal>
    </>
  );
};

export default CloseButton;

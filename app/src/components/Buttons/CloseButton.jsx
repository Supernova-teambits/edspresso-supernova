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
  borderRadius: "8px",
  width: "280px",
  height: "128px",
  margin: "auto",
  position: "absolute",
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
});

const CloseButton = ({ buttonName, message, buttonStyle }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);
  const handleLeaveQuiz = () => {
    navigate("/app/lesson/1");
  };
  const navigate = useNavigate();

  return (
    <>
      <Button sx={buttonStyle} variant="contained" onClick={handleOpen}>
        <p className="modal-cancel-btn">{buttonName}</p>
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
          <p className="modal-close-btn">{message}</p>
          <div className="modal-btn-wrapper">
            <Button
              sx={{
                borderRadius: "8px",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                padding: "8px 6px",
                width: "122.5px",
                height: "34px",
              }}
              onClick={handleClose}
            >
              <p className="modal-cancel-btn">Cancel</p>
            </Button>
            <Button
              sx={{
                background: "#B84B11",
                borderRadius: "8px",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                padding: "8px 6px",
                width: "122.5px",
                height: "34px",
                cursor: "pointer",
                "&:hover": {
                  backgroundColor: "#6c2c09",
                },
              }}
              onClick={handleLeaveQuiz}
            >
              <p className="modal-leave-btn">Leave</p>
            </Button>
          </div>
        </ModalWrapper>
      </Modal>
    </>
  );
};

export default CloseButton;

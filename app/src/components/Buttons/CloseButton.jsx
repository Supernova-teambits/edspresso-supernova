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
  width: "250px",
  height: "220px",
  margin: "auto",
  position: "absolute",
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
});

const CloseButton = ({ buttonName, messageHeader, message, buttonStyle }) => {
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
        <p className="modal-close-btn">{buttonName}</p>
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

            "@media (max-width: 768px)": {
              width: "60%",
              height: "25%",
            },
          }}
        >
          <h3>{messageHeader}</h3>
          <p className="modal-close-btn">{message}</p>
          <div sx={{ display: "flex", padding: "20px" }}>
            <Button
              sx={{
                padding: "0px 15px",
                "@media (max-width: 768px)": {
                  margin: "10px 0",
                  padding: "10px",
                },
              }}
              onClick={handleClose}
            >
              <p className="modal-close-btn">Cancel</p>
            </Button>
            <Button
              sx={{
                padding: "0px 15px",
                "@media (max-width: 768px)": {
                  margin: "10px 0",
                  padding: "10px",
                },
              }}
              onClick={handleLeaveQuiz}
            >
              <p className="modal-close-btn">Leave</p>
            </Button>
          </div>
        </ModalWrapper>
      </Modal>
    </>
  );
};

export default CloseButton;

import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CloseButton = ({ buttonName, message }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);
  const navigate = useNavigate();
  const handleLeaveQuiz = () => {
    navigate("/app/lesson/1");
  };

  return (
    <>
      <button onClick={handleOpen}>{buttonName}</button>
      {isOpen && (
        <div className="modal">
          <div className="modal-content">
            <p>{message}</p>
          </div>
          <div className="modal-buttons">
            <button onClick={handleClose}>Cancel</button>
            <button onClick={handleLeaveQuiz}>Leave</button>
          </div>
        </div>
      )}
    </>
  );
};

export default CloseButton;

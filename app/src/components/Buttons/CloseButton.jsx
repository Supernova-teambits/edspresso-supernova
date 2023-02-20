import { useState } from "react";

const CloseButton = ({ onClose, message }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);
  const handleLeaveQuiz = () => {
    //Redirect to main page
  };

  return (
    <>
      <button onClick={handleOpen}>X</button>
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

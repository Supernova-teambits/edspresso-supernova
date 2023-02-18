import { useState } from "react";

const CloseButton = ({ onClose }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);
  const handleLeaveQuiz = () => {
    //Redirect to Test progress page
  };

  return (
    <>
      <button onClick={handleOpen}>X</button>
      {isOpen && (
        <div className="modal">
          <div className="modal-content">
            <p>
              Do you want to leave the test? Your answers will not be saved.
            </p>
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

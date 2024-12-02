// src/Modal.js
import React from 'react';

const Popuprequest = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleCancel = () => {
    onClose();
  };

  const handleNext = () => {
    // Handle the next action here
    console.log('Next button clicked');
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-6 shadow-lg">
        <p className="mb-4">Please confirm your request by checking the box below.</p>
        <div className="flex items-center mb-4">
          <input type="checkbox" id="confirm" className="mr-2" />
          <label htmlFor="confirm">I agree to the terms and conditions</label>
        </div>
        <div className="flex justify-end">
          <button
            className="mr-2 px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
            onClick={handleCancel}
          >
            Cancel
          </button>
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            onClick={handleNext}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popuprequest;
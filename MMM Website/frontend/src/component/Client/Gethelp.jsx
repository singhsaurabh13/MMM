import React, { useState } from "react";

const Gethelp = () => {
  const [isFirstPopupOpen, setIsFirstPopupOpen] = useState(true); // First popup visibility
  const [isSecondPopupOpen, setIsSecondPopupOpen] = useState(false); // Second popup visibility
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleFirstNextClick = () => {
    if (selectedOption) {
      setIsFirstPopupOpen(false);
      setIsSecondPopupOpen(true);
    } else {
      alert("Please select an option to proceed.");
    }
  };

  const handleSecondCancelClick = () => {
    setIsSecondPopupOpen(false);
  };

  const handleSecondNextClick = () => {
    alert(`Action confirmed for: ${selectedOption}`);
    setIsSecondPopupOpen(false);
  };

  return (
    <>
      {/* First Popup */}
      {isFirstPopupOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-[#e1ca52] p-6 rounded-md shadow-lg w-full max-w-md">
            <h2 className="text-lg font-bold mb-4">Request to sell Mavro</h2>
            <p className="mb-4">
              Select where exactly you want to have funds from the sale of Mavro transferred to:
            </p>
            <div>
              <label className="flex items-center mb-2">
                <input
                  type="radio"
                  name="transferOption"
                  value="registeredAccount"
                  onChange={handleOptionChange}
                  className="mr-2"
                />
                Select Bank Account or Card registered earlier
              </label>
              <label className="flex items-center mb-4">
                <input
                  type="radio"
                  name="transferOption"
                  value="newAccount"
                  onChange={handleOptionChange}
                  className="mr-2"
                />
                Add new bank account or card
              </label>
            </div>
            <div className="flex justify-end space-x-4">
              <button
                onClick={() => setIsFirstPopupOpen(false)}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              >
                Cancel
              </button>
              <button
                onClick={handleFirstNextClick}
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
              >
                Next &gt;&gt;
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Second Popup */}
      {isSecondPopupOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-md shadow-lg w-full max-w-md">
            <h2 className="text-lg font-bold mb-4">Confirm Transfer Details</h2>
            <p className="mb-4">
              Please confirm your selection:
              <span className="font-semibold"> {selectedOption}</span>
            </p>
            <div className="flex justify-between space-x-4">
              <button
                onClick={() => {
                  setIsSecondPopupOpen(false);
                  setIsFirstPopupOpen(true); // Go back to the first popup
                }}
                className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
              >
                Back
              </button>
              <button
                onClick={handleSecondCancelClick}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              >
                Cancel
              </button>
              <button
                onClick={handleSecondNextClick}
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
              >
                Next &gt;&gt;
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Gethelp;

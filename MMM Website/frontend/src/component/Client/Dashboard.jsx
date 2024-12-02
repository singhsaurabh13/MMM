import React, { useState } from "react";
import { FaTimes, FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const Dashboard = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("English");
  const [pagesToShow, setPagesToShow] = useState(10);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);
  const [isSecondaryPopupOpen, setIsSecondaryPopupOpen] = useState(false);

  const navigate = useNavigate(); // Initialize navigate

  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
  };

  const handlePagesChange = (event) => {
    setPagesToShow(event.target.value);
  };

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  const handleCheckboxChange = (event) => {
    setIsCheckboxChecked(event.target.checked);
  };

  const handleNextClick = () => {
    if (isCheckboxChecked) {
      setIsSecondaryPopupOpen(true);
      setIsPopupOpen(false);
    }
  };

  const handleFinalNextClick = () => {
    if (isCheckboxChecked) {
      navigate(""); // Change "/popupdeposite" to your target path
    }
  };

  return (
    <div className="w-full max-w-4xl p-10 mb-28 mt-10 justify-center items-center">
      {/* Language Selector */}
      <div className="flex justify-end mb-4">
        <label htmlFor="language" className="mr-2">Select Language:</label>
        <select
          id="language"
          className="border rounded-md p-2"
          value={selectedLanguage}
          onChange={handleLanguageChange}
        >
          <option value="English">English</option>
          <option value="French">French</option>
          <option value="Spanish">Spanish</option>
          <option value="German">German</option>
          <option value="Chinese">Chinese</option>
          <option value="Russian">Russian</option>
          <option value="Bengali">Bengali</option>
          <option value="Marathi">Marathi</option>
        </select>
      </div>

      <div className="flex justify-between mb-4">
        {/* Left: Provide Help */}
        <div
          className="bg-green-400 w-1/2 text-center p-4 rounded-md shadow-md mx-2 cursor-pointer"
          onClick={togglePopup}
        >
          <h2 className="text-white text-2xl font-semibold">Provide Help</h2>
          <p className="text-white">(Acquire Mavro, make a gift)</p>
        </div>

        {/* Right: Get Help */}
        <div className="bg-yellow-400 w-1/2 text-center p-4 rounded-md shadow-md mx-2">
          <h2 className="text-white text-2xl font-semibold">Get Help</h2>
          <p className="text-white">(Cash-in Mavro)</p>
        </div>
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center">
        <button className="bg-gray-300 px-4 py-2 rounded-md shadow-md">
          Hide Accomplished/Cancelled Orders
        </button>

        <div className="flex items-center">
          <span className="mr-2">Page</span>
          <input
            type="number"
            className="border w-12 text-center rounded-md"
            value="1"
            readOnly
          />
          {/* Dropdown for number of pages */}
          <select
            className="ml-4 border rounded-md p-2"
            value={pagesToShow}
            onChange={handlePagesChange}
          >
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={30}>30</option>
            <option value={40}>40</option>
          </select>
        </div>

        <button className="bg-gray-300 px-4 py-2 rounded-md shadow-md">
          Hide Archived Requests
        </button>
      </div>

      {/* First Popup Modal */}
      {isPopupOpen && (
        <div className="fixed inset-0 flex items-center justify-center border-gray-700 bg-gray-800 bg-opacity-50">
          <div className="bg-[#f7c965] w-full max-w-md p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Warning</h3>
            <p className="mb-4">
              I have read the WARNING, and I fully understand all the risks. I make the decision to participate in MMM-2012, being of sound mind and memory.
            </p>
            <div className="flex items-center mb-4">
              <input
                type="checkbox"
                id="warningCheckbox"
                checked={isCheckboxChecked}
                onChange={handleCheckboxChange}
                className="mr-2"
              />
              <label htmlFor="warningCheckbox">I agree to the terms above.</label>
            </div>
            <div className="flex justify-end">
              <button
                className="flex items-center bg-gray-300 px-4 py-2 rounded-md mr-2"
                onClick={togglePopup}
              >
                <FaTimes className="mr-2" />
                Cancel
              </button>
              <button
                className="flex items-center bg-blue-500 text-white px-4 py-2 rounded-md"
                onClick={handleNextClick}
                disabled={!isCheckboxChecked}
              >
                <FaArrowRight className="mr-2" />
                Next
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Second Popup Modal */}
      {isSecondaryPopupOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 px-4">
          <div className="bg-white w-full max-w-md p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Confirmation</h3>
            <p className="mb-4">
              You are about to proceed with your request. Please confirm if you are ready to continue.
            </p>
            <div className="flex justify-end">
              <button
                className="flex items-center bg-gray-300 px-4 py-2 rounded-md mr-2"
                onClick={() => setIsSecondaryPopupOpen(false)}
              >
                <FaTimes className="mr-2" />
                Cancel
              </button>
              <button
                className="flex items-center bg-blue-500 text-white px-4 py-2 rounded-md"
                onClick={handleFinalNextClick}
              >
                <FaArrowRight className="mr-2" />
                Next
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;

import React, { useState } from "react";
import { FaArrowLeft, FaTimes, FaArrowRight } from "react-icons/fa";

const Popup2 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState("INR");
  const [selectedOption, setSelectedOption] = useState("");
  const [step, setStep] = useState(1); // Step indicator

  const toggleModal = () => setIsOpen(!isOpen);

  const handleCurrencyChange = (e) => setSelectedCurrency(e.target.value);
  const handleOptionChange = (e) => setSelectedOption(e.target.value);

  // Move to the next or previous step
  const goToNextStep = () => setStep((prevStep) => prevStep + 1);
  const goToPreviousStep = () => setStep((prevStep) => prevStep - 1);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <button
        onClick={toggleModal}
        className="px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700"
      >
        Add Request
      </button>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 px-4">
          <div className="bg-[#f9e7b5] p-6 rounded-lg shadow-lg w-full max-w-md">
            {step === 1 && (
              <>
                <h3 className="mb-4 text-lg font-semibold text-gray-800">Add Request</h3>
                
                {/* Dropdown for Currency Selection */}
                <label className="block mb-2 text-sm text-gray-700">Help currency</label>
                <select
                  value={selectedCurrency}
                  onChange={handleCurrencyChange}
                  className="w-full px-3 py-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
                >
                  <option value="INR">Indian Rupee (INR)</option>
                  <option value="USD">US Dollar (USD)</option>
                  <option value="EUR">Euro (EUR)</option>
                </select>

                {/* Radio Buttons for Bank Options */}
                <p className="mb-2 text-sm text-gray-700">
                  You have no Bank Account specially for MMM-2012
                </p>
                <div className="flex flex-col mb-4">
                  <label className="flex items-center mb-2">
                    <input
                      type="radio"
                      name="paymentOption"
                      value="bank"
                      checked={selectedOption === "bank"}
                      onChange={handleOptionChange}
                      className="mr-2 text-blue-600 border-gray-300 focus:ring-blue-500"
                    />
                    You have a personal bank account or card, to make transfers from
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="paymentOption"
                      value="cash"
                      checked={selectedOption === "cash"}
                      onChange={handleOptionChange}
                      className="mr-2 text-blue-600 border-gray-300 focus:ring-blue-500"
                    />
                    You have cash only
                  </label>
                </div>

                {/* Action Buttons */}
                <div className="flex justify-end space-x-2 mt-4">
                  <button
                    onClick={toggleModal}
                    className="flex items-center px-4 py-2 text-gray-700 bg-[#feca2b] rounded hover:bg-[#dab034]"
                  >
                    <FaTimes className="mr-1" /> Cancel
                  </button>
                  <button
                    onClick={goToNextStep}
                    className="flex items-center px-4 py-2 text-gray-700 bg-[#feca2b] rounded hover:bg-[#dab034]"
                  >
                    Next <FaArrowRight className="ml-1" />
                  </button>
                </div>
              </>
            )}

            {step === 2 && (
              <>
                <h3 className="mb-4 text-lg font-semibold text-gray-800">Select Bank Account/Card</h3>
                
                {/* Dropdown for Bank Selection */}
                <label className="block mb-2 text-sm text-gray-700">Select your bank</label>
                <select
                  className="w-full px-3 py-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
                >
                  <option value="">Select Bank</option>
                  <option value="bank1">Bank of America</option>
                  <option value="bank2">Chase Bank</option>
                  <option value="bank3">Wells Fargo</option>
                  <option value="bank4">Citibank</option>
                  
                  {/* Add more banks as needed */}
                </select>

                {/* Action Buttons */}
                <div className="flex justify-end space-x-2 mt-4">
                  <button
                    onClick={goToPreviousStep}
                    className="flex items-center px-4 py-2 text-gray-700 bg-[#feca2b] rounded hover:bg-[#dab034]"
                  >
                    <FaArrowLeft className="mr-1" /> Back
                  </button>
                  <button
                    onClick={toggleModal}
                    className="flex items-center px-4 py-2 text-gray-700 bg-[#feca2b] rounded hover:bg-[#dab034]"
                  >
                    <FaTimes className="mr-1" /> Cancel
                  </button>
                  <button
                    onClick={() => alert("Proceeding to the final step...")}
                    className="flex items-center px-4 py-2 text-gray-700 bg-[#feca2b] rounded hover:bg-[#dab034]"
                  >
                    Next <FaArrowRight className="ml-1" />
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Popup2;

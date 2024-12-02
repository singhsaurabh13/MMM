import React, { useState } from 'react';

const Popup = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-[#eed26d] rounded-lg shadow-lg p-6 w-[80%]">
        <h2 className="text-xl font-bold mb-4">Step-1 Choose deposit funds option</h2>
        <div className="mb-4">
          <p className="mb-2"></p>
          <p>Dedicated card or account, from the time it's tied to the system, becomes part of the MMM-2012
system. It is designated for funds storage and transfers you have assigned, as part of your
participation. Assignment authenticity can be confirmed by your ten's manager.
Only confirmed assignments are permitted through this card. For unconfirmed assignments.
participants will be expelled from the system, with investment refund or even with penalty. </p>
          <br/>


          <label className="inline-flex items-center">
            <input type="checkbox" className="form-checkbox" />
            <span className="ml-2">you have a bank account deicated for MMM-2012(Recommended) :
            ATTENTION bank cards of this type are forbidden: credit, social, salary.
            </span>
          </label>
        </div>
        <div>
          <p className="mb-2">Your Bank Account, from the moment of linking, is a part of MMM-2012 System. Dedicated
      card or account, from the time it's tied to the system, becomes part of the MMM-2012 system
      It is designated for funds storage and transfers you have assigned, as part of your
      participation. Assignment authenticity can be confirmed by your ten's manager. Only
      confirmed assignments are permitted through this card. For unconfirmed assignments,
      participants will be expelled from the system, with investment refund or even with penalty.</p>
          <label className="inline-flex items-center">
            <input type="checkbox" className="form-checkbox" />
            <span className="ml-2">You have no bank account specially for MMM-2012</span>
          </label>
        </div>
        <button
          onClick={onClose}
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Close
        </button>
      </div>
    </div>
  );
};

const Popupdeposite = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <button
        onClick={togglePopup}
        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
      >
        Open Popup
      </button>
      <Popup isOpen={isPopupOpen} onClose={togglePopup} />
    </div>
  );
};  

export default Popupdeposite;
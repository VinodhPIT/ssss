// modalUtils.js

import React, { useState } from "react";
import TattooSearchModalPopup from "@/components/modalPopup/TattooSearchModalPopup";

const TattooSearchModal = ({ isOpen, closeModal }) => (
  <TattooSearchModalPopup
    className="custom-modal"
    isOpen={isOpen}
    closeModal={closeModal}
  />
);

export default TattooSearchModal;

export const useModal = () => {
  const [isPopupOpen, setPopupOpen] = useState(false);

  const openPopup = () => {
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };

  return {
    isPopupOpen,
    openPopup,
    closePopup,
  };
};

// CustomButton.jsx
import React from "react";
import "./Button.css"; // Import the CSS for the button styles
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { Link } from 'react-router-dom';


function CustomButton({ text, onClick, to,  padding, className }) {
  // Define inline styles
  const buttonStyle = {
    padding: padding || "default padding value", // Apply default padding if not provided
  };

  return (
    <button
    to={to}

      className={`custom-button ${className}`}
      style={buttonStyle}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default CustomButton;

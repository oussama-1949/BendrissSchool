// CustomButton.jsx
import React from "react";
import "./Button.css"; // Import the CSS for the button styles

function CustomButton({ text, onClick, padding, className }) {
  // Define inline styles
  const buttonStyle = {
    padding: padding || "default padding value", // Apply default padding if not provided
  };

  return (
    <button
      className={`custom-button ${className}`}
      style={buttonStyle}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default CustomButton;

import React from "react";
import PropTypes from "prop-types";

const Button = ({ onClick, children, bgColor, borderColor, textColor }) => {
  return (
    <button
      type="button"
      className={`${bgColor} ${borderColor} ${textColor} font-medium py-2 px-4 rounded-md `}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
  bgColor: PropTypes.string, // Background color prop
  borderColor: PropTypes.string, // Border color prop
  textColor: PropTypes.string, // Text color prop
};

Button.defaultProps = {
  bgColor: "bg-primary-color", // Default background color
  borderColor: "border-primary-color", // Default border color
  textColor: "text-white", // Default text color
};

export default Button;

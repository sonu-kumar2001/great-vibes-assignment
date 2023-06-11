import React from "react";
import PropTypes from "prop-types";

const Button = ({ onClick, children }) => {
  return (
    <button
      type="button"
      className="bg-primary-color text-white font-medium py-2 px-4 rounded-md"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
};

export default Button;

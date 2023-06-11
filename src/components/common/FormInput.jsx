import React from "react";
import PropTypes from "prop-types";

const FormInput = ({ label, id, placeholder, isRequired }) => {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-font-color text-sm font-medium mb-1"
      >
        {label}
        {isRequired && <span className="text-red">*</span>}
      </label>
      <input
        type="text"
        id={id}
        className="w-full border border-card-border rounded-md px-4 py-1.5 mb-6"
        placeholder={placeholder}
      />
    </div>
  );
};

FormInput.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string,
  placeholder: PropTypes.string,
  isRequired: PropTypes.bool,
};

export default FormInput;

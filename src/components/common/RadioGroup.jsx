import React from "react";
import PropTypes from "prop-types";

const RadioGroup = ({ label, name, options, selectedValue, onChange }) => {
  const handleInputChange = (event) => {
    const { value } = event.target;
    onChange(value);
  };

  return (
    <div>
      <label className="block text-font-color text-sm font-medium mb-2">
        {label}
      </label>
      <div className="flex items-center">
        {options.map((option) => (
          <label
            key={option.value}
            className="flex items-center text-placeholder text-sm mr-4"
          >
            <input
              type="radio"
              name={name}
              value={option.value}
              checked={option.value === selectedValue}
              onChange={handleInputChange}
              className="mr-2 w-5 h-5 border border-card-border rounded-full"
            />
            <span>{option.label}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

RadioGroup.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  selectedValue: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default RadioGroup;

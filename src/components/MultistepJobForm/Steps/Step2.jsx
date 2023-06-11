import React, { useState } from "react";
import FormInput from "../../common/FormInput";
import Button from "../../common/Button";
import RadioGroup from "../../common/RadioGroup";
import PropTypes from "prop-types";

export default function Step2({ sectionStyle }) {
  const [selectedValue, setSelectedValue] = useState("");
  const options = [
    { value: "quickApply", label: "Quick apply" },
    { value: "externalApply", label: "External apply" },
  ];
  const handleRadioChange = (value) => {
    setSelectedValue(value);
  };
  return (
    <section style={sectionStyle} className="mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-20 text-font-color">Create a job</h3>
        <p className="text-16 text-font-color">Step 2</p>
      </div>
      <form>
        <div className="flex justify-between items-end">
          <div className="w-[47%]">
            <FormInput
              label="Experience"
              id="experience"
              placeholder="Minimum"
              isRequired={false}
            />
          </div>
          <div className="w-[47%]">
            <FormInput placeholder="Maximum" isRequired={false} />
          </div>
        </div>
        <div className="flex justify-between items-end">
          <div className="w-[47%]">
            <FormInput
              label="Salary"
              id="salary"
              placeholder="Minimum"
              isRequired={false}
            />
          </div>
          <div className="w-[47%]">
            <FormInput placeholder="Maximum" isRequired={false} />
          </div>
        </div>
        <FormInput
          label="Total employee"
          id="totalEmployee"
          placeholder="ex. 100"
          isRequired={false}
        />
        <RadioGroup
          label="Apply type"
          name="myRadioGroup"
          options={options}
          selectedValue={selectedValue}
          onChange={handleRadioChange}
        />
        <div className="flex justify-end mt-[103px]">
          <Button>Save</Button>
        </div>
      </form>
    </section>
  );
}

Step2.propTypes = {
  sectionStyle: PropTypes.object.isRequired,
};

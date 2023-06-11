import React from "react";
import FormInput from "../../common/FormInput";
import Button from "../../common/Button";
import PropTypes from "prop-types";

export default function Step1({ sectionStyle }) {
  return (
    <section style={sectionStyle} className="mx-auto mb-4">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-20 text-font-color">Create a job</h3>
        <p className="text-16 text-font-color">Step 1</p>
      </div>
      <form>
        <FormInput
          label="Job Title"
          id="jobTitle"
          placeholder="ex. UX UI Designer"
          isRequired={true}
        />
        <FormInput
          label="Company name"
          id="companyName"
          placeholder="ex. Google"
          isRequired={true}
        />
        <FormInput
          label="Industry"
          id="industry"
          placeholder="ex. Information Technology"
          isRequired={true}
        />
        <div className="flex justify-between items-center">
          <div className="w-[47%]">
            <FormInput
              label="Location"
              id="location"
              placeholder="ex. Chennai"
              isRequired={false}
            />
          </div>
          <div className="w-[47%]">
            <FormInput
              label="Remote type"
              id="remoteType"
              placeholder="ex. In-office"
              isRequired={false}
            />
          </div>
        </div>
        <div className="flex justify-end mt-16">
          <Button>Next</Button>
        </div>
      </form>
    </section>
  );
}

Step1.propTypes = {
  sectionStyle: PropTypes.object.isRequired,
};

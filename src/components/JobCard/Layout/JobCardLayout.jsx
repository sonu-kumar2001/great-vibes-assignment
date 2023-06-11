import React from "react";
import PropTypes from "prop-types";
import JobLogo from "../../../assets/images/job-logo.svg";
import Button from "../../common/Button";

const JobCardLayout = ({
  jobCardStyle, // dynamic style for job card
  jobTitle,
  company,
  location,
  employmentType,
  experience,
  salary,
  employeeCount,
  customButtonStyle, //prop to indicate different button style
  buttonText,
}) => {
  return (
    <section style={jobCardStyle} className="mx-auto mb-5">
      <div className="flex items-start">
        <div className="mr-2">
          <img src={JobLogo} alt="netflix-logo" />
        </div>
        <div>
          <h3 className="text-2xl text-black mb-px">{jobTitle}</h3>
          <p className="text-base text-black mb-px">{company}</p>
          <p className="text-base text-grey mb-6">{location}</p>
          <p className="text-base text-detail mb-2">{employmentType}</p>
          <p className="text-base text-detail mb-2">{experience}</p>
          <p className="text-base text-detail mb-2">{salary}</p>
          <p className="text-base text-detail mb-2">{employeeCount}</p>
          <div className="mt-5">
            {customButtonStyle ? (
              <Button
                bgColor="bg-card-color"
                borderColor="border border-primary-color"
                textColor="text-primary-color"
              >
                {buttonText}
              </Button>
            ) : (
              <Button>{buttonText}</Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

JobCardLayout.propTypes = {
  jobCardStyle: PropTypes.object.isRequired,
  jobTitle: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  employmentType: PropTypes.string.isRequired,
  experience: PropTypes.string.isRequired,
  salary: PropTypes.string.isRequired,
  employeeCount: PropTypes.string.isRequired,
  customButtonStyle: PropTypes.bool, // New prop type declaration
  buttonText: PropTypes.string.isRequired,
};

export default JobCardLayout;

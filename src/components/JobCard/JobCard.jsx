import React from "react";
import JobCardLayout from "./Layout/JobCardLayout";

export default function JobCard() {
  const jobCardStyle = {
    height: "320px",
    width: "830px",
    padding: "16px",
    backgroundColor: "#FFFFFF",
    borderWidth: "1px",
    borderColor: "#E6E6E6",
    borderRadius: "0.375rem",
  };

  const jobCards = [
    {
      jobTitle: "UX UI Designer",
      company: "Great Vibes - Information Technology",
      location: "Chennai, Tamilnadu, India (In-office)",
      employmentType: "Part-Time (9.00 am - 5.00 pm IST)",
      experience: "Experience (1 - 2 years)",
      salary: "INR (₹) 30,000 - 50,000 / Month",
      employeeCount: "51-200 employees",
      customButtonStyle: false,
      buttonText: "Apply now",
    },
    {
      jobTitle: "Web Developer",
      company: "Awesome Tech Solutions",
      location: "Bangalore, Karnataka, India (Remote)",
      employmentType: "Full-Time",
      experience: "Experience (3 - 5 years)",
      salary: "INR (₹) 60,000 - 80,000 / Month",
      employeeCount: "201-500 employees",
      customButtonStyle: true, // Added a custom prop to indicate different button style
      buttonText: "External Apply",
    },
    // Add more job card details as needed
  ];

  return (
    <div>
      {jobCards.map((jobDetails, index) => (
        <JobCardLayout
          key={index}
          jobCardStyle={jobCardStyle}
          {...jobDetails}
        />
      ))}
    </div>
  );
}

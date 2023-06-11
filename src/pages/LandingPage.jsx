import React from "react";
import Container from "../components/common/Container";
import MultistepJobForm from "../components/MultistepJobForm/MultistepJobForm";
import JobCard from "../components/JobCard/JobCard";

export default function LandingPage() {
  return (
    <Container>
      <h3 className="text-2xl text-center text-font-color my-5">Job Form</h3>
      <MultistepJobForm />
      <h3 className="text-2xl text-center text-font-color my-5">Job Card</h3>
      <JobCard/>
    </Container>
  );
}

import React from "react";
import Hero from "../components/Hero";
import AppointmentForm from "../components/AppointmentForm";

const Appointment = () => {
  return (
    <>
      <Hero
        title={"Schedule Your Appointment | CareNet Health Institute"}
        imageUrl={"/appointImg.png"}
      />
      <AppointmentForm/>
    </>
  );
};

export default Appointment;

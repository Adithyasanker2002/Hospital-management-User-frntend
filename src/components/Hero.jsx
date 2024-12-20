import React from "react";

const Hero = ({ title, imageUrl }) => {
  return (
    <>
      <div className="hero container">
        <div className="banner">
          <h1>{title}</h1>
          <p >At CareNet Health Institute, we are committed to delivering world-class  healthcare services with a patient-first approach. Our mission is to ensure every individual receives the best possible care in a compassionate,  innovative, and personalized manner.CareNet Health Institute is a comprehensive healthcare facility dedicated to providing a wide range  of medical services under one roof. With state-of-the-art infrastructure,  advanced technology, and a team of experienced professionals, we aim to redefine the standards of healthcare delivery.</p>
        </div>
        <div className="banner">
          <img width={"500px"} src={imageUrl} alt="hero" className="animated-image" />
          <span>
            <img src="" alt="vector" />
          </span>
        </div>
      </div>
    </>
  );
};

export default Hero;

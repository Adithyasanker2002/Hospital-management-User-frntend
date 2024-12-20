import React from "react";

const Biography = ({imageUrl}) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="whoweare" />
        </div>
        <div className="banner">
          <p>Biography</p>
          <h3>Who We Are</h3>
          <p id='kyal2'>We envision a future where healthcare systems are smarter, <br /> more connected, and focused entirely on improving lives. <br /> By empowering healthcare institutions with advanced tools, <br /> CareNet optimizes every aspect of hospital management, <br /> from scheduling appointments to managing patient records. <br /> We believe that the key to exceptional care lies in efficient <br /> systems that allow healthcare providers to focus on what <br /> they do best—caring for their patient.Our mission is to redefine <br /> the healthcare experience by delivering technology-driven <br /> solutions that enhance operational efficiency, improve patient <br /> satisfaction, and uphold the highest standards of care. <br /> Through our platform, hospitals can ensure that every patient <br /> receives timely, personalized, and high-quality treatment. <br /> CareNet fosters a culture of excellence by combining secure, <br /> real-time data management with a patient-first approach. <br /><br /> CareNet is more than just a management system—it’s <br /> a commitment to the future of healthcare. Our platform <br /> integrates modern technology, such as AI-driven analytics and <br />cloud-based accessibility, to provide healthcare providers with <br /> the insights they need to make informed decisions. We are  <br /> dedicated  to ensuring that hospitals of all sizes can deliver <br />compassionate and effective care while maintaining efficiency <br /> and security in their operations.</p>
        </div>
      </div>
    </>
  );
};

export default Biography;

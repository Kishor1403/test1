import React from "react";

export const Footer = () => {
  return (
    <footer>
      <div className="text-center my-5">
        <h1 data-aos="fade-up" data-aos-offset="200">
          Contact{" "}
          <span className="text-primary" id="Contact">
            us
          </span>
        </h1>
        <hr className="w-25 m-auto" />
        <div className="row my-3">
          <div className="col-12 col-lg-4 col-md-4 col-sm-12 ">
            Social Media Handles
          </div>

          <div className="col-12 col-lg-4 col-md-4 col-sm-12">
            Write an E-mail
          </div>
          <div className="col-12 col-lg-4 col-md-4 col-sm-12">
            Leave a feedback!
          </div>
        </div>
      </div>
      <hr className="text-primary" />
      <p className="text-center" id="stylefont">
        Copyright © 2023 AI BASED OCR. All rights reserved. Published by
        GCOEARA,Pune.
      </p>
    </footer>
  );
};

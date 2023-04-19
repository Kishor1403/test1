import React from "react";

export const ServicesInfo = () => {
  return (
    <section className="services py-5 bg-light" id="OurServices">
      <div className="container">
        <div className="text-center my-5">
          <h1 data-aos="fade-up" data-aos-offset="200">
            Our <span className="text-primary">services</span>
          </h1>
          <hr className="w-25 m-auto" />
        </div>
        <div className="row">
          <div
            className="col-sm-12 col-lg-4 col-md-4 col-12"
            data-aos="zoom-in"
          >
            <div className="card" styles={{ width: "18rem" }}>
              <div className="card-body">
                <h5 className="card-title">Image to word file</h5>
                <p className="card-text">
                  Our OCR system convert image of handwritten document into
                  digital text format like word file ,pdf file etc.
                </p>
                <a href="#" className="btn btn-outline-primary">
                  Learn more!
                </a>
              </div>
            </div>
          </div>
          <div
            className="col-sm-12 col-lg-4 col-md-4 col-12"
            data-aos="zoom-in"
          >
            <div className="card" style={{ width: "18rem" }}>
              <div className="card-body">
                <h5 className="card-title">Text to speech</h5>
                <p className="card-text">
                  Helping blind Persons to understand any handwritten document
                  by providing Text to speech assistance.
                </p>
                <a href="#" className="btn btn-outline-primary">
                  Learn more!
                </a>
              </div>
            </div>
          </div>
          <div
            className="col-sm-12 col-lg-4 col-md-4 col-12"
            data-aos="zoom-in"
          >
            <div className="card" styles={{ width: "18rem" }}>
              <div className="card-body">
                <h5 className="card-title">Great Accuracy!</h5>
                <p className="card-text">
                  text with different handwriting can be recognized upto 90%-92%
                  of Accuracy.
                </p>
                <a href="#" className="btn btn-outline-primary">
                  Learn more!
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

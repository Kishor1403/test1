import React from "react";

export const HeroCarousel = () => {
  return (
    <div
      id="carouselExampleCaptions"
      className="carousel slide container pt-5 mt-5"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators ">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="images/blueOCRLab1.jpg"
            width="100%"
            height={500}
            className="w-100 img-fluid"
            alt="..."
          />
          <div className="carousel-caption  d-md-block">
            <h5>AI BASED OCR</h5>
            <p>
              Convert your handwritten documents into digital format easily!
            </p>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src="images/page2.png"
            width="100%"
            height={500}
            className="w-100 img-fluid"
            alt="..."
          />
          <div className="carousel-caption  d-md-block">
            <h5>Easy to use</h5>
            <p>Just upload your handwritten file and get result.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src="images/BlindLab3.jpg"
            width="100%"
            height={500}
            className="w-100 img-fluid"
            alt="..."
          />
          <div className="carousel-caption  d-md-block">
            <h5>Helpfull for blind Persons</h5>
            <p>
              Helping blind Persons to understand any handwritten document by
              providing Text to speech assistance.
            </p>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

import React from "react";

export const TeamInfo = () => {
  return (
    <section className="team my-5 text-center" id="about_US">
      <div className="container">
        <div className="text-center my-5 ">
          <h1 data-aos="fade-up" data-aos-offset="200">
            Our <span className="text-primary">Team</span>
          </h1>
          <hr className="w-25 m-auto" />
        </div>
        <div className="row">
          <div
            className="col-lg-4 col-md-4 col-sm-12 col-12"
            data-aos="zoom-in"
          >
            <div className="card border-secondary" styles={{ width: "18rem" }}>
              <div className="card-body">
                <h5 className="card-title">Rohit Kharat</h5>
                <p className="card-text text-primary">Machine Learning</p>
              </div>
            </div>
          </div>
          <div
            className="col-lg-4 col-md-4 col-sm-12 col-12"
            data-aos="zoom-in"
          >
            <div className="card border-secondary" style={{ width: "18rem" }}>
              <div className="card-body">
                <h5 className="card-title">Shravani Kharade</h5>
                <p className="card-text text-primary">Web developement</p>
              </div>
            </div>
          </div>
          <div
            className="col-lg-4 col-md-4 col-sm-12 col-12 "
            data-aos="zoom-in"
          >
            <div className="card  border-secondary" style={{ width: "18rem" }}>
              <div className="card-body">
                <h5 className="card-title">Kishor Matsagar</h5>
                <p className="card-text text-primary">Web developement</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

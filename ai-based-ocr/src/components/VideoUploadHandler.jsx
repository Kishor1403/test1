import React, { useEffect, useRef } from "react";

export const VideoUploadHandler = () => {
  const videoRef = useRef(null);

  const startCamera = () => {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      })
      .catch((error) => console.log("Something went wrong!", error));
  };

  const stopCamera = () => {
    const stream = videoRef.current.srcObject;
    if (!stream) return;
    const tracks = stream?.getTracks();
    tracks.forEach((track) => track.stop());
    videoRef.current.srcObject = null;
  };

  useEffect(() => {
    startCamera();
    return () => stopCamera();
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <div>
            <div className="row text-center my-4">
              <h1
                className=" text-center"
                data-aos="fade-up"
                data-aos-offset="200"
              >
                OR
              </h1>
              <hr className="w-25 m-auto" />
            </div>
            <div className="row text-center" data-aos="zoom-in-down">
              <h2 className="mb-4" id="stylefont">
                Click Image of your{" "}
                <span className="text-primary">Documents</span>{" "}
              </h2>
            </div>

            <div className="card-body border border-secondary">
              <div className="booth ">
                <video
                  id="video"
                  width="95%"
                  height="100%"
                  autoPlay
                  ref={videoRef}
                ></video>
              </div>

              <div className="text-center my-3">
                <button
                  //   href="#!"
                  className="btn btn-danger mx-3"
                  onClick={() => stopCamera()}
                >
                  Stop Cam
                </button>
                <button
                  //   href="#!"
                  className="btn btn-success"
                  onClick={() => startCamera()}
                >
                  Start Cam
                </button>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="btn btn-outline-primary px-4 my-3 mb-5"
                >
                  Upload
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

import React, { useEffect, useRef, useState } from "react";

export const VideoUploadHandler = ({ sendFileToOCR, isLoading }) => {

  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [capturedImage, setCapturedImage] = useState(null);

  const [imageSrc, setImageSrc] = useState(null);

  const [imageFile, setImageFile] = useState(null);

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
    if(!videoRef.current) return;
    const stream = videoRef.current.srcObject;
    if (!stream) return;
    const tracks = stream?.getTracks();
    tracks.forEach((track) => track.stop());
    videoRef.current.srcObject = null;
  };

  const capturePhoto = () => {
    if (videoRef.current) {
      const canvas = canvasRef.current;
      canvas.width = videoRef.current.videoWidth;
      canvas.height = videoRef.current.videoHeight;
      canvas.getContext("2d").drawImage(videoRef.current, 0, 0);
      setCapturedImage(canvas.toDataURL("image/png"));
      canvas.toBlob((blob) => {
        const file = new File([blob], "captured-image.jpeg", {
          type: "image/jpeg",
        });
        setImageFile(file);
        URL.revokeObjectURL(imageSrc);
        setImageSrc(URL.createObjectURL(file));
      }, "image/jpeg");

      stopCamera();
    }
  };

  const sendToOCR = () => {
    sendFileToOCR(imageFile);
  };

  useEffect(() => {
    return () => stopCamera();
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <div>
            <div className="row text-center mt-5" data-aos="zoom-in-down">
              <h2 className="mb-4" id="stylefont">
                Click Image of your{" "}
                <span className="text-primary">Documents</span>{" "}
              </h2>
            </div>

            <canvas ref={canvasRef} style={{ display: "none" }} />

            <div className="card-body border border-secondary my-3">
              {capturedImage ? (
                <img src={capturedImage} alt="Captured Image" />
              ) : (
                <div className="booth p-3 rounded">
                  <video
                    id="video"
                    width="50%"
                    height="50%"
                    autoPlay
                    ref={videoRef}
                  ></video>
                </div>
              )}

              <div className="text-center my-3">
                {!capturedImage && (
                  <button
                    className="btn btn-danger mx-3"
                    onClick={capturePhoto}
                  >
                    Capture Photo
                  </button>
                )}
                {!capturedImage && (
                  <button className="btn btn-success" onClick={startCamera}>
                    Start Cam
                  </button>
                )}
              </div>
              {capturedImage && (
                <div className="text-center">
                  {isLoading ? (
                    <div className="spinner-border my-3" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                  ) : (
                    <button
                      type="submit"
                      className="btn btn-outline-primary px-4 my-3 mb-5"
                      onClick={sendToOCR}
                    >
                      Upload
                    </button>
                  )}
                </div>
              )}
            </div>
            {capturedImage && (
              <div className="text-center my-3">
                <button
                  type="button"
                  className="btn btn-outline-secondary px-4 my
                  3 mb-5"
                  onClick={() => setCapturedImage(null)}
                >
                  Retake Photo
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

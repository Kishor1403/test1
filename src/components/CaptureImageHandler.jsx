import React from "react";

export const CaptureImageHandler = () => {
  const [photo, setPhoto] = useState(null);

  const startCamera = async () => {
    const constraints = { audio: false, video: true };
    try {
      const stream = await navigator.mediaDevices.getUserMedia(constraints);
      const video = document.querySelector("video");
      video.srcObject = stream;
      video.onloadedmetadata = () => {
        video.play();
      };
    } catch (error) {
      console.error(error);
    }
  };

  const stopCamera = () => {
    const video = document.querySelector("video");
    video.pause();
    video.srcObject.getTracks()[0].stop();
  };

  const capturePhoto = () => {
    const canvas = document.createElement("canvas");
    const video = document.querySelector("video");
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    canvas.getContext("2d").drawImage(video, 0, 0, canvas.width, canvas.height);
    const imageSrc = canvas.toDataURL("image/jpeg");
    setPhoto(imageSrc);
    sendToOCR(imageSrc);
    stopCamera();
  };

  const sendToOCR = (imageSrc) => {
    // Code to send the photo to the OCR function
    // Replace this with your actual OCR function call
    console.log("Sending photo to OCR function:", imageSrc);
  };
  return (
    <div>
      {photo ? (
        <div>
          <img src={photo} alt="Captured photo" />
        </div>
      ) : (
        <div>
          <video></video>
          <div>
            <button onClick={startCamera}>Start Camera</button>
            <button onClick={capturePhoto}>Capture Photo</button>
          </div>
        </div>
      )}
    </div>
  );
};

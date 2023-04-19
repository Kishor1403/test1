import React, { useEffect, useState } from "react";
export const FileUploadHandler = ({ isLoading, sendFileToOCR }) => {
  const [image, setImage] = useState(null);
  const [fileData, setFileData] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setImage(reader.result);
      setFileData(file);
      console.log(file);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <div className="container ">
        <div className="row text-center mt-5" data-aos="zoom-in-down">
          <h1 id="stylefont">
            Upload Your <span className="text-primary">file here</span>{" "}
          </h1>

          <p>Click on the "Choose File" button to upload a file: </p>
          <div>
            <label className="btn btn-primary hero-btn py-3 w-50">
              Choose File
              <input
                type="file"
                id="myFile"
                name="filename"
                onChange={handleImageChange}
                style={{ display: "none" }}
              />
            </label>
          </div>
          {image && (
            <img
              src={image}
              className="border p-3 rounded container"
              width={100}
              alt="uploaded image"
            />
          )}
          {isLoading ? (
            <div className="spinner-border my-3" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          ) : (
            <div>
              <button
                type="submit"
                className="btn btn-outline-primary px-4 my-3 mb-5"
                onClick={() => sendFileToOCR(fileData)}
              >
                Upload
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

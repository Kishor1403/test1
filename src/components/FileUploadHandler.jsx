import React, { useEffect, useState } from "react";
import axios from "axios";
export const FileUploadHandler = () => {
  const [image, setImage] = useState(null);
  const [res, setRes] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [fileData, setFileData] = useState(null);
  const [resultText, setResultText] = useState(null);

  const handlerResultChange = (event) => {
    setResultText(event.target.value);
  };

  useEffect(() => {
    setResultText(res);
  }, [res, setResultText]);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setImage(reader.result);
      setFileData(file);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const sendFileToOCR = async (file) => {
    const data = new FormData();
    data.append("file", file);

    try {
      setLoading(true);
      const response = await axios.post(
        "https://app.nanonets.com/api/v2/OCR/Model/1b103ab7-bb5d-496c-93b2-ad3bce96a3d6/LabelFile/?async=false",
        data,
        {
          headers: {
            authorization:
              "Basic " + btoa("55b88c5f-dda9-11ed-8c4e-963352d5fbdb:"),
          },
        }
      );

      //   console.log(response.data.result[0].prediction[0].ocr_text);
      setRes(response.data.result[0].prediction[0].ocr_text);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="container ">
        <div className="text-center my-5">
          <h1 data-aos="fade-up" data-aos-offset="200">
            AI BASED <span className="text-primary">OCR</span>
          </h1>
          <hr className="w-25 m-auto" />
        </div>
        <div className="row text-center" data-aos="zoom-in-down">
          <h1 id="stylefont">
            Upload Your <span className="text-primary">file here</span>{" "}
          </h1>

          <p>Click on the "Choose File" button to upload a file: </p>

          <form action="/predict" method="POST">
            <input
              type="file"
              id="myFile"
              name="filename"
              onChange={handleImageChange}
              className="py-3"
            />
            {image && (
              <img
                src={image}
                className="border p-3 rounded container"
                width={100}
                // height={100}
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
          </form>
        </div>
      </div>
      <div data-aos="zoom-in">
        <textarea
          className="form-control container py-5 font-monospace fw-bold fs-5"
          id="done"
          rows={10}
          value={res}
          onChange={handlerResultChange}
        />

        <div className=" text-center">
          <button type="" className="btn btn-outline-primary px-4 my-3 mb-5">
            Download File!
          </button>
        </div>
      </div>
    </>
  );
};

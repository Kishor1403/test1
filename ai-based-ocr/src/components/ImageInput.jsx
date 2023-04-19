import React, { useState } from "react";
import axios from "axios";
import { Loader } from "./Loader";

export const ImageInput = () => {
  const [image, setImage] = useState(null);
  const [res, setRes] = useState(null);
  const [isLoading, setLoading] = useState(false);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setImage(reader.result);
      sendFileToOCR(file);
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
      {isLoading ? (
        <Loader />
      ) : (
        <div className="border">
          <input type="file" onChange={handleImageChange} />
          {image && (
            <img src={image} width={150} height={150} alt="uploaded image" />
          )}
          <br />
          <div className="text-primary">{res}</div>
        </div>
      )}
    </>
  );
};

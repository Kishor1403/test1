import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { FileUploadHandler } from "./FileUploadHandler";
import { VideoUploadHandler } from "./VideoUploadHandler";
export const TextToOCRHandler = () => {
  const [isLoading, setLoading] = useState(false);
  const [res, setRes] = useState("");
  const [resultText, setResultText] = useState(null);
  const [isActiveTabOne, setActiveTabOne] = useState(true);

  const handlerResultChange = (event) => {
    setResultText(event.target.value);
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
  const textArea = useRef(null);

  function downloadTextFile() {
    const textarea = textArea.current;
    const text = textarea.value;

    if (text === "") {
      alert("Textarea is empty");
      return;
    }

    const filename = "text.txt";
    const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
    saveAs(blob, filename);
  }

  function saveAs(blob, filename) {
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    link.click();
  }

  const handleReadAloud = (text) => {
    if (!text) {
      alert("Textarea is empty!");
      return;
    }

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "en-IN";
    speechSynthesis.speak(utterance);
  };
  useEffect(() => {
    setResultText(res);
  }, [res, setResultText]);
  return (
    <div className="container my-5 py-5 fw-2">
      <div className="text-center my-5">
        <h1 data-aos="fade-up" data-aos-offset="200">
          AI BASED <span className="text-primary">OCR</span>
        </h1>
        <hr className="w-25 m-auto" />
      </div>
      <ul className="nav nav-tabs nav-fill mb-3" id="ex1" role="tablist">
        <li
          className="nav-item"
          role="presentation"
          onClick={() => setActiveTabOne(true)}
        >
          <a
            className={`nav-link fs-3 fw-bold ${
              isActiveTabOne ? "active text-primary" : "text-secondary"
            }`}
            id="ex2-tab-1"
            data-mdb-toggle="tab"
            href="#ex2-tabs-1"
            role="tab"
            aria-controls="ex2-tabs-1"
            aria-selected="true"
          >
            Upload File
          </a>
        </li>
        <li
          className="nav-item"
          role="presentation"
          onClick={() => setActiveTabOne(false)}
        >
          <a
            className={`nav-link fs-3 fw-bold ${
              isActiveTabOne ? "text-secondary" : "active text-primary"
            }`}
            id="ex2-tab-2"
            data-mdb-toggle="tab"
            href="#ex2-tabs-2"
            role="tab"
            aria-controls="ex2-tabs-2"
            aria-selected="false"
          >
            Take Picture
          </a>
        </li>
      </ul>

      <div className="tab-content" id="ex2-content">
        {isActiveTabOne ? (
          <div
            className="tab-pane fade show active"
            id="ex2-tabs-1"
            role="tabpanel"
            aria-labelledby="ex2-tab-1"
          >
            <FileUploadHandler
              isLoading={isLoading}
              sendFileToOCR={sendFileToOCR}
            />
          </div>
        ) : (
          <div
            className="tab-pane fade show active"
            id="ex2-tabs-2"
            role="tabpanel"
            aria-labelledby="ex2-tab-2"
          >
            <VideoUploadHandler
              isLoading={isLoading}
              sendFileToOCR={sendFileToOCR}
            />
          </div>
        )}
      </div>
      <div data-aos="zoom-in mt-3">
        <textarea
          className="form-control container py-5 font-monospace fw-bold fs-5"
          id="done"
          rows={10}
          value={resultText}
          placeholder="Result will be shown here."
          onChange={handlerResultChange}
          ref={textArea}
        />

        <div className=" text-center">
          <button
            type=""
            className="btn btn-outline-danger px-4 my-3 mb-5"
            onClick={() => handleReadAloud(resultText)}
          >
            Read Aloud !{" "}
          </button>
          <button
            type=""
            className="btn btn-primary px-4 my-3 mb-5 mx-3"
            onClick={downloadTextFile}
          >
            Download File!
          </button>
        </div>
      </div>
    </div>
  );
};

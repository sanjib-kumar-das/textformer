import React from "react";
import { useState } from "react";

export default function Textform(props) {
  // Functions
  const OnChange = (event) => {
    setText(event.target.value);
  };
  const UpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Text Converted to Uppercase Successfull!!", "success");
  };
  const DownClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Text Converted to Lowercase Successfull!!", "success");
  };
  const Clear = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text Cleared!!", "danger");
  };
  const CopyText = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Text Copied to Clipboard!!", "primary");
  };
  const ExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra Spaces Removed!!", "warning");
  };
  // States declaration
  const [text, setText] = useState("Enter Your Text Here");
  return (
    <>
      <div className="container my-5">
        {/* Form to enter text */}
        <div className="mb-3">
          <label
            htmlFor="exampleFormControlTextarea1"
            className="form-label font-weight-bold"
          >
            <h2
              className="my-4"
              style={{
                color: props.mode === "dark" ? "white" : "black",
              }}
            >
              {props.heading}
            </h2>
          </label>
          <textarea
            className="form-control bg-light my-4"
            id="exampleFormControlTextarea1"
            rows="10"
            value={text}
            onChange={OnChange}
          ></textarea>
        </div>
        {/* Buttons */}
        <button
          disabled={text.length === 0}
          className="btn btn-warning my-3 mx-1"
          onClick={UpClick}
        >
          Uppercase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-warning my-3 mx-1"
          onClick={DownClick}
        >
          Lowercase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary my-3 mx-1"
          onClick={ExtraSpace}
        >
          Remove Extra Space
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-success my-3 mx-1"
          onClick={CopyText}
        >
          Copy Text
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-danger my-3 mx-1"
          onClick={Clear}
        >
          Clear
        </button>
      </div>
      <hr />
      {/* Summary Part */}
      <div
        className="container"
        style={{
          color: props.mode === "dark" ? "whitesmoke" : "black",
        }}
      >
        <h3 className="textCount">Summary</h3>
        <div className="content my-4">
          <h5 className="wordSummary">
            Total Number of Words ={" "}
            {
              text.split(/\s+/).filter((element) => {
                return element.length !== 0;
              }).length
            }
          </h5>
          <h5 className="charSummary">
            Total Number of Characters = {text.length}
          </h5>
        </div>
      </div>
    </>
  );
}

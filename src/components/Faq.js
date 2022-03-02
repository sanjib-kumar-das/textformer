import React from "react";

export default function Faq(props) {
  return (
    <>
      <div className="container">
        <div className="accordion" id="accordionExample">
          <h2
            className="heading my-4"
            style={{
              color: props.mode === "dark" ? "white" : "black",
            }}
          >
            {props.heading}
          </h2>

          <div
            className="accordion-item"
            style={{
              color: props.mode === "dark" ? "white" : "black",
              backgroundColor: props.mode === "dark" ? "grey" : "white",
            }}
          >
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                <span>
                  #1
                  <strong>
                    &nbsp; How can I transform my text to Uppercase ?
                  </strong>
                </span>
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                First write/paste all your text intro the text-area and then
                just press the 'Uppercase' button given below.
              </div>
            </div>
          </div>
          <div
            className="accordion-item"
            style={{
              color: props.mode === "dark" ? "white" : "black",
              backgroundColor: props.mode === "dark" ? "grey" : "white",
            }}
          >
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                <span>
                  {" "}
                  #2
                  <strong>
                    &nbsp; How can I transform my text to Lowercase ?
                  </strong>
                </span>
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                First write/paste all your text intro the text-area and then
                just press the 'Lowercase' button given below.
              </div>
            </div>
          </div>
          <div
            className="accordion-item"
            style={{
              color: props.mode === "dark" ? "white" : "black",
              backgroundColor: props.mode === "dark" ? "grey" : "white",
            }}
          >
            <h2 className="accordion-header" id="headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                <span>
                  {" "}
                  #3
                  <strong>
                    &nbsp; How can I remove Extra Spaces from my text ?
                  </strong>
                </span>
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                First write/paste all your text intro the text-area and then
                just press the 'Remove Extra Space' button given below.
              </div>
            </div>
          </div>
          <div
            className="accordion-item"
            style={{
              color: props.mode === "dark" ? "white" : "black",
              backgroundColor: props.mode === "dark" ? "grey" : "white",
            }}
          >
            <h2 className="accordion-header" id="headingFour">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFour"
                aria-expanded="false"
                aria-controls="collapseFour"
              >
                <span>
                  #4
                  <strong>&nbsp; How can I copy my whole text ?</strong>
                </span>
              </button>
            </h2>
            <div
              id="collapseFour"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                First perform any operation from the buttons given below and
                then just press the 'Copy Text' button given below.
              </div>
            </div>
          </div>
          <div
            className="accordion-item"
            style={{
              color: props.mode === "dark" ? "white" : "black",
              backgroundColor: props.mode === "dark" ? "grey" : "white",
            }}
          >
            <h2 className="accordion-header" id="headingFive">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFive"
                aria-expanded="false"
                aria-controls="collapseFive"
              >
                <span>
                  #5
                  <strong>
                    &nbsp; How can I toggle between Dark & Light Mode ?
                  </strong>
                </span>
              </button>
            </h2>
            <div
              id="collapseFive"
              className="accordion-collapse collapse"
              aria-labelledby="headingFive"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                Just tap on the button given in the top right corner to enable
                'Dark Mode' and same to enable 'Light Mode'.
              </div>
            </div>
          </div>
          <div
            className="accordion-item"
            style={{
              color: props.mode === "dark" ? "white" : "black",
              backgroundColor: props.mode === "dark" ? "grey" : "white",
            }}
          >
            <h2 className="accordion-header" id="headingSix">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseSix"
                aria-expanded="false"
                aria-controls="collapseSix"
              >
                <span>
                  #6
                  <strong>&nbsp; How can I view the text summary ?</strong>
                </span>
              </button>
            </h2>
            <div
              id="collapseSix"
              className="accordion-collapse collapse"
              aria-labelledby="headingSix"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                First write/paste all your text intro the text-area and then
                just scroll down to the section 'Summary'.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

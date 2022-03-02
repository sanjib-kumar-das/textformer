import React from "react";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <>
      <nav
        className={`navbar navbar-expand-lg border border-top-0 rounded-bottom border-light navbar-${props.mode} bg-${props.mode}`}
      >
        <div className="container-fluid">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            fill={`${props.mode === "light" ? "black" : "white"}`}
            class="bi bi-textarea-t"
            viewBox="0 0 16 16"
          >
            <path d="M1.5 2.5A1.5 1.5 0 0 1 3 1h10a1.5 1.5 0 0 1 1.5 1.5v3.563a2 2 0 0 1 0 3.874V13.5A1.5 1.5 0 0 1 13 15H3a1.5 1.5 0 0 1-1.5-1.5V9.937a2 2 0 0 1 0-3.874V2.5zm1 3.563a2 2 0 0 1 0 3.874V13.5a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V9.937a2 2 0 0 1 0-3.874V2.5A.5.5 0 0 0 13 2H3a.5.5 0 0 0-.5.5v3.563zM2 7a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm12 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
            <path d="M11.434 4H4.566L4.5 5.994h.386c.21-1.252.612-1.446 2.173-1.495l.343-.011v6.343c0 .537-.116.665-1.049.748V12h3.294v-.421c-.938-.083-1.054-.21-1.054-.748V4.488l.348.01c1.56.05 1.963.244 2.173 1.496h.386L11.434 4z" />
          </svg>
          <Link className="navbar-brand text-warning h1 px-5 " to="/">
            {props.title}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="faq">
                  FAQs
                </Link>
              </li>
            </ul>
            <div className="d-flex justify-content-end">
              <form className="d-flex flex-row">
                {/* <button className="btn btn-outline-warning" type="submit">
                  Dark Mode
  </button> */}
                <div
                  className={`form-check form-switch text-${
                    props.mode === "light" ? "dark" : "light"
                  }`}
                >
                  <input
                    className="form-check-input"
                    onClick={props.toggleMode}
                    type="checkbox"
                    role="switch"
                    id="flexSwitchCheckDefault"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexSwitchCheckDefault"
                  >
                    Dark Mode
                  </label>
                </div>
              </form>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

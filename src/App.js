// import favicon from "../public";
import React from "react";
// import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import { useState } from "react";
import Alert from "./components/Alert";
import Faq from "./components/Faq";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark Mode has been enabled", "info");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been enabled", "info");
    }
  };
  return (
    <>
      <BrowserRouter>
        <Navbar title="TextFormer" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Textform
                heading="Welcome to TextFormer !!"
                mode={mode}
                showAlert={showAlert}
              />
            }
          ></Route>
          <Route
            exact
            path="faq"
            element={<Faq title="FAQs" mode={mode} heading="FAQs" />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

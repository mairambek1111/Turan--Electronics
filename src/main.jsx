import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// import AOS from "aos";
// import "aos/dist/aos.css";
// AOS.init();

// AOS.init({
//   disable: true,
//   startEvent: "DOMContentLoaded",
//   initClassName: "aos-init",
//   animatedClassName: "aos-animate",
//   useClassNames: true,
//   disableMutationObserver: false,
//   debounceDelay: 50,
//   throttleDelay: 99,
//   offset: 90,
//   delay: 0,
//   duration: 300,
//   easing: "ease",
//   once: false,
//   mirror: false,
//   anchorPlacement: "top-bottom",
// });

ReactDOM.createRoot(document.getElementById("root")).render(<App />);

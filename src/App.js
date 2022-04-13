import React, { useEffect } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import "./styles/css/reset.css";
import "./styles/css/app.css";

function App() {
  useEffect(() => {
    const faders = document.querySelectorAll(".fade-in");
    const widthBrowser = window.screen.width;
    if (widthBrowser >= 640) {
      const appearOptions = {
        threshold: 1,
        rootMargin: "0px 0px -100px 0px",
      };
      const appearOnScroll = new IntersectionObserver(function (
        entries,
        appearOnScroll
      ) {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          } else {
            entry.target.classList.add("appear");
            appearOnScroll.unobserve(entry.target);
          }
        });
      },
      appearOptions);

      faders.forEach((fader) => {
        appearOnScroll.observe(fader);
      });
    }
  }, []);

  return (
    <React.Fragment>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </React.Fragment>
  );
}

export default App;

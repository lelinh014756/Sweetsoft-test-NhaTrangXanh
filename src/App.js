import React, { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import NotFound from "./pages/NotFound/NotFound";
import { addWindowResizeEvent, removeWindowResizeEvent } from './utils/windowEvents';
import "./styles/css/reset.css";
import "./styles/css/app.css";

function App() {
  const [stateWidthBrowser, setStateWidthBrowser] = useState(window.innerWidth);
  useEffect(() => {
    const HandleResize = () => {
      const widthBrowser = window.screen.width;
      if (widthBrowser >= 640) {
        setStateWidthBrowser(640);
      } else {
        setStateWidthBrowser(639)
      }
    };

    addWindowResizeEvent(HandleResize);

    return () => {
      removeWindowResizeEvent(HandleResize);
    };
  }, []);
  useEffect(() => {
    const faders = document.querySelectorAll(".fade-in");
    if (stateWidthBrowser >= 640) {
      const appearOptions = {
        threshold: 0,
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
  }, [stateWidthBrowser]);

  return (
    <React.Fragment>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </React.Fragment>
  );
}

export default App;

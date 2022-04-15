import React, { useEffect, useState } from "react";
import * as windowEvents from '../../utils/windowEvents';
import Navbar from "../Navbar/Navbar";

const Header = () => {
  const [stateWidthBrowser, setStateWidthBrowser] = useState(window.innerWidth);
  const [scrollYBrowser, setScrollYBrowser] = useState(window.scrollY);
  useEffect(() => {
    const HandleResize = () => {
      const widthBrowser = window.screen.width;
      if (widthBrowser <= 639) {
        setStateWidthBrowser(widthBrowser);
      } else {
        setStateWidthBrowser(widthBrowser);
      }
    };
    const HandleWindowScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop >= 100) {
        setScrollYBrowser(100);
      } else {
        setScrollYBrowser(0);
      }
    };
    windowEvents.addWindowResizeEvent(HandleResize);
    windowEvents.addWindowScrollEvent(HandleWindowScroll);

    return () => {
      windowEvents.removeWindowResizeEvent(HandleResize)
      windowEvents.removeWindowScrollEvent(HandleWindowScroll)
    };
  }, []);

  useEffect(() => {
    const bg = "bg-[rgba(0,0,0,0.8)]";
    const header = document.querySelector("#header");
    if (scrollYBrowser >= 100) {
      if (stateWidthBrowser >= 640) {
        header.classList.add(bg);
        header.classList.remove("bg-white");
      } else {
        header.classList.add("bg-white");
        header.classList.remove(bg);
      }
    } else {
      header.classList.remove('bg-white');
      header.classList.remove(bg);
    }
  }, [stateWidthBrowser, scrollYBrowser]);

  return (
    <section
      id="header"
      className="fixed top-0 left-0 right-0 z-[100] sm:h-pc h-mobile"
    >
      <div className="grid-content flex justify-between lg:items-start items-center h-full pt-[4px]">
        <a
          href="#"
          className="header-logo lg:h-[100px] sm:h-full h-[60px] mr-[14px] flex items-center"
        >
          <img
            src={require("../../assets/logos/logo.png")}
            alt="logo Nha Trang Xanh"
            className="w-full lg:h-full sm:h-[75%] h-full object-cover"
          />
        </a>
        <Navbar scrollY={scrollYBrowser} innerWidth={stateWidthBrowser} />
      </div>
    </section>
  );
};

export default Header;

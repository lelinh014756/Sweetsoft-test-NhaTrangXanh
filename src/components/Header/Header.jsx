import React, { useEffect } from "react";
import Navbar from "../Navbar/Navbar";

const Header = () => {
  const $ = window.$;

  useEffect(() => {
    $(document).ready(function () {
      $(window).scroll(function () {
        const scrollTop = $(window).scrollTop();
        const header = $('#header');
        const widthBrowser = window.screen.width;
        if(scrollTop >= 100) {
          if(widthBrowser >= 640) {
            header.addClass('bg-[rgba(0,0,0,0.8)]');
            header.removeClass('bg-white');
          } else {
            header.addClass('bg-white');
            header.removeClass('bg-[rgba(0,0,0,0.8)]');
          }
        } else {
          header.removeClass('bg-[rgba(0,0,0,0.8)] bg-white')
        }
      });
    });
    return () => {
      $(window).unbind('scroll');
    }
  }, []);

  return (
    <section id="header" className="fixed top-0 left-0 right-0 z-[100] sm:h-pc h-mobile">
      <div className="grid-content flex justify-between items-start h-full pt-[4px]">
        <a href="#" className="header-logo lg:h-[100px] sm:h-full h-[60px] mr-[14px] flex items-center">
          <img
            src={require("../../assets/logos/logo.png")}
            alt="logo Nha Trang Xanh"
            className="w-full lg:h-full sm:h-[75%] h-full object-cover"
          />
        </a>
        <Navbar />
      </div>
    </section>
  );
};

export default Header;

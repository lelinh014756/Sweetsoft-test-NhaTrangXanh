import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

import "./Navbar.css";

const listNavbar = [
  {
    name: "Trang chủ",
    pathLink: "/",
  },
  {
    name: "Giới thiệu",
    pathLink: "/gioi-thieu",
  },
  {
    name: "Sản phẩm",
    pathLink: "/san-pham",
  },
  {
    name: "Dịch vụ",
    pathLink: "/dich-vu",
  },
  {
    name: "Tin tức",
    pathLink: "/tin-tuc",
  },
  {
    name: "Dự án",
    pathLink: "/du-an",
  },
  {
    name: "Liên hệ",
    pathLink: "/lien-he",
  },
];

const Navbar = ({scrollY, innerWidth}) => {

  useEffect(() => {
      const navbar = document.querySelectorAll("#navbar span");
      navbar.forEach((item) => {
        if (scrollY >= 100) {
          if (innerWidth <= 639) {
            item.classList.add("bg-[#36383f]");
            item.classList.remove("bg-white");
          } else {
            item.classList.remove("bg-[#36383f]");
            item.classList.add("bg-white")
          }
        } else {
          item.classList.add("bg-white");
          item.classList.remove("bg-[#36383f]");
        }
      });
  }, );
  return (
    <section id="navbar" className="lg:static relative">
      <input id="toggleMenu" type="checkbox" />
      <span className="bg-white"></span>
      <span className="bg-white"></span>
      <span className="bg-white"></span>
      <label
        htmlFor="toggleMenu"
        className="navbar-wrapper lg:pt-[16px] pt-[60px] lg:flex justify-between items-center lg:static fixed top-0 right-0 lg:h-[unset] h-[100vh] lg:w-[unset] w-[220px] "
      >
        <div className="flex lg:flex-row flex-col justify-between lg:items-center lg:static absolute top-0 right-0 lg:h-[unset] h-[100vh] lg:w-[unset] sm:w-[300px] w-[220px] bg-white lg:!bg-transparent lg:pt-[unset] sm:pt-[80px] pt-[60px] lg:pr-[unset] pr-[16px]">
          <ul className="nav lg:flex block">
            {listNavbar.length &&
              listNavbar.map((item, index) => {
                if (item.name === "Sản phẩm") {
                  return (
                    <li key={index} className="nav-item">
                      <NavLink
                        to={item.pathLink}
                        data-item={item.name}
                        className="nav-link"
                        activeclassname="active"
                      >
                        {item.name}
                      </NavLink>
                      <i className="fa-solid fa-angle-down"></i>
                    </li>
                  );
                } else {
                  return (
                    <li key={index} className="nav-item">
                      <NavLink
                        to={item.pathLink}
                        data-item={item.name}
                        className="nav-link"
                        activeclassname="active"
                      >
                        {item.name}
                      </NavLink>
                    </li>
                  );
                }
              })}
          </ul>
          <ul className="lg:static absolute bottom-0 left-[50%] lg:translate-x-[unset] translate-x-[-50%] nav-contacts flex justify-center items-center">
            <li className="nav-contact-item">
              <a href="#">
                <i className="fa-solid fa-envelope nav-contact-icon"></i>
              </a>
            </li>
            <li className="nav-contact-item">
              <a href="#">
                <i className="fa-solid fa-phone-flip nav-contact-icon"></i>
              </a>
            </li>
            <li className="nav-contact-item">
              <a href="#">
                <i className="fa-brands fa-facebook-f nav-contact-icon"></i>
              </a>
            </li>
          </ul>
        </div>
      </label>
    </section>
  );
};

export default Navbar;

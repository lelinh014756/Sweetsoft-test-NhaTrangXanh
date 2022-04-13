import React, { useEffect } from "react";
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

const Navbar = () => {
  useEffect(() => {
    window.addEventListener("scroll", () => {
      const scrollTop = window.scrollY;
      const navbars = document.querySelectorAll("#navbar span");
      navbars.forEach((navbar) => {
        if (scrollTop >= 100) {
          navbar.classList.add("bg-[#36383f]");
          navbar.classList.remove("bg-white");
        } else {
          navbar.classList.add("bg-white");
          navbar.classList.remove("bg-[#36383f]");
        }
      });
    });
    return () => {
      window.removeEventListener('scroll')
    }
  }, []);
  return (
    <section
      id="navbar"
      className="sm:static fixed top-0 right-0 sm:pt-[unset] pt-[22px] sm:pr-[unset] pr-[16px]"
    >
      <input id="toggleMenu" type="checkbox" />
      <span className="bg-white"></span>
      <span className="bg-white"></span>
      <span className="bg-white"></span>
      <label htmlFor="toggleMenu" className="navbar-wrapper sm:pt-[16px] pt-[60px] sm:flex justify-between items-center sm:static absolute top-0 right-0 sm:h-[unset] h-[100vh] sm:w-[unset] w-[220px] ">
        <div className="flex sm:flex-row flex-col justify-between sm:items-center sm:static absolute top-0 right-0 sm:h-[unset] h-[100vh] sm:w-[unset] w-[220px] bg-white sm:!bg-transparent sm:pt-[unset] pt-[60px] sm:pr-[unset] pr-[16px]">
          <ul className="nav sm:flex block">
            {listNavbar.length &&
              listNavbar.map((item, index) => {
                if (item.name === "Sản phẩm") {
                  return (
                    <li key={index} className="nav-item">
                      <NavLink
                        to={item.pathLink}
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
          <ul className="sm:static absolute bottom-0 left-[50%] sm:translate-x-[unset] translate-x-[-50%] nav-contacts flex justify-center items-center">
            <li className="nav-contact-item">
              <i className="fa-solid fa-envelope nav-contact-icon"></i>
            </li>
            <li className="nav-contact-item">
              <i className="fa-solid fa-phone-flip nav-contact-icon"></i>
            </li>
            <li className="nav-contact-item">
              <i className="fa-brands fa-facebook-f nav-contact-icon"></i>
            </li>
          </ul>
        </div>
      </label>
    </section>
  );
};

export default Navbar;

import React, { useEffect } from "react";
import { listSliderHome } from "../../../fakeData/dataSliderHome";
import { Link } from "react-router-dom";
import "./SlickHome.css";

const SliderHome = () => {
  const $ = window.$;
  useEffect(() => {
    $(".slider-home__list").slick({
      arrows: true,
      autoplay: true,
      autoplaySpeed: 3000,
      prevArrow:
        "<button type='button' class='slick-arrow slick-prev'><i class='fa-solid fa-angle-left'></i></button>",
      nextArrow:
        "<button type='button' class='slick-arrow slick-next'><i class='fa-solid fa-angle-right'></i></button>",
    });
  }, []);

  return (
    <section id="slider-home" className="grid-container">
      <ul className="slider-home__list">
        {listSliderHome.map((item, id) => (
          <li key={id}>
            <div className="relative w-full sm:h-[878px] h-[578px]">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-0 left-0 right-0 bottom-0 bg-[rgba(0,0,0,0.4)] flex justify-center items-center flex-col">
                <h2 className="sm:text-[10.2rem] text-[5.2rem] text-white text-center font-[300] sm:mb-0 mb-[20px]">
                  {item.title}
                </h2>
                <h3 className="lg:text-[3.6rem] sm:text-[3rem] sm:w-[80%] text-[1.6rem] max-w-[960px] text-white text-center font-[400]">
                  {item.content}
                </h3>
                <Link
                  to="/"
                  className="uppercase relative sm:text-[2rem] text-[1.8rem] leading-[2rem] text-white font-[600] sm:px-[61px] px-[41px] sm:py-[17px] py-[14px] rounded-[6px] bg--primary mt-[38px] btn--effect-sliding-light hover:opacity-[0.9]"
                >
                  <span>Xem thêm</span>
                </Link>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default SliderHome;

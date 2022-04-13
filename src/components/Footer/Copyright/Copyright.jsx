import React from "react";

const iconsSocial = [
  <i className="group-hover:text-[#166fe5] fa-brands fa-facebook-f"></i>,
  <i className="group-hover:text-[#ff0000] fa-brands fa-youtube"></i>,
  <i className="group-hover:text-[#df43ca] fa-brands fa-instagram"></i>,
];

const Copyright = () => {
  return (
    <section id="copyright" className="bg-[#272727] py-[20px]">
      <div className="grid-content flex sm:flex-row flex-col justify-between items-center">
        <p className="sm:text-[1.4rem] text-[1.5rem] text-[#878787] sm:text-left text-center sm:mb-0 mb-[20px]">
          Công ty TNHH Môi Trường - Xây Dựng Nha Trang © 2020. Thiết kế và phát
          triển bởi{" "}
          <a href="https://www.sweetsoft.vn/" target='_blank' className="text-primary_text hover:text-white transition-all">
            Sweetsoft JSC
          </a>
        </p>
        <ul className="flex justify-center gap-x-[20px] items-center">
          {iconsSocial.length &&
            iconsSocial.map((icon, index) => (
              <li key={index} className="text-[1.5rem] text-white group cursor-pointer">
                {icon}
              </li>
            ))}
        </ul>
      </div>
    </section>
  );
};

export default Copyright;

import React from "react";
import Copyright from "./Copyright/Copyright";

const Footer = () => {
  const listLinkSpeed = [
    {
      name: "Trang chủ",
      link: "#",
    },
    {
      name: "Sản phẩm",
      link: "#",
    },
    {
      name: "Dịch vụ",
      link: "#",
    },
    {
      name: "Dự án",
      link: "#",
    },
    {
      name: "Thư viện hình ảnh",
      link: "#",
    },
    {
      name: "Thư viện Videos",
      link: "#",
    },
  ];

  const comments = [
    {
      name: "Phùng Văn Thỉnh",
      content:
        "Nha Trang Xanh đã trở thành đối tác quan trọng cung cấp tất cả các dịch vụ vệ sinh công nghiệp, cung ứng quy trình vệ sinh văn phòng.",
    },
    {
      name: "Nguyễn Thanh Xuân",
      content:
        "Nha Trang Xanh cung cấp dịch vụ vệ sinh chuyên nghiệp cho công ty chúng tôi, chúng tôi rất hài lòng về chất lượng dự án cũng như.",
    },
  ];

  const contacts = [
    {
      name: "Địa chỉ",
      content: "214 Đường 23/10, P. Phương Sơn, TP. Nha Trang",
      icon: <i className="fa-solid fa-location-dot"></i>,
    },
    {
      name: "Hotline",
      content: "0913 460 707",
      icon: <i className="fa-solid fa-phone"></i>,
    },
    {
      name: "Email",
      content: "info@nhatrangxanh.com",
      icon: <i className="fa-solid fa-envelope"></i>,
    },
  ];

  return (
    <section id="footer" className="bg-[#333333] sm:pt-[60px] pt-[40px]">
      <div className="grid-content flex sm:flex-row flex-col justify-between pb-[60px] sm:px-0 px-[32px]">
        <div className="flex-1 flex sm:flex-row flex-col gap-x-[30px]">
          <div className="flex-1 sm:mb-0 mb-[60px]">
            <div className="sm:h-[90px] h-[60px] mb-[20px]">
              <img
                src={require("../../assets/logos/logo.png")}
                alt="logo bách hoá xanh"
                className="sm:w-full w-[unset] h-full object-cover"
              />
            </div>
            <p className="text-[1.4rem] text-[#878787] leading-[1.7] sm:text-justify text-center">
              Công ty TNHH Môi Trường - Xây Dựng Nha Trang Xanh mong muốn xây
              dựng một thương hiệu uy tín, một địa chỉ đáng tin cậy để đưa các
              sản phẩm, các dịch vụ của Công ty đến với Quý khách.
            </p>
          </div>
          <div className="flex-1 sm:mb-0 mb-[30px]">
            <h4 className="text-[2rem] text-white font-light uppercase mb-[26px]">
              Liên kết nhanh
            </h4>
            <ul>
              {listLinkSpeed?.length &&
                listLinkSpeed.map((item, index) => (
                  <li key={index} className="sm:text-[1.4rem] text-[1.8rem] sm:mb-[8px] mb-[16px]">
                    <a
                      className="text-primary_text hover:text-white transition-all"
                      href={item.link}
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
            </ul>
          </div>
        </div>
        <div className="flex-1 flex sm:flex-row flex-col gap-x-[35px]">
          <div className="flex-1 sm:mb-0 mb-[40px]">
            <h4 className="text-[2rem] text-white font-light uppercase mb-[26px]">
              Những ý kiến gần đây
            </h4>
            <ul>
              {comments.length &&
                comments.map((comment, index) => (
                  <li key={index} className="mb-[5px] last:mb-0">
                    <h4 className="text-[#878787] sm:text-[1.3rem] text-[1.4rem] font-light leading-[1.8]">
                      <i>{comment.name}</i>
                    </h4>
                    <p className="text-white sm:text-[1.2rem] text-[1.4rem] font-light leading-[1.8]">
                      {comment.content}
                    </p>
                  </li>
                ))}
            </ul>
          </div>
          <div className="flex-1">
            <h4 className="text-[2rem] text-white font-light uppercase mb-[26px]">
              Liên hệ
            </h4>
            <ul>
              {contacts.length &&
                contacts.map((contact, index) => (
                  <li key={index} className="leading-[1.6] mb-[4px] last:mb-0">
                    <span className="text-[1.5rem] text-[#848484] w-[1.5rem] mr-[8px]">{contact.icon}</span>
                    <span className="text-[1.4rem] text-[#848484] font-semibold">
                      {contact.name}: 
                      <span className="font-normal text-primary_text"> {contact.content}</span>
                    </span>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
      <Copyright />
    </section>
  );
};

export default Footer;

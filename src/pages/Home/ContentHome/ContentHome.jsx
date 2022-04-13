import React from "react";
import { listNewProject } from "../../../fakeData/dataNewProjects";
import "./ContentHome.css";

const ContentHome = () => {
  return (
    <section id="content-home">
      <div className="pt-[44px] pb-[50px] bg-[#f3f3f3]">
        <div className="grid-content">
          <h2 className="content-home__heading mb-[33px]">Giới thiệu</h2>
          <div className="card w-full border-none bg-transparent">
            <div className="sm:flex gap-x-[30px] flex-nowrap">
              <div className="col-md-6 col-sm-12 p-0 h-[298px] overflow-hidden rounded-[10px] group fade-in from-left sm:mb-0 mb-[12px]">
                <img
                  src={require("../../../assets/images/contentHome/banner-about.jpg")}
                  alt="banner-about1"
                  className="w-full h-full object-cover group-hover:scale-[1.2] transition-all"
                />
              </div>
              <div className="col-md-6 col-sm-12 p-0 fade-in from-right">
                <div className="card-body pt-[4px]">
                  <h2 className="card-title sm:text-[2.8rem] text-[2.6rem] sm:text-left text-center leading-[3.6rem] text-[#2b2b2b] uppercase font-[600] max-w-[412px] gap-y-[12px] sm:mb-[36px] mb-[30px]">
                    Công ty TNHH môi trường xây dựng Nha Trang Xanh
                  </h2>
                  <p className="mb-[25px]">
                    Cùng với sự phát triển mạnh mẽ không ngừng của đất nước, đô
                    thị hóa, cơ sở hạ tầng đang mở ra cho đất nước Việt Nam một
                    bước tiến rộng lớn. Chính vì thế, công tác bảo vệ môi trường
                    được quan tâm hàng đầu đối với Cộng đồng và Doanh nghiệp.
                  </p>
                  <p>
                    Công ty TNHH Môi Trường - Xây Dựng Nha Trang Xanh mong muốn
                    xây dựng một thương hiệu uy tín, một địa chỉ đáng tin cậy để
                    đưa các sản phẩm, các dịch vụ của Công ty đến với Quý khách.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-[44px] pb-[50px] bg-white">
        <div className="grid-content">
          <h2 className="content-home__heading mb-[33px]">Dự án mới nhất</h2>
          <ul className="row gy-4">
            {listNewProject.map((project) => (
              <li key={project.id} className="col-md-4 fade-in">
                <div className="h-[202px] border rounded-[10px] overflow-hidden relative group cursor-pointer">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute right-0 bottom-0 left-0 h-[69px] px-[14px] py-[12px] bg-[rgba(0,0,0,0.8)] group-hover:h-[100%] group-hover:bg-[rgba(0,0,0,0.4)]  duration-[0.25s]">
                    <h3 className="text-[2rem] text-white font-[600] sm:h-[unset] h-[48px] mb-[16px]">{project.title}</h3>
                    <p className="text-[1.4rem] text-white mb-[14px] .text--truncate .line-clamp-3">{project.content}</p>
                    <button className="py-[4px] px-[20px] text-[1.4rem] text-white bg--primary font-bold rounded-lg uppercase hover:opacity-[0.85] transition-all">Xem thêm</button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ContentHome;

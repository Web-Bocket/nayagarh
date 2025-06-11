import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const Hero = () => {
  const PIDetails = [
    {
      num: "962789",
      details: "Population",
    },
    {
      num: "1702",
      details: "Village",
    },
    {
      num: "8",
      details: "Tahasils",
    },
    {
      num: "1",
      details: "Sub divisions",
    },
    {
      num: "8",
      details: "Bolcks",
    },
    {
      num: "14",
      details: "P S",
    },
    {
      num: "194",
      details: "GP",
    },
    {
      num: "5",
      details: "NACs",
    },
  ];
  return (
    <div className="flex bg-gradient-to-r from-[#63C2FC] to-[#075785] dark:from-[#0A1F2D] dark:to-[#0A1F2D] text-white">
      <div className="m-5 border-8 border-white w-[900px] dark:border-black">
        <Swiper
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img
              src="https://nayagarh.odisha.gov.in/sites/default/files/styles/home/public/2023-08/Nayagarh-06.jpg?itok=b-y8-gsg"
              alt="Front pic"
              className="w-full"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://nayagarh.odisha.gov.in/sites/default/files/styles/home/public/2023-08/Nayagarh-01.jpg?itok=e-Bv0SR9"
              alt="2 front pic"
              className="w-full"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://nayagarh.odisha.gov.in/sites/default/files/styles/home/public/2023-08/Nayagarh-03.jpg?itok=p0V6JikM"
              alt=""
              className="w-full"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://nayagarh.odisha.gov.in/sites/default/files/styles/home/public/2023-08/Nayagarh-05.jpg?itok=818ALWBH"
              alt=""
              className="w-full"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMToPphqulJGsFcDiHi-u5uDAk-oYt7V2K2w&s"
              alt=""
              className="w-full h-[402px]"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://nayagarh.odisha.gov.in/sites/default/files/styles/home/public/2023-08/Nayagarh-04.jpg?itok=broMFnZm"
              alt=""
              className="w-full"
            />
          </SwiperSlide>
            <SwiperSlide>
            <img
              src="https://odishatour.in/wp-content/uploads/2024/01/fategarh-ram-mandir-nayagarh.jpg"
              alt=""
              className="w-full h-[402px]"
            />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="flex pt-5 gap-5">
        <div className="space-y-5">
          <div className="relative w-fit mx-auto">
            <div className="bg-white dark:bg-gray-400 text-blue-900 font-bold px-14 py-2 text-center text-sm">
              PUBLIC INFORMATION
            </div>
            <div className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-52 h-2 border-x-[135px] border-x-transparent border-t-[11px] border-t-white dark:border-t-gray-400"></div>
          </div>
          <div className="grid grid-cols-2 gap-5">
            {PIDetails.map((data, index) => (
              <div className="rounded bg-gradient-to-br from-[#048DDB] to-[#4DB6F7] p-3 hover:bg-gradient-to-tl dark:hover:bg-gradient-to-br dark:hover:from-[#048DDB] dark:hover:to-[#4DB6F7] dark:bg-gradient-to-br dark:from-[#2e2e2e] dark:to-[#3d3d3d] shadow-lg">
                <h1 className="text-lg font-bold text-center text-white">
                  {data.num}
                </h1>
                <p className="text-center text-teal-200 font-semibold">
                  {data.details}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-5 py-20">
          <div>
            <div className="flex justify-center items-center">
              <img
                src="https://nayagarh.odisha.gov.in/sites/default/files/2024-10/df1bf36e-ff65-4023-8c39-04a1e9dba84d.jpg"
                alt="IAS"
                className="w-20 h-20 rounded-full border-2 border-white"
              />
            </div>
            <h1 className="text-white font-bold text-center">
              Sri Akshay Sunil Agrawal, I.A.S
            </h1>
            <p className="text-white font-semibold text-center">
              Collector & District Magistrate
            </p>
          </div>
          <div>
            <div className="flex justify-center items-center">
              <img
                src="https://nayagarh.odisha.gov.in/sites/default/files/2024-10/susree1_0.jpg"
                alt=""
                className="w-20 h-20 rounded-full items-center border-2 border-white"
              />
            </div>
            <h1 className="text-white font-bold text-center">
              Mrs. S. Susree, I.P.S
            </h1>
            <p className="text-white font-semibold text-center">
              Superintendent of Police
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;

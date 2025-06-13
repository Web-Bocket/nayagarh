import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const MapOfDistrict = () => {
  const Location = useLocation();
  const navigate = useNavigate();
  const getLinkClass = (path) => {
    console.log("path======>", path);
    return Location.pathname === path
      ? "p-4 bg-[#5bba22] cursor-pointer"
      : "p-4 hover:bg-[#5bba22] cursor-pointer";
  };
  return (
    <div className="bg-white dark:bg-black dark:text-yellow-300">
      <div>
        <div>
          <img
            src="https://nayagarh.odisha.gov.in/sites/default/files/2023-08/Inner-Banner-Nayagarh%20%281%29.jpg"
            alt=""
          />
        </div>
        <div className="px-10 py-5">
          <div>
            <h1 className="font-bold text-2xl opacity-85">Map Of History</h1>
          </div>
        </div>
      </div>

      <div className=" px-10 flex flex-col lg:flex-row gap-8 py-5">
        <div className=" shadow-2xl rounded-b-xl border-b-green-700 border-b-2 ">
          <ul className="w-56  divide-y divide-gray-200">
            <li
              className={getLinkClass("/History")}
              onClick={() => navigate("/History")}
            >
              History
            </li>
            <li
              className={getLinkClass("/MapOfDistrict")}
              onClick={() => navigate("/MapOfDistrict")}
            >
              Map of District
            </li>
            <li className="p-4 hover:bg-[#5bba22] cursor-pointer">
              Administrative Setup <span class="mr-2"></span>
            </li>
            <ul className="bg-[#dafbc6] dark:bg-black">
              <div
                className={getLinkClass("/Tahasil")}
                onClick={() => navigate("/Tahasil")}
              >
                <li className="pl-8 pr-4 flex items-center">
                  <span className="mr-2">➢</span> Tahasil
                </li>
              </div>
              <div
                className={getLinkClass("/Police")}
                onClick={() => navigate("/Police")}
              >
                <li className="pl-8 pr-4  flex items-center cursor-pointer">
                  <span className="mr-2">➢</span> Police{" "}
                </li>
              </div>
              <div
                className={getLinkClass("/Subdivisions")}
                onClick={() => navigate("/Subdivisions")}
              >
                <li className="pl-8 pr-4 flex items-center cursor-pointer">
                  <span className="mr-2">➢</span> Subdivision & Blocks
                </li>
              </div>
            </ul>
            <li
              className={getLinkClass("/Demography")}
              onClick={() => navigate("/Demography")}
            >
              Demography
            </li>
          </ul>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29969.384468213684!2d85.08340608660646!3d20.12682649880104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a187b2cc5e2274d%3A0x4515921059955452!2sNayagarh%2C%20Odisha!5e0!3m2!1sen!2sin!4v1749298568437!5m2!1sen!2sin"
          width="600"
          height="650"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Interactive Map of Nayagarh, Odisha"
        ></iframe>
      </div>
    </div>
  );
};
export default MapOfDistrict;

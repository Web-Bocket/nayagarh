import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Recuirtment = () => {
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
            <h1 className="font-bold text-2xl opacity-85">Recuirtment</h1>
          </div>
        </div>
      </div>

      <div className=" px-10 flex flex-col md:flex-row mb-3 gap-8">
        <div className=" shadow-2xl  ">
          <ul className="w-56  divide-y divide-gray-200">
            <li
              className={getLinkClass("/DisasterManagement")}
              onClick={() => navigate("/DisasterManagement")}
            >
              Disaster Management
            </li>
            <li
              className={getLinkClass("/Helpline")}
              onClick={() => navigate("/Helpline")}
            >
              Helpline
            </li>
            <li
              className={getLinkClass("/TelephoneDirectory")}
              onClick={() => navigate("/TelephoneDirectory")}
            >
              Telephone Directory
            </li>
            <li className="p-4 hover:bg-[#5bba22] cursor-pointer">
              Notices <span class="mr-2"></span>
            </li>
            <ul className="bg-[#dafbc6] dark:bg-black">
              <div
                className={getLinkClass("/Advertisement")}
                onClick={() => navigate("/Advertisement")}
              >
                <li className="pl-8 pr-4 flex items-center">
                  <span className="mr-2">➢</span> Advertisement
                </li>
              </div>
              <div
                className={getLinkClass("/Annoucements")}
                onClick={() => navigate("/Annoucements")}
              >
                <li className="pl-8 pr-4  flex items-center cursor-pointer">
                  <span className="mr-2">➢</span> Annoucements
                </li>
              </div>
              <div
                className={getLinkClass("/Recuirtment")}
                onClick={() => navigate("/Recuirtment")}
              >
                <li className="pl-8 pr-4 flex items-center cursor-pointer">
                  <span className="mr-2">➢</span> Recuirtment
                </li>
              </div>
            </ul>
          </ul>
        </div>
        <div>
          <h1 className="dark:text-white">no content available</h1>
        </div>
      </div>
    </div>
  );
};

export default Recuirtment;

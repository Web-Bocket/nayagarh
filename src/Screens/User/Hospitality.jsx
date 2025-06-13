import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Hospitality = () => {
  const Location = useLocation();
  const navigate = useNavigate();
  const getLinkClass = (path) => {
    console.log("path======>", path);
    return Location.pathname === path
      ? "p-4 bg-[#5bba22] cursor-pointer"
      : "p-4 hover:bg-[#5bba22] cursor-pointer";
  };
  return (
    <div>
      <div>
        <div>
          <img
            src="https://nayagarh.odisha.gov.in/sites/default/files/2023-08/Inner-Banner-Nayagarh%20%281%29.jpg"
            alt="Banner"
          />
        </div>
        <div className="px-10 py-5">
          <div>
            <h1 className="font-bold text-2xl opacity-85">Hospitality</h1>
          </div>
        </div>
      </div>

      <div className=" px-10 flex flex-col lg:flex-row gap-8 py-5">
        <div className=" shadow-2xl  ">
          <ul className="w-56  divide-y divide-gray-200">
            <li
              className={getLinkClass("/Hospitals")}
              onClick={() => navigate("/Hospitals")}
            >
              Hospitals
            </li>
            <li
              className={getLinkClass("/Schools")}
              onClick={() => navigate("/Schools")}
            >
              Schools
            </li>
            <li
              className={getLinkClass("/CollegeUniversities")}
              onClick={() => navigate("/CollegeUniversities")}
            >
              College / Universities
            </li>
            <li
              className={getLinkClass("/Banks")}
              onClick={() => navigate("/Banks")}
            >
              Banks
            </li>
          </ul>
        </div>
        <h1>no content available</h1>
      </div>
    </div>
  );
};

export default Hospitality;

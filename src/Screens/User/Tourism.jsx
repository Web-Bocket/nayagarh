import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Tourism = () => {
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
            alt=""
          />
        </div>
        <div className="px-10 py-5">
          <div>
            <h1 className="font-bold text-2xl opacity-85">Tourism</h1>
          </div>
        </div>
      </div>

      <div className=" px-10 flex gap-8">
        <div className=" shadow-2xl  ">
          <ul className="w-56  divide-y divide-gray-200">
            <li
              className={getLinkClass("/HowToReach")}
              onClick={() => navigate("/HowToReach")}
            >
              How To Reach
            </li>
            <li
              className={getLinkClass("/TouristPlaces")}
              onClick={() => navigate("/TouristPlaces")}
            >
              Tourist Places
            </li>
            <li
              className={getLinkClass("/TouristAssistance")}
              onClick={() => navigate("/TouristAssistance")}
            >
              Tourist Assistance
            </li>
            <li
              className={getLinkClass("/FairAndFestivals")}
              onClick={() => navigate("/FairAndFestivals")}
            >
              Fair & Festivals
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Tourism;

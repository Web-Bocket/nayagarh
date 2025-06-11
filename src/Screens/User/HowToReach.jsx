import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const HowToReach = () => {
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
            <h1 className="font-bold text-2xl opacity-85">How To Reach</h1>
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
        <div className="max-w-2xl  p-4">
          <h2 className="text-2xl font-bold mb-4">Transport Options</h2>

          <div className="mb-6">
            <h3 className="text-xl font-semibold">By Air:</h3>
            <p className="text-gray-700 dark:text-white">
              Nearest Airport : Biju Pattnaik International Airport, Bhubaneswar
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold">By Rail:</h3>
            <p className="text-gray-700 dark:text-white">
              Nearest Railway Station is Nayagarh Town Railway Station - (3
              Kms), Khordha Road Railway Station - (69 kms) away
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold">By Road:</h3>
            <p className="text-gray-700 dark:text-white">
              Tourists can reach Nayagarh by choosing the state highway NH-57.
              It is located approximately 90 kms away from state capital
              Bhubaneswar. Frequently bus services are available from
              Bhubaneswar and all major towns of Odisha.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HowToReach;

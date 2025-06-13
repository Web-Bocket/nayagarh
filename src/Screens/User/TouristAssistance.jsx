import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const TouristAssistance = () => {
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
            <h1 className="font-bold text-2xl opacity-85">
              Tourist Assistance
            </h1>
          </div>
        </div>
      </div>

      <div className=" px-10 flex flex-col lg:flex-row gap-8">
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
        <div>
          <p className="mb-2">Contact Details</p>

          <div className="mb-8">
            <table className="border-collapse border w-full ">
              <thead className="bg-[#245e03] text-white ">
                <tr>
                  <td className="border border-gray-400 p-3 ">Office Name</td>
                  <td className="border border-gray-400 p-3">Details</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-400 p-3">
                    Tourist Office ,At-Pathanisamanta Sanskruti
                    Bhawan,Nayagarh-752069
                  </td>
                  <td className="border border-gray-400 text-[#5bba22] p-3">
                    Sri Debadutta Rath,District Tourist Officer
                  </td>
                </tr>

                <tr>
                  <td className="border border-gray-400 p-3">
                    Superintendant of Police
                  </td>
                  <td className="border border-gray-400 text-[#5bba22] p-3">
                    06753-252088,Helpline-100
                  </td>
                </tr>

                <tr>
                  <td className="border border-gray-400 p-3">
                    Divisional Forest Officer(Wild Life)
                  </td>
                  <td className="border border-gray-400 text-[#5bba22] p-3">
                    06753-253971
                  </td>
                </tr>

                <tr>
                  <td className="border border-gray-400 p-3">
                    Sidhamula Eco Tourism Centre-(DFO Territorial)
                  </td>
                  <td className="border border-gray-400 text-[#5bba22] p-3">
                    06753-225226
                  </td>
                </tr>

                <tr>
                  <td className="border border-gray-400 p-3">
                    CDMO,District HQ Hospital
                  </td>
                  <td className="border border-gray-400 text-[#5bba22] p-3">
                    06753-252189
                  </td>
                </tr>

                <tr>
                  <td className="border border-gray-400 p-3">Transport</td>
                  <td className="border border-gray-400 text-[#5bba22] p-3">
                    All kind of vehicles are available on hire in Nayagarh
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TouristAssistance;

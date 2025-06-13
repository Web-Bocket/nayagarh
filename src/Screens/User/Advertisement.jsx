import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Advertisement = () => {
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
            <h1 className="font-bold text-2xl opacity-85">Advertisement</h1>
          </div>
        </div>
      </div>

      <div className=" px-10 flex flex-col lg:flex-row gap-8 py-5">
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
          <table>
            <thead>
              <tr>
                <th className="bg-green-800 text-white p-2 text-left text-sm border-2">
                  Sr. No.
                </th>
                <th className="bg-green-800 text-white p-2 text-left text-sm border-2">
                  Title
                </th>
                <th className="bg-green-800 text-white p-2 text-left text-sm border-2">
                  Description
                </th>
                <th className="bg-green-800 text-white p-2 text-left text-sm border-2">
                  Start Date
                </th>
                <th className="bg-green-800 text-white p-2 text-left text-sm border-2">
                  End Date
                </th>
                <th className="bg-green-800 text-white p-2 text-left text-sm border-2">
                  End Time
                </th>
                <th className="bg-green-800 text-white p-2 text-left text-sm border-2">
                  Download/Details
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border-2 p-2">1</td>
                <td className="border-2 p-2">
                  ADVERTISEMENT FOR ENGAGEMENT OF GUEST FACULTY
                </td>
                <td className="border-2 p-2">
                  ADVERTISEMENT FOR ENGAGEMENT OF GUEST FACULTY IN GOVERNMENT
                  HIGHER SECONDARY SCHOOL, MAHIPUR
                </td>
                <td className="border-2 p-2">30-05-2025</td>
                <td className="border-2 p-2">14-06-2025</td>
                <td className="border-2 p-2">12 noon</td>
                <td className="border-2 p-2">
                  ENGAGEMENT OF GUEST FACULTY (489.09 KB)
                </td>
              </tr>
              <tr>
                <td className="border-2 p-2">2</td>
                <td className="border-2 p-2">
                  Advertisement relating to the recruitment of various base
                  level Group-C posts of this Judgeship for the year 2025
                </td>
                <td className="border-2 p-2">
                  Advertisement relating to the recruitment of various base
                  level Group-C posts of this Judgeship for the year 2025
                </td>
                <td className="border-2 p-2">22-05-2025</td>
                <td className="border-2 p-2">18-06-2025</td>
                <td className="border-2 p-2">5.00 P.M</td>
                <td className="border-2 p-2">
                  Advertisement for base level Group-C posts (282.09 KB)
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Advertisement;

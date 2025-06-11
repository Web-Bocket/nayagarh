import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Helpline = () => {
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
            <h1 className="font-bold text-2xl opacity-85">Helpline</h1>
          </div>
        </div>
      </div>

      <div className=" px-10 flex gap-8 py-5">
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
          <table className="border-2">
            <caption className="text-left">List of Helpline</caption>
            <thead>
              <tr>
                <th className="bg-green-800 text-white text-left p-2 border-2">
                  Helpline Names
                </th>
                <th className="bg-green-800 text-white text-left p-2 border-2">
                  Number
                </th>
              </tr>
            </thead>
            <tbody className="border-2">
              <tr>
                <td className="p-2 border-2">Local Police Station</td>
                <td className="p-2 border-2">100</td>
              </tr>
              <tr>
                <td className="p-2 border-2">Fire station</td>
                <td className="p-2 border-2">101</td>
              </tr>
              <tr>
                <td className="p-2 border-2">Ambulance</td>
                <td className="p-2 border-2">108</td>
              </tr>
              <tr>
                <td className="p-2 border-2">Janani Express</td>
                <td className="p-2 border-2">102</td>
              </tr>
              <tr>
                <td className="p-2 border-2">Women Helpline</td>
                <td className="p-2 border-2">181</td>
              </tr>
              <tr>
                <td className="p-2 border-2">Child Helpline</td>
                <td className="p-2 border-2">1098</td>
              </tr>
              <tr>
                <td className="p-2 border-2">Elder Person Helpline</td>
                <td className="p-2 border-2">1090</td>
              </tr>
              <tr>
                <td className="p-2 border-2">Traffic Helpline</td>
                <td className="p-2 border-2">1095</td>
              </tr>
              <tr>
                <td className="p-2 border-2">Electricity Issues Helpline</td>
                <td className="p-2 border-2">1912</td>
              </tr>
              <tr>
                <td className="p-2 border-2">N.H.A.I Helpline</td>
                <td className="p-2 border-2">1033</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Helpline;

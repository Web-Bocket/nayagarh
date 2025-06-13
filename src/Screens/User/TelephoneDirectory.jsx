import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const TelephoneDirectory = () => {
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
              Telephone Directory
            </h1>
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
            <caption className="text-left">
              Phone Number of Offices of the District
            </caption>
            <thead>
              <tr>
                <th className="bg-green-800 text-white p-2 text-left border-2">
                  Sl.NO
                </th>
                <th className="bg-green-800 text-white p-2 text-left border-2">
                  District
                </th>
                <th className="bg-green-800 text-white p-2 text-left border-2">
                  Office
                </th>
                <th className="bg-green-800 text-white p-2 text-left border-2">
                  Designation
                </th>
                <th className="bg-green-800 text-white p-2 text-left border-2">
                  Phone No.
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2 border-2">1</td>
                <td className="p-2 border-2">Nayagarh</td>
                <td className="p-2 border-2">
                  Office Of the Chief District Veterinary Officer
                </td>
                <td className="p-2 border-2">
                  Chief District Veterinary Officer
                </td>
                <td className="p-2 border-2">06753-252338</td>
              </tr>
              <tr>
                <td className="p-2 border-2">2</td>
                <td className="p-2 border-2">Nayagarh</td>
                <td className="p-2 border-2">
                  Rural Water Supply And Sanitation
                </td>
                <td className="p-2 border-2">Executive Engineer, RWSS</td>
                <td className="p-2 border-2">06753-252569</td>
              </tr>
              <tr>
                <td className="p-2 border-2">3</td>
                <td className="p-2 border-2">Nayagarh</td>
                <td className="p-2 border-2">District Statistical Office</td>
                <td className="p-2 border-2">District Statistical Officer</td>
                <td className="p-2 border-2">06753-252642</td>
              </tr>
              <tr>
                <td className="p-2 border-2">4</td>
                <td className="p-2 border-2">Nayagarh</td>
                <td className="p-2 border-2">
                  Executive Engineer Rural Works Division
                </td>
                <td className="p-2 border-2">Executive Engineer</td>
                <td className="p-2 border-2">06753-252049</td>
              </tr>
              <tr>
                <td className="p-2 border-2">5</td>
                <td className="p-2 border-2">Nayagarh</td>
                <td className="p-2 border-2">
                  General Manager District Industries Centre
                </td>
                <td className="p-2 border-2">GM, DIC</td>
                <td className="p-2 border-2">06753-253783</td>
              </tr>
              <tr>
                <td className="p-2 border-2">6</td>
                <td className="p-2 border-2">Nayagarh</td>
                <td className="p-2 border-2">District Social Welfare Office</td>
                <td className="p-2 border-2">
                  District Social Welfare Officer
                </td>
                <td className="p-2 border-2">06753-253433</td>
              </tr>
              <tr>
                <td className="p-2 border-2">7</td>
                <td className="p-2 border-2">Nayagarh</td>
                <td className="p-2 border-2">
                  Superintendent of Police office
                </td>
                <td className="p-2 border-2">Superintendent of Police</td>
                <td className="p-2 border-2">06753-252088</td>
              </tr>
              <tr>
                <td className="p-2 border-2">8</td>
                <td className="p-2 border-2">Nayagarh</td>
                <td className="p-2 border-2">District Culture Office</td>
                <td className="p-2 border-2">
                  DIPRO cum Dist. Culture Officer
                </td>
                <td className="p-2 border-2">06753-253051</td>
              </tr>
              <tr>
                <td className="p-2 border-2">9</td>
                <td className="p-2 border-2">Nayagarh</td>
                <td className="p-2 border-2">
                  District Information and Public Relation Office
                </td>
                <td className="p-2 border-2">
                  DIPRO cum Dist. Culture Officer
                </td>
                <td className="p-2 border-2">06753-253051</td>
              </tr>
              <tr>
                <td className="p-2 border-2">10</td>
                <td className="p-2 border-2">Nayagarh</td>
                <td className="p-2 border-2">District Employment Office</td>
                <td className="p-2 border-2">Dist. Employment officer</td>
                <td className="p-2 border-2">06753-252625</td>
              </tr>
              <tr>
                <td className="p-2 border-2">11</td>
                <td className="p-2 border-2">Nayagarh</td>
                <td className="p-2 border-2">District Panchayat Office</td>
                <td className="p-2 border-2">1Dist. Pachayat Officer</td>
                <td className="p-2 border-2">06753-252729</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TelephoneDirectory;

import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Subdivision = () => {
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
              Subdivisions & Blocks
            </h1>
          </div>
        </div>
      </div>

      <div className=" px-10 flex flex-col lg:flex-row gap-8 py-5">
        <div className=" shadow-2xl  rounded-b-lg border-b-2 border-b-green-700 ">
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
                  <span className="mr-2">➢</span> Police
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
        <div>
          <p className="mb-2">List of Subdivision in the District</p>

          <div className="mb-8">
            <table className="border-collapse border w-full ">
              <thead className="bg-[#245e03] text-white ">
                <tr>
                  <td className="border border-gray-400 p-3 ">SI NO</td>
                  <td className="border border-gray-400 p-3">
                    Name Of Subdivision
                  </td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-400 p-3">1</td>
                  <td className="border border-gray-400 text-[#5bba22] p-3">
                    Nayagarh
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mb-2">List of Blocks in the District</p>

          <div className="mb-8">
            <table className="border-collapse border w-full ">
              <thead className="bg-[#245e03] text-white ">
                <tr>
                  <td className="border border-gray-400 p-3 ">SI NO</td>
                  <td className="border border-gray-400 p-3"> Block Name </td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-400 p-3">1</td>
                  <td className="border border-gray-400 text-[#5bba22] p-3">
                    Bhapur
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-400 p-3">2</td>
                  <td className="border border-gray-400 text-[#5bba22] p-3">
                    Daspalla
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-400 p-3">3</td>
                  <td className="border border-gray-400 text-[#5bba22] p-3">
                    Gania
                  </td>
                </tr>

                <tr>
                  <td className="border border-gray-400 p-3">4</td>
                  <td className="border border-gray-400 text-[#5bba22] p-3">
                    Khandapada
                  </td>
                </tr>

                <tr>
                  <td className="border border-gray-400 p-3">5</td>
                  <td className="border border-gray-400 text-[#5bba22] p-3">
                    Nayagarh
                  </td>
                </tr>

                <tr>
                  <td className="border border-gray-400 p-3">6</td>
                  <td className="border border-gray-400 text-[#5bba22] p-3">
                    Nuagaon
                  </td>
                </tr>

                <tr>
                  <td className="border border-gray-400 p-3">7</td>
                  <td className="border border-gray-400 text-[#5bba22] p-3">
                    Odagaon
                  </td>
                </tr>

                <tr>
                  <td className="border border-gray-400 p-3">8</td>
                  <td className="border border-gray-400 text-[#5bba22] p-3">
                    Ranpur
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
export default Subdivision;

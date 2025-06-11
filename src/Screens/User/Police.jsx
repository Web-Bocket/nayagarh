import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Police = () => {
  const Location = useLocation();
  const navigate = useNavigate();
  const getLinkClass = (path) => {
    console.log("path======>", path);
    return Location.pathname === path
      ? "p-4 bg-[#5bba22] cursor-pointer"
      : "p-4 hover:bg-[#5bba22] cursor-pointer";
  };
  return (
    <div  className="bg-white dark:bg-black dark:text-yellow-300">
      <div>
        <div>
          <img
            src="https://nayagarh.odisha.gov.in/sites/default/files/2023-08/Inner-Banner-Nayagarh%20%281%29.jpg"
            alt=""
          />
        </div>
        <div className="px-10 py-5">
          <div>
            <h1 className="font-bold text-2xl opacity-85">Police</h1>
          </div>
        </div>
      </div>

      <div className=" px-10 flex gap-8 py-5">
        <div className=" shadow-2xl  ">
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
          <p className="mb-2">Police Station Detail</p>
          <div>
            <table className="border-collapse border w-full ">
              <thead className="bg-[#245e03] text-white ">
                <tr>
                  <td className="border border-gray-400 p-3 ">SI NO</td>
                  <td className="border border-gray-400 p-3">
                    Police Station Naame
                  </td>
                  <td className="border border-gray-400 p-3">CUG Number</td>
                  <td className="border border-gray-400 p-3">
                    Landline Number
                  </td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-400 p-3">1</td>
                  <td className="border border-gray-400 text-[#5bba22] p-3">
                    S.P,Nayagarh
                  </td>
                  <td className="border border-gray-400 p-3">94389-16290</td>
                  <td className="border border-gray-400 p-3">06753-252088</td>
                </tr>

                <tr>
                  <td className="border border-gray-400 p-3">2</td>
                  <td className="border border-gray-400 text-[#5bba22] p-3">
                    SDPO ,Nayagarh
                  </td>
                  <td className="border border-gray-400 p-3">94389-16538</td>
                  <td className="border border-gray-400 p-3">06753-252260</td>
                </tr>

                <tr>
                  <td className="border border-gray-400 p-3">3</td>
                  <td className="border border-gray-400 text-[#5bba22] p-3">
                    SDPO ,Sarankul
                  </td>
                  <td className="border border-gray-400 p-3">94389-16539</td>
                  <td className="border border-gray-400 p-3 ">06753-257014</td>
                </tr>

                <tr>
                  <td className="border border-gray-400 p-3">4</td>
                  <td className="border border-gray-400 text-[#5bba22] p-3">
                    SDPO,Khandapada
                  </td>
                  <td className="border border-gray-400 p-3">88959-99909</td>
                  <td className="border border-gray-400 p-3">06757-230022</td>
                </tr>

                <tr>
                  <td className="border border-gray-400 p-3">5</td>
                  <td className="border border-gray-400 text-[#5bba22] p-3">
                    Nayagarh P.S
                  </td>
                  <td className="border border-gray-400 p-3">94389-16546</td>
                  <td className="border border-gray-400 p-3">06753-252100</td>
                </tr>

                <tr>
                  <td className="border border-gray-400 p-3">6</td>
                  <td className="border border-gray-400 text-[#5bba22] p-3">
                    Sadar P.S
                  </td>
                  <td className="border border-gray-400 p-3">94389-16616</td>
                  <td className="border border-gray-400 p-3">06753-252900</td>
                </tr>

                <tr>
                  <td className="border border-gray-400 p-3">7</td>
                  <td className="border border-gray-400 text-[#5bba22] p-3">
                    Itamati P.S
                  </td>
                  <td className="border border-gray-400 p-3">94389-16302</td>
                  <td className="border border-gray-400 p-3">06753-256100</td>
                </tr>

                <tr>
                  <td className="border border-gray-400 p-3">8</td>
                  <td className="border border-gray-400 text-[#5bba22] p-3">
                    Nuagaon P.S
                  </td>
                  <td className="border border-gray-400 p-3">94389-16547</td>
                  <td className="border border-gray-400 p-3">06753-263028</td>
                </tr>
                <tr>
                  <td className="border border-gray-400 p-3">9</td>
                  <td className="border border-gray-400 text-[#5bba22] p-3">
                    Daspalla P.S
                  </td>
                  <td className="border border-gray-400 p-3">94389-16546</td>
                  <td className="border border-gray-400 p-3">06753-252100</td>
                </tr>
                <tr>
                  <td className="border border-gray-400 p-3">10</td>
                  <td className="border border-gray-400 text-[#5bba22] p-3">
                    Banigochha P.S
                  </td>
                  <td className="border border-gray-400 p-3">94389-16546</td>
                  <td className="border border-gray-400 p-3">06753-252100</td>
                </tr>
                <tr>
                  <td className="border border-gray-400 p-3">11</td>
                  <td className="border border-gray-400 text-[#5bba22] p-3">
                    Sarankul P.S
                  </td>
                  <td className="border border-gray-400 p-3">94389-16546</td>
                  <td className="border border-gray-400 p-3">06753-252100</td>
                </tr>
                <tr>
                  <td className="border border-gray-400 p-3">12</td>
                  <td className="border border-gray-400 text-[#5bba22] p-3">
                    Odagaon P.S
                  </td>
                  <td className="border border-gray-400 p-3">94389-16546</td>
                  <td className="border border-gray-400 p-3">06753-252100</td>
                </tr>
                <tr>
                  <td className="border border-gray-400 p-3">13</td>
                  <td className="border border-gray-400 text-[#5bba22] p-3">
                    Ranpur P.S
                  </td>
                  <td className="border border-gray-400 p-3">94389-16546</td>
                  <td className="border border-gray-400 p-3">06753-252100</td>
                </tr>
                <tr>
                  <td className="border border-gray-400 p-3">14</td>
                  <td className="border border-gray-400 text-[#5bba22] p-3">
                    Khandapada P.S
                  </td>
                  <td className="border border-gray-400 p-3">94389-16546</td>
                  <td className="border border-gray-400 p-3">06753-252100</td>
                </tr>
                <tr>
                  <td className="border border-gray-400 p-3">15</td>
                  <td className="border border-gray-400 text-[#5bba22] p-3">
                    Chandpur P.S
                  </td>
                  <td className="border border-gray-400 p-3">94389-16546</td>
                  <td className="border border-gray-400 p-3">06753-252100</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Police;

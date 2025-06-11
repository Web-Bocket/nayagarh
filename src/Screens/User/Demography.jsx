import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Demography = () => {
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
            <h1 className="font-bold text-2xl opacity-85">Demography</h1>
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
        <div className="p-5">
          <h2 className="text-xl font-bold mb-4">
            Population Details : (2011 Census)
          </h2>
          <table className="min-w-full border-collapse border border-green-800">
            <thead className="bg-green-800">
              <tr className="bg-green-800 text-white">
                <th className="border border-green-600 p-2">Population</th>
                <th className="border border-green-600 p-2">Urban</th>
                <th className="border border-green-600 p-2">Rural</th>
                <th className="border border-green-600 p-2">SC</th>
                <th className="border border-green-600 p-2">ST</th>
              </tr>
              <tr className="bg-green-700 text-white">
                <th className="border border-green-600 p-2">Total</th>
                <th className="border border-green-600 p-2">Male</th>
                <th className="border border-green-600 p-2">Female</th>
                <th className="border border-green-600 p-2">Total</th>
                <th className="border border-green-600 p-2">Male</th>
                <th className="border border-green-600 p-2">Female</th>
                <th className="border border-green-600 p-2">Total</th>
                <th className="border border-green-600 p-2">Male</th>
                <th className="border border-green-600 p-2">Female</th>
                <th className="border border-green-600 p-2">Total</th>
                <th className="border border-green-600 p-2">Male</th>
                <th className="border border-green-600 p-2">Female</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-green-600 p-2">962789</td>
                <td className="border border-green-600 p-2">502636</td>
                <td className="border border-green-600 p-2">460153</td>
                <td className="border border-green-600 p-2">79738</td>
                <td className="border border-green-600 p-2">38121</td>
                <td className="border border-green-600 p-2">883051</td>
                <td className="border border-green-600 p-2">461019</td>
                <td className="border border-green-600 p-2">422032</td>
                <td className="border border-green-600 p-2">136339</td>
                <td className="border border-green-600 p-2">69813</td>
                <td className="border border-green-600 p-2">66586</td>
                <td className="border border-green-600 p-2">58691</td>
              </tr>
            </tbody>
          </table>

          <h2 className="text-xl font-bold mb-4 mt-8">
            Worker Details : (2011 Census)
          </h2>
          <table className="min-w-full border-collapse border border-green-800">
            <thead>
              <tr className="bg-green-800 text-white">
                <th className="border border-green-600 p-2">Main Worker</th>
                <th className="border border-green-600 p-2">Marginal Worker</th>
                <th className="border border-green-600 p-2">Non Worker</th>
              </tr>
              <tr className="bg-green-700 text-white">
                <th className="border border-green-600 p-2">Total</th>
                <th className="border border-green-600 p-2">Male</th>
                <th className="border border-green-600 p-2">Female</th>
                <th className="border border-green-600 p-2">Total</th>
                <th className="border border-green-600 p-2">Male</th>
                <th className="border border-green-600 p-2">Female</th>
                <th className="border border-green-600 p-2">Total</th>
                <th className="border border-green-600 p-2">Male</th>
                <th className="border border-green-600 p-2">Female</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-green-600 p-2">229076</td>
                <td className="border border-green-600 p-2">207430</td>
                <td className="border border-green-600 p-2">21646</td>
                <td className="border border-green-600 p-2">114557</td>
                <td className="border border-green-600 p-2">77196</td>
                <td className="border border-green-600 p-2">37396</td>
                <td className="border border-green-600 p-2">619156</td>
                <td className="border border-green-600 p-2">218045</td>
                <td className="border border-green-600 p-2">401111</td>
              </tr>
            </tbody>
          </table>
          <h1 className="text-2xl font-bold text-gray-800 dark:text-yellow-300 my-4">
            Category of Workers : (2011 Census)
          </h1>
          <table className="min-w-full border-collapse border border-green-800 mb-8">
            <thead>
              <tr className="bg-green-700 text-white">
                <th className="border border-green-600 p-2">Type</th>
                <th className="border border-green-600 p-2">Total</th>
                <th className="border border-green-600 p-2">Male</th>
                <th className="border border-green-600 p-2">Female</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-green-600 p-2">Cultivator</td>
                <td className="border border-green-600 p-2">83022</td>
                <td className="border border-green-600 p-2">76425</td>
                <td className="border border-green-600 p-2">6597</td>
              </tr>
              <tr>
                <td className="border border-green-600 p-2">
                  Agricultural labourers
                </td>
                <td className="border border-green-600 p-2">120129</td>
                <td className="border border-green-600 p-2">95682</td>
                <td className="border border-green-600 p-2">24447</td>
              </tr>
              <tr>
                <td className="border border-green-600 p-2">
                  Workers in House Hold Industry
                </td>
                <td className="border border-green-600 p-2">17557</td>
                <td className="border border-green-600 p-2">11275</td>
                <td className="border border-green-600 p-2">6282</td>
              </tr>
              <tr>
                <td className="border border-green-600 p-2">Other Workers</td>
                <td className="border border-green-600 p-2">122925</td>
                <td className="border border-green-600 p-2">101209</td>
                <td className="border border-green-600 p-2">21716</td>
              </tr>
            </tbody>
          </table>

          <h1 className="text-2xl font-bold text-gray-800 dark:text-yellow-300 my-4">
            Household Details : (2011 Census)
          </h1>
          <table className="min-w-full border-collapse border border-green-800 mb-8">
            <thead>
              <tr className="bg-green-700 text-white">
                <th className="border border-green-600 p-2">Normal</th>
                <th className="border border-green-600 p-2">Institutional</th>
                <th className="border border-green-600 p-2">Houseless</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-green-600 p-2">227927</td>
                <td className="border border-green-600 p-2">284</td>
                <td className="border border-green-600 p-2">104</td>
              </tr>
            </tbody>
          </table>

          <h1 className="text-2xl font-bold text-gray-800 dark:text-yellow-300 my-4">
            Literacy Details : (2011 Census)
          </h1>
          <table className="min-w-full border-collapse border border-green-800 mb-8">
            <thead>
              <tr className="bg-green-700 text-white">
                <th className="border border-green-600 p-2">Total</th>
                <th className="border border-green-600 p-2">Male</th>
                <th className="border border-green-600 p-2">Female</th>
                <th className="border border-green-600 p-2">Literacy Rate</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-green-600 p-2">688362</td>
                <td className="border border-green-600 p-2">392333</td>
                <td className="border border-green-600 p-2">296029</td>
                <td className="border border-green-600 p-2">80.42</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default Demography;

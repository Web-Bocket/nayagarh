import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Annoucements = () => {
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
            <h1 className="font-bold text-2xl opacity-85">Annoucements</h1>
          </div>
        </div>
      </div>

      <div className=" px-10 flex gap-8">
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
                        <th className="bg-green-800 text-white p-2 text-left border-2">Sr. No.</th>
                        <th className="bg-green-800 text-white p-2 text-left border-2">Title</th>
                        <th className="bg-green-800 text-white p-2 text-left border-2">Description</th>
                        <th className="bg-green-800 text-white p-2 text-left border-2">Start Date</th>
                        <th className="bg-green-800 text-white p-2 text-left border-2">End Date</th>
                        <th className="bg-green-800 text-white p-2 text-left border-2">Download/Details</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="border-2 p-2">1</td>
                        <td className="border-2 p-2">Publication of draft DSR source list under Mining Office, Nayagarh</td>
                        <td className="border-2 p-2">Publication of draft DSR source list under Mining Office, Nayagarh</td>
                        <td className="border-2 p-2">03-06-2025</td>
                        <td className="border-2 p-2">03-07-2025</td>
                        <td className="border-2 p-2">Specified.pdf (638.06 KB) <br />
                            Leterite.pdf (600.42 KB) <br />
                            DSR STONE.pdf (2.71 MB) <br />
                            DSR SAND.pdf (1.46 MB)</td>
                    </tr>
                    <tr>
                        <td className="border-2 p-2">2</td>
                        <td className="border-2 p-2">Proclamation Notice of P.R No-359 under Tahasil Office, Nuagaon</td>
                        <td className="border-2 p-2">Proclamation Notice of P.R No-359 under Tahasil Office, Nuagaon</td>
                        <td className="border-2 p-2">01-06-2025</td>
                        <td className="border-2 p-2">15-06-2025</td>
                        <td className="border-2 p-2">Proclamation Notice of P.R No-359 (222.34 KB)</td>
                    </tr>
                    <tr>
                        <td className="border-2 p-2">3</td>
                        <td className="border-2 p-2">Proclamation Notice of P.R No-358 under Tahasil Office, Nuagaon</td>
                        <td className="border-2 p-2">Proclamation Notice of P.R No-358 under Tahasil Office, Nuagaon </td>
                        <td className="border-2 p-2">01-06-2025</td>
                        <td className="border-2 p-2">15-06-2025</td>
                        <td className="border-2 p-2">Proclamation Notice of P.R No-358 (230.9 KB)</td>
                    </tr>
                </tbody>
            </table>
        </div>
      </div>
    </div>
  );
};

export default Annoucements;

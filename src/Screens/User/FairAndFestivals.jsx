import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const FairAndFestival = () => {
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
            <h1 className="font-bold text-2xl opacity-85">Fair & Festivals</h1>
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
          <p className="mb-2 font-semibold text-sm ">
            Fair and Festivals of Nayagarh District
          </p>

          <div className="mb-8 ">
            <table className="border-collapse border max-w-full ">
              <thead className="bg-[#245e03] text-white ">
                <tr>
                  <td className="border border-gray-400 p-3 ">Name</td>
                  <td className="border border-gray-400 p-3">Time</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-400 p-3">
                    Lankapodi at Mahavir Temple,Dasapalla
                  </td>
                  <td className="border border-gray-400  p-3">
                    April (Ram Navami){" "}
                  </td>
                </tr>

                <tr>
                  <td className="border border-gray-400 p-3">
                    Pana Sanakranti at Dakshinakali Temple,Nayagarh
                  </td>
                  <td className="border border-gray-400  p-3">
                    April (Vaisakhi){" "}
                  </td>
                </tr>

                <tr>
                  <td className="border border-gray-400 p-3">
                    Shivaratri at Sri Ladubaba Temple,Sarankul
                  </td>
                  <td className="border border-gray-400 p-3">February </td>
                </tr>

                <tr>
                  <td className="border border-gray-400 p-3">
                    Magha Saptami(Kantilo Mela)
                  </td>
                  <td className="border border-gray-400  p-3">
                    January-February{" "}
                  </td>
                </tr>

                <tr>
                  <td className="border border-gray-400 p-3">
                    Ram Navami,Odagaon
                  </td>
                  <td className="border border-gray-400 p-3">April </td>
                </tr>

                <tr>
                  <td className="border border-gray-400 p-3">
                    Car Festival(Nayagarh,Khandapara ,Dasapalla & Ranapur)
                  </td>
                  <td className="border border-gray-400  p-3">June-July </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FairAndFestival;

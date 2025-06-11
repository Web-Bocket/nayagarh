import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Hospitals = () => {
  const Location = useLocation();
  const navigate = useNavigate();
  const getLinkClass = (path) => {
    console.log("path======>", path);
    return Location.pathname === path
      ? "p-4 bg-[#5bba22] cursor-pointer"
      : "p-4 hover:bg-[#5bba22] cursor-pointer";
  };
  const HospitalDetails = [
    {
        name:"Adakata PHC",
        address:"At/post-Adakata Block-Gania Dist-Nayagarh(Odisha)"
    },
    {
        name:"Badapandusara CHC",
        address:"At/post-Badapandusara Block-Nayagarh Dist-Nayagarh(Odisha)"
    },
    {
        name:"Baghuapali PHC",
        address:"At/post-Baghuapalli Block Bhapur Dist-Nayagarh(Odisha)"
    },
    {
        name:"Bahadajhola PHC",
        address:"At/post-Bahadajhola Block-Nuagaon Dist-Nayagarh(Odisha)"
    },
    {
        name:"Balugaon PHC",
        address:"At/post-Balugaon Block-Nayagarh Dist-Nayagarh(Odisha)"
    },
    {
        name:"Banamalipur-Nuagadiasahi PHC",
        address:"At/post-Banamalipur-Nuagadiasahi Block-Khandapada Dist-Nayagarh(Odisha)"
    },
    {
        name:"Banigochha PHC",
        address:"At/post-Banigochha Block Daspalla Dist-Nayagarh(Odisha)"
    },
    {
        name:"BASANT MANJARI SWASTYA NIWAS,CHANDPUR",
        address:"At/PO-Chandpur Dist-Nayagarh(Odisha)"
    },
    {
        name:"Bhapur CHC",
        address:"At/Po-Bhapur Dist-Nayagarh(Odisha)"
    },
    {
        name:"Biridi PHC",
        address:"At/post-Biridi Block-Khandapada Dist-Nayagarh(Odisha)"
    }
  ]
  return (
    <div className="bg-white dark:bg-black dark:text-yellow-300">
      <div>
        <div>
          <img
            src="https://nayagarh.odisha.gov.in/sites/default/files/2023-08/Inner-Banner-Nayagarh%20%281%29.jpg"
            alt="Banner"
          />
        </div>
        <div className="px-10 py-5">
          <div>
            <h1 className="font-bold text-2xl opacity-85">Hospitals</h1>
          </div>
        </div>
      </div>

      <div className=" px-10 flex gap-8 py-5">
        <div className=" shadow-2xl rounded-b-lg border-b-2 border-b-green-700">
          <ul className="w-56  divide-y divide-gray-200">
            <li
              className={getLinkClass("/Hospitals")}
              onClick={() => navigate("/Hospitals")}
            >
              Hospitals
            </li>
            <li
              className={getLinkClass("/Schools")}
              onClick={() => navigate("/Schools")}
            >
              Schools
            </li>
            <li
              className={getLinkClass("/CollegeUniversities")}
              onClick={() => navigate("/CollegeUniversities")}
            >
              College / Universities
            </li>
            <li
              className={getLinkClass("/Banks")}
              onClick={() => navigate("/Banks")}
            >
              Banks
            </li>
          </ul>
        </div>
        <div className="grid grid-cols-4 gap-5 ">
            {HospitalDetails.map((data, index)=>(
                <div className="shadow-lg rounded-lg space-y-2 p-4 dark:bg-gray-600">
                    <h1 className="font-bold dark:text-white">{data.name}</h1>
                    <p>{data.address}</p>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Hospitals;

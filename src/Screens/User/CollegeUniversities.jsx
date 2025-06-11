import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const CollegeUniversities = () => {
  const Location = useLocation();
  const navigate = useNavigate();
  const getLinkClass = (path) => {
    console.log("path======>", path);
    return Location.pathname === path
      ? "p-4 bg-[#5bba22] cursor-pointer"
      : "p-4 hover:bg-[#5bba22] cursor-pointer";
  };
  const CUDetalis = [
    {
        name:"Bansidhar Mahavidyalay Itamati",
        address:"At/PO-Itamati District-Nayagarh Odisha-752068"
    },
    {
        name:"Brundaban Subudhi College Daspalla",
        address:"At/PO -Daspalla ,District-Nayagarh-752084"
    },
    {
        name:"Dadhibaman Sanskrit College Kural",
        address:"At/PO-Kural-752090 Dist-Nayagarh(Odisha)"
    },
    {
        name:"Gatiswar College Malisahi",
        address:"At/PO -Malisahi ,Dist Nayagarh-752070"
    },
    {
        name:"Model Degree College",
        address:"At/PO-Lathipada Dist-Nayagarh-752070(Odisha)"
    },
    {
        name:"Nayagarh Autonomous College Nayagarh",
        address:"Nayagarh College Road Nayagarh-752069"
    },
    {
        name:"Nayagarh Prajamandal Mahila Mahavidyalay Nayagarh",
        address:"At/PO-Nayagarh-752069"
    },
    {
        name:"Nilamadhab Mahavidyalay, Kantilo,Nayagarh",
        address:"AT/PO Kantilo-752078 Dist Nayagarh"
    },
    {
        name:"Pathani Samant College Khandapada",
        address:"At /PO Khandapada.Nayagarh-752077"
    },
    {
        name:"Pindikesh Achalika College,Baulasahi",
        address:"At/PO- Baulasahi, District Nayagarh(Odisha)"
    },
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
            <h1 className="font-bold text-2xl opacity-85">College / Universities</h1>
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
        <div className="grid grid-cols-4 gap-4">
            {CUDetalis.map((Data, index)=>(
                <div className="p-3 shadow-xl rounded-lg space-y-2 dark:bg-gray-600">
                    <h1 className="font-bold dark:text-white">{Data.name}</h1>
                    <p>{Data.address}</p>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default CollegeUniversities;

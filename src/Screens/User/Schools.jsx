import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Schools = () => {
  const Location = useLocation();
  const navigate = useNavigate();
  const getLinkClass = (path) => {
    console.log("path======>", path);
    return Location.pathname === path
      ? "p-4 bg-[#5bba22] cursor-pointer"
      : "p-4 hover:bg-[#5bba22] cursor-pointer";
  };
  const SchoolDetails = [
    {
        name:"A.N. Academy, Nachhipur.",
        address:"At/PO- Nachhipur, Block- Nayagarh, Dist-Nayagarh, Odisha."
    },
    {
        name:"Anchalik High School, Badasahara",
        address:"At/PO-Badasahara, Block-Bhapur, Dist-Nayagarh, Odisha."
    },
    {
        name:"A.S. Girls Nodal High School, Kurala",
        address:'At/PO- Kurala, Block- Odagaon, Dist-Nayagarh, Odisha.'
    },
    {
        name:"Anchalik Charudevi High School, Bhapur",
        address:"At/PO-Bhapur, Block-Bhapur, Dist-Nayagarh, Odisha."
    },
    {
        name:"Anchalika High School, Koska",
        address:"At/PO-Koska, Block-Khandapada, Dist-Nayagarh, Odisha."
    },
    {
        name:"Ankulai Nodal High School, Mandhatapur.",
        address:"At/PO- Mandhatapur. Block- Nayagarh, Dist-Nayagarh, Odisha."
    },
    {
        name:"B.C. High School, Ranpur",
        address:"At/PO-Ranpur, Block- Ranpur, Dist-Nayagarh, Odisha."
    },
    {
        name:"B.D. Bidyapitha",
        address:"At/PO-Bhapur, Block-Bhapur, Dist-Nayagarh, Odisha."
    },
    {
        name:"B.K. Nodal High School, Kerandatangi",
        address:"At/PO-Kerandatangi, Block- Ranpur, Dist-Nayagarh, Odisha."
    },
    {
        name:"B.S.K. Nodal Bidyapitha, Baunsagadia",
        address:"At/PO-Baunsagadia, Block- Odagaon, Dist-Nayagarh, Odisha."
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
            <h1 className="font-bold text-2xl opacity-85">Schools</h1>
          </div>
        </div>
      </div>

      <div className=" px-10 flex gap-8 py-5">
        <div className=" shadow-2xl  rounded-b-lg border-b-2 border-b-green-700">
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
        <div className="grid grid-cols-4 gap-5">
            {SchoolDetails.map((Data,index)=>(
                <div className="shadow-lg rounded-lg p-4 space-y-2 dark:bg-gray-600">
                    <h1 className="font-bold dark:text-white">{Data.name}</h1>
                    <p>{Data.address}</p>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Schools;

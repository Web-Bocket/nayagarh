import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Banks = () => {
  const Location = useLocation();
  const navigate = useNavigate();
  const getLinkClass = (path) => {
    console.log("path======>", path);
    return Location.pathname === path
      ? "p-4 bg-[#5bba22] cursor-pointer"
      : "p-4 hover:bg-[#5bba22] cursor-pointer";
  };
  const BankDetails = [
    {
        name:"Allahabad Bank,Nayagarh",
        address: "MAA Jhadeswari Complex,District - Nayagarh,Odisha , PIN -752069, IFSC Code: ALLA0213295, MICR Code: 752010102",
    },
    {
        name:"Andhra Bank Nayagarh",
        address:"Khandapada Road Nayagarh-752069 Dist-Nayagarh(Odisha)",
    },
    {
        name:"AXIS Bank,Nayagarh",
        address:"Khandapada Road,Ward No-2 ,PO/DIST. Nayagarh, Odisha, PIN- 752069 , IFSC Code: UTIB0001071 , MICR Code: 752211003"
    },
    {
        name:"Bank of Baroda,Nayagarh",
        address:"Old Hostel Lane, New Town, Main Rd.",
    },
    {
        name:"Bank of India, Nayagarh",
        address:"College Road Nayagarh-752069 District-Nayagarh(Odisha)",
    },
    {
        name:"Canara Bank Nayagarh",
        address:"Khandapada Road Nayagarh-752069 District-Nayagarh(Odisha)"
    },
    {
        name:"Central Bank of India,Nayagarh",
        address:"Khandapada Road,Nayagarh-Odisha-752069 IFSC Code: CBIN0283438"
    },
    {
        name:"HDFC Bank Limited,Nayagarh",
        address:"Khandapada Road,Opposite Session Court,Odisha Nayagarh -752069 IFSC Code: HDFC0002874 MICR Code: 752240102"
    },
    {
        name:"ICICI Bank LTD,Nayagarh",
        address:"Nayagarh Main Road,In Front of NAC High School,Nayagarh-752070 IFSC Code: ICIC0000780,MICR Code: 752229102"
    },
    {
        name:"IDBI Bank LTD,Nayagarh",
        address:"Plot No-. 1320/3051, N.K. Complex Khandapada Road, Nayagarh , Odisha, PIN-752069 IFSC Code: IBKL0001515"
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
            <h1 className="font-bold text-2xl opacity-85">Banks</h1>
          </div>
        </div>
      </div>

      <div className=" px-10 flex gap-8 py-5">
        <div className=" shadow-2xl  rounded-b-lg border-b-2 border-b-green-700 ">
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
        <div className="grid grid-cols-4 gap-4 ">
            {BankDetails.map((Data, index)=>(
                <div className="rounded-lg shadow-xl p-3 space-y-3 dark:bg-gray-600">
                    <h1 className="font-bold dark:text-white">{Data.name}</h1>
                    <p>{Data.address}</p>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Banks;

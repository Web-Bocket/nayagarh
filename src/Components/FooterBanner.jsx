import React from "react";

const FooterBanner = () => {
  return (
    <div className="pl-8 bg-gradient-to-r from-[#67E1D2] to-[#B8DA8D]">
      <ul className="flex items-center gap-5 duration-[0.6s] transform-[translate3d(-217px, 0px, 0px)] cursor-pointer">
        <li>
          <img
            src="https://nayagarh.odisha.gov.in/sites/default/files/2023-05/govt-odisha_0.png"
            alt=""
          />
        </li>
        <li className="ml-3">
          <img
            src="https://nayagarh.odisha.gov.in/sites/default/files/2023-06/odisha-tourism_9.png"
            alt=""
          />
        </li>
        <li>
          <img
            src="https://nayagarh.odisha.gov.in/sites/default/files/2023-05/jana-sunani_0.png"
            alt=""
          />
        </li>
        <li>
          <img
            src="https://nayagarh.odisha.gov.in/sites/default/files/2023-05/mission-shakti%20%281%29.png"
            alt=""
          />
        </li>
        <li>
          <img
            src="https://nayagarh.odisha.gov.in/sites/default/files/2023-08/digital-india%20%282%29.png"
            alt=""
          />
        </li>
      </ul>
    </div>
  );
};
export default FooterBanner;

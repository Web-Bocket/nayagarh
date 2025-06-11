import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <React.Fragment>
      <>
        <div className="">
          <div className="bg-[#212529] text-white py-5">
            <ul className="flex justify-center gap-10 pb-3">
              <li>
                Website Policies <span className="ml-12">|</span>
              </li>
              <li>
                Disclaimer <span className="ml-12">|</span>
              </li>
              <li>
                Terms & Condition <span className="ml-12">|</span>
              </li>
              <li>
                Feedback <span className="ml-12">|</span>
              </li>
              <li>
                Help <span className="ml-12">|</span>
              </li>
            </ul>

            <div className="mt-3 flex flex-col justify-center items-center gap-2">
              <p>
                Developed and Hosted by{" "}
                <span className="text-blue-400 cursor-pointer hover:text-white">
                  <a href="#">Electronics & IT Department, Govt. of Odisha</a>
                </span>
              </p>
              <p>
                The content of this site is licensed under{" "}
                <span className="text-blue-400 cursor-pointer hover:text-white">
                  <a href="#">
                    Creative Common Attribution 4.0 International License.
                  </a>
                </span>
              </p>
            </div>
            <div className="flex flex-col justify-center items-center gap-3 mt-6 ">
              <span>
                <img src="https://nayagarh.odisha.gov.in/themes/custom/unee/img/creative-common-4.png" />
              </span>
              <span>
                <p>Last Updated : 05-Jun-2025</p>
              </span>
            </div>
          </div>
        </div>
      </>
    </React.Fragment>
  );
};

export default Footer;

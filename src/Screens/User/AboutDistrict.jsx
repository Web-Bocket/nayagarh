import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const About = () => {
  const Location = useLocation();
  const navigate = useNavigate();
  const getLinkClass = (path) => {
    console.log("path======>", path);
    return Location.pathname === path
      ? "p-4 bg-[#5bba22] cursor-pointer"
      : "p-4 hover:bg-[#5bba22] cursor-pointer";
  };
  return (
    <>
      <section className="bg-white dark:bg-black dark:text-yellow-300">
        <div>
          <div>
            <img
              src="https://nayagarh.odisha.gov.in/sites/default/files/2023-08/Inner-Banner-Nayagarh%20%281%29.jpg"
              alt=""
            />
          </div>
          <div className="px-10 py-5 ">
            <div>
              <h1 className="font-bold text-2xl opacity-85">About Us</h1>
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

          <div className="space-y-4 text-gray-700 dark:text-white">
            <p className="text-justify">
              An administrative District of Odisha, Nayagarh District was
              created in 1st April 1993 when the erstwhile Puri District was
              split into three distinct Districts. The District is bounded by
              Cuttack District on the North, Kandhamal District on the West,
              Ganjam District on the South and Khordha District on its
              East.Birth history of Nayagarh District in around the thirteenth
              century and is considered as an important part in the political
              history of Odisha. King Suryamani of Baghela dynasty came to Puri
              on a pilgrimage from Madhya Pradesh and established his kingdom at
              Nayagarh. Nayagarh District consists of the four Garjat states of
              ex-states Ranpur, Nayagarh, Khandapara and Daspalla. The
              aboriginal Savaras and Kandhas are the indigenous people of
              Nayagarh District.Nayagarh District lies between 19 degree 54’ to
              20 degree 32’ North Latitude and 84 degree 29’ to 85 degree 27’
              East Longitude. The District is situated on the hilly ranges in
              the West and its North Eastern parts have formed small well
              cultivated fertile valleys intersected by small streams.
            </p>
            <p className="text-justify">
              Nayagarh District Covering an geographical area of 3890 sq km
              consists total 962789 population as per 2011 census. The total
              male population of the District is 502636 and female population is
              460153. As per administration is concerned, the District has got
              one sub division namely Nayagarh. There are 8 Tahasils, 8 Blocks,
              14 Police stations, 194 Gps and 1702 villages functioning in the
              District.
            </p>
            <p className="text-justify">
              The District experiences tropical climate, with the summers being
              hot and the winters cold. The maximum temperature that this
              district experiences is well above 40 deg C (during summers) and
              the minimum can be as low as 10 degree celsius (during winters).
              Summers generally last from March to June and winters, from
              October to February. Rainfall is generally heavy during the
              monsoons, which occur during the months of July and August. South
              West monsoon is primarily responsible for the rainfall in this
              District.
            </p>
            <p className="text-justify">
              The literacy rate of the Nayagarh District is 80.42 percent. There
              are many educational institutions in the District. Raghunath
              Samabaya Mahavidyalaya, Ranapur College, Pathani Samanta College,
              Nayagarh Autonomous college are the important colleges of the
              Nayagarh District.
            </p>
            <p className="text-justify">
              Nayagarh District is the land of eminent personalities. Baishnab
              Kabi Sadananda Kabisurya Brahma, Bhaktakabi Bhaktacharan, Utkal
              Ghanta Jadumani are some of the important personalities of the
              District.
            </p>
            <p className="text-justify">
              The District of Nayagarh celebrates many fairs and festivals round
              the year. Ravanapodi at Daspalla, Pana Sanakranti of Dakhinakali
              at Nayagarh, Shivaratri of Sri Ladubaba at Sarankul, Magha Saptami
              at Kantilo, Ram Navami at Odagaon, Car Festival at Nayagarh are
              the main festivals of the District.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;

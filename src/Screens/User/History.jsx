import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const History = () => {
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
          <div className="px-10 py-5">
            <div>
              <h1 className="font-bold text-2xl opacity-85">History</h1>
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
              From the history of Nayagarh District it reveals that the District
              was founded by Suryamani of Baghela dynasty who had came to Puri
              on a pilgrimage from “Rewa”of Madhya Pradesh. He had built his
              fort here and adopted Tiger Head as a state symbol.Ninth king of
              this dynasty “Bagel Singh” (1480–1510) shifted his capital to the
              District. As per his name this place was known as “Baghua
              Nayagarh”. He was a vaishnavite and is known to have made small
              icons of Shree Vigraha Chaturdha Murty and installed the deities
              in a mudaltar on the foot hill of Balarama for the first time in
              the history of Nayagarh District.
            </p>
            <div>
              <img
                src="https://nayagarh.odisha.gov.in/sites/default/files/inline-images/Dakhinakali%20temple.jpg"
                alt=""
              />
              <p>Dakhinakali temple</p>
            </div>
            <p className="text-justify">
              During the rule of 12th King of Nayagarh District, Raghunath Singh
              (1565-1595) had already captured Odisha and the king Mukunda Dev
              (1565) was defeated in Gohritikira and died. Taking advantage of
              the flaccid political situation, Raghunath Singh attacked Ranapur
              and captured Odgaon, Sarankul and Baunsiapara area from Ranapur
              estate and took control of the Nayagarh-Daspalla border area from
              the King of Boudh and Sunamuhin area of Odgaon from the King of
              Ghumusar. He also captured a portion from Banpur.
            </p>
            <p className="text-justify">
              Just before his death, the King Ragunath Singh divided his estate
              between his three sons. Harihar Singh got Nayagarh and Jadunath
              Singh got four Khandagrams (large area of land) which was known as
              Khandapara later. It was his heirs from here on that ruled
              Nayagarh District until it was captured by the Britishers.
            </p>
            <div>
              <img
                src="https://nayagarh.odisha.gov.in/sites/default/files/inline-images/Kantilo%20Nilamadhab%20temple.gif"
                alt=""
              />
              <p className="w-36">Kantilo Nilamadhab temple</p>
            </div>
            <p className="text-justify">
              Nayagarh District covers many historical temples. Dakhinkali
              Temple, Gopinath Temple, Nilamadhab Temple, Ladubaba Temple,
              Raghunath Temple, Dutikeswar Temple are the famous temples of the
              District.
            </p>
            <div>
              <img
                src="https://nayagarh.odisha.gov.in/sites/default/files/inline-images/Raghunath%20Temple.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default History;

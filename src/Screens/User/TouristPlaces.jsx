import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const TouristPlaces = () => {
  const Location = useLocation();
  const navigate = useNavigate();
  const getLinkClass = (path) => {
    console.log("path======>", path);
    return Location.pathname === path
      ? "p-4 bg-[#5bba22] cursor-pointer"
      : "p-4 hover:bg-[#5bba22] cursor-pointer";
  };
  const Place = [
    {
      img: "https://nayagarh.odisha.gov.in/sites/default/files/styles/330_330/public/2023-07/Nilamadhab_0.jpg?itok=64NYspaz",
      name: "Kantilo Nilamadhab",
      category: "Category : Others",
      desc: "Standing elegantly on the banks of the river Mahanadi, Kantilo is famous for the temple of Lord Nilamadhaba, on top of the twin hills with…",
    },
    {
      img: "https://nayagarh.odisha.gov.in/sites/default/files/styles/330_330/public/2023-07/Dasapalla_0.jpg?itok=b6xV3MDW",
      name: "Dasapalla",
      category: "Category : Others",
      desc: "Dasapalla is situated 40 kms from Nayagrah, where we can find forests with incredibly lush flora and fauna. Dasapalla is famous for its jungles,…",
    },
    {
      img: "https://nayagarh.odisha.gov.in/sites/default/files/styles/330_330/public/2023-07/Sarankul_1.jpg?itok=OLGQXJqx",
      name: "Sarankul",
      category: "Category : Others",
      desc: "Located 14 kms away from Nayagarh, Sarankul stands proud with the 15th century shrine of Sri Ladukeswar, popularly known as Ladu Baba. The…",
    },
    {
      img: "https://nayagarh.odisha.gov.in/sites/default/files/styles/330_330/public/2023-07/Satkosia%20George_1.jpg?itok=oXmr9J_G",
      name: "Satokosia gorge",
      category: "Category : Others",
      desc: "Satokosia gorge, where the nature in its primitive wild disposition houses all the phenomena including flora and fauna, is a rare place. For it…",
    },
    {
      img: "https://nayagarh.odisha.gov.in/sites/default/files/styles/330_330/public/2023-07/BOATING%20AT%20BADMUL_0.png?itok=JhFmnUXb",
      name: "Baramul",
      category: "Category : Others",
      desc: "This small village is prominent due to the mangnificent Mahandi gorge on the banks of which it is situated. From Sunakania hills up to Barmul, the…",
    },
    {
      img: "https://nayagarh.odisha.gov.in/sites/default/files/styles/330_330/public/2023-07/kuturi_1.jpg?itok=nUSO1irP",
      name: "Kuturi",
      category: "Category : Others",
      desc: "Just 8 kms from Baramul, inside the Mahanadi Wildlife Division Sanctuary, is a place called Kuturi which houses the Habitat Development Centre for…",
    },
    {
      img: "https://nayagarh.odisha.gov.in/sites/default/files/styles/330_330/public/2023-07/Gokulanada%20Temple_1.jpg?itok=gmxh_m11",
      name: "Gokulananda Temple",
      category: "Category : Others",
      desc: "It is situated near Sidhamula village, Sidhamula Grampanchayat in Khandapara Block. The temple of Gokulananda is situated on top of a hill on the…",
    },
    {
      img: "https://nayagarh.odisha.gov.in/sites/default/files/styles/330_330/public/2023-07/Jamupatana_0.jpg?itok=J8yHzLQ4",
      name: "Jamupatna",
      category: "Category : Others",
      desc: "At the foot of Sulia hills, 32 kms from Nayagarh stands the shrine of Sri Dutikeswar Mahadev. A centuries-old Banyan Tree popularly known as…",
    },
  ];
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
            <h1 className="font-bold text-2xl opacity-85">Tourist Places</h1>
          </div>
        </div>
      </div>

      <div className=" px-10 flex flex-col lg:flex-col gap-8 py-5">
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
        <div className="grid grid-cols-4 gap-5">
          {Place.map((TP, index) => (
            <div className="shadow-lg rounded-b-lg dark:bg-gray-600 p-1">
              <img
                src={TP.img}
                alt="NYD place Pic"
                className="p-2 w-[280px] h-[170px]"
              />
              <p className="text-green-500 pb-2 text-sm pl-2 dark:text-yellow-300">
                {TP.name}
              </p>
              <h1 className="font-bold pl-2 dark:text-white">{TP.category}</h1>
              <p className="pl-2 text-sm dark:text-white">{TP.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default TouristPlaces;

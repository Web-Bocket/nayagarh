import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoArrowForwardCircleSharp } from "react-icons/io5";

export default function NYDShortcuts() {
  return (
    <>
      <section className="bg-gradient-to-tr from-blue-900 via-teal-600 to-blue-400 dark:bg-gradient-to-b dark:from-gray-700 dark:via-indigo-600 dark:to-gray-600 grid grid-cols-1 lg:grid-cols-4">
        <div className="md:max-w-lg lg:max-w-md mx-10 mt-5 mb-8 rounded-lg shadow-lg overflow-hidden dark:text-white bg-white dark:bg-black p-5 grid gap-2">
          <h1 className="font-bold text-2xl ">Helpline</h1>
          <p>Covid Helpline</p>
          <h1 className="text-xl">
            <a href="/">
              <strong className="text-blue-900 dark:text-yellow-300">
                104 & 06724-221016
              </strong>
            </a>
          </h1>
          <p>District Emergency Helpline</p>
          <h1>
            <a href="/">
              <strong className="text-blue-900 dark:text-yellow-300">
                06725-252978
              </strong>
            </a>
          </h1>
          <p>Citizen's Call Center</p>
          <h1>
            <a href="/">
              <strong className="text-blue-900 dark:text-yellow-300">
                155300
              </strong>
            </a>
          </h1>
          <p>Child Helpline</p>
          <h1>
            <strong className="text-blue-900 dark:text-yellow-300">1098</strong>
          </h1>
          <p>Women Helpline</p>
          <h1>
            <a href="/">
              <strong className="text-blue-900 dark:text-yellow-300">
                1091
              </strong>
            </a>
          </h1>
          <p>
            Helpline for Women in Distress{" "}
            <strong className="text-blue-900 dark:text-yellow-300">
              7827170170{" "}
            </strong>
          </p>
        </div>

        <div className="md:max-w-lg lg:max-w-md  mx-10 mt-5 mb-8 rounded-lg shadow-lg  bg-white dark:bg-black dark:text-white p-5 ">
          <h1 className="font-bold text-2xl">Quick Links</h1>
          <ul className="grid gap-3 mt-2">
            <li>
              <div className="flex items-center dark:text-yellow-300">
                <IoArrowForwardCircleSharp size={20} />
                <a href="/">Public Utilities</a>
              </div>
            </li>
            <li>
              <div className="flex items-center dark:text-yellow-300">
                <IoArrowForwardCircleSharp size={20} />
                <a href="/">Census</a>
              </div>
            </li>
            <li>
              <div className="flex dark:text-yellow-300">
                <IoArrowForwardCircleSharp size={20} />
                <a href="/">CAP National Disaster Alert Portal</a>
              </div>
            </li>
            <li>
              <div className="flex dark:text-yellow-300">
                <IoArrowForwardCircleSharp size={20} />
                <a href="/">Odisha Birth & Death Registration...</a>
              </div>
            </li>
            <li>
              <div className="flex items-center dark:text-yellow-300">
                <IoArrowForwardCircleSharp size={20} />
                <a href="/">Chief Electoral Officer, Odisha</a>
              </div>
            </li>
            <li>
              <div className="flex items-center dark:text-yellow-300">
                <IoArrowForwardCircleSharp size={20} />
                <a href="/">Right to Information Act</a>
              </div>
            </li>
            <li>
              <div className="flex items-center dark:text-yellow-300">
                <IoArrowForwardCircleSharp size={20} />
                <a href="/">Aadhaar</a>
              </div>
            </li>
            <li>
              <div className="flex dark:text-yellow-300">
                <IoArrowForwardCircleSharp size={20} />
                <a href="/">Odisha One Unified Citizen Portal</a>
              </div>
            </li>
            <li>
              <div className="flex items-center dark:text-yellow-300">
                <IoArrowForwardCircleSharp size={20} />
                <a href="/">Public Grievance</a>
              </div>
            </li>
          </ul>
          <div className="text-right   lg:mt-[100px] px-6 pb-4">
            <a
              href="/"
              className=" bg-blue-600 dark:bg-gray-500 text-white text-center py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-200"
            >
              View More
            </a>
          </div>
        </div>
        <div className="md:max-w-lg lg:max-w-md mt-5 mx-10 mb-8 rounded-lg shadow-lg overflow-hidden bg-white dark:bg-black p-2">
          <h1 className="font-bold text-2xl mb-3 dark:text-white">
            Media Gallery
          </h1>
          <div className="grid grid-cols-2 gap-2">
            <img
              src="https://nayagarh.odisha.gov.in/sites/default/files/styles/photo_gallery_homepage/public/2023-07/SRI%20SRI%20RAGHUNATH%20JEW%20MANDIR%20ODAGAON.jpg?itok=p17uMLA6"
              alt=""
            />
            <img
              src="https://nayagarh.odisha.gov.in/sites/default/files/styles/photo_gallery_homepage/public/2023-07/2018051663-olw6ofp4v0inkyct4t9tfogffni3a26v4m7khbxom8_0.jpg?itok=7AROOUIq"
              alt=""
            />
            <img
              src="https://nayagarh.odisha.gov.in/sites/default/files/styles/photo_gallery_homepage/public/2023-07/Inside%20view%20of%20Sri%20Sri%20Raghunath%20jew%20temple.jpg?itok=Ii12eoS_"
              alt=""
            />
            <img
              src="https://nayagarh.odisha.gov.in/sites/default/files/styles/photo_gallery_homepage/public/2023-07/Main%20Entrance%20of%20Sri%20Sri%20Raghunath%20Jew%20Temple.jpg?itok=ijm9iZbY"
              alt=""
            />
            <img
              src="https://nayagarh.odisha.gov.in/sites/default/files/styles/photo_gallery_homepage/public/video_thumbnails/zxKi0kcjFco.jpg?itok=7oWM566y"
              alt=""
            />
          </div>
          <div className="text-right mt-[150px]  lg:mt-[250px] px-6 pb-4">
            <a
              href="/"
              className=" bg-blue-600 dark:bg-gray-500 text-white text-center py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-200"
            >
              View More
            </a>
          </div>
        </div>
        <div className="flex md:max-w-lg lg:max-w-md mx-10 mt-5 mb-8 rounded-lg shadow-lg overflow-hidden bg-white dark:bg-black dark:text-white p-5">
          <div>
            <h1 className="font-bold text-lg">Social Media</h1>
            <p className="mt-1 text-[#5bba22] dark:text-yellow-300 hover:text-[#0d6efd] hover:underline">
              <a href="/">Tweets by Collector</a>
            </p>
          </div>
          <div className=" ">
            <ul className="flex justify-center gap-1">
              <li className="h-8 w-8 border p-2 rounded-full hover:bg-blue-400 cursor-pointer">
                <FaXTwitter />
              </li>
              <li className="h-8 w-8 border p-2 rounded-full hover:bg-blue-400 cursor-pointer">
                <FaFacebook />
              </li>
              <li className="h-8 w-8 border p-2 rounded-full hover:bg-blue-400 cursor-pointer">
                <FaInstagram />
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

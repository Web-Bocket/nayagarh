import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { IoMdSearch } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa6";
import { IoMoonOutline } from "react-icons/io5";
import { useState, useEffect } from "react";
import { FiSun } from "react-icons/fi";

function Navbar() {
  const Location = useLocation();
  const navigate = useNavigate();
  const getLinkClass = (path) => {
    console.log("path======>", path);
    return Location.pathname === path
      ? "lg:font-bold md:font-semibold bg-orange-400 px-2 md:py-5 lg:py-10 text-white cursor-pointer tracking-wide rounded-t-lg"
      : "lg:font-bold md:font-semibold hover:bg-orange-400 hover:text-white hover:rounded-t-lg px-2 md:py-5 lg:py-10 cursor-pointer tracking-wide";
  };
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handelThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const handleLinkClick = (path) => {
    navigate(path);
    setIsMenuOpen(false);
  };
  return (
    <>
      <nav className="md:bg-[#2c2d6c]  lg:text-white hidden md:block w-full">
        <div className="lg:mx-10 md:mx-5 md:flex md:justify-between md:items-center">
          <div className="lg:py-3 ">
            <h1>Government of Odisha</h1>
          </div>

          <div className="md:flex md:gap-5">
            <section>
              <div className=" border rounded-2xl px-3 py-1 outline-none flex">
                <input
                  type="text"
                  placeholder="Search"
                  className="outline-none bg-[#2c2d6c]"
                />
                <IoMdSearch size={25} />
              </div>
            </section>
            <div className="text-white border rounded-2xl px-3 py-1 ">
              <select name="Language" id="" className="bg-transparent">
                <option value="English" className="text-black">
                  English
                </option>
                <option value="Odia" className="text-black">
                  Odia
                </option>
                <option value="Hindi" className="text-black">
                  Hindi
                </option>
              </select>
            </div>
            <div className=" border rounded-full p-1 border-white hover:shadow-inner hover:shadow-white">
              {theme === "dark" ? (
                <FiSun
                  size={24}
                  className="cursor-pointer hover:text-yellow-300 hover:scale-110"
                  onClick={handelThemeSwitch}
                />
              ) : (
                <IoMoonOutline
                  size={24}
                  className="cursor-pointer hover:scale-110 hover:text-blue-200"
                  onClick={handelThemeSwitch}
                />
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Navabar 2 */}

      <main className="px-10 hidden md:flex md:justify-between md:items-center bg-white dark:bg-black dark:text-yellow-300">
        <section>
          <div className="flex items-center lg:gap-3">
            <span>
              <img
                src="https://nayagarh.odisha.gov.in/themes/custom/unee/img/odisha-emblem.svg"
                alt=""
                className="xl:h-20 xl:w-16 lg:h-16 lg:w-12 md:h-20 md:w-24 dark:bg-white dark:invert"
              />
            </span>
            <span>
              <h1 className="font-semibold xl:text-xl lg:text-lg">NAYAGARH</h1>
            </span>
          </div>
        </section>

        <section>
          <div>
            <ul className="font-semibold  text-sm flex  xl:gap-10">
              <div className={getLinkClass("/")} onClick={() => navigate("/")}>
                <li>Home</li>
              </div>
              <div
                className={getLinkClass("/AboutDistrict")}
                onClick={() => navigate("/AboutDistrict")}
              >
                <li className="flex items-center">
                  About District
                  <FaAngleDown />
                </li>
              </div>
              <div
                className={getLinkClass("/HowToReach")}
                onClick={() => navigate("/HowToReach")}
              >
                <li className="flex items-center">
                  Tourism
                  <FaAngleDown />
                </li>
              </div>
              <div
                className={getLinkClass("/Hospitals")}
                onClick={() => navigate("/Hospitals")}
              >
                <li className="flex items-center">
                  Hospitality
                  <FaAngleDown />
                </li>
              </div>
              <div
                className={getLinkClass("/DisasterManagement")}
                onClick={() => navigate("/DisasterManagement")}
              >
                <li className="flex items-center">
                  More
                  <FaAngleDown />
                </li>
              </div>
            </ul>
          </div>
        </section>
        <section className="flex items-center">
          <div>
            <h1 className="lg:font-semibold md:text-sm">
              Shri Mohan Charan Majhi
            </h1>
            <h3 className="md:text-xs">Hon'ble Chief Minister</h3>
          </div>
          <div>
            <img
              src="https://nayagarh.odisha.gov.in/sites/default/files/2024-11/CM_new_photo_129_x_116-removebg-preview.png"
              alt=""
            />
          </div>
        </section>
      </main>

      {/* Mobile Navbar */}
      <div className="md:hidden flex justify-between items-center px-5 py-3 bg-white dark:bg-black dark:text-yellow-300">
        <div className="flex items-center gap-3">
          <span>
            <img
              src="https://nayagarh.odisha.gov.in/themes/custom/unee/img/odisha-emblem.svg"
              alt=""
              className="h-10 w-10 dark:bg-white dark:invert"
            />
          </span>
          <span>
            <h1 className="font-semibold text-lg">NAYAGARH</h1>
          </span>
        </div>
        <div className=" border rounded-full p-1 border-white hover:shadow-inner hover:shadow-white">
          {theme === "dark" ? (
            <FiSun
              size={24}
              className="cursor-pointer hover:text-yellow-300 hover:scale-110"
              onClick={handelThemeSwitch}
            />
          ) : (
            <IoMoonOutline
              size={24}
              className="cursor-pointer hover:scale-110 hover:text-blue-200"
              onClick={handelThemeSwitch}
            />
          )}
        </div>
        <button onClick={toggleMenu}>
          <FaAngleDown size={24} />
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden flex flex-col items-center bg-white dark:bg-black dark:text-yellow-300">
          <div
            className={getLinkClass("/")}
            onClick={() => handleLinkClick("/")}
          >
            <p className="px-5">Home</p>
          </div>
          <div
            className={getLinkClass("/AboutDistrict")}
            onClick={() => handleLinkClick("/AboutDistrict")}
          >
            <p className="flex items-center">
              About District
              <FaAngleDown />
            </p>
          </div>
          <div
            className={getLinkClass("/HowToReach")}
            onClick={() => handleLinkClick("/HowToReach")}
          >
            <p className="flex items-center">
              Tourism
              <FaAngleDown />
            </p>
          </div>
          <div
            className={getLinkClass("/Hospitals")}
            onClick={() => handleLinkClick("/Hospitals")}
          >
            <p className="flex items-center">
              Hospitality
              <FaAngleDown />
            </p>
          </div>
          <div
            className={getLinkClass("/DisasterManagement")}
            onClick={() => handleLinkClick("/DisasterManagement")}
          >
            <p className="flex items-center">
              More
              <FaAngleDown />
            </p>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;

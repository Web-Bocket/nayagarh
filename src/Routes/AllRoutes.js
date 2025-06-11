import React from "react";
import NotFound from "../Screens/Common/NotFound";
import Home from "../Screens/User/Home";
import AboutDistrict from "../Screens/User/AboutDistrict";
import Hospitality from "../Screens/User/Hospitality";
import More from "../Screens/User/More";
import Tourism from "../Screens/User/Tourism";
import History from "../Screens/User/History";
import MapOfDistrict from "../Screens/User/MapOfDistrict";
import Tahasil from "../Screens/User/Tahasil";
import Police from "../Screens/User/Police";
import Subdivisions from "../Screens/User/Subdivisions";
import Demography from "../Screens/User/Demography";
import HowToReach from "../Screens/User/HowToReach";
import TouristPlaces from "../Screens/User/TouristPlaces";
import TouristAssistance from "../Screens/User/TouristAssistance";
import FairAndFestivals from "../Screens/User/FairAndFestivals";
import DisasterManagement from "../Screens/User/DisasterManagement";
import Helpline from "../Screens/User/Helpline";
import TelephoneDirectory from "../Screens/User/TelephoneDirectory";
import Advertisement from "../Screens/User/Advertisement";
import Annoucements from "../Screens/User/Annoucements";
import Recuirtment from "../Screens/User/Recuirtment";
import Hospitals from "../Screens/User/Hospitals";
import Schools from "../Screens/User/Schools";
import CollegeUniversities from "../Screens/User/CollegeUniversities";
import Banks from "../Screens/User/Banks";

const userRoutes = [
  { path: "/", component: <Home /> },
  { path: "/AboutDistrict", component: <AboutDistrict /> },
  { path: "/Hospitality", component: <Hospitality /> },
  { path: "/More", component: <More /> },
  { path: "/Tourism", component: <Tourism /> },
  { path: "*", component: <NotFound /> },
  { path: "/History", component: <History/>},
  { path: "/MapOfDistrict", component: <MapOfDistrict/>},
  { path: "/Tahasil", component: <Tahasil/>},
  { path: "/Police", component: <Police/>},
  { path: "/Subdivisions", component: <Subdivisions/>},
  { path: "/Demography", component: <Demography/>},
  { path: "/HowToReach", component: <HowToReach/>},
  { path: "/TouristPlaces", component: <TouristPlaces/>},
  { path: "/TouristAssistance", component: <TouristAssistance/>},
  { path: "/FairAndFestivals", component: <FairAndFestivals/>},
  { path: "/DisasterManagement", component: <DisasterManagement/>},
  { path: "/Helpline", component: <Helpline/>},
  { path: "/TelephoneDirectory", component: <TelephoneDirectory/>},
  { path: "/Advertisement", component: <Advertisement/>},
  { path: "/Annoucements", component: <Annoucements/>},
  { path: "/Recuirtment", component: <Recuirtment/>},
  { path: "/Hospitals", component: <Hospitals/>},
  { path: "/Schools", component: <Schools/>},
  { path: "/CollegeUniversities", component: <CollegeUniversities/>},
  { path: "/Banks", component: <Banks/>},
];

export { userRoutes };

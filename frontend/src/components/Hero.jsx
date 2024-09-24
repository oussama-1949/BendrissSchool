import React from "react";
import ecoleImage from "../assets/ecole.jpg";
import CustomButton from "./common/Button";
import { useTranslation } from "react-i18next";
import { MapPinIcon } from "@heroicons/react/24/solid";
import { AcademicCapIcon } from "@heroicons/react/24/solid";
import { ArrowTrendingUpIcon } from "@heroicons/react/16/solid";
import { UserGroupIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
function Hero() {
  const { t } = useTranslation();

  return (
    <section className="relative  dark:bg-gray-900">
      <img
        src={ecoleImage}
        alt="Background Image"
        className="absolute inset-0 w-full h-full object-cover -z-10"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-[rgba(0,0,0,0.7)] to-transparent -z-0"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.7)] to-transparent -z-10"></div>

      {/* =============================================Deux buttons========================================================= */}

      <div className="py-8 px-4  mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12 relative z-10">
        <div className=" flex-1 ">
          <h1 className="mt-4 text-4xl font-bold tracking-tight leading-none text-white md:text-5xl lg:text-6xl dark:text-whttps://flowbite.com/hite">
            Groupe Scolaire Ben Driss
          </h1>
          <p className="mt-12 text-base font-regular text-white lg:text-2xl sm:px-16 xl:px-48 dark:text-gray-400">
            {t("Quality education for a better world.")}
          </p>
        </div>
        <div className="flex flex-col mt-12  lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-6">
          <a
            href="#"
            className="inline-flex  w-2/5  sm:w-1/6 sm:bg-blue justify-center font-regular bg-custom-blue items-center paddingbutton-learnmore text-xl hover:underline  text-center text-white rounded-2xl hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900 :text-black hover:translate-y-1 transition-transform duration-300"
          >
            {t("location")}
            <MapPinIcon className="w-6 h-6 ml-2" />
          </a>
          <Link href="#" to="/school-registration">
            <CustomButton text={t("school registration")} padding="7px 10px" />
          </Link>
        </div>

        {/* =============================================Trois Features========================================================= */}
        <div className="px-4 mx-auto text-center md:max-w-screen-md lg:max-w-screen-lg lg:px-36">
          <div className="flex flex-wrap justify-center items-center mt-8 text-white  sm:justify-between">
            {/* Academic Excellence */}
            <a
              href="#"
              className="flex flex-col items-center mr-5 mb-5 lg:mb-0 hover:text-custom-yellow dark:hover:text-gray-400"
            >
              <AcademicCapIcon className="w-20 h-20" />
              <p className="mt-2 text-center">{t("academic excellence")}</p>
            </a>

            {/* Personal Growth */}
            <a
              href="#"
              className="flex flex-col items-center mr-5 mb-5 lg:mb-0 hover:text-custom-yellow dark:hover:text-gray-400"
            >
              <ArrowTrendingUpIcon className="w-20 h-20" />
              <p className="mt-2">{t("personal growth")}</p>
            </a>

            {/* Future Leadership */}
            <a
              href="#"
              className="flex flex-col items-center mr-5 mb-5 lg:mb-0 hover:text-custom-yellow dark:hover:text-gray-400"
            >
              <UserGroupIcon className="w-20 h-20" />
              <p className="mt-2">{t("future leadership")}</p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

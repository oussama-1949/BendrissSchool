import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link as ScrollLink } from "react-scroll";
import { Link } from "react-router-dom";  // Import Link from react-router-dom
import LanguageSwitcher from "./LanguageSwitcher";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <nav className="bg-white dark:bg-gray-900">
      <div className="max-w-screen-xl sm:h-24 flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="self-center text-3xl text-custom-yellow font-bold whitespace-nowrap dark:text-white">
            Gsbd
          </span>
        </a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded={isOpen}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`${isOpen ? "block" : "hidden"} w-full md:block md:w-auto`}
          id="navbar-default"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <ScrollLink
                to="thirdSection"
                smooth={true}
                duration={500}
                className="cursor-pointer block py-1 px-3 font-base text-lg sm:text-custom-blue sm:font-semibold rounded relative hover:bg-gray-100 md:hover:bg-transparent md:hover:text-custom-yellow dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-custom-yellow after:transition-all after:duration-300 hover:after:w-full"
              >
                {t("about")}
              </ScrollLink>
            </li>

            <li>
              {/* Use Link for routing */}
              <Link
                to="/school-registration"  
                className="block py-1 px-3 font-semibold sm:text-custom-blue text-lg rounded relative hover:bg-gray-100 md:hover:bg-transparent md:hover:text-custom-yellow dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-custom-yellow after:transition-all after:duration-300 hover:after:w-full"
              >
                {t("school registration")}
              </Link>
            </li>

            <li>
              <LanguageSwitcher />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

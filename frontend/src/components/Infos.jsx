import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline"; // Updated import for v2
import { useTranslation } from "react-i18next";

const Infos = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col md:flex-row justify-between items-center p-4 bg-custom-blue dark:bg-gray-900 text-gray-800 dark:text-white">
      {/* Left Side: Contact Information */}
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 mb-4 md:mb-0">
        <div className="flex items-center">
          <PhoneIcon className="w-5 h-5 mr-2 text-custom-yellow" />
          <span className="text-white text-sm">+212537846386</span>
        </div>
        <div className="flex items-center">
          <EnvelopeIcon className="w-5 h-5 mr-2 text-custom-yellow" />
          <span className="text-white text-sm"> bendriss@gmail.com</span>
        </div>
        <div className="flex items-center">
          <MapPinIcon className="w-5 h-5 mr-2 text-custom-yellow" />
          <span className="text-white text-sm"> 36J7+W7M, Salé</span>
        </div>
      </div>

      {/* Right Side: Social Media Icons */}
      <div className="flex space-x-4">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-custom-yellow text-white w-5 h-5"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            {/* Facebook Icon */}
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M18 2h-3a4 4 0 00-4 4v3H7v4h4v8h4v-8h3l1-4h-4V6a1 1 0 011-1h3z"
            />
          </svg>
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-custom-yellow text-white">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            {/* Instagram Icon */}
            <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm12 2c.551 0 1 .449 1 1v2a1 1 0 01-1 1h-2a1 1 0 01-1-1V5c0-.551.449-1 1-1h2zM12 7a5 5 0 110 10 5 5 0 010-10zm0 2a3 3 0 100 6 3 3 0 000-6z" />
          </svg>
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-custom-yellow text-white w-5 h-5"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            {/* Twitter Icon */}
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0016.84 2c-2.66 0-4.8 2.14-4.8 4.8 0 .38.04.76.12 1.12A13.6 13.6 0 013 4.1s-4 9.12 5 13a10.4 10.4 0 01-6 1.67c9 5.7 20.18 3.6 20.18-10.17 0-.16-.01-.32-.02-.47A7.4 7.4 0 0023 3z"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Infos;

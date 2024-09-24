import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-custom-blue    dark:bg-gray-800">
      <div className="w-full text-white sm:h-14 mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-white sm:text-center dark:text-gray-400">
          © 2024{" "}
          <a
            href="https://flowbite.com/"
            className="hover:underline sm:font-light "
          >
            Gsbd {t("All Rights Reserved.")}
          </a>
        </span>
        <span className="sm:font-light">
          {t("Made By")}{" "}
          <a
            href="https://www.linkedin.com/in/oussama-kotbi-ibtok/"
            className="text-sm  sm:font-semibold hover:underline"
          >
            @Oussama Kotbi
          </a>
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-white dark:text-gray-400 sm:mt-0">
          <li>
            <a href="#" className="hover:underline sm:font-light me-4 md:me-6">
              {t("about")}
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline sm:font-light me-4 md:me-6">
              {t("privacy police")}
            </a>
          </li>
        
          <li>
            <a
              href="#"
              className="inline-flex  items-center sm:text-custom-blue sm:bg-blue justify-center sm:font-semibold sm:bg-white sm:px-4 sm:py-1 text-base text-center text-white rounded-2xl hover:bg-white focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900 hover:text-custom-blue transition-transform duration-300 relative group"
            >
              Contact
              <span className="ml-2 inline-flex items-center text-custom-blue   duration-300">
              
                <ArrowRightIcon className="w-5 h-5 transform transition-transform duration-300 text-custom-blue" />
                
              </span>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
export default Footer;
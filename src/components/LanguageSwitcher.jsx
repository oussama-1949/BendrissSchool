import { useTranslation } from "react-i18next";
import { LanguageIcon } from "@heroicons/react/24/outline"; // Import the icon

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const handleChange = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <div className=" language-switcher-container transition-colors duration-300 w-1/2 sm:w-32  px-2 py-1 bg-custom-yellow rounded-md flex items-center space-x-2">
      <LanguageIcon className="w-5 h-5 text-custom-blue dark:text-gray-300" /> {/* Translation icon */}
      <select
        onChange={handleChange}
        className="py-1  text-sm font-medium text-custom-blue bg-custom-yellow  rounded-md transition-colors duration-300 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-gray-500 focus:outline-none"
        defaultValue={i18n.language}
      >
        <option value="en">English</option>
        <option value="fr">Français</option>
      </select>
    </div>
  );
};

export default LanguageSwitcher;

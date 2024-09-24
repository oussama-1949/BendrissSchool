import React from "react";
import { useTranslation } from "react-i18next";
import useIntersectionObserver from "../hooks/useIntersectionObserver ";
const links = [
  { name: "Open roles", href: "#" },
  { name: "Internship program", href: "#" },
  { name: "Our values", href: "#" },
  { name: "Meet our leadership", href: "#" },
];
const SecondSection = () => {
  const { t } = useTranslation();
  const isVisible = useIntersectionObserver({
    threshold: 0.1, // Adjust as needed
  });

  const stats = [
    { name: t("professors"), value: "+50" },
    { name: t("students"), value: "+300" },
    { name: t("classes"), value: "+20" },
    { name: t("events"), value: "+50" },
  ];

  return (
    <div
      id="second-section"
      className={`relative isolate overflow-hidden py-24 sm:py-32 transition-opacity ${
        isVisible ? "animate-fade-in" : "animate-fade-out"
      }`}
    >
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl sm:font-bold tracking-tight text-custom-blue sm:text-5xl leading-tight whitespace-nowrap">
            {t("Our Educational Vision")}
          </h2>
          <p className="mt-6 sm:font-regular leading-8 text-custom-blue">
            {t(
              "Our institution pedagogical approach is built on solid foundations and essential values that guide our mission. We are committed to instilling principles such as commitment, active citizenship, and respect for rules. These values promote the development of key skills such as acquiring a solid general knowledge, independence, proficiency in foreign languages, integration of digital technologies, and education based on ethics and social responsibility."
            )}
          </p>
        </div>
        <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
          <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.name} className="flex flex-col-reverse">
                <dt className="sm:text-regular sm:text-center sm:text-2xl sm:ml-4 text-xl leading-7 text-custom-blue">
                  {stat.name}
                </dt>
                <dd className="relative sm:text-6xl sm:text-center sm:font-semibold leading-9 text-4xl tracking-tight text-custom-blue">
                  <span className="absolute inset-x-1/2 top-1/2 h-2/6 bg-custom-yellow transform -translate-x-1/2 -translate-y-1/2 w-1/2 z-0"></span>
                  <span className="relative z-10">{stat.value}</span>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default SecondSection;

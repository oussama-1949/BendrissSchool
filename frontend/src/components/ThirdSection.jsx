import React from "react";
import maternelle from "../assets/maternelle.jpg";
import maternelle2 from "../assets/maternelle2.jpg";
import primaire from "../assets/primaire.jpg";
import primaire2 from "../assets/primaire2.jpg";
import { useTranslation } from "react-i18next";
import { Element } from 'react-scroll';

function ThirdSection() {
  const { t } = useTranslation();

  return (
        <Element name="thirdSection">

    <section className="relative  dark:bg-gray-900">
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>

      <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div className="sm:text-light sm:leading-8 text-custom-blue sm:text-lg dark:text-gray-400">
          <h2 className="mb-4 text-4xl tracking-tight sm:font-bold text-custom-blue dark:text-white">
            {t("kinder garten")}
          </h2>
          <p className="mb-4 sm:font-regular sm:leading-8">
            {t(
              "At Groupe Scolaire Ben Driss, primary education is a crucial stage in our students' learning journey. We provide a motivating and secure learning environment where the foundations of education are solidly established. With tailored programs, our dedicated teachers guide each child in acquiring fundamental skills such as reading, writing, mathematics, and science. Additionally, we emphasize the development of social skills, creativity, and self-confidence, thereby preparing our students to become independent and curious learners. Primary education with us represents much more than just a stage; it is the foundation upon which our students will build their future success."
            )}
          </p>
        </div>
        <div className="sm:grid sm:grid-cols-2 sm:gap-4 sm:mt-8 hidden">
          <img className="w-full rounded-3xl" src={maternelle} />
          <img className="mt-4 w-full lg:mt-10 rounded-3xl" src={maternelle2} />
        </div>
      </div>

      <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div className="sm:grid sm:grid-cols-2 sm:gap-4 sm:mt-8 hidden">
          <img className="  sm:w-full sm:rounded-3xl" src={primaire} />
          <img className="mt-4 w-full lg:mt-10 rounded-3xl" src={primaire2} />
        </div>
        <div className="font-light sm:text-custom-blue text-black sm:text-lg dark:text-gray-400">
          <h2 className="mb-4 text-4xl tracking-tight sm:font-bold text-custom-blue dark:text-white">
            {t("the primary")}
          </h2>
          <p className="mb-4 sm:font-regular sm:leading-8">
            {t(
              "At Groupe Scolaire Ben Driss, primary education represents a key phase in our students' development. We offer a dynamic and secure learning environment where the foundations of education are firmly established. With tailored programs, our passionate teachers guide each child in acquiring fundamental skills in reading, writing, mathematics, and science. Additionally, we promote the development of social skills, creativity, and self-confidence, preparing our students to become independent and curious learners. Primary education with us forms a solid foundation upon which our students will build their future success."
            )}
          </p>
          <p></p>
        </div>
      </div>
    </section>
    </Element>
  );
}

export default ThirdSection;

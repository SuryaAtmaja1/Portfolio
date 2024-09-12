import React from "react";

import { Inter } from "next/font/google";
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const HeroComp = () => {
  return (
    <div className=" bg-[#f4f4f4] flex ">
      <div className=""></div>
      <div className={`ml-10 2xl:ml-[calc(50%-740px)] mt-14 ${inter.variable}`}>
        <p className="text-3xl sm:text-5xl lg:text-7xl font-bold mr-12 text-maintext cursor-default">
          Hi, I'm Kurniawan <span className=" text-nowrap">Surya Atmaja</span>
        </p>
        <p className="text-2xl md:text-3xl lg:text-5xl font-semibold max-w-[400px] md:max-w-[none] lg:max-w-5xl mr-10 md:mr-24 text-secondtext mt-6 cursor-default">
          Beginner Front-End Web Developer. Open to exploring new and exciting
          projects. Interested in softwere.
        </p>
      </div>
    </div>
  );
};

export default HeroComp;

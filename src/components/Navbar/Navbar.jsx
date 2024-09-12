"use client";

import React, { useCallback, useEffect, useState } from "react";
import { Inter } from "next/font/google";
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const Navbar = () => {
  return (
    <div className="bg-[#f4f4f4] flex justify-end min-h-full">
      <div className="m-5 font-semibold md:text-lg lg:text-3xl">
        <p
          className={`text-secondtext hover:text-maintext cursor-pointer ${inter.variable}`}
        >
          Social Media
        </p>
      </div>
    </div>
  );
};

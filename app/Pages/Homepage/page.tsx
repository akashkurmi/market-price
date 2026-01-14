"use client";
import Context from "@/app/Context/Context";
import * as React from "react";
import HomeCards from "./HomeCards";

const page = () => {
  return (
    <div className="mt-10">
      <Context>
        <HomeCards />
      </Context>
    </div>
  );
};
export default page;

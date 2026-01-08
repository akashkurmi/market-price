"use client";
import Context from "@/app/Context/Context";
import Link from "@/node_modules/next/link";
// import properties from "@/properties.json";
import { LocationCity, LocationOn } from "@mui/icons-material";
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

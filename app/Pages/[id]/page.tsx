"use client";
import Context from "@/app/Context/Context";
import React, { use } from "react";
import PropertyDetails from "./PropertyDetails";

const page = ({ params }: { params: Promise<{ id: string }> }) => {
  console.log(params);
  const { id } = use(params);
  return (
    <Context>
      <PropertyDetails id={id} />
    </Context>
  );
};
export default page;

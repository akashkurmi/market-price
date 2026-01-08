"use client";
import Context from "@/app/Context/Context";
import { useParams } from "next/navigation";
import React, { use } from "react";
import PropertyDetails from "./PropertyDetails";
type Props = {};
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

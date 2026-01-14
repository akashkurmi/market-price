import Context from "@/app/Context/Context";
import React, { use } from "react";
import PropertyDetails from "./PropertyDetails";

const Page = ({ params }: { params: Promise<{ id: string }> }) => {
  console.log(params);
  const id = use(params).id;
  return (
    <Context>
      <PropertyDetails id={id} />
    </Context>
  );
};
export default Page;

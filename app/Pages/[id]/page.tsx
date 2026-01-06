import * as React from "react";
type Props = {};
const pag = ({ params }: any) => {
  console.log("rep");
  return <div>props{params.id}</div>;
};
export default pag;

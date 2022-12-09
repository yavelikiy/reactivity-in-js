import React from "react";

const Block = ({ id, children }) => (
  <>
    <hr id={id} className="block" style={{ display: "none" }} />
    {children}
  </>
);

export default Block;

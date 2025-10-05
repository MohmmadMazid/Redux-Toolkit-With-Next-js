import React from "react";

const ParellelRoutingLayout = ({ children, header, footer, main }) => {
  return (
    <div>
      <div>{header}</div>
      <main style={{ padding: "20px" }}>{main}</main>
      {/* <>{children}</> */}
      <div>{footer}</div>
    </div>
  );
};

export default ParellelRoutingLayout;

import React from "react";
import { withRouter } from "react-router-dom";

import Navigation from "./Navigation";

const Layout = ({ children }) => {
  return (
    <>
      <Navigation />
      {children}
    </>
  );
};

export default withRouter(Layout);

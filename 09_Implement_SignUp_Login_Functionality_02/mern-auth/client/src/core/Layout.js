import React from "react";
import { withRouter } from "react-router-dom";

import Navigation from "./Navigation";
import SignUpLogin from "../components/auth/SignUpLogin";

const Layout = ({ children }) => {
  return (
    <>
      <Navigation />
      <SignUpLogin />
      {children}
    </>
  );
};

export default withRouter(Layout);

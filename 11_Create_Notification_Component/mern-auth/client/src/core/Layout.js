import React, { useState } from "react";
import { withRouter } from "react-router-dom";

import Navigation from "./Navigation";
import SignUpLogin from "../components/auth/SignUpLogin";

const Layout = ({ children }) => {
  const [isShowingAuth, setIsShowingAuth] = useState(null);

  const displayAuth = (form) => {
    setIsShowingAuth(form);
  };

  return (
    <>
      <Navigation displayAuth={displayAuth} />
      {isShowingAuth === "login" && (
        <SignUpLogin start="login" displayAuth={displayAuth} />
      )}
      {isShowingAuth === "signUp" && (
        <SignUpLogin start="signUp" displayAuth={displayAuth} />
      )}
      {children}
    </>
  );
};

export default withRouter(Layout);

import React, { useState } from "react";
import { withRouter } from "react-router-dom";

import ReactNotification, { store } from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import { defaultSettings } from "../data/notification";
import "animate.css";

import Navigation from "./Navigation";
import SignUpLogin from "../components/auth/SignUpLogin";

const Layout = ({ children }) => {
  const [isShowingAuth, setIsShowingAuth] = useState(null);

  const displayAuth = (form) => {
    setIsShowingAuth(form);
  };

  const createNotification = (notification, next) => {
    store.addNotification({
      ...defaultSettings,
      type: notification.type,
      title: notification.title,
      message: notification.message,
    });

    if (next) {
      next();
    }
  };

  return (
    <>
      <Navigation displayAuth={displayAuth} />
      {isShowingAuth === "login" && (
        <SignUpLogin
          start="login"
          displayAuth={displayAuth}
          createNotification={createNotification}
        />
      )}
      {isShowingAuth === "signUp" && (
        <SignUpLogin
          start="signUp"
          displayAuth={displayAuth}
          createNotification={createNotification}
        />
      )}
      <ReactNotification />
      {children}
    </>
  );
};

export default withRouter(Layout);

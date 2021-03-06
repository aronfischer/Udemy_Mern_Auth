import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import App from "./pages/App";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;

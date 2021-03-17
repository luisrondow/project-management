import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "../container/Home";
import Board from "../container/Board";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/board/:id" exact component={Board} />
    </Switch>
  );
}

import React from "react";
import { Route, Switch } from "react-router-dom";
import Homepage from "./pages/homepage/homepage";
import Profile from  "./pages/profile/profile"
const Routes =()=>(
    <Switch>
        <Route exact path={"/"} component={Homepage}/>
        <Route exact path={"/profile/:slug"} component={Profile}/>
    </Switch>

);

export default Routes;

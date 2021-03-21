import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import CategoryPage from "../components/category/CategoryPage";
import Homepage from "../components/Homepage";
import ResponsiveLayout from "../components/UI/ResponsiveLayout";
import LoginPage from "../components/user/LoginPage";

export default function AppRoutes() {
  return (
    <Router>
      {/* <Link to='/'>HOME</Link>
      <hr />
      <Link to='/category/ducks'>TO DUCKS</Link> */}
      <ResponsiveLayout>
        <Switch>
          <Route exact path="/category/:id">
            <CategoryPage />
          </Route>
          <Route exact path="/login/">
            <LoginPage />
          </Route>
          <Route path="/">
            <Homepage />
          </Route>
        </Switch>
      </ResponsiveLayout>
    </Router>
  );
}

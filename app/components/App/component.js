import React from "react";
import PropTypes from "prop-types";
import {
  Route as Case,
  Switch,
  BrowserRouter as RoutingProvider,
  Redirect
} from "react-router-dom";
import styles from "./assets/styles.css";
import "./assets/global.css";

import AppNavigation from "AppNavigation";

export default function Component(props) {
  return (
    <RoutingProvider>
      <div className={styles.Component}>
        <AppNavigation />
        <Switch>

          {/*<Case component={NotFoundPage} />*/}
        </Switch>
      </div>
    </RoutingProvider>
  );
}

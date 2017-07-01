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

import MainPage from 'MainPage';
import ContributePage from 'ContributePage';

export default function Component(props) {
  return (
    <RoutingProvider>
      <div className={styles.Component}>
        <AppNavigation />
        <Switch>

          <Case exact path='/' component={MainPage} />
          <Case path='/:songId' component={ContributePage} />
          {/*<Case component={NotFoundPage} />*/}
        </Switch>
      </div>
    </RoutingProvider>
  );
}

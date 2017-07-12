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

import MainPage from "MainPage";
import ContributePage from "ContributePage";

import BaseComponent from "BaseComponent";
var content = null;
var a = 3;
var arr = Array.from({ length: 80 }, (v, i) => i);
var b = null;

var elemes = arr.map(function() {
  return <div>aaaa</div>;
});
export default class Component extends BaseComponent {
  constructor(props) {
    super(props);

    this.state = { content: null };

    // this.onClick = this.onClick.bind(this);
  }

  render() {
    return (
      <RoutingProvider>
        <div className={styles.Component}>
          <AppNavigation />

          {b}

          <MainPage onClick={this.onClick}>
            {this.state.content}
          </MainPage>

        </div>
      </RoutingProvider>
    );
  }

  onClick() {
    // console.log("clicked");
    // this.setState({
    //   content: [1,2,3,4,5].map(i => <div>foobar</div>)
    // });

    b = elemes;

    this.forceUpdate();
  }
}

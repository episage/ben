import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import styles from "./styles.css";

import BaseComponent from "BaseComponent";

import SongList from "SongList";

import { Button, IconButton } from "react-toolbox/lib/button";

export default function Component(props) {
  return (
    <div className={styles.Component}>
      <p>Look for your fav song!</p>
      <p>if its not there , be the one who creates it</p>
      <SongList />
      <Button
        icon="add"
        label="Add a song"
        flat
        primary
        onClick={props.onClick}
      />

      {props.children}

    </div>
  );
}

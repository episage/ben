import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import styles from "./styles.css";

import BaseComponent from "BaseComponent";

import SongListItem from "SongListItem";

export default function Component(props) {
  return (
    <div className={styles.Component}>
      <div>00:00</div>
      <div>{props.duration}</div>
    </div>
  );
}

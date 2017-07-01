import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import styles from "./styles.css";

import BaseComponent from "BaseComponent";

import SongListItem from "SongListItem";

Component.defaultProps = {
  items: [
    {
      id: 1,
      username: "dupa",
      songName: "candyfloss"
    },
    {
      id: 2,
      username: "kupa",
      songName: "candyman"
    }
  ]
};

export default function Component(props) {
  return (
    <div className={styles.Component}>
      {props.items.map(item => <SongListItem {...item} />)}
    </div>
  );
}

import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import styles from "./styles.css";

import BaseComponent from "BaseComponent";

import UserVoiceFeedback from "UserVoiceFeedback";
import RecordingProgressBar from "RecordingProgressBar";

export default function Component(props) {
  return (
    <div className={styles.Component}>
      <p>Connect ur earphones to aviod playback</p>
      <UserVoiceFeedback />
      <RecordingProgressBar />

      <button>start recording</button>
      <button disabled={true}>listen</button>
      <button disabled={true}>send</button>
    </div>
  );
}

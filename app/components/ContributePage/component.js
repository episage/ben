import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import styles from "./styles.css";

import BaseComponent from "BaseComponent";

import UserVoiceFeedback from "UserVoiceFeedback";
import RecordingProgressBar from "RecordingProgressBar";

import RecordRTC from "recordrtc";
import ReactPlayer from "react-player";
import { captureUserMedia, S3Upload } from "utils";

const hasGetUserMedia = !!(navigator.getUserMedia ||
  navigator.webkitGetUserMedia ||
  navigator.mozGetUserMedia ||
  navigator.msGetUserMedia);

export default class Component extends BaseComponent {
  constructor(props) {
    super(props);

    this.state = {
      recordVideo: null,
      src: null,
      uploadSuccess: null,
      uploading: false
    };
  }

  render() {
    return (
      <div className={styles.Component}>
        <p>Connect ur earphones to aviod playback</p>
        <UserVoiceFeedback />
        <RecordingProgressBar />

        <button onClick={this.startRecord}>start recording</button>
        <button disabled={true}>listen</button>
        <button disabled={true}>send</button>

        {this.state.uploading ? this.renderVideo() : null}

      </div>
    );
  }

  renderVideo() {
    var blob = this.state.recordVideo.blob;



    return (
      <video
        autoplay
        controls
        preload="metadata"
        src={this.state.recordVideo.toURL()}
      >
        Your browser does not support the video element
      </video>
    );
  }

  componentDidMount() {
    if (!hasGetUserMedia) {
      alert(
        "Your browser cannot stream from your webcam. Please switch to Chrome or Firefox."
      );
      return;
    }
    this.requestUserMedia();
  }

  requestUserMedia() {
    console.log("requestUserMedia");
    captureUserMedia(stream => {
      this.setState({ src: window.URL.createObjectURL(stream) });
      console.log("setting state", this.state);
    });
  }

  startRecord() {
    captureUserMedia(stream => {
      this.state.recordVideo = RecordRTC(stream, { type: "video" });
      this.state.recordVideo.startRecording();
    });

    setTimeout(() => {
      this.stopRecord();
    }, 4000);
  }

  stopRecord() {
    this.state.recordVideo.stopRecording(() => {
      let params = {
        type: "video/webm",
        data: this.state.recordVideo.blob,
        id: Math.floor(Math.random() * 90000) + 10000
      };
      this.setState({ uploading: true });

      // S3Upload(params).then(
      //   success => {
      //     console.log("enter then statement");
      //     if (success) {
      //       console.log(success);
      //       this.setState({ uploadSuccess: true, uploading: false });
      //     }
      //   },
      //   error => {
      //     alert(
      //       error,
      //       "error occurred. check your aws settings and try again."
      //     );
      //   }
      // );
    });
  }
}

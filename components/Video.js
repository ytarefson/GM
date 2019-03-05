import React, { Component } from "react";
import "../scss/video.scss";
import { Player } from "video-react";

export default class Video extends Component {
  render() {
    return (
      <div className="container-fluid p-0">
        <div className="container">
          <div className="row">
            <div className="col-12 p-0 p-sm-4">
              <Player
                className="myVideoKompleks-2"
                playsInline
                poster="../static/video/poster.jpg"
                src="../static/video/kompleks-reprodukcii.mp4"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

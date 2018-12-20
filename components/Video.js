import React, { Component } from 'react';
import '../scss/video.scss';
import { Player } from 'video-react';

export default class Video extends Component {
  render() {
    return (
      <div className="mycontainer section-plate">
        <Player
          className="myVideo"
          playsInline
          poster="../static/video/poster.jpg"
          src="../static/video/kompleks-reprodukcii.mp4"
        />
      </div>
    );
  }
}

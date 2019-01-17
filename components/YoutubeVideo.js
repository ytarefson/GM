import React from 'react';
import YouTube from 'react-youtube';
import '../scss/video.scss';

class YoutubeVideo extends React.Component {
  render() {
    const opts = {
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 0
      }
    };

    return (
      <YouTube
        className="myVideo"
        videoId="n4w_VCaN6C8"
        opts={opts}
        onReady={this._onReady}
      />
    );
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
}
export default YoutubeVideo;

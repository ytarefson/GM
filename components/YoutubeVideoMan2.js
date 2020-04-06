import React from 'react';
import YouTube from 'react-youtube';

class YoutubeVideoMan2 extends React.Component {
  render() {
    const opts = {
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 0
      }
    };

    return (
      <>
        <YouTube
          className="myVideo"
          videoId="iELYVfffzHQ"
          opts={opts}
          onReady={this._onReady}
        />
        <style jsx>{`
          @import '../node_modules/video-react/dist/video-react';
          .myVideo {
            padding-left: 15px;
            padding-right: 15px;
            width: 100%;
            height: 300px;
          }
          .video-react-poster {
            top: 0;
          }

          .myVideoKompleks-2 {
            width: auto;
            overflow: hidden;
          }

          @media (min-width: 992px) {
            .myVideo {
              height: 400px;
            }
          }
          @media (min-width: 1200px) {
            .myVideo {
              height: 400px;
            }
          }
        `}</style>
      </>
    );
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
}
export default YoutubeVideoMan2;

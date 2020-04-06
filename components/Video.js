import React, { Component } from 'react';
import { Player } from 'video-react';

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
                poster="/video/poster.jpg"
                src="/video/kompleks-reprodukcii.mp4"
              />
            </div>
          </div>
        </div>
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
      </div>
    );
  }
}

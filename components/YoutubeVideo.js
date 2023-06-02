import React from "react";
import YouTube from "react-youtube";
  
export default class YoutubeVideo extends React.Component {
    render() {
      const { videoId } = this.props; // Access the videoId prop
      const opts = {
        height: "390",
        width: "640",
        playerVars: {
          autoplay: 0,
        },
      };
  
      return (
        <div className="video">
          <YouTube videoId={videoId} opts={opts} onReady={this._onReady} />
        </div>
      );
    }
  
    _onReady(event) {
      event.target.pauseVideo();
    }
  }
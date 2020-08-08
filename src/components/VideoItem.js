import './VideoItem.css';
import React from 'react';

const videoItem = ({ video, onVideoSelect }) => {
  return (
    <div onClick={() => onVideoSelect(video)} className="video-item item">
      <img
        key={video.id.videoId}
        alt={video.snippet.title}
        className="ui image"
        src={video.snippet.thumbnails.default.url}
      />
      <div className="content">
        <p className="header">{video.snippet.title}</p>
        <div className="description">Updated 10 mins ago</div>
      </div>
    </div>
  );
};

export default videoItem;

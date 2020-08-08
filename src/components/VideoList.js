import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos, onvideoSelect }) => {
  console.log(videos);
  const renderList = videos.map((video) => {
    return (
      <VideoItem
        key={video.id.videoId}
        onVideoSelect={onvideoSelect}
        video={video}
      />
    );
  });
  return <div className="ui relaxed divided list">{renderList}</div>;
};

export default VideoList;

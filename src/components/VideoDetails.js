import React from 'react';

const videoDetails = ({ video }) => {
  if (!video) {
    return (
      <div class="ui segment">
        <div class="ui active inverted dimmer">
          <div class="ui large text loader">Loading</div>
        </div>
        <p></p>
      </div>
    );
  }
  const sourceSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  return (
    <div className=" ui segment">
      <div className=" ui embed">
        <iframe title="video player" src={sourceSrc} />
      </div>
      <h4 className="ui header"> {video.snippet.title} </h4>
      <p>{video.snippet.description}</p>
    </div>
  );
};

export default videoDetails;

import React from 'react';

function VideoModal(props) {
  const { vid } = props;
  const videoToDisplay = vid ? <iframe title={vid.title} src={vid.url} /> : 'Loading';
  return (
    <div>
      {videoToDisplay}
    </div>
  );
}

export default VideoModal;

import React, { useState } from 'react';
import classes from './video-modal.module.css';

function VideoModal(props) {
  const { vid } = props;
  const [isLoaded, setVisibility] = useState(false);

  const handleLoad = () => setVisibility(!isLoaded);

  const vidToDisplay = vid ? <iframe onLoad={handleLoad} className={isLoaded ? classes.loaded : classes.notLoaded} title={vid.title} src={vid.url} /> : null;

  return (
    <div>
      {/* {isLoaded ? vidToDisplay : <img src={vid.thumbnail} alt="" />} */}
      {vidToDisplay}
    </div>
  );
}

export default VideoModal;

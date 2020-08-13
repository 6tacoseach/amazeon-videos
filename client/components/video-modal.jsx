import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import classes from './video-modal.module.css';

function VideoModal(props) {
  const { vid, close } = props;
  const [isLoaded, setVisibility] = useState(false);

  const onLoad = () => setVisibility(!isLoaded);

  const loaded = isLoaded ? classes.loaded : classes.notLoaded;
  const vidShown = <iframe onLoad={onLoad} className={loaded} title={vid.title} src={vid.url} />;

  const vidContainer = <div onClick={close} role="presentation" className={classes.modalBackground}>{vidShown}</div>;

  return (
    ReactDOM.createPortal(vidContainer, document.getElementById('video-modal'))
  );
}

export default VideoModal;

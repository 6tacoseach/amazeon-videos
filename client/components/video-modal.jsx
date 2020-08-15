import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import ModalCard from './modal-card.jsx';
import classes from './video-modal.module.css';

function VideoModal(props) {
  const { vid, close, vidList } = props;
  const [isLoaded, setVisibility] = useState(false);

  const onLoad = () => setVisibility(!isLoaded);

  const loaded = isLoaded ? classes.loaded : classes.notLoaded;
  const vidShown = <iframe onLoad={onLoad} className={loaded} title={vid.title} src={vid.url} />;
  const vidListCards = vidList.map((video) => <ModalCard key={video._id} video={video} />);

  const vidContainer = (
    <div onClick={close} role="presentation" className={classes.modalBackground} id="modalBackground">
      <div className={classes.modalWindow}>
        {vidShown}
        <div className={classes.videoList}>
          {vidListCards}
        </div>
      </div>
    </div>
  );

  return (
    ReactDOM.createPortal(vidContainer, document.getElementById('video-modal'))
  );
}

export default VideoModal;

import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import ModalCard from './modal-card.jsx';
import VideoInfo from './video-modal-info.jsx';
import classes from './video-modal.module.css';

function VideoModal(props) {
  const { vid, close, vidList, relatedVids } = props;
  const [isLoaded, setVisibility] = useState(false);

  const onLoad = () => setVisibility(!isLoaded);

  const loaded = isLoaded ? classes.loaded : classes.notLoaded;
  const vidShown = <iframe onLoad={onLoad} className={loaded} title={vid.title} src={vid.url} />;
  const vidListCards = vidList.map((video) => <ModalCard key={video._id} video={video} />);
  const relatedVidCards = relatedVids.map((video) => <ModalCard key={video._id} video={video} />);

  const vidContainer = (
    <div onClick={close} role="presentation" className={classes.modalBackground} id="modalBackground">
      <div className={classes.modalFrame}>
        <div className={classes.modalHeader}>
          <div>
            <i className="fab fa-amazon fa-lg" />
            <span className={classes.modalTitle}>Video</span>
          </div>
          <span onClick={close} onKeyDown={close} role="button" tabIndex="0" id="modalClose" className={classes.modalClose}>X</span>
        </div>
        <div className={classes.modalWindow}>
          {vidShown}
          <VideoInfo vid={vid} />
          <div className={classes.videoList}>
            <div className={classes.vidListHeader}>
              <span>
                Videos for this product
              </span>
            </div>
            {vidListCards}
            <div className={classes.vidListHeader}>
              <span>
                Videos for related products
              </span>
            </div>
            {relatedVidCards}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    ReactDOM.createPortal(vidContainer, document.getElementById('video-modal'))
  );
}

export default VideoModal;

import React from 'react';
import classes from './video-modal-info.module.css';

function VideoInfo(props) {
  const { vid } = props;
  return (
    <div className={classes.videoInfo}>
      <div className={classes.likeBar}>
        <span className={classes.likeText}>Helpful?</span>
        <span>
          <i className="far fa-thumbs-up" />
          <span className={classes.likeText}>{vid.likes}</span>
        </span>
        <span>
          <i className="far fa-thumbs-down" />
          <span className={classes.likeText}>{vid.dislikes}</span>
        </span>
        <span className={classes.share}>
          <i className="fas fa-external-link-alt" />
        </span>
      </div>
      <div className={classes.title}>{vid.title}</div>
      <div className={classes.author}>{vid.author}</div>
    </div>
  );
}

export default VideoInfo;

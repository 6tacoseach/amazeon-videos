import React from 'react';
// import classes from './modal-card.modules.css';
import './modal-card.modules.css';

function ModalCard(props) {
  const { video, handleClick } = props;
  return (
    <li className="card">
      {/* <input type="button" onClick={handleClick} /> */}
      <img className="thumbnail" src={video.thumbnail} alt="" />
      <div className="duration">
        <span>
          {video.duration}
        </span>
      </div>
      <div className="videoInfo">
        <div className="title">{video.title}</div>
        <div className="author">{video.author}</div>
      </div>
    </li>
  );
}

export default ModalCard;

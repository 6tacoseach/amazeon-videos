import React, { useState } from 'react';
import classes from './carousel-card.module.css';

function CarouselCard(props) {
  const { video, handleClick, cardId } = props;
  const [isHovered, setHoverState] = useState(false);
  const handleCardHover = () => setHoverState(!isHovered);

  return (
    <li onMouseEnter={handleCardHover} onMouseLeave={handleCardHover} className={classes.card}>
      <input className={isHovered ? classes.playButtonHovered : classes.playButton} type="button" value="Click to play video" id={cardId} onClick={handleClick} />
      <img src={video.thumbnail} alt="" className={isHovered ? classes.thumbnailHovered : classes.thumbnail} />
      <div className={isHovered ? classes.durationHovered : classes.duration}>
        <span className={classes.durationText}>
          {video.duration}
        </span>
      </div>
      <div className={classes.title}>{video.title}</div>
      <div className={classes.author}>{video.author}</div>
    </li>
  );
}

export default CarouselCard;

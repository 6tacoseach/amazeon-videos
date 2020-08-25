import React, { useState } from 'react';
import classes from './carousel-card.module.css';

function CarouselCard(props) {
  const { video, handleClick, cardId } = props;
  const [isHovered, setHoverState] = useState(false);
  // const handleCardHover = () => setHoverState(!isHovered);
  const addHover = () => setHoverState(true);
  const removeHover = () => setHoverState(false);

  return (
    <li onMouseOver={addHover} onFocus={addHover} onMouseLeave={removeHover} className={classes.card}>
      <input className={isHovered ? classes.playButtonHovered : classes.playButton} type="button" value="Click to play video" id={cardId} onClick={handleClick} />
      <img src={video.thumbnail} alt="" className={isHovered ? classes.thumbnailHovered : classes.thumbnail} />
      <span className={isHovered ? '' : classes.playIconBackground} />
      <i className={isHovered ? '' : `${classes.playIcon} fas fa-play-circle fa-3x`} />
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

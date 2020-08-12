import React from 'react';
import classes from './carousel-card.module.css';

function CarouselCard(props) {
  const { video, handleClick, cardId } = props;
  return (
    <li className={classes.card} id={cardId} onClick={handleClick}>
      <img src={video.thumbnail} alt="" className={classes.thumbnail} />
      <div className={classes.duration}>
        <span className={classes.durationText}>
          {video.duration}
        </span>
      </div>
      <div className={classes.title}>{video.title}</div>
      <p className={classes.author}>{video.author}</p>
    </li>
  );
}

export default CarouselCard;

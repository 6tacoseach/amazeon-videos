import React from 'react';

function CarouselCard(props) {
  const { video, handleClick, cardId } = props;
  return (
    <li id={cardId} onClick={handleClick}>
      <img src={video.thumbnail} alt="" />
      <p>{video.duration}</p>
      <p>{video.title}</p>
      <p>{video.author}</p>
    </li>
  );
}

export default CarouselCard;

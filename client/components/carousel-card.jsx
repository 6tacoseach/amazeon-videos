import React from 'react';

function CarouselCard(props) {
  const { video } = props;
  return (
    <li>
      <img src={video.thumbnail} alt="" />
      <p>{video.duration}</p>
      <p>{video.title}</p>
      <p>{video.author}</p>
    </li>
  );
}

export default CarouselCard;

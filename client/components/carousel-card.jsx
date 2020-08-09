import React from 'react';

function CarouselCard(props) {
  const { video } = props;
  return (
    <li>
      <img src={video.thumbnail} alt="" />
    </li>
  );
}

export default CarouselCard;

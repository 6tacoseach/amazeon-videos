import React from 'react';
import CarouselCard from './carousel-card.jsx';

const axios = require('axios');

export default class VideoCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videoData: [],
    };
  }

  componentDidMount() {
    this.retrieveProductVideos();
  }

  retrieveProductVideos() {
    const { pathname } = window.location;
    axios.get(`/video${pathname}`)
      .then((res) => {
        this.setState({
          videoData: res.data,
        });
      })
      .catch((err) => console.error('Error retrieving video data:', err));
  }

  render() {
    const { videoData } = this.state;
    const cards = videoData.map((video) => <CarouselCard key={video._id} video={video} />);
    return (
      <div>
        <ul>
          {cards}
        </ul>
      </div>
    );
  }
}
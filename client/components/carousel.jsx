import React from 'react';
import CarouselCard from './carousel-card.jsx';
import VideoModal from './modal.jsx';

const axios = require('axios');

export default class VideoCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videoData: [],
      selectedVideoId: '',
    };
    this.handleCardClick = this.handleCardClick.bind(this);
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

  handleCardClick(event) {
    console.log(event.target);
    this.setState({
      selectedVideoId: event.target.id,
    });
  }

  render() {
    const { videoData, selectedVideoId } = this.state;
    let cardId = 0;
    const cards = videoData.map((video) => <CarouselCard key={video._id} cardId={cardId++} video={video} handleClick={this.handleCardClick} />);
    return (
      <div>
        <ul>
          <VideoModal vid={videoData[selectedVideoId]} />
          {cards}
        </ul>
      </div>
    );
  }
}

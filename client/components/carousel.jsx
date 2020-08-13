import React from 'react';
import axios from 'axios';
import CarouselCard from './carousel-card.jsx';
import VideoModal from './video-modal.jsx';

export default class VideoCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videoData: [],
      selectedVideo: null,
    };
    this.handleCardClick = this.handleCardClick.bind(this);
    this.handleModalClose = this.handleModalClose.bind(this);
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
    const { videoData } = this.state;
    for (let i = 0; i < videoData.length; i += 1) {
      if (event.target.id === videoData[i]._id) {
        this.setState({
          selectedVideo: videoData[i],
        });
      }
    }
  }

  handleModalClose() {
    this.setState({
      selectedVideo: null,
    });
  }

  render() {
    const { videoData, selectedVideo } = this.state;
    const generateCards = (video) => {
      return <CarouselCard key={video._id} cardId={video._id} video={video} handleClick={this.handleCardClick} />
    };
    const cards = videoData.map(generateCards);
    return (
      <div>
        <ul>
          {selectedVideo ? <VideoModal close={this.handleModalClose} vid={selectedVideo} /> : null}
          {cards}
        </ul>
      </div>
    );
  }
}

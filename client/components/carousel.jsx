import React from 'react';
import axios from 'axios';
import CarouselCard from './carousel-card.jsx';
import VideoModal from './video-modal.jsx';
import classes from './carousel.module.css';

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
    this.setState({
      selectedVideo: videoData[event.target.id],
    });
    document.body.className = classes.modalOpen;
  }

  handleModalClose() {
    this.setState({
      selectedVideo: null,
    });
    document.body.className = '';
  }

  render() {
    const { videoData, selectedVideo } = this.state;
    const generateCards = (video, index) => <CarouselCard key={video._id} cardId={index} video={video} handleClick={this.handleCardClick} />;
    const cards = videoData.map(generateCards);
    return (
      <div>
        <ul className={classes.carousel}>
          {selectedVideo ? <VideoModal close={this.handleModalClose} vid={selectedVideo} /> : null}
          {cards}
        </ul>
      </div>
    );
  }
}

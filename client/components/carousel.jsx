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
      relatedVideos: [],
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
          videoData: res.data[0],
          relatedVideos: res.data[1],
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

  handleModalClose(event) {
    if (event.target.id === 'modalBackground' ||event.target.id === 'modalClose') {
      this.setState({
        selectedVideo: null,
      });
      document.body.className = '';
    }
  }

  handleScrollRight() {
    const carousel = document.getElementsByClassName(classes.carousel)[0];
    const cards = carousel.children;
    const cardWidth = carousel.children[1].offsetLeft - carousel.children[0].offsetLeft;
    const cardsVisible = Math.floor(carousel.clientWidth / cardWidth);
    carousel.scrollLeft += cardWidth * cardsVisible;
  }

  handleScrollLeft() {
    const carousel = document.getElementsByClassName(classes.carousel)[0];
    const cards = carousel.children;
    const cardWidth = carousel.children[1].offsetLeft - carousel.children[0].offsetLeft;
    const cardsVisible = Math.floor(carousel.clientWidth / cardWidth);
    carousel.scrollLeft -= cardWidth * cardsVisible;
  }

  render() {
    const { videoData, relatedVideos, selectedVideo } = this.state;
    const generateCards = (video, index) => <CarouselCard key={video._id} cardId={index} video={video} handleClick={this.handleCardClick} />;
    const cards = videoData.map(generateCards);
    const relatedCards = relatedVideos.map(generateCards);

    return (
      <div className={classes.carouselContainer}>
        <button className={classes.carouselButton} type="button" onClick={this.handleScrollLeft}>
          <i className="fas fa-chevron-left" />
        </button>
        <ul className={classes.carousel}>
          {selectedVideo ? <VideoModal close={this.handleModalClose} vid={selectedVideo} vidList={videoData} relatedVids={relatedVideos} /> : null}
          <ul className={classes.cardList}>
            <span className={classes.carouselHeaders}>Videos for this product</span>
            <ul className={classes.productCards}>
              {cards}
            </ul>
          </ul>
          <ul className={classes.cardList}>
            <span className={classes.carouselHeaders}>Videos for related products</span>
            <ul className={classes.relatedCards}>
              {relatedCards}
            </ul>
          </ul>
        </ul>
        <button className={classes.carouselButton} type="button" onClick={this.handleScrollRight}>
          <i className="fas fa-chevron-right" />
        </button>
      </div>
    );
  }
}

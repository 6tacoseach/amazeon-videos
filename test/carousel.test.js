import React from 'react';
import { shallow, mount, render } from 'enzyme';
import VideoCarousel from '../client/components/carousel';
import CarouselCard from '../client/components/carousel-card';
import VideoModal from '../client/components/video-modal';

describe('Verifying Carousel behavior', () => {
  const fakeVideo = { thumbnail: '', _id: 0 };

  it('renders without crashing', () => {
    shallow(<VideoCarousel />);
  });

  it('renders video cards when video data is available', () => {
    const wrapper = mount(<VideoCarousel />);
    wrapper.setState({ videoData: [fakeVideo] });
    const cardWrapper = wrapper.find(CarouselCard);
    expect(cardWrapper).toExist();
  });

  it('passes video data to video cards', () => {
    const wrapper = mount(<VideoCarousel />);
    wrapper.setState({ videoData: [fakeVideo] });
    const cardWrapper = wrapper.find(CarouselCard);
    expect(cardWrapper).toHaveProp('video');
    expect(cardWrapper).toHaveProp('video', fakeVideo);
  });
});

describe('Verifying Carousel Card behavior', () => {
  const fakeVideo = {
    duration: '4:00',
    title: 'fake video',
    author: 'fake person',
    thumbnail: 'image.png',
  };

  it('renders without crashing', () => {
    shallow(<CarouselCard cardId="0" video={fakeVideo} />);
  });
});

describe('Verifying Modal behavior', () => {
  const fakeVideo = { title: 'testVid', url: 'videourl' };
  const closeFn = jest.fn();

  it('renders without crashing', () => {
    document.body.innerHTML = '<div id="video-modal"></div>';
    shallow(<VideoModal vid={fakeVideo} close={closeFn} />);
  });
});

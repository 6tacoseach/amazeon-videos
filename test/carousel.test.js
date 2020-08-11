import React from 'react';
import { shallow, mount, render } from 'enzyme';
import VideoCarousel from '../client/components/carousel';
import CarouselCard from '../client/components/carousel-card';

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

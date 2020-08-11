import React from 'react';
import { shallow, mount, render } from 'enzyme';
import VideoCarousel from '../client/components/carousel';
import CarouselCard from '../client/components/carousel-card';

test('Carousel renders video cards', () => {
  const wrapper = mount(<VideoCarousel />);
  wrapper.setState({ videoData: [{ thumbnail: '', _id: 0 }] });
  const cardWrapper = wrapper.find(CarouselCard);
  expect(cardWrapper).toExist();
});

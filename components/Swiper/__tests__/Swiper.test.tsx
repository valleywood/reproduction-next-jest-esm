import { screen, render } from '@testing-library/react';

import Swiper from '..';
describe('Swiper', () => {
  test('Render Swiper', () => {
    render(
      <Swiper
        data-test-id="SWIPER"  
      >
        <div key={'swiperKey1'}>Test</div>              
        <div key={'swiperKey2'}>Test 2</div>      
      </Swiper>
    );
    const productlistCount = screen.getByTestId(
      'SWIPER',
    );
    expect(productlistCount).toBeInTheDocument();
  });
});

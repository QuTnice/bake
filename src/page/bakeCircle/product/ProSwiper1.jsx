import React, { Component } from 'react';

import Swiper from 'swiper'

import 'swiper/css/swiper.min.css'

class ProSwiper1 extends Component {
  constructor() {
    super()
  }
  componentDidMount() {
    var mySwipertwo = new Swiper('.container2', {
      direction: 'horizontal',
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      slidesPerView: "auto",
      slidesOffsetBefore: 18,
      slidesOffsetAfter: 18,
      freeMode: true,
      freeModeMomentum: false,
      spaceBetween: 0,
      scrollbar: {
        el: '.scrollbar2',
        hide: true,
      },
    })
    mySwipertwo.scrollbar.$el.css('height', '2px')
    mySwipertwo.scrollbar.$el.css('background', 'none')

  }
  render() {
    return (
      <div>
        <div className='banner1'>
          <div className='swiper-container container2'>
            <div className='swiper-wrapper'>
              <div className='swiper-slide'>
                <div className='spanDad'>
                  <span>#123#</span>
                </div>
              </div>
              <div className='swiper-slide'>
                <div className='spanDad'>
                  <span>#12312#</span>
                </div>
              </div>
              <div className='swiper-slide'>
                <div className='spanDad'>
                  <span>#12311#</span>
                </div>
              </div>
              <div className='swiper-slide'>
                <div className='spanDad'>
                  <span>#1311#</span>
                </div>
              </div>
              <div className='swiper-slide'>
                <div className='spanDad'>
                  <span>#123111#</span>
                </div>
              </div>
              <div className='swiper-slide'>
                <div className='spanDad'>
                  <span>#12311#</span>
                </div>
              </div>
              <div className='swiper-slide'>
                <div className='spanDad'>
                  <span>#12311#</span>
                </div>
              </div>
            </div>
            <div className="swiper-scrollbar  scrollbar2"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProSwiper1;
import React, { Component } from 'react';

import Swiper from 'swiper'

import 'swiper/css/swiper.min.css'

class ProSwiper extends Component {
  constructor() {
    super()
  }
  componentDidMount() {
    var mySwiperone = new Swiper('.container1', {
      direction: 'horizontal',
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      slidesPerView: 2.4,
      slidesOffsetBefore: 18,
      slidesOffsetAfter: 18,
      freeMode: true,
      freeModeMomentum: false,
      spaceBetween: 0,
      scrollbar: {
        el: '.swiper-scrollbar111',
        hide: true,
      },
    })
    mySwiperone.scrollbar.$el.css('height', '2px')
    mySwiperone.scrollbar.$el.css('background', 'none')
  }
  render() {
    return (
      <div>
        <div className='banner'>
          <div className='swiper-container container1'>
            <div className='swiper-wrapper'>
              <div className='swiper-slide'>
                <div className='imgDad'>
                  <img src="https://image.hongbeibang.com/Fqj9HFB5DNvlzAKcVsfSzD6uLseK?640X900&imageView2/1/w/640/h/896" alt="" />
                </div>
              </div>
              <div className='swiper-slide'>
                <div className='imgDad'>
                  <img src="https://image.hongbeibang.com/Fqj9HFB5DNvlzAKcVsfSzD6uLseK?640X900&imageView2/1/w/640/h/896" alt="" />
                </div>
              </div>
              <div className='swiper-slide'>
                <div className='imgDad'>
                  <img src="https://image.hongbeibang.com/Fqj9HFB5DNvlzAKcVsfSzD6uLseK?640X900&imageView2/1/w/640/h/896" alt="" />
                </div>
              </div>
            </div>
            <div className="swiper-scrollbar swiper-scrollbar111"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProSwiper;
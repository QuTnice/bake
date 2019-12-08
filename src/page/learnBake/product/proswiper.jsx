import React, { Component } from 'react';

import { ProSwipers } from '../styledLearnBake'

import Swiper from 'swiper'
// import 'swiper/dist/css/swiper.min.css'
import 'swiper/css/swiper.min.css'

class proswiper extends Component {
  constructor() {
    super()
  }
  componentDidMount() {
    var mySwiper = new Swiper('.swiper-container', {
      direction: 'horizontal',
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      slidesPerView: 2.3,
      slidesOffsetBefore: 18,
      slidesOffsetAfter: 18,
      freeMode: true,
      freeModeMomentum: false,
      spaceBetween: 17,
    })
  }
  render() {
    return (
      <ProSwipers>
        <div className="title">
          推荐课程
          </div>
        <div className='banner'>
          <div className='swiper-container'>
            <div className='swiper-wrapper'>
              <div className='swiper-slide'>
                <div className='imgDad'>
                  <img src="https://image.hongbeibang.com/Fqj9HFB5DNvlzAKcVsfSzD6uLseK?640X900&imageView2/1/w/640/h/896" alt=""/>
                  <div className="toast"><i>1000+</i>在学</div>
                </div>
                <span>5款店售王牌面包（肠仔包/汉堡/肉松/火腿芝士/芝士鸡腿）</span>
              </div>
              <div className='swiper-slide'>
                <div className='imgDad'>
                  <img src="https://image.hongbeibang.com/Fqj9HFB5DNvlzAKcVsfSzD6uLseK?640X900&imageView2/1/w/640/h/896" alt=""/>
                  <div className="toast"><i>1000+</i>在学</div>
                </div>
                <span>5款店售王牌面包（肠仔包/汉堡/肉松/火腿芝士/芝士鸡腿）</span>
              </div>
              <div className='swiper-slide'>
                <div className='imgDad'>
                  <img src="https://image.hongbeibang.com/Fqj9HFB5DNvlzAKcVsfSzD6uLseK?640X900&imageView2/1/w/640/h/896" alt=""/>
                  <div className="toast"><i>1000+</i>在学</div>
                </div>
                <span>5款店售王牌面包（肠仔包/汉堡/肉松/火腿芝士/芝士鸡腿）</span>
              </div>
            </div>
          </div>
        </div>
      </ProSwipers>
    );
  }
}

export default proswiper;
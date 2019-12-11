import React, { Component } from 'react';

import {
  TopWrap
} from '../learnBake/styledLearnBake'
import {
  CircleWrap,
  Bar
} from './styledCirclr'
import Proswiper from './product/ProSwiper'
import Proswiperone from './product/ProSwiper1'
import Dyamic from './dynamic/Dyamic'

import { Tabs, WhiteSpace } from 'antd-mobile';
const tabs = [
  { title: '关注' },
  { title: '最新' },
  { title: '达人' },
];

class BakeCircle extends Component {
  render() {
    return (
      <CircleWrap>
        <TopWrap>
          <img src="https://image.hongbeibang.com/Fj1u8rBVnt5DLwXqhx8QKlRPLoGI?48X48&imageView2/1/w/48/h/48" alt="" />
          <div className="tabBox">
            <WhiteSpace />
            <Tabs tabs={tabs} initialPage={1} animated={false} useOnPan={false} tabBarUnderlineStyle={{ border: '1px solid #e98b71', transform: 'scaleX(0.2)', }} tabBarTextStyle={{ fontSize: '16px', color: '#999' }} tabBarActiveTextColor='#000' tabBarInactiveTextColor='#999'>
              {/* <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px',width: '300px', backgroundColor: '#fa3' }}>
            Content of first tab
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fa3',}}>
            Content of second tab
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fa3' }}>
            Content of third tab
          </div> */}
            </Tabs>
            <WhiteSpace />
          </div>
          <img src="https://image.hongbeibang.com/FjmYGE5z6RvQL-_fdLKuSGYfmwO2?48X48&imageView2/1/w/48/h/48" alt="" />
        </TopWrap>
        <div className="main">
          <Proswiper></Proswiper>
          <Bar
            width="1px"
            color="#E7E2E5"
            direction="bottom"
          ></Bar>
          <Proswiperone></Proswiperone>
          <div className="space10"></div>
          <Dyamic></Dyamic>
          <Dyamic></Dyamic>
        </div>
      </CircleWrap>
    );
  }
}

export default BakeCircle;
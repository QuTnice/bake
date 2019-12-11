import React, { Component } from 'react';

import SearchTop from "../../components/search/SearchTop";
import Btn from './Btn/Btn'
import ProSwiper from './product/proswiper'

import { LearnWrap } from './styledLearnBake'

class learnBake extends Component {
  render() {
    return (
      <LearnWrap>
        <SearchTop></SearchTop>
        <div className="main">
          <Btn></Btn>
          <ProSwiper></ProSwiper>
          <ProSwiper></ProSwiper>
          <ProSwiper></ProSwiper>
          <ProSwiper></ProSwiper>
          <ProSwiper></ProSwiper>
        </div>
      </LearnWrap>
    );
  }
}

export default learnBake;
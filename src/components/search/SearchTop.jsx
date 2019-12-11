import React, { Component } from 'react';

import {
  TopWrap
} from '../../page/learnBake/styledLearnBake.js'

class SearchTop extends Component {
  render() {
    return (
      <TopWrap>
        <img src="https://image.hongbeibang.com/Fj1u8rBVnt5DLwXqhx8QKlRPLoGI?48X48&imageView2/1/w/48/h/48" alt=""/>
        <div className="inputBox">
          <img src="https://image.hongbeibang.com/FltPAS-35CZfvSpnHacXWoqcfFz5?42X42&imageView2/1/w/42/h/42" alt=""/>
          <span>搜索食谱/食材，烘焙/家常菜一应俱全</span>
        </div>
        <img src="https://image.hongbeibang.com/FjmYGE5z6RvQL-_fdLKuSGYfmwO2?48X48&imageView2/1/w/48/h/48" alt=""/>
      </TopWrap>
    );
  }
}

export default SearchTop;
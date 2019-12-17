import React, { Component } from 'react';
import { get } from 'utils/http.js'

import { ClassifyWrap } from './styledClassify'

class Classify extends Component {

  state = {
    list: [],
    list1: [],
  }

  async componentDidMount(){
    let result = await get({
      url:'https://api.hongbeibang.com/classify/get?_t=1576588859718&csrfToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOjAsImV4cCI6MTc2NTAyNjAzNSwiaWF0IjoxNTc1NjM3MjM1fQ.wNBSKGKrvhFlU8-mPKnqY_rWYuiIL46xD5bvAcf6E9U'
    })
    console.log(result.data.classify);
    this.setState({
      list: result.data.classify
    })
  }

  render() {
    return (
      <ClassifyWrap>
        <div className="top">
          <div className="back" >
            <img width='27px' src="https://image.hongbeibang.com/FoTuxKG5pqYKuAsT8BjrflkAxEpj?48X48&imageView2/1/w/48/h/48" alt="" />
          </div>
          <input type="text" placeholder='搜索食谱/食材，烘焙/家常菜一应俱全' />
        </div>
        <div className="main">
          <div className="title">
            <ul>
              <li>推荐</li>
              {
                this.state.list.map((value) => (
                  <li key={value.classifyId}>{value.name}</li>
                ))
              }
            </ul>
          </div>
        </div>
      
      </ClassifyWrap>
    );
  }
}

export default Classify;
import React, { Component } from 'react';
import { get } from 'utils/http.js'
import {
  Bar
} from '../styledCirclr'
import Proswiper from '../product/ProSwiper'
import Proswiperone from '../product/ProSwiper1'
import Dyamic from '../dynamic/Dyamic'

class New extends Component {
  state = {
    list: [],
  }
  async componentDidMount() {
    let result = await get({
      url: 'https://api.hongbeibang.com/v2/feed/getNew?_t=1576050144285&csrfToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOjAsImV4cCI6MTc2NTAyNjAzNSwiaWF0IjoxNTc1NjM3MjM1fQ.wNBSKGKrvhFlU8-mPKnqY_rWYuiIL46xD5bvAcf6E9U&pageIndex=0&pageSize=10'
    })
    this.setState({
      list: result.data.content,
    })
  }
  render() {
    return (
      <div>
        <Proswiper ></Proswiper>
        <Bar
          width="1px"
          color="#E7E2E5"
          direction="bottom"
        ></Bar>
        <Proswiperone></Proswiperone>
        <div className="space10"></div>
        {
          this.state.list.map((value) =>
            <Dyamic key={value.contentId} client={value}></Dyamic>
          )
        }
      </div>
    );
  }
}

export default New;
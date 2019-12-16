import React, { Component } from 'react';
import { get } from 'utils/http.js'

import Qitem from '../Qitem'

class NewQ extends Component {

  state = {
    list : []
  }

  async componentDidMount(){
    let result = await get({
      url:'https://api.hongbeibang.com/question/getNew?_t=1576502354036&csrfToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOjAsImV4cCI6MTc2NTAyNjAzNSwiaWF0IjoxNTc1NjM3MjM1fQ.wNBSKGKrvhFlU8-mPKnqY_rWYuiIL46xD5bvAcf6E9U&pageIndex=0&pageSize=10'
    })
    this.setState({
      list: result.data.content.data
    })
  }
  render() {
    return (
      <div>
        {
          this.state.list.map((value) => (
            <Qitem key={value.contentId} value={value}></Qitem>
          ))
        }
      </div>
    );
  }
}

export default NewQ;
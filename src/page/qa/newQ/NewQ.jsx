import React, { Component } from 'react';
import { get } from 'utils/http.js'
import { withRouter } from 'react-router-dom'

import Qitem from '../Qitem'

@withRouter
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

  handleClick(){
    console.log(123);
    // this.props.histort.push('/search/recipe/千层酥')
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
import React, { Component } from 'react';

import { get } from 'utils/http.js'

import Dynamic from '../dynamic/Dyamic'

class Master extends Component {

  state = {
    list: []
  }

  async componentDidMount(){
    let result = await get({
      url: 'https://api.hongbeibang.com/v2/feed/getMasterNew?_t=1576141379798&csrfToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOjAsImV4cCI6MTc2NTAyNjAzNSwiaWF0IjoxNTc1NjM3MjM1fQ.wNBSKGKrvhFlU8-mPKnqY_rWYuiIL46xD5bvAcf6E9U&pageIndex=0&pageSize=10'
    })
    this.setState({
      list: result.data.content
    })
    // console.log(result.data);
  } 

  render() {
    return (
      <>
        {
          this.state.list.map((value) => (
              <Dynamic key={value.contentId} client={value}></Dynamic>
          ))
        }
       {/*  */}
      </>
    );
  }
}

export default Master;
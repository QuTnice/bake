import React, { Component } from 'react';

class Qitem extends Component {
  render() {
    return (
      <div className="qitem">
        <p>什么酵母，高糖酵母？用安琪可以吗</p>
        <div className="infoBox">
          <div className="imgbox"></div>
          <div className="clientbox">
            <div>椰蓉吐司</div>
            <div>作者：海风的韵味</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Qitem;
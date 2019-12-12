import React, { Component } from 'react';
import { QuesWrap } from './styledQa'

import Top from './Top'
import Qitem from './Qitem'

class Ques extends Component {
  render() {
    return (
      <QuesWrap>
        <Top></Top>
        <div className="sssss"></div>
        <div className="main">
          <Qitem></Qitem>
        </div>
      </QuesWrap>
    );
  }
}

export default Ques;
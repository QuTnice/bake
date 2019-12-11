import React, { Component } from 'react';
import { get } from 'utils/http.js'
import { Route, NavLink, Redirect, Switch, withRouter } from 'react-router-dom'

import {
  TopWrap
} from '../learnBake/styledLearnBake'
import {
  CircleWrap,
  Bar
} from './styledCirclr'
import New from './new/New'
import Follow from './follow/Follow'
import Master from './master/Master'

import { Tabs, WhiteSpace } from 'antd-mobile';
const tabs = [
  { title: '关注', key: 'follow' },
  { title: '最新', key: 'new' },
  { title: '达人', key: 'master' },
];
@withRouter
class BakeCircle extends Component {

  tabClick = (tab) => {
    console.log(this.props, tab);
    this.props.history.push(`/${tab.key}`)
  }


  render() {
    return (
      <CircleWrap>
        <TopWrap>
          <img src="https://image.hongbeibang.com/Fj1u8rBVnt5DLwXqhx8QKlRPLoGI?48X48&imageView2/1/w/48/h/48" alt="" />
          <div className="tabBox">
            <WhiteSpace />
            <Tabs tabs={tabs}
              initialPage={'new'}
              animated={false}
              useOnPan={false}
              tabBarUnderlineStyle={{ border: '1px solid #e98b71', transform: 'scaleX(0.2)', }}
              tabBarTextStyle={{ fontSize: '16px', color: '#999' }}
              tabBarActiveTextColor='#000'
              tabBarInactiveTextColor='#999'
              onTabClick={this.tabClick}
            >
            </Tabs>
            <WhiteSpace />
          </div>
          <img src="https://image.hongbeibang.com/FjmYGE5z6RvQL-_fdLKuSGYfmwO2?48X48&imageView2/1/w/48/h/48" alt="" />
        </TopWrap>
        <div className="main">
          <Switch>
            <Route
              path='/follow'
              render={() => (
                <Follow></Follow>
              )
              }></Route>

            <Route
              path='/new'
              render={() => (
                <New></New>
              )
              }></Route>

            <Route
              path='/master'
              render={() => (
                <Master></Master>
              )
              }></Route>
            <Redirect from="/" to="/new"></Redirect>
          </Switch>
        </div>
      </CircleWrap >
    );
  }
}

export default BakeCircle;
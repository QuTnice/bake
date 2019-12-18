import React, { Component } from 'react';
import { TopWrap } from './styledSearch'
import { withRouter, NavLink,Route } from 'react-router-dom'

import Repice from './repice'


@withRouter
class InputTop extends Component {
  state = {
    keyword: ''
  }

  handleChange(e) {
    console.log(e.target.value);
    this.setState({
      keyword: e.target.value
    })
  }

  backClick() {
    this.props.history.goBack()
  }

  submitSearch() {
    if (this.state.keyword == '') {
      console.log('kong');
    }
    else {
      console.log(this.state.keyword);
    }
  }

  render() {
    console.log(this.props);
    return (
      <TopWrap>
        <div className="back" onClick={this.backClick.bind(this)}>
          <img width='27px' src="https://image.hongbeibang.com/FoTuxKG5pqYKuAsT8BjrflkAxEpj?48X48&imageView2/1/w/48/h/48" alt="" />
        </div>

        <input value={this.state.keyword} onChange={this.handleChange.bind(this)} type="text" placeholder='搜索食谱/食材，烘焙/家常菜一应俱全' />

        <NavLink to='/recipe' className="comeon" onClick={this.submitSearch.bind(this)}>搜索</NavLink>

      </TopWrap>
    );
  }
}

export default InputTop;
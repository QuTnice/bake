import React, { Component } from 'react';
import {TopWrap} from './styledSearch'

class InputTop extends Component {
  state = {
    keyword: ''
  } 

  handleChange(e){
    console.log(e.target.value);
    this.setState({
      keyword: e.target.value
    })
  }

  backClick(){
    // this.props.history.goBack()
    console.log('这个单击事件用来返回路由');
  }

  render() {
    return (
      <TopWrap>
        <div className="back" onClick={this.backClick.bind(this)}>
          <img width='27px' src="https://image.hongbeibang.com/FoTuxKG5pqYKuAsT8BjrflkAxEpj?48X48&imageView2/1/w/48/h/48" alt=""/>
        </div>

        <input value={this.state.keyword} onChange={this.handleChange.bind(this)} type="text" placeholder='搜索食谱/食材，烘焙/家常菜一应俱全'/>

        <div className="comeon">搜索</div>
      </TopWrap>
    );
  }
}

export default InputTop;
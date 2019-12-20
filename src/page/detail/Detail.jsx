import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { get } from 'utils/http.js'
import MeterialBox from './Material'

import { DetailWrap, ClientBox } from './styledDetail'

@withRouter
class Detail extends Component {

  state = {
    list: [],
    material: [],
    step: [],
    value: '4'
  }

  async componentDidMount() {
    console.log(this.props.location.pathname.split('/')[2]);
    let result = await get({
      url: `https://api.hongbeibang.com/recipe/get?_t=1576740514081&csrfToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOjAsImV4cCI6MTc2NTAyNjAzNSwiaWF0IjoxNTc1NjM3MjM1fQ.wNBSKGKrvhFlU8-mPKnqY_rWYuiIL46xD5bvAcf6E9U&contentId=${this.props.location.pathname.split('/')[2]}&quantity=`
    })

    // console.log(result.data.recipe);
    this.setState({
      list: result.data.recipe,
      material: result.data.recipe.material,
      step: result.data.recipe.step,
      value: result.data.recipe.quantity
    })
  }
  inputChange(e) {
    console.log(e.target.value);
    (async () => {

      let result = await get({
        url:
          `https://api.hongbeibang.com/recipe/get?_t=1576759025493&csrfToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOjAsImV4cCI6MTc2NTAyNjAzNSwiaWF0IjoxNTc1NjM3MjM1fQ.wNBSKGKrvhFlU8-mPKnqY_rWYuiIL46xD5bvAcf6E9U&contentId=${this.props.location.pathname.split('/')[2]}&quantity=${this.state.value}`
      });
      console.log(this.state);
      this.setState({
        material: result.data.recipe.material,
        value:e.target.value
      })
    })()
    // this.setState({
    //   value:e.target.value
    // })
  }
  async addClick() {
    (async () => {

      let result = await get({
        url:
          `https://api.hongbeibang.com/recipe/get?_t=1576759025493&csrfToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOjAsImV4cCI6MTc2NTAyNjAzNSwiaWF0IjoxNTc1NjM3MjM1fQ.wNBSKGKrvhFlU8-mPKnqY_rWYuiIL46xD5bvAcf6E9U&contentId=${this.props.location.pathname.split('/')[2]}&quantity=${this.state.value}`
      });
      console.log(this.state);
      await this.setState({
        material: result.data.recipe.material,
        value: ++this.state.value
      })
    })()
  }

  minusClick() {
    (async () => {

      if (this.state.value > 1) {

        let result = await get({
          url:
            `https://api.hongbeibang.com/recipe/get?_t=1576759025493&csrfToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOjAsImV4cCI6MTc2NTAyNjAzNSwiaWF0IjoxNTc1NjM3MjM1fQ.wNBSKGKrvhFlU8-mPKnqY_rWYuiIL46xD5bvAcf6E9U&contentId=${this.props.location.pathname.split('/')[2]}&quantity=${this.state.value}`
        });
        this.setState({
          material: result.data.recipe.material,
          value: --this.state.value
        })
      }
      else{
        alert('最少一份')
      }

    })()
  }

  backClick() {
    this.props.history.push('/')
  }

  render() {
    return (
      <DetailWrap>
        <div className="top">
          <img onClick={this.backClick.bind(this)} width='27px' src="https://image.hongbeibang.com/FoTuxKG5pqYKuAsT8BjrflkAxEpj?48X48&imageView2/1/w/48/h/48" alt="" />
          <div className="collect">收藏</div>
        </div>
        <div className="main">
          <img src={this.state.list.image} alt="" />
          <div className="titleBox">
            <div className="title">{this.state.list.coverTitle}</div>
            <ClientBox className="clientBox">
              <div className="clientName">
                <img src={this.state.list.clientImage} alt="" />
                <div className='name'>{this.state.list.clientName}</div>
                <div className='attention'>+关注</div>
              </div>
              <div className="intro">{this.state.list.coverSummary}</div>
            </ClientBox>
          </div>
          <div className="materials">
            <div className="title">食材用料</div>
            <div className="operate">
              <div className="add" onClick={this.minusClick.bind(this)}>
                <div className="addBox"></div>
              </div>
              <div className="valueWrap">
                <input type="text" value={this.state.value || '2'} className="valueBox" onChange={this.inputChange.bind(this)} />
              </div>
              <div className="minus" onClick={this.addClick.bind(this)}>
                <div className="addBox"></div>
                <div className="standBox"></div>
              </div>

              <span style={{ color: '#999' }}>&nbsp;&nbsp;&nbsp;(份量/{this.state.list.unit})</span>
            </div>
            <MeterialBox value={this.state.material}></MeterialBox>

          </div>
          <div className="space30"></div>
          <div className="step">
            {
              this.state.step.map((value, index) => (
                <div className="stepItem" key={value.contentRecipeStepId}>
                  <p className='stepTitle'>步骤{index + 1}</p>
                  <img src={value.image} alt="" />
                  <p className='stepText'>{value.text}</p>
                </div>
              ))
            }

          </div>
        </div>
      </DetailWrap>
    );
  }
}

export default Detail;
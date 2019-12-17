import styled from 'styled-components'

export const ClassifyWrap = styled.div `
  display:flex;
  flex-direction:column;
  height:100%;
  .top{
    display:flex;
    width:100%;
    height:.44rem;
    background:#fff;
    position: relative;
    .back{
      position: absolute;
      left:.2rem;
      top:20%;
    }
    input{
      width:2.49rem;
      margin: .045rem auto;
      border-radius: 4px;
      zoom: 1;
      background-color: #F5F7F9;
      box-sizing: border-box;
      padding: 0 10px;
      border:none;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #4A4945;
      font-size: 14px;
      vertical-align: middle;
      text-overflow: ellipsis;
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
    }
  }
  .main{
    width:100%;
    font-family: sans-serif;
    flex:1;
    background:#fa3;
    .title{
      height:100%;
      width:.8rem;
      background:#F5F7F9;
      li{
        height:.5rem;
        font-size:.14rem;
        text-align:center;
        line-height:.5rem;
        color:#4A4945;
      }
    }
  }
`
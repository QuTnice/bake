import styled from 'styled-components'

export const SearchWrap = styled.div`
  display:flex;
  flex-direction:column;
  .main{
    flex:1;
    font-family: sans-serif;
    min-height:500px;
    background:#fff;
    padding: 0 .15rem;
    p{
      padding:.15rem;
      padding-left:0;
      font-size: 14px;
      line-height: 20px;
      color: #999999;
      overflow: hidden;
      zoom: 1;
    }
    .popular{
      max-width: 100%;
      height: .32rem;
      line-height: .32rem;
      font-size: .16rem;
      padding: 0 10px;
      text-align: center;
      margin-right: 10px;
      margin-bottom: 10px;
      border-radius: 100px;
      box-sizing: border-box;
      color: #4A4945;
      background-color: #F5F7F9;
      cursor: pointer;
      zoom: 1;
      display: inline-block;
      vertical-align: middle;
      overflow: hidden;
      text-overflow: ellipsis;
      -otext-overflow: ellipsis;
      -webkit-text-overflow: ellipsis;
      -moz-text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
`

export const TopWrap = styled.div`
  font-family: sans-serif;
  width:100%;
  height:.44rem;
  display:flex;
  background:#fff;
  padding:0 .18rem;
  align-items:center;
  justify-content:space-between;
  .comeon{
    font-size: .16rem;
    line-height: .3rem;
    color: #4A4945;
  }
  input{
    height:.35rem;
    width:2.39rem;
    padding:0 .1rem  ;
    border:none;
    background:#F5F7F9;
    border-radius:3px;
  }
`
import styled from 'styled-components'

export const ProfileWrap = styled.div`
    font-family: sans-serif;
    display:flex;
    flex-direction:column; 
    height:100%;
  .topWrap{
    width:100%;
    height:.44rem;
    background:#fff;
    position: relative;
    .backImg{
      width:.1rem;
      height:.17rem;
      position: absolute;
      left:.2rem;
      top:calc(50% - .1rem)
    }
    span{
      display:inline-block;
      width:100%;
      height:100%;
      line-height:.44rem;
      font-size: .16git rem;
      font-weight: bold;
      text-align: center;
    }
    }
    .main{
      background:#fff;
      flex:1;
      padding-top:1rem;
    }
    .center{
      width: 80%;
      max-width: 400px;
      font-size: 0;
      /* background:#fa2; */
      margin: 0 auto;
      margin-bottom:.3rem;
      img{
        width:100%;
      }
    }
    .loginbtn{
      width: 2.95rem;
      height: .44rem;
      box-sizing: border-box;
      border-radius: 4px;
      margin: 30px auto 0px auto;
      display: flex;
      justify-content: center;
      align-items: center;
      background-image: linear-gradient(to top right,#2AC277,#09A458);
      color:#fff;
    }
    .loginText{
      color: #E98B71;
      font-size: .15rem;
      text-align: center;
      padding: .1rem 0;
      margin: .15rem auto;
    }
    .protocol{
      font-size: .12rem;
      color: #999999;
      text-align: center;
      height: .2rem;
      margin: .2rem auto;
      cursor: pointer;
      .deal{
        color: #E98B71;
      }
    }
`
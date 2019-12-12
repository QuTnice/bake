import styled from 'styled-components'

export const QuesWrap = styled.div `
    display:flex;
    flex-direction:column;
    height:100%;
    
    .top-nav{
      width:100%;
      height:.44rem;
      background:#fa3;
    }
    .sssss{
      width:100%;
      height:.45rem;
      background:#a30;
    }
    .main{
      flex:1;
      width:100%;
      background:#fe0;
      height:100%;
      overflow-y:scroll;
      padding:0 .15rem;
      .qitem{
        p{
          font-size: 18px;
          font-weight: bold;
          color: #4A4945;
          line-height: 25px;
          max-height: 50px;
          text-overflow: ellipsis;
          overflow: hidden;
          -webkit-line-clamp: 2;
          -moz-line-clamp: 2;
          line-clamp: 2;
          -webkit-box-orient: vertical;
          margin-bottom:.05rem;
        }
      }
      .infoBox{
        height:.7rem;
        width:100%;
        background:olive;
        border-radius:5px;
        display:flex;
        .imgbox{
          width:.7rem;
          height:.7rem;
          background:#fa3;
          img{
            width:100%;
          }
        }
        .clientbox{
          padding-left:.15rem;
          flex:1;
          /* line-height:.35rem; */
          display:flex;
          flex-direction:column;
          vertical-align:middle;
        }
      }
    }
`
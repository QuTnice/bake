import React, { Component } from 'react';

import { BtnWrap } from '../styledLearnBake'

class Btn extends Component {
  render() {
    return (
      <BtnWrap>
        <div className='skill'>
          <img src="https://image.hongbeibang.com/Fl493FjRZluXqCNJnvhRYw_IGKZO?80X80&imageView2/1/w/80/h/80" alt=""/>
          <div>技巧百科</div>
        </div>
        <div className='skill'>
          <img src="https://image.hongbeibang.com/Fp0nBR7-xD2caoLENB7qZgmu9vZT?80X80&imageView2/1/w/80/h/80" alt=""/>
          <div>视频学堂</div>
        </div>
        <div className='skill'>
          <img src="https://image.hongbeibang.com/FkU-5lDUu7y7CurjkdJYWh-ZIg3x?80X80&imageView2/1/w/80/h/80" alt=""/>
          <div>新手教程</div>
        </div>
        <div className='skill'>
          <img src="https://image.hongbeibang.com/FkcHmIr5rX7zXeHET_Rew64lVrgx?80X80&imageView2/1/w/80/h/80" alt=""/>
          <div>食谱分类</div>
        </div>
      </BtnWrap>
    );
  }
}

export default Btn;
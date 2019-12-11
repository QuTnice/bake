import React, { Component } from 'react';
import TimeAgo from 'timeago-react';

import { DyamicWrap, OperateInfo } from '../styledCirclr'

class Dyamic extends Component {
  render() {
    // console.log(this.props.client);
    return (
      <DyamicWrap>
        <div className="userinfo">
          <div className="headImg">
            <img src={this.props.client.clientImage} alt="" />
          </div>
          <div className="nameinfo">
            <div className="name">{this.props.client.clientName}</div>
            <div className="time">
              <span><TimeAgo
                datetime={this.props.client.createTime}
                locale='zh_CN'
              /></span>
              <span className="classify">{this.props.client.title}</span>
            </div>
          </div>
        </div>
        {
          this.props.client.introduce &&
          <div className="contentinfo">
            <span>{this.props.client.communityName}</span>
            {this.props.client.introduce}
          </div>
        }
        <div className="imgBox">
          {
            this.props.client.image.map((value1, index) =>
              // <i className="imgwrap"  >
              <img src={value1} key={value1} alt=""
                width={
                  this.props.client.image.length === 1 ? '60%' : (this.props.client.image.length === 2 ? '48%' : (this.props.client.image.length === 4) ? '38%' : '32%')
                }
                height={
                  this.props.client.image.length === 1 ? 'auto' : (this.props.client.image.length === 2 ? 'auto' : (this.props.client.image.length === 4) ? 'auto' : '100px')
                }
              />
              // </i>
            )
          }
        </div>
        {
          this.props.client.title.length > 0 ?
            <div className="category">
              <div className="cateBox">
                <img src={this.props.client.recipe.image} alt="" />
                <div className="info">
                  <div className="name">{this.props.client.recipe.title}</div>
                  <div className="writer">作者：{this.props.client.recipe.clientName}</div>
                </div>
              </div>
            </div>
            : ''
        }
        {
          this.props.client.clientId == 0 &&this.props.client.title &&
          <div className="coverTitle">
            中式腊肠卷
          </div>
        }
        <div className="operateinfo">
          <OperateInfo
            width="2px"
            color="#E7E2E5"
            direction="top"
          >
            <div>
              <span><svg t="1575977025759" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6818" width="16" height="16"><path d="M0 0h1024v1024H0z" fill="#8a8a8a" fillOpacity="0" p-id="6819"></path><path d="M958.390857 475.136l-0.877714-3.072c-0.512-1.536-1.024-2.925714-1.243429-3.949714-12.288-48.420571-42.934857-68.388571-66.56-76.726857a154.697143 154.697143 0 0 0-49.517714-8.045715h-0.731429c-29.257143-0.219429-58.660571-0.219429-87.990857-0.219428l-64.073143 0.073143h-21.577142c2.267429-13.970286 4.461714-27.428571 7.094857-40.813715 8.777143-44.909714 7.168-84.114286-5.12-119.808-7.606857-22.162286-16.091429-44.251429-24.137143-65.609143l-9.069714-23.552a95.085714 95.085714 0 0 0-53.686858-56.832 141.092571 141.092571 0 0 0-124.635428 3.876572c-33.060571 17.334857-50.834286 46.811429-49.883429 83.163428l0.804572 36.205715c0.438857 20.187429 0.804571 41.106286 1.682285 61.659428a16.457143 16.457143 0 0 1-2.194285 9.947429c-7.314286 12.653714-14.774857 25.453714-21.942857 38.034286-17.115429 29.842286-34.816 60.708571-53.101715 89.965714-26.550857 42.130286-82.432 48.566857-82.432 48.566857H135.972571a71.972571 71.972571 0 0 0-71.972571 71.972571v368.054858c0 39.789714 32.182857 71.972571 71.972571 71.972571H384.292571l159.232-0.219429c33.792 0 67.510857 0.219429 100.644572 0.219429h93.915428c21.211429 0 46.299429-1.462857 72.045715-9.801143 53.540571-17.554286 88.137143-61.220571 92.379428-116.809143a157.257143 157.257143 0 0 0-2.633143-45.860571c16.896-26.404571 24.502857-54.345143 22.674286-83.163429a118.052571 118.052571 0 0 0-4.388571-24.283428c16.091429-23.990857 23.844571-49.737143 23.113143-76.580572a135.606857 135.606857 0 0 0-4.900572-29.622857c9.216-13.604571 15.945143-28.525714 19.748572-44.617143l3.876571-5.12v-43.885714l-1.609143-5.12zM248.027429 887.954286H135.972571V519.972571h112.054858v368.054858z m640-383.268572l-1.901715 7.826286a64.438857 64.438857 0 0 1-9.289143 21.138286l-18.944 27.867428 9.289143 32.402286a60.269714 60.269714 0 0 1 2.194286 12.726857 56.612571 56.612571 0 0 1-10.898286 33.499429l-18.797714 28.013714 9.508571 32.256c0.877714 2.925714 1.462857 5.851429 1.609143 8.923429a64.731429 64.731429 0 0 1-11.629714 39.424l-15.798857 24.941714 5.339428 25.234286h-8.777142 8.777142l0.731429 3.364571c1.755429 8.045714 2.194286 16.237714 1.462857 24.356571l-0.073143 0.585143v0.585143a59.904 59.904 0 0 1-12.361143 33.28 62.976 62.976 0 0 1-30.573714 20.48c-16.091429 5.339429-33.426286 6.217143-49.737143 6.217143H644.388571l-49.883428-0.146286-50.834286-0.146285c-47.542857 0-103.716571 0.292571-159.451428 0.292571H320.365714l0.804572-387.657143c30.427429-14.848 54.857143-36.132571 71.533714-62.390857v-0.219429l0.146286-0.219428c18.724571-29.988571 36.571429-61.001143 53.686857-90.989714l0.731428-1.097143 0.073143-0.073143 0.146286-0.146286c4.461714-7.899429 9.289143-16.164571 13.897143-24.137143l7.68-13.385143c8.996571-15.286857 13.165714-32.694857 11.922286-50.249142a2195.017143 2195.017143 0 0 1-1.462858-57.197715v-1.682285l-0.877714-36.864c-0.146286-6.070857 1.462857-8.704 1.901714-9.508572a23.259429 23.259429 0 0 1 9.435429-7.753143 68.534857 68.534857 0 0 1 32.402286-8.338285c9.874286 0 20.406857 2.340571 31.085714 6.729142 5.997714 2.486857 10.532571 5.997714 14.116571 15.725715l9.069715 23.990857c8.996571 23.478857 16.384 43.081143 23.405714 63.268571 8.045714 23.405714 8.923429 50.468571 2.486857 82.505143-2.706286 13.824-4.973714 27.209143-7.606857 43.154286L581.12 454.948571h106.203429c10.459429 0 21.065143 0 31.744-0.146285h32.329142c25.819429 0 56.32 0 87.332572 0.292571h0.438857l0.512-0.146286h0.438857c8.777143 0 17.481143 1.462857 25.892572 4.169143 7.899429 2.925714 15.798857 8.338286 20.406857 26.404572 0.512 2.121143 1.609143 4.022857 1.609143 5.632v13.604571z" fill="#8a8a8a" fillOpacity=".45" p-id="6820"></path></svg></span><span>点赞</span>
            </div>
            <div>
              <span><svg t="1575977355177" className="icon" viewBox="0 0 1064 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="11531" width="16" height="16"><path d="M942.08 507.904s-49.152 0-65.536 4.096c-20.48 4.096-57.344 12.288-98.304 20.48-16.384-94.208-118.784-167.936-245.76-167.936s-229.376 73.728-245.76 172.032c-53.248-12.288-98.304-20.48-122.88-24.576-8.192 0-32.768-4.096-32.768-4.096h-4.096H122.88c-81.92-4.096-122.88 53.248-122.88 122.88 0 24.576 8.192 49.152 20.48 69.632l167.936 253.952c20.48 40.96 65.536 65.536 110.592 65.536h466.944c45.056-4.096 81.92-28.672 102.4-65.536l167.936-253.952c12.288-20.48 20.48-45.056 20.48-69.632 8.192-65.536-32.768-122.88-114.688-122.88zM389.12 458.752c16.384-16.384 40.96-24.576 61.44-32.768 24.576-8.192 53.248-12.288 81.92-12.288s53.248 4.096 81.92 12.288c24.576 8.192 45.056 20.48 61.44 32.768 28.672 20.48 45.056 49.152 49.152 77.824-65.536 12.288-143.36 20.48-204.8 20.48-57.344 0-122.88-8.192-184.32-20.48 8.192-24.576 24.576-53.248 53.248-77.824z m598.016 221.184l-159.744 241.664-8.192 8.192c-12.288 20.48-32.768 36.864-57.344 36.864h-450.56c-28.672 0-53.248-16.384-65.536-36.864 0-4.096-4.096-4.096-4.096-8.192L81.92 679.936c-8.192-12.288-12.288-24.576-12.288-40.96s4.096-36.864 16.384-53.248c12.288-12.288 28.672-20.48 53.248-20.48H163.84c24.576 4.096 69.632 16.384 126.976 28.672 16.384 4.096 36.864 8.192 53.248 8.192 57.344 8.192 118.784 16.384 172.032 16.384 61.44 0 131.072-8.192 196.608-20.48 20.48-4.096 36.864-8.192 53.248-8.192 32.768-4.096 61.44-12.288 81.92-16.384 8.192 0 16.384-4.096 20.48-4.096 8.192 0 36.864-4.096 53.248-4.096 24.576 0 40.96 8.192 53.248 20.48 12.288 16.384 16.384 36.864 16.384 53.248 8.192 12.288 4.096 28.672-4.096 40.96zM954.368 180.224c12.288 12.288 12.288 32.768 0 45.056L851.968 327.68c-12.288 12.288-32.768 12.288-45.056 0-12.288-12.288-12.288-32.768 0-45.056l102.4-102.4c16.384-12.288 36.864-12.288 45.056 0zM114.688 180.224c-12.288 12.288-12.288 32.768 0 45.056L217.088 327.68c12.288 12.288 32.768 12.288 45.056 0 12.288-12.288 12.288-32.768 0-45.056L159.744 180.224c-12.288-12.288-32.768-12.288-45.056 0zM540.672 32.768c16.384 0 32.768 12.288 32.768 32.768v143.36c0 16.384-12.288 32.768-32.768 32.768-16.384 0-32.768-12.288-32.768-32.768V65.536c4.096-20.48 16.384-32.768 32.768-32.768z" p-id="11532" fill="#8a8a8a"></path></svg></span><span>打赏</span>
            </div>
            <div>
              <span><svg t="1575977387621" className="icon" viewBox="0 0 1117 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="13029" width="16" height="16"><path d="M976.616727 0.093091H140.381091C63.441455 0.093091 1.024 63.581091 1.024 141.917091v531.781818c0 78.336 63.767273 150.528 142.522182 150.528h212.386909c37.050182 38.679273 190.231273 194.280727 190.231273 194.280727 6.795636 6.981818 17.826909 6.981818 24.669091 0 0 0 112.174545-124.741818 185.250909-194.280727h217.367272c78.708364 0 142.522182-72.192 142.522182-150.528V141.963636c0-78.336-62.370909-141.824-139.357091-141.824z m70.376728 673.885091c0 39.191273-33.512727 80.337455-72.983273 80.337454h-214.062546c-25.925818 0-49.198545 26.158545-49.198545 26.158546l-150.341818 152.901818-150.248728-152.901818s-28.625455-26.158545-53.154909-26.158546H142.987636c-39.424 0-72.983273-41.146182-72.983272-80.337454V141.405091c0-39.237818 31.278545-71.028364 69.818181-71.028364h837.352728c38.539636 0 69.818182 31.790545 69.818182 71.028364V673.978182zM279.738182 354.629818c-38.446545 0-69.678545 31.744-69.678546 70.888727 0 39.191273 31.185455 70.935273 69.678546 70.935273 38.493091 0 69.678545-31.744 69.678545-70.935273 0-39.144727-31.185455-70.888727-69.678545-70.888727z m278.760727 0c-38.493091 0-69.678545 31.744-69.678545 70.888727 0 39.191273 31.185455 70.935273 69.678545 70.935273 38.493091 0 69.678545-31.744 69.678546-70.935273 0-39.144727-31.185455-70.888727-69.678546-70.888727z m278.714182 0c-38.446545 0-69.678545 31.744-69.678546 70.888727 0 39.191273 31.185455 70.935273 69.678546 70.935273 38.493091 0 69.678545-31.744 69.678545-70.935273 0-39.144727-31.185455-70.888727-69.678545-70.888727z" fill="#8a8a8a" p-id="13030"></path></svg></span><span>评论</span>
            </div>
          </OperateInfo>
        </div>
        <div className="space10"></div>
      </DyamicWrap>
    );
  }
}

export default Dyamic;
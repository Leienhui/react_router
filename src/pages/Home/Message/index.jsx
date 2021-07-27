import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Detail from './Detail';
export default class Message extends Component {
  state = {
    messageArr: [
      { id: 1, title: '消息1' },
      { id: 2, title: '消息2' },
      { id: 3, title: '消息3' },
    ],
  };
  render() {
    const { messageArr } = this.state;
    return (
      <div>
        <ul>
          {messageArr.map((messageObj) => {
            return (
              <li key={messageObj.id}>
                {/* 多级路由，这个没有高亮效果，NavLink有，但是需要我们封装使用 */}
                {/* 向路由组件传递params参数 */}
                {/* <Link
                  to={`/home/message/detail/${messageObj.id}/${messageObj.title}`}
                >
                  {messageObj.title}
                </Link>  &nbsp;&nbsp; */}
                {/* 向路由组件传递search参数 */}
                {/* <Link
                  to={`/home/message/detail/?id=${messageObj.id}&title=${messageObj.title}`}
                >
                  {messageObj.title}
                </Link> */}
                {/* 向路由组件传递state参数 */}
                {/* <Link
                  to={{
                    pathname: '/home/message/detail',
                    state: { id: messageObj.id, title: messageObj.title },
                  }}
                >
                  {messageObj.title}
                </Link> */}


                {/* 编程式路由导航 */}
                {/* 向路由组件传递params参数 */}
                {/* <Link
                  to={`/home/message/detail/${messageObj.id}/${messageObj.title}`}
                >
                  {messageObj.title}
                </Link>  */}
                {/* 向路由组件传递search参数 */}
                {/* <Link
                  to={`/home/message/detail/?id=${messageObj.id}&title=${messageObj.title}`}
                >
                  {messageObj.title}
                </Link> */}
                <Link
                  to={{
                    pathname: '/home/message/detail',
                    state: { id: messageObj.id, title: messageObj.title },
                  }}
                >
                  {messageObj.title}
                </Link>
                &nbsp;&nbsp;
               <button  onClick={()=>this.pushShow(messageObj.id,messageObj.title)}>push查看</button>
               <button  onClick={()=>this.replaceShow(messageObj.id,messageObj.title)}>replace查看</button>
              </li>
            );
          })}
        </ul>
        <br />
        {/* 只有一个组件可以不用Switch组件*/}
        {/* 声明接收params参数 */}
        {/* :之后表示携带的参数 */}
        {/* <Route path="/home/message/detail/:id/:title" component={Detail} /> */}
        
        {/* search参数无需声明接收 */}
        {/* <Route path="/home/message/detail" component={Detail} /> */}
        {/* state参数无需声明接收 */}
        <Route path="/home/message/detail" component={Detail} />

        <button  onClick={this.back}>后退</button>
        <button  onClick={this.forward}>前进</button>
        <button  onClick={()=>this.go(2)}>go前进2步</button>
        <button  onClick={()=>this.go(-2)}>go后退2步</button>
      </div>
    );
  }
  pushShow=(id,title)=>{
    // 编写一段代码，让其实现跳转到Detail组件，且为push跳转
    // params传参
    // this.props.history.push(`/home/message/detail/${id}/${title}` )
    // search传参
    // this.props.history.push(`/home/message/detail?id=${id}&title=${title}` )
    // state传参
    this.props.history.push(`/home/message/detail`,{id,title} )
  }
  replaceShow=(id,title)=>{
    // 编写一段代码，让其实现跳转到Detail组件，且为replace跳转
    // this.props.history.replace(跳转到哪里)
    // params传参
    // this.props.history.replace(`/home/message/detail/${id}/${title}` )
    // search传参
    // this.props.history.replace(`/home/message/detail?id=${id}&title=${title}` )
    // state传参
    this.props.history.replace(`/home/message/detail`,{id,title} )
  }
  back=()=>{
    this.props.history.goBack()
  }
  forward=()=>{
    this.props.history.goForward()
    
  }
  go=(num)=>{
    this.props.history.go(num)
  }
}

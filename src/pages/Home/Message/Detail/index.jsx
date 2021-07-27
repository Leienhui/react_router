import React, { Component } from 'react';
// node内置
import qs from 'querystring';
let detailData = [
  { id: 1, title: '消息1', content: '哈哈哈哈哈1' },
  { id: 2, title: '消息2', content: '哈哈哈哈哈2' },
  { id: 3, title: '消息3', content: '哈哈哈哈哈3' },
];
export default class Detail extends Component {
  render() {
    // console.log(this.props.match);
    // 解构通过路由传递过来的params参数
    // const { id, title } = this.props.match.params;
    // const findResult = detailData.find((detailItem) => {
    //   return detailItem.id == id;
    // });

    // 引入querystring这个库
    // * 将对象变为urlencode  qs.stringify({name:'笑话',age:18})
    // * 将字符串变为对象  qs.parse("name=笑话&age=18")
    //接收通过路由传递过来的search参数
    // const { search } = this.props.location;
    // console.log(search);
    // // 去掉？和&符号解构赋值
    // let { id, title } = qs.parse(search.slice(1));
    // const findResult = detailData.find((detailItem) => {
    //   return detailItem.id == id;
    // });

    //接收通过路由传递过来的state参数
    const { id, title } = this.props.location.state;
    const findResult = detailData.find((detailItem) => {
      return detailItem.id == id;
    });
    return (
      <div>
        <ul>
          <li>id:{id}</li>
          <li>title:{title}</li>
          <li>content:{findResult.content}</li>
        </ul>
      </div>
    );
  }
}

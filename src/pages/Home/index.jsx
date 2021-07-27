import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Message from './Message';
import News from './News';
import MyNavLink from './../../components/MyNavLink';
export default class Home extends Component {
  render() {
    console.log('路由组件的props', this.props);
    return (
      <div>
        <h3>我是Home的内容</h3>
        <ul className="nav nav-tabs">
          <li>
            {/* 多级路由路径 */}
            <MyNavLink to="/home/news">News</MyNavLink>
          </li>
          <li>
            <MyNavLink to="/home/message">Message</MyNavLink>
          </li>
        </ul>
        {/* 多级路由注册 */}
        <Switch>
          <Route path="/home/news" component={News} />
          <Route path="/home/message" component={Message} />
          <Redirect to="/home/news" />
        </Switch>
      </div>
    );
  }
}

// 引入react核心库
import React from 'react';
// BrowserRouter在浏览器地址中没有#，HashRouter浏览器地址中有#,但是兼容性很好
// Route用于根据路径匹配组件
import {
  BrowserRouter,
  NavLink,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
// import {nanoid} from 'nanoid'
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Header from './components/Header';
import MyNavLink from './components/MyNavLink';
// 创建外壳组件App
export default class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">
              {/* 原生路由跳转写法 */}
              {/* <a className="list-group-item active" href="./about.html">
                About
              </a>
              <a className="list-group-item" href="./home.html">
                Home
              </a> */}
              {/* 在react中靠路由链接实现切换组件, Link外侧必须包一个Router（这个router必须指明是哪一种Router）,否则报错 ,所以最好直接把App这个组件用BrowserRouter/HashRouter包起来*/}
              {/* 编写路由链接 */}
              {/* 点击的时候想要有高亮效果，将Link改为NavLink */}
              {/* <NavLink activeClassName="active_bgc" className="list-group-item" to="/about">
                About
              </NavLink>
              <NavLink activeClassName="active_bgc" className="list-group-item" to="/home">
                Home
              </NavLink> */}
              {/* 标签体的内容,子组件通过this.props.children就能获得 */}
              {/* <MyNavLink to="/about">
                About
              </MyNavLink>
              <MyNavLink to="/home">
                Home
              </MyNavLink> */}

              {/* <MyNavLink to="/atguigu/about" children="About" />
              <MyNavLink to="/atguigu/home" children="Home" /> */}

              <MyNavLink to="/about" children="About" />
              {/*模糊匹配*/}
              {/* <MyNavLink to="/home/a/b" children="Home" /> */}
              {/* 严格匹配 */}
              {/* <MyNavLink to="/home/a/b" children="Home" /> */}
              <MyNavLink to="/home" children="Home" />
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                {/* 注册路由 */}
                {/* Route外侧必须包一个Router（这个router必须指明是哪一种Router）,否则报错*/}
                {/* 注意整个网页只能归一个路由器管理，否则路由跳转没有效果 ,所以最好直接把App这个组件用BrowserRouter/HashRouter包起来*/}
                {/* <Switch>
                <Route path="/about" component={About} />
                <Route path="/home" component={Home} />
                </Switch> */}

                {/* 解决多级路由，刷新样式丢失得情况
                方法1：静态页面index.html的css引入路径不要以./(当前路径下去找)，而是/css/文件名.css
                方法2：静态页面index.html的css引入路径以（"%PUBLIC_URL%/css/文件名.css"）
                方法3：在App.jsx中包裹组件的Router用HashRouter,因为HashRouter的#之后默认web前端资源 */}
                {/* <Switch>
                <Route path="/atguigu/about" component={About} />
                <Route path="/atguigu/home" component={Home} />
                </Switch> */}
                <Switch>
                  <Route path="/about" component={About} />
                  {/*模糊匹配*/}
                  <Route path="/home" component={Home} />
                  {/* 严格匹配 */}
                  {/* <Route exact={true} path="/home/a/b" component={Home} /> */}
                  {/* 写在路由最下方，上面的路由S都不匹配，那么就重定向到/about */}
                  <Redirect to="/about" />
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

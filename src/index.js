// 引入react核心库
import React from 'react';
// 引入ReactDOM
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  HashRouter,
  Link,
  Route
} from 'react-router-dom';
import App from './App.jsx'
// import Hello from './component/Hello/Hello.jsx'
// import Welcome from './component/Welcome'
// 用于记录页面性能的
import reportWebVitals from './reportWebVitals';
// 渲染aPP组件到页面
ReactDOM.render(
  // <React.StrictMode></React.StrictMode>可以检查不合理的地方
  <React.StrictMode>
  <BrowserRouter>
  <App/>
  </BrowserRouter> 
  </React.StrictMode > ,
  document.getElementById('root')
);
reportWebVitals();
import React, { Component } from 'react'
import { BrowserRouter, NavLink, Route } from 'react-router-dom';
// NavLink的封装
export default class MyNavLink extends Component {
  render() {
    // const {to,content}=this.props
    console.log(this.props)
    return (
      <div>
        {/* <NavLink activeClassName="active_bgc" className="list-group-item" to={to}>
          {content}
        </NavLink> */}
        {/* <NavLink activeClassName="active_bgc" className="list-group-item" {...this.props}>
        {this.props.children}
        </NavLink> */}
        <NavLink activeClassName="active_bgc" className="list-group-item" {...this.props}/>
      </div>
    )
  }
}

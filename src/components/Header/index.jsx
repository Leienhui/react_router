import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
class Header extends Component {
  render() {
    console.log('一般组件的props',this.props)
    return (
      <div>
        <div className="row">
          <div className="col-xs-offset-2 col-xs-8">
            <div className="page-header">
              <h2>React Router Demo</h2>
              <button  onClick={this.back}>后退</button>
              <button  onClick={this.forward}>前进</button>
              <button  onClick={()=>this.go(2)}>go前进2步</button>
              <button  onClick={()=>this.go(-2)}>go后退2步</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
  back=()=>{
    // 一般组件没有history，所以goBack，goForward，go不能使用
    // 如果想要使用history必须引入withRouter这个方法
    this.props.history.goBack()

  }
  forward=()=>{
    this.props.history.goForward()
    
  }
  go=(num)=>{
    this.props.history.go(num)
  }
}
// withRouter能让普通组件使用路由组件API
// withRouter返回值是一个新组件
export default withRouter(Header)

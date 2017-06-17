import React from 'react'

export default class Tag extends React.Component{


  alerting(e){
      console.log(e.target.innerText)
  }


  render(){
    if(this.props.hasOnClick){
      return(
        <div onClick={this.alerting} className="tag">{this.props.tagName}</div>
      )
    }else{
    return(
        <div className="tag">{this.props.tagName}</div>
    )
  }
}
}

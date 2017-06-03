import React from 'react'

export default class Picture extends React.Component{

  getTags(){
    if(this.props.picture.tags){
    return this.props.picture.tags.map(tag => {
      return (<div className="tag"> {tag.name} </div>);
    })
  }
  }
  render(){
    return (
      <div className="picture">
        {this.getTags()}
        <div>{this.props.picture.text}</div>
      </div>
    );
  }
}

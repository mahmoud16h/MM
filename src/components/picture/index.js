import React from 'react'
import Tag from '../tag'


class Picture extends React.Component{

  getTags(){
    if(this.props.picture.tags){
    return this.props.picture.tags.map(function(tag, index){
      return <Tag key={index} tagName={tag.name}/>;
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



export default Picture;
import React from 'react'
import Tag from '../tag'

export default class Tagger extends React.Component{

  render(){
    let tags = this.props.tags.map(function(tag, index){
      return (<Tag hasOnClick={true} key={index} tagName={tag} />)
    })

    return (
      <div className="tagger">
        {tags}
      </div>
    );
  }
}

import React from 'react';
import {connect} from 'react-redux';
import {addTagToPicture} from '../../actions/PictureActions'
import {removeTagFromPicture} from '../../actions/PictureActions'
import {toggleXMode} from '../../actions/PictureActions'

class Tag extends React.Component{

    render() {


        if (this.props.hasOnClick) {
            return (
                <div onClick={() => {this.props.addTags(this.props.tagName, this.props.currentPictureIndex)}} className="tag">{this.props.tagName}</div>
            )
        } else {
            return (
                <div className="tag">
                    <div onDoubleClick={this.props.toggleXMode}>{this.props.tagName}</div>
                    {this.props.inXMode ?
                        <div className="xMode" onClick={() => {this.props.removeTags(this.props.tagName, this.props.currentPictureIndex)}} >X</div>
                        : null
                    }
                </div>
            )
        }
    }
}

const mapDispatchToProps = (dispatch) =>{
  return {
        addTags : (tag, pictureId) => dispatch(addTagToPicture(tag, pictureId)),
        removeTags : (tag, pictureId) => dispatch(removeTagFromPicture(tag, pictureId)),
        toggleXMode : () => dispatch(toggleXMode())
  }
}

const mapStateToProps = (state) =>{
  return {
    currentPictureIndex : state.currentPictureIndex,
      inXMode: state.global.xMode
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Tag);

import React from 'react';
import {connect} from 'react-redux';
import {addTagToPicture} from '../../actions/PictureActions'
import {removeTagFromPicture} from '../../actions/PictureActions'
import {toggleXMode} from '../../actions/PictureActions'

class Tag extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            timer : null,
            time : 0
        }
    }

    handleMouseDown = () => {
        if(!this.state.timer) {
            this.state = {
                ...this.state,
                timer: setInterval(() => {
                    this.state = { ...this.state, time: this.state.time + 500}
                    if(this.state.time >= 750){
                        this.props.toggleXMode();
                        this.handleMouseUp();
                    }
                }, 250)
            }
        }
    }

    handleMouseUp = () => {
        if(this.state.timer) {
            clearInterval(this.state.timer);
            this.setState({
                timer: null,
                time: 0
            })
        }
    }

    render() {
        if (this.props.hasOnClick) {
            return (
                <div onClick={() => {this.props.addTags(this.props.tagName, this.props.currentPictureIndex)}} className="tag">{this.props.tagName}</div>
            )
        } else {
            return (
                <div className="tag">
                    <div onMouseDown={this.handleMouseDown} onMouseUp={this.handleMouseUp}>{this.props.tagName}</div>
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

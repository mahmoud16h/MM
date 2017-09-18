import React from 'react';
import Picture from '../picture'
import Tagger from '../tagger'
import {connect} from 'react-redux'
import { incrementPictureIndex , decrementPictureIndex} from '../../actions/PictureIndexActions'

class PictureHolder extends React.Component{

    constructor(props){
        super(props);
        this.state= {
            xDown: null,
            yDown: null
        }
    }

    componentDidMount(){
        document.querySelector('#picture-holder').addEventListener('touchstart', this.handleTouchStart.bind(this), false);
        document.querySelector('#picture-holder').addEventListener('touchmove', this.handleTouchMove.bind(this), false);
    }

    handleTouchStart(evt) {
        this.state.xDown = evt.touches[0].clientX;
        this.state.yDown = evt.touches[0].clientY;
    };

    handleTouchMove(evt) {
        if ( !this.state.xDown || !this.state.yDown ) {
            return;
        }

        var xUp = evt.touches[0].clientX;
        var yUp = evt.touches[0].clientY;

        var xDiff = this.state.xDown - xUp;
        var yDiff = this.state.yDown - yUp;

        if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
            if ( xDiff > 0 ) {
                // swiped left
                if(this.props.currentPictureIndex !== this.props.pictures.length - 1){
                    this.props.incrementPictureIndex();
                }else{
                    console.log('cant swipe left anymore')
                }
            } else {
                /* right swipe */
                if(this.props.currentPictureIndex !== 0){
                    this.props.decrementPictureIndex()
                }else{
                    console.log('cant swipe right anymore')
                }
            }
        } else {
            if ( yDiff > 0 ) {
                /* up swipe */
                console.log('swiped up');
            } else {
                /* down swipe */
                console.log('swiped down');
            }
        }
        /* reset values */
        this.state.xDown = null;
        this.state.yDown = null;
    };

    render(){


        let pictureComponents = [];
        this.props.pictures.valueSeq().forEach((pic) => {
                pictureComponents.push(<Picture picture={pic}/>);
        })

        return(
            <div className="tagger-div">
                <div id="picture-holder">
                    {pictureComponents[this.props.currentPictureIndex]}
                </div>

                <Tagger tags={this.props.tags}/>

            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return {
        pictures: state.pictures,
        tags: state.tags,
        currentPictureIndex: state.currentPictureIndex
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        incrementPictureIndex : () => dispatch(incrementPictureIndex()),
        decrementPictureIndex : () => dispatch(decrementPictureIndex())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PictureHolder)

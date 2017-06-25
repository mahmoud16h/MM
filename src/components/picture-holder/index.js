import React from 'react';
import Picture from '../picture'
import Tagger from '../tagger'
import {connect} from 'react-redux'

class PictureHolder extends React.Component{

    constructor(props){
        super(props);
        this.state= {
            currentPictureIndex: 0,
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
                if(this.state.currentPictureIndex !== this.props.pictures.length - 1){
                    this.setState({
                        currentPictureIndex : this.state.currentPictureIndex + 1
                    })
                }else{
                    console.log('cant swipe left anymore')
                }
            } else {
                /* right swipe */
                if(this.state.currentPictureIndex !== 0){
                    this.setState({
                        currentPictureIndex : this.state.currentPictureIndex - 1
                    })
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



        let pictures = this.props.pictures.map((pic) => {
            return <Picture picture={pic}/>
        })


        return(
            <div className="tagger-div">
                <div id="picture-holder">
                    {pictures[this.state.currentPictureIndex]}
                </div>

                <Tagger tags={this.props.tags}/>

            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    console.log(state);
    return {
        pictures: state.pictures,
        tags: state.tags
    }
}


export default connect(mapStateToProps)(PictureHolder)

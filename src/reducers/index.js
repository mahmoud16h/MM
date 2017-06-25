import {combineReducers} from 'redux';
import PictureReducer from './pictureReducer'
import TagsReducer from './tagsReducer'
import PictureIndexReducer from './PictureIndexReducer'

const allReducers = combineReducers({
    pictures : PictureReducer,
    tags : TagsReducer,
    currentPictureIndex : PictureIndexReducer

});

export default allReducers;

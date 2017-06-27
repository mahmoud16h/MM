import {combineReducers} from 'redux';
import PictureReducer from './PictureReducer'
import TagsReducer from './TagsReducer'
import PictureIndexReducer from './PictureIndexReducer'

const allReducers = combineReducers({
    pictures : PictureReducer,
    tags : TagsReducer,
    currentPictureIndex : PictureIndexReducer

});

export default allReducers;

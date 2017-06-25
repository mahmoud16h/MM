import {combineReducers} from 'redux';
import PictureReducer from './pictureReducer'
import TagsReducer from './tagsReducer'

const allReducers = combineReducers({
    pictures : PictureReducer,
    tags : TagsReducer
});

export default allReducers;

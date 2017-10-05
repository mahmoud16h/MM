import {combineReducers} from 'redux';
import PictureReducer from './PictureReducer'
import TagsReducer from './TagsReducer'
import PictureIndexReducer from './PictureIndexReducer'
import globalReducer from './globalReducer'

const allReducers = combineReducers({
    pictures : PictureReducer,
    tags : TagsReducer,
    currentPictureIndex : PictureIndexReducer,
    global : globalReducer,

});

export default allReducers;

import { combineReducers } from 'redux';
import contents from './contents'
import contentTags from './contentTags';
import contentValue from './contentValue';
import contentList from './contentList';
import searchList from './searchList';
import nightMode from './nightMode';
import login from './login';

const mainReducer = combineReducers({
    login,
    contents,
    contentTags,
    contentValue,
    contentList,
    searchList,
    nightMode,
})

export default mainReducer;
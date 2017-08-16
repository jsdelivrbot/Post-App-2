import { combineReducers } from 'redux';
import PostsReducer from './reducer_posts';
import { reducer as formReducer } from 'redux-form';//Just to avoid conflict with other redux library.

const rootReducer = combineReducers({
	posts: PostsReducer,
	form: formReducer
});

export default rootReducer;

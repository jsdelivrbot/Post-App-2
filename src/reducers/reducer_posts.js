import { FETCH_POSTS, SHOW_POSTS } from '../actions/index';

const INITIAL_STATE = { all: [], post: null };

//Based on the type of action creator reducer updates the state information.
export default function(state=INITIAL_STATE, action) {
	switch(action.type) {
		case FETCH_POSTS:
			return { ...state, all: action.payload.data };
		case SHOW_POSTS:
			return { ...state, post: action.payload.data };
		default:
			return state;
	}
}
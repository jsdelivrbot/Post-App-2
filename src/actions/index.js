import axios from 'axios';

export const FETCH_POSTS="FETCH_POSTS";
export const CREATE_POSTS="CREATE_POSTS";
export const SHOW_POSTS="SHOW_POSTS";
export const DELETE_POSTS="DELETE_POSTS";

const ROOT_URL = "http://reduxblog.herokuapp.com/api"
const API_KEY = "?key=sdg234243sdfa3";

export function fetchPosts() {
	const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);
	return {
		type: FETCH_POSTS,
		payload: request
	};
}

export function createPosts(props) {
	const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, props);
	return {
		type: CREATE_POSTS,
		payload: request
	};
}

export function showPosts(id) {
	const request = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`);
	return {
		type: SHOW_POSTS,
		payload: request
	};
}

export function deletePosts(id) {
	const request = axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`);
	return {
		type: DELETE_POSTS,
		payload: request
	};
}
//Common file to hold the URL path to Route for the router.
import React from 'react';
import { Route, IndexRoute } from 'react-router';
import PostsIndex from './components/posts_index';
import PostsNew from './components/posts_new';
import PostsShow from './components/posts_show';

import App from './components/app';


export default (
	//"/" is the path if URL has ended with "/" then render the App component whihc is set below
	//We can also specify the child Route and Component information
	//If Route is "/" then show App and PostsIndex Component elseif Route path is "/" and greet,1,2 then show App & Greeting Components
	//If url appended with "posts/new" then load the component of PostsNew
	<Route path="/" component={App}>
		<IndexRoute component={PostsIndex} />
		<Route path="posts/new" component={ PostsNew } />
		<Route path="posts/:id" component={ PostsShow } />
	</Route>
);
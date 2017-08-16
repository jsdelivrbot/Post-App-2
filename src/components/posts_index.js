import React, { Component } from 'react';
import { connect } from 'react-redux';
//import { bindActionCreators } from 'redux'; as part of better implementation commenting
import { fetchPosts } from '../actions/index';
//Link is the default Component defined by react router for linking between one URL req to others and Link acts as anchor tag behind the scenes
import { Link } from 'react-router';

class PostsIndex extends Component {
	//Lifecycle method React will call this method automatically/predefined when component is about the render to DOM and it will call only once.
	componentWillMount() {
		this.props.fetchPosts();
	}
	renderPosts() {
		return this.props.posts.map((post) => {
			return (
				<li className="list-group-item" key={post.id}>
					<Link to={`posts/${post.id}`}>
					<span className="pull-xs-right">{post.categories}</span>
					<strong>{post.title}</strong>
					</Link>
				</li>
			);
		})
	}
	render() {
		return (
			<div>
				<div className="text-xs-right">
					<Link to="/posts/new" className="btn btn-primary">
						Add a Post
					</Link>
				</div>
				<h3>
					Posts
				</h3>
				<ul className="list-group">
					{this.renderPosts()}
				</ul>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return { posts: state.posts.all };
}

/*function mapDispatchToPorps(dispatch) {
	return bindActionCreators({ fetchPosts }, dispatch)
}*/
//export default connect(null, mapDispatchToPorps)(PostsIndex);
//Without above code this is advance and easy way to implement - shortcut. We are using ES6 instead of { fetchPosts:fetchPosts } we are using just { fetchPosts }
export default connect(mapStateToProps, { fetchPosts })(PostsIndex);
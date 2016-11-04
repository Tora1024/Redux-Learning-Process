import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../actions/index';
import { Link } from 'react-router';
import { deletePost } from '../actions/index';


class PostsShow extends Component {
	static contextTypes = {
		router: PropTypes.object
	};

	componentWillMount() {
		this.props.fetchPost(this.props.params.id);
	}

	onPostDelete() {
		this.props.deletePost(this.props.params.id)
			.then(() => {
				this.context.router.push('/');
			});
	}

	render() {
		const { post } = this.props;

		if (!post) {
			return(
				<div>Loading...</div>
			);
		} else {
			return (
				<div>
					<Link to="/">Back To Index</Link>
					<button onClick={this.onPostDelete.bind(this)} className="btn btn-danger pull-xs-right">Delete Post</button>
					<h3>{post.title}</h3>
					<h6>Categories: {post.categories}</h6>
					<p>{post.content}</p>
				</div>
			);
		}
	}
}

function mapStateToProps(state) {
	return ({ post: state.posts.post });
}

export default connect (mapStateToProps, { fetchPost, deletePost })(PostsShow);
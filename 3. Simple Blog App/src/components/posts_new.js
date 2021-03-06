import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { createPosts } from '../actions/index';
import { Link } from 'react-router';

class PostsNew extends Component {
	static contextTypes = {
		router: PropTypes.object
	};

	onSubmit(props) {
		this.props.createPosts(props)
			.then(() => {
				//blog post have been created, navigate the user to the index
				//We navigate by calling this.context.router.push with the 
				//new path to navigate to
				this.context.router.push('/');
			});
	}

	render() {
		const { fields: { title, categories, content }, handleSubmit } = this.props;
		return (
			<form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
				<h3>Create A New Post</h3>
				<div className={`form-group ${title.touched && title.invalid ? 'has-danger' : ''}`}>
					<label>Title</label>
					<input type="text" className="form-control" { ...title }/>
					<div className={`text-help ${title.touched ? 'text-danger' : ''}`}>
						{ title.touched ? title.error: '' }
					</div>
				</div>

				<div className={`form-group ${categories.touched && categories.invalid ? 'has-danger' : ''}`}>
					<label>Categories</label>
					<input type="text" className="form-control" { ...categories }/>
					<div className={`text-help ${categories.touched ? 'text-danger' : ''}`}>
						{ categories.touched ? categories.error: '' }
					</div>
				</div>

				<div className={`form-group ${content.touched && content.invalid ? 'has-danger' : ''}`}>
					<label>Content</label>
					<textarea type="text" className="form-control" { ...content }/>
					<div className={`text-help ${content.touched ? 'text-danger' : ''}`}>
						{ content.touched ? content.error: '' }
					</div>
				</div>

				<button type="submit" className="btn btn-primary">Submit</button>
				<Link to="/" className="btn btn-danger" >Cancel</Link>
			</form>
		);
	}
}

function validate(values) {
	const errors = {};

	if (!values.title) {
		errors.title = 'Enter a title name for the input';
	}

	if (!values.categories) {
		errors.categories = 'Enter categories';
	}

	if (!values.content) {
		errors.content = 'Enter some content';
	}

	return errors;
}

//connect: first argument is mapStateToProps, second is dispatchStateToProps
//reduxForm: first is form configuration, second is mapStateToProps, third is dispatchStateToProps

export default reduxForm({
	form: 'PostsNewForm',
	fields: ['title', 'categories', 'content'], 
	validate
}, null, { createPosts })(PostsNew);
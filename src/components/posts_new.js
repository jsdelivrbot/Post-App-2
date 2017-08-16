import React, { Component, PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';
import { createPosts } from '../actions/index';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class PostsNew extends Component {

	//context is similar like props but no need to pass data explicitely from parent to child component it grabs based on the path URL
	//Avoid using context only when we are using react-router, context API is in flux which can change in future upgrade.
	//It is basically a method for class PostsNew similar like java class.method
	static contextTypes = {
		router: PropTypes.object
	};

	onSubmit(props) {
		this.props.createPosts(props).then(() => {
			//Promise response object as then, means once post is created then navigate.
			//we navigate this.context.router.push to new path which is parent path.
			this.context.router.push('/');
		})
	}

	render() {
		const { handleSubmit}= this.props;
		//mapping fields created as part of redux form in div element which is used to hold the data user entered {...} is es6 format
		//redux form handles form elements and submit
		return (
			<form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
				<h3>Create a New Post</h3>
					<Field name="title" label="Title" component={renderField} type="text"   placeholder="Title" />
					<Field name="categories" label="Categories" component={renderField}  type="text"   placeholder="Categories" />
					<Field name="content" label="Content" field={true} component={renderField} type="text"   placeholder="Content" />
					<button type="submit" className="btn btn-primary">Submit</button>
					<Link to="/" className="btn btn-danger">Cancel</Link>
			</form>
		);
	}
}

const required = value => (value ? undefined : 'Enter a username');
const alphaNumeric = value => value && /[^a-zA-Z0-9 ]/i.test(value) ? 'Only alphanumeric characters' : undefined;
const renderField = ({
  input,
  field,
  label,
  type,
  meta: { touched, error, warning, invalid }
}) => {
	const inputType = <input {...input} placeholder={label} type={type} className="form-control" />;
	const textareaType = <textarea {...input} placeholder={label} type={type} className="form-control" />
	return (
		  <div className={`form-group ${touched && invalid ? 'has-danger' : ''}`}>
		    <label>
		      {label}
		    </label>
		    <div>
		    	{ field ? textareaType : inputType }
		      	{touched && ((error && <span> {error} </span>) || (warning && <span> {warning} </span>))}
		    </div>
		  </div>
	);
}

const validate = (values) => {
    const errors = {};
    if(!values.title) {
        errors.title = 'Enter a username';
    }
    if (!values.categories) {
        errors.categories = 'Enter Categories';
    }
    if (!values.content) {
        errors.content = 'Enter some Content';
    }
    return errors;
};
//connect has 2 arguments - mapStateToProps and mapDispatchToProps
//reduxForm has 3 arguments - form config, mapStateToProps and mapDispatchToProps
export default connect(null, {createPosts})(reduxForm({
	form: 'PostsNewForm', validate})(PostsNew));
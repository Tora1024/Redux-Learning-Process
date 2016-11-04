import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

export default class App extends Component {
	componentWillMount(){
		this.props.fetchUsers();
	}

	render() {
		return (
		  	<div>React simple starter</div>
		);
	}
}

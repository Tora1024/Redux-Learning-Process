import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectBook } from '../actions/index';

class Booklist extends Component {
	renderList() {
		return this.props.books.map((book) => {
			return (
				<li 
				key={book.title} 
				className="list-group-item"
				onClick = {() => this.props.selectBook(book)}>
					{book.title}
				</li>
			);
		});
	}

	render () {
		return (
			<ul className="list-group col-sm-4">
				{ this.renderList() }
			</ul>
		);
	}
}

function mapStateToProps(state) {
	return {
		books: state.books
	};
}

//Make the selectBook function we imported, available as a prop on this smart component.
function mapDispatchToProps(dispatch) {
	return bindActionCreators({selectBook: selectBook}, dispatch);
}

//expose all content to a higher level to be used.
export default connect(mapStateToProps, mapDispatchToProps)(Booklist);
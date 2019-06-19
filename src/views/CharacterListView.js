import React from 'react';
import { connect } from 'react-redux';

import { CharacterList } from '../components';
// import actions
import * as actionsCreators from '../actions/index';

class CharacterListView extends React.Component {
	// constructor() {
	// 	super();
	// }

	componentDidMount() {
		// call our action
		// debugger;
		this.props.fetchPeople();
	}

	render() {
		console.log(this.props.error);

		if (this.props.isFetching) {
			// return something here to indicate that you are fetching data
			return <div>Data is being fetched...</div>;
		}
		if (!this.props.error) {
			return (
				<div className="CharactersList_wrapper">
					<CharacterList characters={this.props.characters} />
				</div>
			);
		} else {
			return <div>{this.props.error}</div>;
		}
	}
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
function mapStateToProps(state) {
	// console.log(state.charsReducer);
	return {
		characters: state.charsReducer.characters,
		isFetching: state.charsReducer.isFetching,
		error: state.charsReducer.error,
	};
}

export default connect(
	/* mapStateToProps replaces null here */
	mapStateToProps,
	/* action creators go here */
	actionsCreators
)(CharacterListView);

import React from 'react';
import { connect } from 'react-redux';

import { CharacterList } from '../components';
// import actions
import * as actionsCreators from '../actions/index';

class CharacterListView extends React.Component {
	constructor() {
		super();
	}

	componentDidMount() {
		// call our action
	}

	render() {
		if (this.props.fetching) {
			// return something here to indicate that you are fetching data
		}
		return (
			<div className="CharactersList_wrapper">
				<CharacterList characters={this.props.characters} />
			</div>
		);
	}
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
function mapStateToProps(state) {
  return {
    characters: state.characters,
    fetched: state.fetched
  };
}

export default connect(
	null /* mapStateToProps replaces null here */,
	/* action creators go here */
	actionsCreators
)(CharacterListView);

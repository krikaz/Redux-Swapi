import * as types from '../actions';
const initialState = {
	characters: [],
	// Array characters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action) => {
	switch (action.type) {
		// Fill me in with the important reducers
		// action types should be FETCHING, SUCCESS and FAILURE
		// your switch statement should handle all of these cases.
		case types.FETCHING:
			return action.payload;
		case types.SUCCESS:
			return;
		case types.FAILURE:
			return;

		default:
			return state;
	}
};

import * as types from '../actions';
const initialState = {
	characters: [],
	isFetching: false,
	error: null,
	// Array characters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action) => {
	switch (action.type) {
		// Fill me in with the important reducers
		// action types should be FETCHING, SUCCESS and FAILURE
		// your switch statement should handle all of these cases.
		case types.FETCHING:
			return {
				...state,
				isFetching: true,
				error: '',
			};
		case types.SUCCESS:
			return {
				...state,
				characters: action.payload,
				isFetching: false,
			};
		case types.FAILURE:
			return {
				...state,
				isFetching: false,
				error: 'fetching failed',
			};

		default:
			return state;
	}
};

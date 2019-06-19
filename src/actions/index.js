// we'll need axios
import axios from 'axios';

// we'll need to create 3 different action types here.
// one for fetching, one for success and one for failure
export const FETCHING = 'FETCHING';
export const SUCCESS = 'SUCCESS';
export const FAILURE = 'FAILURE';

// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based action creator

export const fetching = () => {
	// debugger;
	return {
		type: FETCHING,
	};
};

export const succeded = people => {
	return {
		type: SUCCESS,
		payload: people,
	};
};

export const failed = errorMessage => {
	return {
		type: FAILURE,
		payload: errorMessage,
	};
};

export const fetchPeople = () => {
	// debugger;
	return function(dispatch) {
		dispatch(fetching());
		axios
			.get('https://swapi.co/api/people')
			.then(res => {
				// debugger;
				dispatch(succeded(res.data.results));
			})
			.catch(error => {
				// debugger;
				dispatch(failed(error.message));
			});
	};
};

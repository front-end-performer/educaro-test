import { USERS_ENTRY, NOT_VALID } from "./constants";

const initialState = {
	articles: [],
};

function rootReducer(state = initialState, action) {
	if (action.type === USERS_ENTRY) {
		return {
			...state,
			articles: state.articles.concat(action.payload),
			notValid: false,
		};
	}

	if (action.type === NOT_VALID) {
		return {
			...state,
			notValid: true,
		};
	}

	return state;
}

export default rootReducer;

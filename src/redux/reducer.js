import { USERS_ENTRY, NOT_VALID } from "./constants";

const initialState = {
	inputs: "",
	val: false,
};

function rootReducer(state = initialState, action) {
	if (action.type === USERS_ENTRY) {
		return {
			...state,
			inputs: action.payload && action.payload === "7777" ? true : false,
			isValid: true,
		};
	}

	if (action.type === NOT_VALID) {
		return {
			...state,
			isValid: false,
		};
	}

	return state;
}

export default rootReducer;

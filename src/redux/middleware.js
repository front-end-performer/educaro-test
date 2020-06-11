// Middleware which check for a if entered value is a number

import { USERS_ENTRY, NOT_VALID } from "./constants";

const isNumber = /^[0-9\b]+$/;

export function charectersValMiddleware({ dispatch }) {
	return function (next) {
		return function (action) {
			// do your stuff
			if (action.type === USERS_ENTRY) {
				const correctInput = isNumber.test(action.payload);
				if (action.payload !== "" && correctInput === false) {
					return dispatch({ type: NOT_VALID });
				}
			}
			return next(action);
		};
	};
}

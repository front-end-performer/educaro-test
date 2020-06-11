// Middleware which check for a bad words

import { USERS_ENTRY, NOT_VALID } from "./constants";

const onlyNumbers = /^[0-9\b]+$/;

export function charectersValMiddleware({ dispatch }) {
	return function (next) {
		return function (action) {
			// do your stuff
			if (action.type === USERS_ENTRY) {
				console.log(action);
				// const foundWord = forbiddenWords.map((word) =>
				// 	action.payload.title.includes(word)
				// );
				// console.log("foundWord", foundWord);
				// if (!foundWord[0]) {
				// 	return dispatch({ type: NOT_VALID });
				// }
			}
			return next(action);
		};
	};
}

import { USERS_ENTRY } from "./constants";

export function usersInput(payload) {
	// console.log("payload", payload);
	return { type: USERS_ENTRY, payload };
}

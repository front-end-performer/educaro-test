import { USERS_ENTRY } from "./constants";

export function usersInput(payload) {
	return { type: USERS_ENTRY, payload };
}

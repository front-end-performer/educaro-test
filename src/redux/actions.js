import { USERS_ENTRY } from "./constants";

export function addArticle(payload) {
	console.log("payload", payload);
	return { type: USERS_ENTRY, payload };
}

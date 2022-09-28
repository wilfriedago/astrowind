// Description: Helper functions

export function getStorage(key: string) {
	return localStorage.getItem(key) ? (JSON.parse(localStorage.getItem(key)) as boolean) : null;
}

export function setStorage(key: string, value: unknown) {
	localStorage.setItem(key, JSON.stringify(value));
}

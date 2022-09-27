export function loadStorage() {
	return JSON.parse(localStorage.getItem('storage') || '{}');
}

export function saveStorage(storage: unknown) {
	localStorage.setItem('storage', JSON.stringify(storage));
}

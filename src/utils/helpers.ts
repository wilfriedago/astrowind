// Description: Helper functions

export function getStorage(key: string) {
	return localStorage.getItem(key) ? (JSON.parse(localStorage.getItem(key)) as boolean) : null;
}

export function setStorage(key: string, value: unknown) {
	localStorage.setItem(key, JSON.stringify(value));
}

export function attachEvent(selector, event, fn) {
	const matches = document.querySelectorAll(selector);

	if (matches && matches.length)
		matches.forEach((elem) => {
			elem.addEventListener(event, () => fn(elem), false);
		});
}

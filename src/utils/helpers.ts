// Description: Helper functions

function getStorage(key: string): boolean | string | number | object | null {
	return localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)) : null;
}

function setStorage(key: string, value: unknown): void {
	localStorage.setItem(key, JSON.stringify(value));
}

function attachEvent(selector: string, eventType: string, fn: CallableFunction): void {
	const matches = document.querySelectorAll(selector);

	if (matches && matches.length)
		matches.forEach((elem: HTMLElement) => {
			elem.addEventListener(eventType, (e: Event) => fn(elem, e), false);
		});
}

function initTabs(triggers: string, tabs: string): void {
	attachEvent(triggers, 'click', (elem: HTMLElement, e: Event) => {
		e.preventDefault();
		const targetTab = document.getElementById(elem.dataset.tab);

		document.querySelectorAll(tabs).forEach((tab: HTMLElement) => {
			if (tab.id === targetTab.id) tab.classList.remove('hidden');
			else tab.classList.add('hidden');
		});
	});
}

export { getStorage, setStorage, attachEvent, initTabs };

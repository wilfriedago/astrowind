// Description: Helper functions

export function getStorage(key: string): boolean | string | number | object | null {
	return localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)) : null;
}

export function setStorage(key: string, value: unknown): void {
	localStorage.setItem(key, JSON.stringify(value));
}

export function attachEvent(selector, event: Event, fn: unknown): void {
	const matches = document.querySelectorAll(selector);

	if (matches && matches.length)
		matches.forEach((elem) => {
			elem.addEventListener(event, () => fn(elem), false);
		});
}

export function initTabs(triggers: NodeListOf<Element>, tabs: NodeListOf<Element>): void {
	triggers.forEach((trigger) => {
		trigger.addEventListener('click', (e: Event) => {
			e.preventDefault();

			const targetElement = e.target as HTMLElement;
			const targetTab = document.getElementById(targetElement.dataset.tab);

			if (targetTab) {
				tabs.forEach((tab) => {
					tab.classList.add('hidden');
				});

				targetTab.classList.remove('hidden');
			}

			triggers.forEach((trigger) => {
				trigger.classList.remove('tab-active');
			});

			trigger.classList.add('tab-active');
		});
	});
}

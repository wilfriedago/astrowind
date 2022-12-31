interface Observable {
	observers: Observer[];
	data: unknown;
	addObserver(observer: Observer): void;
	removeObserver(observer: Observer): void;
	setData(data: unknown): void;
	notifyObservers(): void;
}

interface Observer {
	update(data: unknown): void;

	// This is a hack to get the initial data from localStorage
	// when the app loads. This is not a good solution, but it
	// works for now.
	init?(): void;
}

export type { Observable, Observer };

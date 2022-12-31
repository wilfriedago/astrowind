import { Observable, Observer } from '~/interfaces';

const UiConfig: Observable = {
	observers: [],

	data: {},

	addObserver: function (observer: Observer) {
		this.observers.push(observer);
	},

	removeObserver: function (observer: Observer) {
		const index = this.observers.indexOf(observer);
		if (index > -1) {
			this.observers.splice(index, 1);
		}
	},

	setData: function (newData: unknown) {
		this.data = newData;
		this.notifyObservers();
	},

	notifyObservers: function () {
		this.observers.forEach(function (observer: Observer) {
			observer.update(this.data);
		});
	},
};

const LocalStorage: Observer = {
	update: function (data: unknown) {
		localStorage.setItem('uiConfig', JSON.stringify(data));
	},

	// This is a hack to get the initial data from localStorage
	// when the app loads. This is not a good solution, but it
	// works for now.
	init: function () {
		const data = localStorage.getItem('uiConfig');
		if (data) {
			UiConfig.setData(JSON.parse(data) || {});
		}
	},
};

UiConfig.addObserver(LocalStorage);

export { UiConfig, LocalStorage };

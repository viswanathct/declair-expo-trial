/* eslint-disable no-console */

import React from 'react';
import declair from 'declair/quick';
import config from './config';
import { source } from './config/structures/shared';

/* State */
let epoch = 0;
let logLevel = 0;
let delay = 1000;

/* Helpers */
const debug = (...args) =>
	logLevel < 1 && console.log(...args);

const setupMocks = () => {
	if(!window.performance)
		window.performance = { now: () => new Date() };
};

const initDevEnv = () => {
	console.log(`%c ${ (new Date()).toLocaleTimeString() }`,
		'background: #222; color: #bada55; font-size: 20pt',);

	setupMocks();
};

const initUpdater = (publish) => {
	publish({
		timer: epoch,
	});

	const startTime = new Date();

	setInterval(() => {
		debug(epoch++, new Date() - startTime);

		publish({
			timer: epoch,
		});
	}, delay);
};

const Apps = {
	dev: (type = 'dev') => {
		const { root: Root, publish } = declair(config(type));

		initUpdater(publish);

		return <Root/>;
	},
	perf: (count = 1000) => { // eslint-disable-line max-statements, no-magic-numbers
		const baseConfig = config('nested');
		const embedRoot = baseConfig.structure.items.child.items;
		const childConfig = source;

		for(let i = 1; i < count; i++)
			embedRoot[`embedding${ i }`] = childConfig;
		const start = performance.now();
		const { root: Root, publish } = declair(baseConfig);

		console.log('Config', performance.now() - start);
		initUpdater(publish);

		const root = <Root/>;

		console.log('Rendering', performance.now() - start);

		return root;
	},
};

const App = () => {
	initDevEnv();
	logLevel = 1;
	delay *= 1;

	return Apps.dev();
};

export default App;

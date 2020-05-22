/* eslint-disable no-console */

import React from 'react';
import { keys, select } from '@laufire/utils/collection';
import declair from 'declair/quick';
import config from './config';
import { source } from './config/structures/shared/parts';

/* State */
let logLevel = 0;
let delay = 1000;

/* Helpers */
const debug = (...args) =>
	logLevel < 1 && console.log(...args);

const setupMocks = () => {
	if(!window.performance)
		window.performance = { now: () => new Date() };
};

const styledLog = (x) => console.log(`%c ${ x }`,
	'background: #222; color: #bada55; font-size: 20pt') ;

const initDevEnv = () => {
	const startTime = new Date();

	styledLog(`${ startTime.toLocaleTimeString() }:${ startTime.getMilliseconds() }`);

	setupMocks();
};

const getCollectionMessages = (val) => [
	{
		action: 'create',
		data: { id: 'test', color: val.toString() },
	},
	{
		action: 'update',
		data: { id: 'test', color: val.toString() },
	},
	{
		action: 'delete',
		data: { id: 'test' },
	},
];

const getPublisher = (publish, sources) => {
	const availableSources = keys(sources);
	const filterUpdates = (updates) => select(updates, availableSources);

	debug('Initiating publish messages.');
	debug('Available sources', availableSources);

	return (val = 0) => {
		const collectionMessages = getCollectionMessages(val);

		publish(filterUpdates({
			timer: val,
			collection:
				collectionMessages[val % collectionMessages.length],
		}));
	};
};

const initUpdater = (publisher, sources) => {
	let epoch = 0;
	const publish = getPublisher(publisher, sources);

	publish();
	const startTime = new Date();

	setInterval(() => {
		debug(epoch++, new Date() - startTime);
		publish(epoch);
	}, delay);
};

const Apps = {
	dev: (structureId, live = true) => {
		const { app, structureID } = config(structureId);
		const { Root, publish } = declair(app);

		[structureID, keys(app.sources).join(', ')].forEach(styledLog);

		live && initUpdater(publish, app.sources);

		return <Root/>;
	},
	perf: (count = 100) => { // eslint-disable-line max-statements, no-magic-numbers
		const { app } = config('examples/nested');
		const embedRoot = app.structure.items.child.items;
		const childConfig = source;

		for(let i = 0; i < count; ++i)
			embedRoot[`embedding${ i }`] = childConfig;

		const start = performance.now();
		const { Root, publish } = declair(app);

		initUpdater(publish, app.sources);

		console.log('Config', performance.now() - start);

		const root = <Root/>;

		console.log('Rendering', performance.now() - start);

		return root;
	},
};

const App = () => {
	initDevEnv();
	logLevel = 1;
	delay *= 1;

	return Apps.dev('examples/routed');
};

export default App;

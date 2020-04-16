import React from 'react';
import declair from 'declair/quick';

/* State */
let i = 0;
let logLevel = 0;
let delay=1000;

/* Helpers */
const debug = (...args) =>
	logLevel < 1 && console.log(...args)

const setupMocks = () => {
	if(! window.performance)
		window.performance = { now: () => new Date() };
};

/* Config */
const colors = ['#800', '#080', '#008'];
const source = {
	type: 'text',
	data: 'timer',
	style: {
		color: 'color',
		fontSize: 100,
	},
};
const structures = {
	flat: {
		type: 'text',
		data: 'timer',
		style: {
			color: 'color',
			fontSize: 100,
		},
	},
	nested: {
		data: {
			message: 'Some text passed as data from the parent!',
		},
		style: {
			borderWidth: 3,
		},
		items: {
			message: {
				type: 'text',
			},
			child: {
				style: {
					borderColor: '#f00',
					margin: 5,
				},
				items: {
					embedded: {
						type: 'text',
						data: 'Some text as embedded data!',
						style: {
							fontSize: 12,
						},
					},
					source: source,
				},
			},
		},
	},
}

const getConfig = (type='nested') => ({
	types: {
		element: {
			style: {
				backgroundColor: '#ddd',
				borderWidth: 5,
			},
		},
		text: {
			style: {
				fontSize: 12,
			},
		},
	},
	sources: {
		timer: {
			type: 'config',
			value: i,
		},
		color: {
			type: 'config',
			value: colors[i],
		},
	},
	structure: structures[type],
});

const initUpdater = (publish) => {
	publish({
		timer: i,
		color: colors[i % colors.length],
	});

	const x = new Date;

	setInterval(() => {
		debug(i++, new Date - x);

		publish({
			timer: i,
			color: colors[i % colors.length],
		});
	}, delay);
}

const devApp = (type='nested') => {
	const { root: Root, publish } = declair(getConfig(type));

	initUpdater(publish);

	return <Root/>;
}

const perfApp = (count=1000) => {
	const config = getConfig();
	const embedRoot = config.structure.items.child.items;
	const childConfig = source;

	for(let i=0; i< count; i++)
		embedRoot[`embedding${i}`] = childConfig;

	const start = performance.now();
	const { root: Root, publish } = declair(config);

	console.log('Config', performance.now() - start);

	initUpdater(publish);

	const root = <Root/>;

	console.log('Rendering', performance.now() - start);

	return root;
}

export default function App() {
	setupMocks();
	logLevel = 1;
	return perfApp(1000);
	// return devApp('flat');
};

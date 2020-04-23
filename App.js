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
		borderColor: 'input',
		fontSize: 100,
		fontStyle: 'italic',
		borderWidth: 3,
	},
};
const input = {
	type: 'input',
	data: 'input',
};
const itemTree = {
	child: {
		style: {
			borderColor: 'purple',
			flex: 1,
			flexDirection: 'column',
			justifyContent: 'flex-start',
		},
		items: {
			embedded: {
				type: 'text',
				data: 'Some text as embedded data!',
				style: {
					fontSize: 12,
				},
			},
			input: input,
			source: source,
		},
	},
	child1: {
		style: {
			flexDirection: 'row',
			justifyContent: 'space-around',
		},
		items: {
			message: {
				type: 'text',
				data: 'Some text!',
			},
			message1: {
				type: 'text',
				data: 'Some other text!',
			},
		}
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
	routed: {
		type: 'router',
		data: {
			message: 'Some text passed as data from the parent!',
		},
		style: {
			borderColor: 'purple',
			borderWidth: 2,
		},
		items: itemTree,
	},
	nested: {
		data: {
			message: 'Some text passed as data from the parent!',
		},
		style: {
			borderColor: 'black',
			flex: 1,
			flexDirection: 'column',
			width: '100%',
		},
		items: itemTree,
	},
}

const getConfig = (type='nested') => ({
	types: {
		element: {
			style: {
				backgroundColor: '#ddd',
				borderWidth: 1,
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
			type: 'store',
			data: i,
		},
		color: {
			type: 'store',
			data: colors[i],
		},
		input: {
			type: 'store',
			data: 'red',
		},
	},
	structure: structures[type],
});

const initUpdater = (publish) => {
	publish({
		timer: i,
		color: colors[i % colors.length],
	});

	const startTime = new Date;

	setInterval(() => {
		debug(i++, new Date - startTime);

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
	delay *= 1;
	// return perfApp(1000);
	return devApp('routed');
};

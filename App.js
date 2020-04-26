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

const initDevEnv = () => {
	console.log(
		`%c ${ (new Date).toLocaleTimeString() }`,
		'background: #222; color: #bada55; font-size: 20pt',
		);

	setupMocks();
}

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
};

const structures = {
	dev: {
		type: 'text',
		data: 'some data',
	},
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
		platform: {
			android: {
				style: {
					marginTop: 50,
				},
			}
		},
		items: {
			...itemTree,
			child1: {
				style: {
					backgroundColor: 'yellow',
				},
				items: {
					sub: {
						type: 'router',
						style: {
							borderColor: 'red',
							borderWidth: 1,
						},
						items: {
							someText: {
								type: 'text',
								data: 'Some text!',
							},
							someOtherText: {
								type: 'text',
								data: 'Some other text!',
							},
						},
					},
				},
			},
		},
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

const getConfig = (type='dev') => ({
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

const devApp = (type='dev') => {
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
	initDevEnv();
	logLevel = 1;
	delay *= 1;
	// return perfApp(1000);
	return devApp();
};

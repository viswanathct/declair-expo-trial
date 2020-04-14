import React from 'react';
import declair from 'declair/quick';

/* State */
let i = 0;

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

const initUpdater = (sources, delay=1000) => {
	sources.timer.update(i++);
	sources.color.update(colors[i % colors.length]);

	setInterval(() => {
		sources.timer.update(i++);
		sources.color.update(colors[i % colors.length]);
	}, delay);
}

const devApp = (type='nested', interval=1000) => {
	const { root: Root, sources } = declair(getConfig(type));

	initUpdater(sources, interval);

	return <Root/>;
}

const perfApp = (count=1000) => {
	const config = getConfig();
	const embedRoot = config.structure.items.child.items;
	const childConfig = source;

	for(let i=0; i< count; i++)
		embedRoot[`embedding${i}`] = childConfig;

	const start = performance.now();
	const { root: Root, sources } = declair(config);

	console.log('Config', performance.now() - start);

	initUpdater(sources);

	const root = <Root/>;

	console.log('Rendering', performance.now() - start);

	return root;
}

export default function App() {
	return devApp();
};

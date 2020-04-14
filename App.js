import React from 'react';
import declair from "declair/quick";

/* State */
let i = 0;

/* Config */
const config = {
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
		simple: {
			type: 'config',
			value: i,
		},
	},
	structure: {
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
					},
					source: {
						type: 'text',
						source: 'simple',
						style: {
							fontSize: 100,
						},
					},
				},
			},
		},
	},
};

const initUpdater = (sources) => {
	sources.simple.update(i++);
	setInterval(() => {
		sources.simple.update(i++);
	}, 1000);
}

const devApp = () => {
	const { root: Root, sources } = declair(config);

	initUpdater(sources);

	return <Root/>;
}

const perfApp = (count=1000) => {
	const embedRoot = config.structure.items.child.items;
	const childConfig = {
		type: 'text',
		source: 'simple',
		style: {
			fontSize: 100,
		},
	};

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
	return perfApp();
};

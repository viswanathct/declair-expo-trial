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

const devApp = () => {
	const { root: Root, sources } = declair(config);

	setInterval(() => {
		sources.simple.update(i++);
	}, 1000);

	return <Root/>;
}


export default function App() {
	return devApp();
};

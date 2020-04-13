import React from 'react';
import declair from "declair/quick";

/* Data */
const messages = ['\\', '|', '/', '--'];

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
			value: messages[i],
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
					}
				},
			},
		},
	}
};

export default function App() {
	const { structure: Root, sources } = declair(config);

	setInterval(() => {
		sources.simple.update(messages[i++ % 4]);
	}, 200);

	return <Root/>
};

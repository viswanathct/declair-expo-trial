import React from 'react';
import { StyleSheet } from 'react-native';
import declair from "declair/quick";

/* Data */
const messages = ['\\', '|', '/', '--'];

/* State */
let i = 0;

/* Config */
const typeStyles = StyleSheet.create({
  element: {
		backgroundColor: '#ddd',
		borderWidth: 1,
		alignItems: 'center',
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'center',
	},
});

const styles = StyleSheet.create({
  element: {
		borderColor: '#f00',
		borderWidth: 1,
		margin: 5,
	},
	text: {
		fontSize: 10,
  },
});

const config = {
	types: {
		element: {
			config: {
				style: typeStyles.element,
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
		items: {
			child: {
				items: {
					embedded: {
						type: 'text',
						data: 'Some text as embedded data!',
					},
					source: {
						type: 'text',
						source: 'simple',
					}
				},
			},
			message: {
				type: 'text',
			}
		},
		style: styles.element,
	}
};

export default function App() {
	const { structure: Root, sources } = declair(config);

	setInterval(() => {
		sources.simple.update(messages[i++ % 4]);
	}, 200);

	return <Root/>
};

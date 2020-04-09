import React from 'react';
import { StyleSheet } from 'react-native';
import declair from "declair/quick";

export default function App() {
	const Declair = declair({
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
				value: 'Some data from a source!',
			},
		},
	});

	return <Declair {...{
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
	}}/>
}

const typeStyles = StyleSheet.create({
  element: {
		backgroundColor: '#ddd',
		borderWidth: 4,
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

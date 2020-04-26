const input = {
	type: 'input',
	data: 'input',
};

/* Exports */
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

export { itemTree, source };

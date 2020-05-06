const input = {
	type: 'input',
	data: 'input',
};

const list = {
	type: 'list',
	data: [
		{ sub: 1 },
		{ sub: 2 },
		{ sub: 3 },
	],
	item: {
		items: {
			sub: {
				type: 'text',
			},
		},
	},
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
			list: list,
		},
	},
};

export { itemTree, source };

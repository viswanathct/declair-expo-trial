const embedded = {
	type: 'text',
	data: 'Some text as embedded data!',
	style: {
		fontSize: 12,
	},
};

const input = {
	type: 'input',
	data: 'input',
};

const list = {
	type: 'list',
	data: 'collection',
	item: {
		items: {
			delete: {
				type: 'button',
				label: 'X',
				data: {
					action: 'delete',
				},
			},
			sub: {
				type: 'text',
			},
		},
	},
};

const button = {
	type: 'button',
	data: 'color',
	label: 'Get Text Color',
	target: 'input',
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
			embedded,
			input,
			button,
			source,
			list,
		},
	},
};

export { itemTree, source };

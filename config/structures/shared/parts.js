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

const form = {
	type: 'form',
	data: {
		action: 'create',
		data: {
			color: 0,
		},
	},
	target: 'collection',
	items: {
		color: {
			type: 'input',
		},
		submit: {
			type: 'button',
			label: 'Add Item',
			data: {
				action: 'submit',
			},
		},
	},
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
			color: {
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

const child = {
	label: 'Custom label',
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
		form,
		list,
	},
};

export { child, source };

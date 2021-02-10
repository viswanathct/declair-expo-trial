const styles = {
	big: {
		fontSize: 100,
		fontStyle: 'italic',
		borderWidth: 3,
	},
};

/* Exports */
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
	target: 'collection',
	action: 'create',
	data: {
		color: 0,
	},
	items: {
		color: {
			type: 'input',
		},
		submit: {
			type: 'button',
			label: 'Add Item',
			action: 'submit',
		},
	},
};

const button = {
	type: 'button',
	data: 'color',
	label: 'Get Text Color',
	target: 'input',
};

const displayList = {
	type: 'list',
	data: 'collection',
	item: {
		items: {
			delete: {
				type: 'button',
				label: 'X',
				action: 'delete',
			},
			color: {
				type: 'text',
			},
		},
	},
};

const source = {
	type: 'text',
	data: 'timer',
	style: {
		color: 'color',
		borderColor: 'input',
		...styles.big,
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
		displayList,
	},
};

const addItemForm = {
	type: 'form',
	target: 'collection',
	action: 'create',
	data: {
		color: 1,
	},
	items: {
		color: {
			type: 'input',
		},
		submit: {
			type: 'button',
			label: 'Add Item',
			action: 'submit',
		},
	},
};

const nestedDisplay = {
	data: 'nested',
	items: {
		sub: {
			items: {
				color: {
					type: 'text',
				},
			},
		},
	},
};

const nestedForm = {
	type: 'form',
	data: 'nested',
	target: 'nested',
	items: {
		sub: {
			items: {
				color: {
					type: 'input',
				},
			},
		},
		submit: {
			type: 'button',
			label: 'Submit',
			action: 'submit',
		},
	},
};

const resetTimerButton = {
	type: 'button',
	target: 'timer',
	data: 0,
	label: 'Reset Timer',
};

const resource = {
	data: 'resource',
	items: {
		message: {
			type: 'text',
		},
	},
};

const updateList = {
	type: 'list',
	data: 'collection',
	item: {
		type: 'form',
		action: 'update',
		items: {
			color: {
				type: 'input',
			},
			submit: {
				type: 'button',
				label: 'Update Item',
				action: 'submit',
			},
		},
	},
};

const blue = {
	type: 'text',
	data: 'blue',
	style: {
		color: 'blue',
		...styles.big,
	},
};

const green = {
	type: 'text',
	data: 'green',
	style: {
		color: 'green',
		...styles.big,
	},
};

const red = {
	type: 'text',
	data: 'red',
	style: {
		color: 'red',
		...styles.big,
	},
};

export {
	embedded,
	input,
	form,
	button,
	source,
	child,
	addItemForm,
	displayList,
	nestedDisplay,
	nestedForm,
	resetTimerButton,
	resource,
	updateList,
	blue, green, red,
};

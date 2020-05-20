const addItemForm = {
	type: 'form',
	data: {
		action: 'create',
		data: {
			color: 1,
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

const displayList = {
	type: 'list',
	data: 'collection',
	style: {
		width: '100%',
	},
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

const resetTimerButton = {
	type: 'button',
	target: 'timer',
	data: 0,
	label: 'Reset Timer Button',
};

const updateList = {
	type: 'list',
	data: 'collection',
	item: {
		type: 'form',
		data: {
			action: 'update',
		},
		items: {
			color: {
				type: 'input',
			},
			submit: {
				type: 'button',
				label: 'Update Item',
				data: {
					action: 'submit',
				},
			},
		},
	},
};

export {
	addItemForm,
	displayList,
	updateList,
	resetTimerButton,
};

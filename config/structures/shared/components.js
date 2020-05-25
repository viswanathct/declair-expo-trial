import { list as displayList } from './parts';

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
	label: 'Reset Timer Button',
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

export {
	addItemForm,
	displayList,
	nestedDisplay,
	nestedForm,
	updateList,
	resetTimerButton,
};

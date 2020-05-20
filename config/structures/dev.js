const dev = {
	items: {
		publish: {
			type: 'button',
			target: 'timer',
			data: 10,
		},
		create: {
			type: 'form',
			data: {
				action: 'create',
				data: {
					color: 'New Color',
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
		},
		header: {
			type: 'input',
			data: 'The lists below are synced. '
				+ 'Edit or remove items for the lists.',
			style: {
				marginTop: 20,
			},
		},
		updateList: {
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
		},
		displayList: {
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
						type: 'input',
					},
				},
			},
		},
	},
};

export default dev;

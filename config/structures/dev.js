const dev = {
	items: {
		create: {
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
		},
		header: {
			type: 'text',
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
						type: 'text',
					},
				},
			},
		},
	},
};

export default dev;

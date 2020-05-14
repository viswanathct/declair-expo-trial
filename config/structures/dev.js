const dev = {
	items: {
		header: {
			type: 'text',
			data: 'The lists are synced. Edit or remove items for the lists.',
		},
		updateList: {
			type: 'list',
			data: 'collection',
			item: {
				type: 'form',
				data: {
					action: 'update',
				},
				target: 'collection',
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

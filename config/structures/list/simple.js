const simple = {
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
};

export default simple;

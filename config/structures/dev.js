const dev = {
	type: 'list',
	data: 'proxy',
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

export default dev;

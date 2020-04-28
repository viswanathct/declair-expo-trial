const sources = {
	timer: {
		type: 'store',
		data: 0,
	},
	color: {
		type: 'store',
		data: 'red',
	},
	input: {
		type: 'store',
		data: 'red',
	},
	nested: {
		type: 'store',
		data: {
			sub: {
				text: 'red',
				overridden: 'red',
			},
		},
	},
};

export default sources;

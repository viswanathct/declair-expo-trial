const nested = {
	type: 'list',
	data: [
		['1 X 1'],
		['2 X 1', '2 X 2'],
	],
	item: {
		type: 'list',
		style: {
			marginTop: 20,
		},
		item: {
			type: 'input',
		},
	},
};

export default nested;

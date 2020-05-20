const nested = {
	items: {
		level1: {
			items: {
				title: {
					type: 'text',
					data: 'Nested Elements',
				},
				level2: {
					items: {
						timer: {
							type: 'input',
							data: 'timer',
						},
					},
				},
			},
		},
	},
};

export default nested;

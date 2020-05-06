const dev = {
	items: {
		text: {
			type: 'text',
			data: 'timer',
		},
		input: {
			type: 'input',
			data: 'input',
		},
		button: {
			type: 'button',
			data: 'Change',
			action: {
				target: 'timer',
				data: 'input',
			},
		},
	},
};

export default dev;

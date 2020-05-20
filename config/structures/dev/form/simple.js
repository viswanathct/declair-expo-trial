const simple = {
	items: {
		form: {
			type: 'form',
			data: 'form',
			items: {
				color: {
					type: 'input',
				},
				submit: {
					type: 'button',
					label: 'Update Value',
					data: {
						action: 'submit',
					},
				},
			},
		},
		display: {
			data: 'form',
			items: {
				color: {
					type: 'text',
				},
			},
		},
	},
};

export default simple;

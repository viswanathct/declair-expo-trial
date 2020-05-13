const dev = {
	items: {
		simpleForm: {
			type: 'form',
			data: 'form',
			style: {
				borderColor: 'borderColor',
				borderWidth: 5,
			},
			items: {
				color: {
					type: 'input',
				},
				colorName: {
					type: 'text',
					data: 'borderColor',
				},
				submit: {
					type: 'button',
					label: 'Change Border Color',
					data: {
						action: 'submit',
					},
				},
			},
		},
		form: {
			type: 'form',
			data: {
				action: 'create',
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
		list: {
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

const nested = {
	type: 'form',
	target: 'debug',
	items: {
		header: {
			type: 'text',
			data: 'Main Form does the job. Check the console.',
		},
		create: {
			type: 'form',
			data: 'buffer',
			items: {
				header: {
					type: 'text',
					data: 'Sub Form is just a buffer.',
				},
				color: {
					type: 'input',
				},
				submit: {
					type: 'button',
					label: 'Draft',
					data: {
						action: 'submit',
					},
				},
			},
		},
		submit: {
			type: 'button',
			label: 'Submit',
			data: {
				action: 'submit',
			},
		},
	},
};

export default nested;

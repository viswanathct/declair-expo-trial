import { form } from '../../sources';

const simple = {
	sources: {
		form,
	},
	structure: {
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
						action: 'submit',
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
	},
};

export default simple;

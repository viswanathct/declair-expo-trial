import { form, nested as sNested } from '../../sources';
import { nestedDisplay } from '../shared/components';

const withinForm = {
	sources: {
		form: form,
		nested: sNested,
	},
	structure: {
		items: {
			mainForm: {
				type: 'form',
				data: 'nested',
				target: 'nested',
				items: {
					sub: {
						type: 'form',
						data: {
							color: 'Any change here reflects'
							+ ' only after draft and submit are clicked.',
						},
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
								action: 'submit',
							},
						},
					},
					submit: {
						type: 'button',
						label: 'Submit',
						action: 'submit',
					},
					footer: {
						type: 'text',
						data: 'Main Form does the job of'
							+ ' updating the display below.',
					},
				},
			},
			nestedDisplay: nestedDisplay,
		},
	},
};

export default withinForm;

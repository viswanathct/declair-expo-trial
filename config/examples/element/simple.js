import { timer } from '../../sources';

const simple = {
	sources: {
		timer,
	},
	structure: {
		type: 'element',
		items: {
			text: {
				type: 'input',
				data: 'timer',
			},
		},
	},
};

export default simple;

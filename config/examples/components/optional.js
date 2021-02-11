import { timer } from '../../sources';

const modulator = 2;

/* Exports */
const optional = {
	sources: {
		timer: timer,
		optional: {
			type: 'transformation',
			data: 'timer',
			transform: (time) => (time % modulator ? 'defined' : undefined),
		},
	},
	structure: {
		type: 'optional',
		data: 'optional',
		items: {
			present: {
				type: 'text',
				data: 'present',
			},
		},
	},
};

export default optional;

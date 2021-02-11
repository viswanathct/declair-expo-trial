import { timer } from '../../sources';

const modulator = 2;

/* Exports */
const fork = {
	sources: {
		timer: timer,
		fork: {
			type: 'transformation',
			data: 'timer',
			transform: (time) => (time % modulator ? 'defined' : undefined),
		},
	},
	structure: {
		type: 'fork',
		data: 'fork',
		items: {
			present: {
				type: 'text',
				data: 'present',
			},
		},
	},
};

export default fork;

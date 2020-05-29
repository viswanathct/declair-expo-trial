import { timer } from '../../sources';
import { red, green } from '../../structures';

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
			yes: green,
			no: red,
		},
	},
};

export default fork;

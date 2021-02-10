import { timer } from '../../sources';
import { blue, green, red } from '../../structures';
import { colors } from '../../shared';

/* Exports */
const choice = {
	sources: {
		timer: timer,
		choice: {
			type: 'transformation',
			data: 'timer',
			transform: (value) => colors[value % colors.length],
		},
	},
	structure: {
		type: 'choice',
		data: 'choice',
		items: {
			red, green, blue,
		},
	},
};

export default choice;

import { timer } from '../../sources';
import { blue, green, red } from '../../structures';
import { colors } from '../../shared';

/* Exports */
const dynamic = {
	sources: {
		timer: timer,
		dynamic: {
			type: 'transformation',
			data: 'timer',
			transform: (value) => colors[value % colors.length],
		},
	},
	structure: {
		type: 'dynamic',
		data: 'dynamic',
		items: {
			red, green, blue,
		},
	},
};

export default dynamic;

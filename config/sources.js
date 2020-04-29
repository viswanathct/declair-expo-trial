import { colors } from './shared';

const sources = {
	timer: {
		type: 'store',
		data: 0,
	},
	color: {
		type: 'transformation',
		data: 1,
		transform: (data) => colors[data % colors.length],
	},
	input: {
		type: 'store',
		data: 'red',
	},
};

export default sources;

import { colors } from './shared';

const sources = {
	timer: {
		type: 'value',
		data: 0,
	},
	style: {
		type: 'value',
		data: {
			color: 'timer',
		},
	},
	color: {
		type: 'transformation',
		data: 'style',
		transform: ({ color }) => colors[color % colors.length],
	},
	input: {
		type: 'value',
		data: 'red',
	},
};

export default sources;
